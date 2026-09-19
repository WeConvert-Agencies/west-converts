import { useRef, useState } from "react";
import type { Category, Inspiration } from "../data/types";
import type { LibraryFilters } from "../hooks/useLibrary";
import { DownloadIcon, EditIcon, PlusIcon, TrashIcon, UploadCloudIcon, CheckIcon, XIcon } from "./icons";

interface Props {
  categories: Category[];
  inspirations: Inspiration[];
  allTags: string[];
  filters: LibraryFilters;
  setFilters: React.Dispatch<React.SetStateAction<LibraryFilters>>;
  onAddCategory: (name: string) => void;
  onRenameCategory: (id: string, name: string) => void;
  onDeleteCategoryRequest: (id: string) => void;
  onExport: () => void;
  onImportFile: (file: File) => void;
}

export function Sidebar({
  categories,
  inspirations,
  allTags,
  filters,
  setFilters,
  onAddCategory,
  onRenameCategory,
  onDeleteCategoryRequest,
  onExport,
  onImportFile,
}: Props) {
  const [newCategory, setNewCategory] = useState("");
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const importInputRef = useRef<HTMLInputElement>(null);

  const countFor = (categoryId: string) =>
    inspirations.filter((i) => i.primaryCategory === categoryId || i.secondaryCategories.includes(categoryId)).length;

  const toggleTag = (tag: string) => {
    setFilters((f) => ({
      ...f,
      tags: f.tags.includes(tag) ? f.tags.filter((t) => t !== tag) : [...f.tags, tag],
    }));
  };

  const startRename = (cat: Category) => {
    setRenamingId(cat.id);
    setRenameValue(cat.name);
  };

  const commitRename = () => {
    if (renamingId && renameValue.trim()) onRenameCategory(renamingId, renameValue.trim());
    setRenamingId(null);
  };

  return (
    <aside className="sidebar" aria-label="Filters and library navigation">
      <div className="brand">
        <div className="brand-name">Inspiration Library</div>
        <div className="brand-tagline">Your private design-reference system</div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">Library</div>
        <ul className="sidebar-list">
          <li>
            <button
              className="sidebar-item"
              aria-pressed={filters.category === null}
              onClick={() => setFilters((f) => ({ ...f, category: null }))}
            >
              <span>All Inspirations</span>
              <span className="sidebar-item-count">{inspirations.length}</span>
            </button>
          </li>
        </ul>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">Categories</div>
        <ul className="sidebar-list">
          {categories.map((cat) => (
            <li key={cat.id} className="sidebar-item-row">
              {renamingId === cat.id ? (
                <div style={{ display: "flex", gap: 4, flex: 1, padding: "4px 4px" }}>
                  <input
                    autoFocus
                    value={renameValue}
                    onChange={(e) => setRenameValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") commitRename();
                      if (e.key === "Escape") setRenamingId(null);
                    }}
                    aria-label={`Rename category ${cat.name}`}
                    style={{ flex: 1, minWidth: 0, fontSize: 13, padding: "4px 6px", borderRadius: 6, border: "1px solid var(--border)" }}
                  />
                  <button className="icon-btn" aria-label="Save category name" onClick={commitRename}>
                    <CheckIcon width={13} height={13} />
                  </button>
                  <button className="icon-btn" aria-label="Cancel rename" onClick={() => setRenamingId(null)}>
                    <XIcon width={13} height={13} />
                  </button>
                </div>
              ) : (
                <>
                  <button
                    className="sidebar-item"
                    aria-pressed={filters.category === cat.id}
                    onClick={() => setFilters((f) => ({ ...f, category: f.category === cat.id ? null : cat.id }))}
                  >
                    <span>{cat.name}</span>
                    <span className="sidebar-item-count">{countFor(cat.id)}</span>
                  </button>
                  <div className="sidebar-item-controls">
                    <button className="icon-btn" aria-label={`Rename ${cat.name}`} onClick={() => startRename(cat)}>
                      <EditIcon width={13} height={13} />
                    </button>
                    <button
                      className="icon-btn"
                      aria-label={`Delete category ${cat.name}`}
                      onClick={() => onDeleteCategoryRequest(cat.id)}
                    >
                      <TrashIcon width={13} height={13} />
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
        <form
          className="add-category-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (newCategory.trim()) {
              onAddCategory(newCategory.trim());
              setNewCategory("");
            }
          }}
        >
          <input
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="New category…"
            aria-label="New category name"
          />
          <button type="submit" className="icon-btn" aria-label="Add category" style={{ border: "1px solid var(--border)" }}>
            <PlusIcon width={14} height={14} />
          </button>
        </form>
      </div>

      {allTags.length > 0 && (
        <div className="sidebar-section">
          <div className="sidebar-section-title">Tags</div>
          <div className="tag-chip-list">
            {allTags.map((tag) => (
              <button
                key={tag}
                className="tag-chip"
                aria-pressed={filters.tags.includes(tag)}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          {filters.tags.length > 0 && (
            <button className="btn btn-ghost btn-sm" style={{ alignSelf: "flex-start", padding: "4px 6px" }} onClick={() => setFilters((f) => ({ ...f, tags: [] }))}>
              Clear tag filters
            </button>
          )}
        </div>
      )}

      <div className="sidebar-footer-actions">
        <button className="btn btn-secondary btn-block" onClick={onExport}>
          <DownloadIcon width={14} height={14} />
          Export Library
        </button>
        <button className="btn btn-secondary btn-block" onClick={() => importInputRef.current?.click()}>
          <UploadCloudIcon width={14} height={14} />
          Import Library
        </button>
        <input
          ref={importInputRef}
          type="file"
          accept="application/json"
          className="visually-hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) onImportFile(file);
            e.target.value = "";
          }}
        />
      </div>
    </aside>
  );
}
