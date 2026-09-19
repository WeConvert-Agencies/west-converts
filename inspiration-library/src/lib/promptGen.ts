import type { Inspiration } from "../data/types";

/**
 * Compose the "Copy Image Prompt" text from an inspiration's structured
 * imagePromptFields. Kept as plain, well-labeled prose so it can be pasted
 * directly into any image generator (Midjourney, DALL-E, Firefly, etc).
 */
export function buildImagePrompt(insp: Inspiration): string {
  const f = insp.imagePromptFields;
  const lines: string[] = [];

  lines.push(
    `An original image for a website design — do not depict or reference any real company, brand, or the "${insp.title}" reference site.`
  );
  lines.push("");
  if (f.subject) lines.push(`Subject/scene: ${f.subject}`);
  if (f.composition) lines.push(`Composition: ${f.composition}`);
  if (f.colorPalette) lines.push(`Color palette: ${f.colorPalette}`);
  if (f.lighting) lines.push(`Lighting: ${f.lighting}`);
  if (f.mood) lines.push(`Mood: ${f.mood}`);
  if (f.texture) lines.push(`Texture: ${f.texture}`);
  if (f.perspective) lines.push(`Perspective/camera style: ${f.perspective}`);
  if (f.renderStyle) lines.push(`Style: ${f.renderStyle}`);
  if (f.placement) lines.push(`Intended placement: ${f.placement}`);
  if (f.aspectRatio) lines.push(`Aspect ratio: ${f.aspectRatio}`);
  lines.push("");
  lines.push(
    `Negative / avoid: ${f.negative || "no text, no logos, no watermarks, no legible typography"}.`
  );

  return lines.join("\n");
}
