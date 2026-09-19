import { useCallback, useEffect, useMemo, useState } from "react";
import type { Category, Inspiration, SortKey } from "../data/types";
import * as db from "../lib/db";
import { processUploadedImage, ImageProcessingError } from "../lib/imageUtils";
import { exportLibrary, importLibrary } from "../lib/backup";
import { useToast } from "./useToast";

export interface LibraryFilters {
  query: string;
  category: string | null; // category id, or null for "all"
  tags: string[]; // tag AND-filter
  sort: SortKey;
}

const DEFAULT_FILTERS: LibraryFilters = {
  query: "",
  category: null,
  tags: [],
  sort: "newest",
};

export function useLibrary() {
  const { show } = useToast();
  const [inspirations, setInspirations] = useState<Inspiration[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<LibraryFilters>(DEFAULT_FILTERS);

  useEffect(() => {
    let cancelled = false;
    db.loadAll()
      .then(({ inspirations, categories }) => {
        if (cancelled) return;
        setInspirations(inspirations);
        setCategories(categories);
      })
      .catch((err) => {
        console.error("Failed to load library from IndexedDB", err);
        show("Could not load your library from local storage. See console for details.", "error");
      })
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    for (const insp of inspirations) for (const tag of insp.tags) set.add(tag);
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [inspirations]);

  const filtered = useMemo(() => {
    let list = inspirations;

    if (filters.category) {
      list = list.filter(
        (i) => i.primaryCategory === filters.category || i.secondaryCategories.includes(filters.category!)
      );
    }

    if (filters.tags.length) {
      list = list.filter((i) => filters.tags.every((t) => i.tags.includes(t)));
    }

    if (filters.query.trim()) {
      const q = filters.query.trim().toLowerCase();
      list = list.filter((i) => {
        const haystack = [
          i.title,
          i.description,
          i.analysis.styleName,
          i.analysis.whatItIs,
          i.analysis.whyItWorks,
          ...i.tags,
          ...i.analysis.keywords,
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(q);
      });
    }

    const sorted = [...list];
    switch (filters.sort) {
      case "newest":
        sorted.sort((a, b) => b.createdAt - a.createdAt);
        break;
      case "oldest":
        sorted.sort((a, b) => a.createdAt - b.createdAt);
        break;
      case "title":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "category":
        sorted.sort((a, b) => a.primaryCategory.localeCompare(b.primaryCategory));
        break;
    }
    return sorted;
  }, [inspirations, filters]);

  const categoryById = useCallback(
    (id: string) => categories.find((c) => c.id === id),
    [categories]
  );

  // ---- CRUD ----

  const updateInspiration = useCallback(
    async (updated: Inspiration) => {
      const withTimestamp = { ...updated, updatedAt: Date.now() };
      setInspirations((prev) => prev.map((i) => (i.id === updated.id ? withTimestamp : i)));
      await db.saveInspiration(withTimestamp);
    },
    []
  );

  const deleteInspirationById = useCallback(
    async (id: string) => {
      setInspirations((prev) => prev.filter((i) => i.id !== id));
      await db.deleteInspiration(id);
      show("Inspiration deleted.");
    },
    [show]
  );

  const addFilesFromUpload = useCallback(
    async (files: FileList | File[]) => {
      const fileArray = Array.from(files);
      if (!fileArray.length) return;

      let succeeded = 0;
      const failures: string[] = [];

      for (const file of fileArray) {
        try {
          const { blob } = await processUploadedImage(file);
          const insp = db.createBlankInspiration("idb");
          insp.title = file.name.replace(/\.[^.]+$/, "") || "Untitled inspiration";
          await db.saveImageBlob(insp.id, blob);
          const imageSrc = URL.createObjectURL(blob);
          const withSrc = { ...insp, imageSrc };
          await db.saveInspiration(withSrc);
          setInspirations((prev) => [withSrc, ...prev]);
          succeeded++;
        } catch (err) {
          if (err instanceof ImageProcessingError) {
            failures.push(err.message);
          } else {
            console.error("Unexpected upload error", err);
            failures.push(`"${file.name}" could not be uploaded.`);
          }
        }
      }

      if (succeeded) {
        show(
          succeeded === 1
            ? "1 inspiration added — needs analysis."
            : `${succeeded} inspirations added — needs analysis.`
        );
      }
      for (const msg of failures) show(msg, "error");
    },
    [show]
  );

  // ---- Categories ----

  const addCategory = useCallback(
    async (name: string) => {
      const trimmed = name.trim();
      if (!trimmed) return;
      const id = trimmed
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") || `cat-${Date.now()}`;
      if (categories.some((c) => c.id === id)) {
        show("A category with that name already exists.", "error");
        return;
      }
      const cat: Category = { id, name: trimmed };
      setCategories((prev) => [...prev, cat]);
      await db.saveCategory(cat);
      show(`Category "${trimmed}" added.`);
    },
    [categories, show]
  );

  const renameCategory = useCallback(
    async (id: string, name: string) => {
      const trimmed = name.trim();
      if (!trimmed) return;
      const updated = categories.find((c) => c.id === id);
      if (!updated) return;
      const next = { ...updated, name: trimmed };
      setCategories((prev) => prev.map((c) => (c.id === id ? next : c)));
      await db.saveCategory(next);
    },
    [categories]
  );

  const deleteCategoryById = useCallback(
    async (id: string) => {
      setCategories((prev) => prev.filter((c) => c.id !== id));
      await db.deleteCategory(id);
      // Unassign the category from any inspirations that used it, rather
      // than silently leaving dangling references.
      const affected = inspirations.filter(
        (i) => i.primaryCategory === id || i.secondaryCategories.includes(id)
      );
      for (const insp of affected) {
        const next: Inspiration = {
          ...insp,
          primaryCategory: insp.primaryCategory === id ? "" : insp.primaryCategory,
          secondaryCategories: insp.secondaryCategories.filter((c) => c !== id),
        };
        await updateInspiration(next);
      }
      setFilters((f) => (f.category === id ? { ...f, category: null } : f));
      show("Category deleted.");
    },
    [inspirations, show, updateInspiration]
  );

  // ---- Backup ----

  const doExport = useCallback(async () => {
    try {
      await exportLibrary(inspirations, categories);
      show("Backup downloaded.");
    } catch (err) {
      console.error("Export failed", err);
      show("Export failed. See console for details.", "error");
    }
  }, [inspirations, categories, show]);

  const doImport = useCallback(
    async (file: File) => {
      try {
        const result = await importLibrary(file);
        setInspirations(result.inspirations);
        setCategories(result.categories);
        show("Library restored from backup.");
      } catch (err) {
        console.error("Import failed", err);
        show(err instanceof Error ? err.message : "Import failed.", "error");
      }
    },
    [show]
  );

  return {
    loading,
    inspirations,
    filtered,
    categories,
    allTags,
    categoryById,
    filters,
    setFilters,
    updateInspiration,
    deleteInspirationById,
    addFilesFromUpload,
    addCategory,
    renameCategory,
    deleteCategoryById,
    doExport,
    doImport,
  };
}
