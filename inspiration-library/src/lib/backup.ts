import type { Category, Inspiration } from "../data/types";
import { replaceAllCategories, replaceAllInspirations, saveImageBlob } from "./db";

const BACKUP_VERSION = 1;

interface BackupFile {
  backupVersion: number;
  exportedAt: string;
  categories: Category[];
  inspirations: Inspiration[];
  /** Base64 data URLs for uploaded images, keyed by inspiration id. Seed images are not included — they ship with the app. */
  images: Record<string, string>;
}

function blobUrlToBase64(url: string): Promise<string> {
  return fetch(url)
    .then((r) => r.blob())
    .then(
      (blob) =>
        new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
    );
}

function base64ToBlob(dataUrl: string): Promise<Blob> {
  return fetch(dataUrl).then((r) => r.blob());
}

/**
 * Export the full library — metadata AND uploaded image bytes (as base64) —
 * as a single downloadable JSON file. Seed screenshots are excluded since
 * they ship with the app itself and don't need backing up.
 */
export async function exportLibrary(inspirations: Inspiration[], categories: Category[]): Promise<void> {
  const images: Record<string, string> = {};

  for (const insp of inspirations) {
    if (insp.imageStorage === "idb" && insp.imageSrc) {
      try {
        images[insp.id] = await blobUrlToBase64(insp.imageSrc);
      } catch {
        // Skip a single bad image rather than failing the whole export.
      }
    }
  }

  const payload: BackupFile = {
    backupVersion: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    categories,
    // Store the original (non-blob-URL) imageSrc for idb entries; it gets
    // re-derived from the images map on import.
    inspirations: inspirations.map((i) => ({ ...i, imageSrc: i.imageStorage === "idb" ? "" : i.imageSrc })),
    images,
  };

  const json = JSON.stringify(payload, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const stamp = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `inspiration-library-backup-${stamp}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export interface ImportResult {
  inspirations: Inspiration[];
  categories: Category[];
}

/** Parse and restore a backup file, writing it into IndexedDB and returning the fresh state to render. */
export async function importLibrary(file: File): Promise<ImportResult> {
  const text = await file.text();
  let parsed: BackupFile;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error("That file isn't valid JSON. Please choose a backup file exported from Inspiration Library.");
  }
  if (!parsed || !Array.isArray(parsed.inspirations) || !Array.isArray(parsed.categories)) {
    throw new Error("That file doesn't look like an Inspiration Library backup.");
  }

  // Restore uploaded images to IndexedDB and rebuild their object URLs.
  const restoredInspirations: Inspiration[] = [];
  for (const insp of parsed.inspirations) {
    if (insp.imageStorage === "idb" && parsed.images[insp.id]) {
      const blob = await base64ToBlob(parsed.images[insp.id]);
      await saveImageBlob(insp.id, blob);
      restoredInspirations.push({ ...insp, imageSrc: URL.createObjectURL(blob) });
    } else {
      restoredInspirations.push(insp);
    }
  }

  await replaceAllCategories(parsed.categories);
  await replaceAllInspirations(restoredInspirations.map((i) => ({ ...i, imageSrc: i.imageStorage === "idb" ? "" : i.imageSrc })));

  return { inspirations: restoredInspirations, categories: parsed.categories };
}
