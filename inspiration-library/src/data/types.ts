// Core data model for the Inspiration Library.
// Everything here is stored locally (IndexedDB) — see src/lib/db.ts.

export interface DesignVocabulary {
  layout: string;
  composition: string;
  typography: string;
  color: string;
  contrast: string;
  spacing: string;
  shapes: string;
  imagery: string;
  texture: string;
  hierarchy: string;
  interfaceStyle: string;
  motion: string;
}

export interface LayoutBreakdown {
  header: string;
  hero: string;
  hierarchy: string;
  grid: string;
  cta: string;
  imagePlacement: string;
  transitions: string;
  footer: string;
}

export interface Analysis {
  styleName: string;
  whatItIs: string;
  whyItWorks: string;
  vocabulary: DesignVocabulary;
  keywords: string[];
  layout: LayoutBreakdown;
  reusableElements: string[];
  avoidCopying: string[];
}

// Structured fields that get composed into the "Copy Image Prompt" text.
// Kept editable so users can refine before copying.
export interface ImagePromptFields {
  subject: string;
  composition: string;
  colorPalette: string;
  lighting: string;
  mood: string;
  texture: string;
  perspective: string;
  renderStyle: string;
  placement: string;
  aspectRatio: string;
  negative: string;
}

export interface BriefColor {
  name: string;
  hex: string;
}

// Structured fields that get composed into the "Copy Website Brief" text.
export interface BriefFields {
  visualDirection: string;
  colorPalette: BriefColor[];
  typography: string;
  layoutSystem: string;
  heroDirection: string;
  sections: string[];
  ctaStyle: string;
  cardStyle: string;
  imageDirection: string;
  mobileBehavior: string;
  interactionIdeas: string;
  accessibility: string;
  conversion: string;
}

export type ImageStorage = "seed" | "idb";

export interface Inspiration {
  id: string;
  title: string;
  imageSrc: string; // seed: "/seed/xxx.jpg" path; idb: object URL created at runtime
  imageStorage: ImageStorage;
  primaryCategory: string; // Category id
  secondaryCategories: string[]; // Category ids
  description: string;
  tags: string[];
  needsAnalysis: boolean;
  createdAt: number;
  updatedAt: number;
  analysis: Analysis;
  imagePromptFields: ImagePromptFields;
  briefFields: BriefFields;
}

export interface Category {
  id: string;
  name: string;
  /** true for the built-in starter categories; user-created ones can be freely deleted */
  builtin?: boolean;
}

export type SortKey = "newest" | "oldest" | "title" | "category";
export type ViewMode = "grid" | "detail";

export function emptyAnalysis(): Analysis {
  return {
    styleName: "",
    whatItIs: "",
    whyItWorks: "",
    vocabulary: {
      layout: "",
      composition: "",
      typography: "",
      color: "",
      contrast: "",
      spacing: "",
      shapes: "",
      imagery: "",
      texture: "",
      hierarchy: "",
      interfaceStyle: "",
      motion: "",
    },
    keywords: [],
    layout: {
      header: "",
      hero: "",
      hierarchy: "",
      grid: "",
      cta: "",
      imagePlacement: "",
      transitions: "",
      footer: "",
    },
    reusableElements: [],
    avoidCopying: [],
  };
}

export function emptyImagePromptFields(): ImagePromptFields {
  return {
    subject: "",
    composition: "",
    colorPalette: "",
    lighting: "",
    mood: "",
    texture: "",
    perspective: "",
    renderStyle: "",
    placement: "",
    aspectRatio: "16:9",
    negative: "no text, no logos, no watermarks, no legible typography",
  };
}

export function emptyBriefFields(): BriefFields {
  return {
    visualDirection: "",
    colorPalette: [],
    typography: "",
    layoutSystem: "",
    heroDirection: "",
    sections: [],
    ctaStyle: "",
    cardStyle: "",
    imageDirection: "",
    mobileBehavior: "",
    interactionIdeas: "",
    accessibility: "",
    conversion: "",
  };
}
