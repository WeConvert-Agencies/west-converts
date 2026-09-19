import type { Category, Inspiration } from "../data/types";
import { emptyAnalysis, emptyBriefFields, emptyImagePromptFields } from "../data/types";
import { DEFAULT_CATEGORIES } from "../data/categories";
import { SEED_INSPIRATIONS } from "../data/seed";
import { makeId } from "./id";

const DB_NAME = "inspiration-library";
const DB_VERSION = 1;
const STORE_META = "inspirations"; // Inspiration records (no image bytes)
const STORE_IMAGES = "images"; // Blob store, keyed by inspiration id
const STORE_CATEGORIES = "categories";
const STORE_FLAGS = "flags"; // small key/value store, e.g. "seeded"

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_META)) {
        db.createObjectStore(STORE_META, { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains(STORE_IMAGES)) {
        db.createObjectStore(STORE_IMAGES);
      }
      if (!db.objectStoreNames.contains(STORE_CATEGORIES)) {
        db.createObjectStore(STORE_CATEGORIES, { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains(STORE_FLAGS)) {
        db.createObjectStore(STORE_FLAGS);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function tx<T>(
  db: IDBDatabase,
  stores: string[],
  mode: IDBTransactionMode,
  fn: (t: IDBTransaction) => void,
  onDone: () => T
): Promise<T> {
  return new Promise((resolve, reject) => {
    const t = db.transaction(stores, mode);
    t.oncomplete = () => resolve(onDone());
    t.onerror = () => reject(t.error);
    t.onabort = () => reject(t.error);
    fn(t);
  });
}

async function getFlag(db: IDBDatabase, key: string): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const t = db.transaction(STORE_FLAGS, "readonly");
    const req = t.objectStore(STORE_FLAGS).get(key);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function setFlag(db: IDBDatabase, key: string, value: unknown): Promise<void> {
  await tx(db, [STORE_FLAGS], "readwrite", (t) => {
    t.objectStore(STORE_FLAGS).put(value, key);
  }, () => undefined);
}

/** Ensure default categories + seed inspirations exist on first run only. */
async function ensureSeeded(db: IDBDatabase): Promise<void> {
  const seeded = await getFlag(db, "seeded");
  if (seeded) return;

  await tx(
    db,
    [STORE_META, STORE_CATEGORIES, STORE_FLAGS],
    "readwrite",
    (t) => {
      const catStore = t.objectStore(STORE_CATEGORIES);
      for (const c of DEFAULT_CATEGORIES) catStore.put(c);
      const metaStore = t.objectStore(STORE_META);
      for (const insp of SEED_INSPIRATIONS) metaStore.put(insp);
      t.objectStore(STORE_FLAGS).put(true, "seeded");
    },
    () => undefined
  );
}

export async function loadAll(): Promise<{ inspirations: Inspiration[]; categories: Category[] }> {
  const db = await openDB();
  await ensureSeeded(db);

  const inspirations = await new Promise<Inspiration[]>((resolve, reject) => {
    const t = db.transaction(STORE_META, "readonly");
    const req = t.objectStore(STORE_META).getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });

  const categories = await new Promise<Category[]>((resolve, reject) => {
    const t = db.transaction(STORE_CATEGORIES, "readonly");
    const req = t.objectStore(STORE_CATEGORIES).getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });

  // Resolve idb-stored image blobs into object URLs for display.
  const withUrls = await Promise.all(
    inspirations.map(async (insp) => {
      if (insp.imageStorage === "idb") {
        const blob = await getImageBlob(db, insp.id);
        if (blob) {
          return { ...insp, imageSrc: URL.createObjectURL(blob) };
        }
      }
      return insp;
    })
  );

  db.close();
  return { inspirations: withUrls, categories };
}

function getImageBlob(db: IDBDatabase, id: string): Promise<Blob | undefined> {
  return new Promise((resolve, reject) => {
    const t = db.transaction(STORE_IMAGES, "readonly");
    const req = t.objectStore(STORE_IMAGES).get(id);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function saveImageBlob(id: string, blob: Blob): Promise<void> {
  const db = await openDB();
  await tx(db, [STORE_IMAGES], "readwrite", (t) => {
    t.objectStore(STORE_IMAGES).put(blob, id);
  }, () => undefined);
  db.close();
}

export async function deleteImageBlob(id: string): Promise<void> {
  const db = await openDB();
  await tx(db, [STORE_IMAGES], "readwrite", (t) => {
    t.objectStore(STORE_IMAGES).delete(id);
  }, () => undefined);
  db.close();
}

export async function saveInspiration(insp: Inspiration): Promise<void> {
  const db = await openDB();
  await tx(db, [STORE_META], "readwrite", (t) => {
    t.objectStore(STORE_META).put(insp);
  }, () => undefined);
  db.close();
}

export async function deleteInspiration(id: string): Promise<void> {
  const db = await openDB();
  await tx(db, [STORE_META, STORE_IMAGES], "readwrite", (t) => {
    t.objectStore(STORE_META).delete(id);
    t.objectStore(STORE_IMAGES).delete(id);
  }, () => undefined);
  db.close();
}

export async function saveCategory(cat: Category): Promise<void> {
  const db = await openDB();
  await tx(db, [STORE_CATEGORIES], "readwrite", (t) => {
    t.objectStore(STORE_CATEGORIES).put(cat);
  }, () => undefined);
  db.close();
}

export async function deleteCategory(id: string): Promise<void> {
  const db = await openDB();
  await tx(db, [STORE_CATEGORIES], "readwrite", (t) => {
    t.objectStore(STORE_CATEGORIES).delete(id);
  }, () => undefined);
  db.close();
}

export async function replaceAllCategories(cats: Category[]): Promise<void> {
  const db = await openDB();
  await tx(db, [STORE_CATEGORIES], "readwrite", (t) => {
    const store = t.objectStore(STORE_CATEGORIES);
    store.clear();
    for (const c of cats) store.put(c);
  }, () => undefined);
  db.close();
}

export async function replaceAllInspirations(list: Inspiration[]): Promise<void> {
  const db = await openDB();
  await tx(db, [STORE_META], "readwrite", (t) => {
    const store = t.objectStore(STORE_META);
    store.clear();
    for (const insp of list) store.put(insp);
  }, () => undefined);
  db.close();
}

export function createBlankInspiration(imageStorage: "idb" | "seed" = "idb"): Inspiration {
  const now = Date.now();
  return {
    id: makeId(),
    title: "Untitled inspiration",
    imageSrc: "",
    imageStorage,
    primaryCategory: "",
    secondaryCategories: [],
    description: "",
    tags: [],
    needsAnalysis: true,
    createdAt: now,
    updatedAt: now,
    analysis: emptyAnalysis(),
    imagePromptFields: emptyImagePromptFields(),
    briefFields: emptyBriefFields(),
  };
}
