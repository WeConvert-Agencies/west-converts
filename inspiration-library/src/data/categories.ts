import type { Category } from "./types";

// Starter categories derived from analyzing the seed screenshots.
// Users can rename, add, or delete any of these from the sidebar —
// nothing here is hard-coded into the filtering/search logic.
export const DEFAULT_CATEGORIES: Category[] = [
  { id: "editorial-minimal", name: "Editorial Minimal", builtin: true },
  { id: "bold-swiss-typography", name: "Bold Swiss Typography", builtin: true },
  { id: "premium-luxury", name: "Premium & Luxury", builtin: true },
  { id: "dark-cinematic", name: "Dark & Cinematic", builtin: true },
  { id: "warm-organic", name: "Warm & Organic", builtin: true },
  { id: "soft-ui-glass", name: "Soft UI / Glassmorphism", builtin: true },
  { id: "high-conversion", name: "High-Conversion Landing", builtin: true },
  { id: "textured-collage", name: "Textured Collage Editorial", builtin: true },
  { id: "playful-3d-product", name: "Playful 3D Product", builtin: true },
  { id: "gradient-saas", name: "Vibrant Gradient SaaS", builtin: true },
];
