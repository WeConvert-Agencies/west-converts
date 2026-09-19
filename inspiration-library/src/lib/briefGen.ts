import type { Category, Inspiration } from "../data/types";

/**
 * Compose the "Copy Website Brief" text — a complete prompt meant to be
 * pasted into Claude Code to build an ORIGINAL site inspired by this
 * reference's design direction. Uses editable placeholders for anything
 * client-specific.
 */
export function buildWebsiteBrief(insp: Inspiration, category?: Category): string {
  const b = insp.briefFields;
  const a = insp.analysis;
  const lines: string[] = [];

  lines.push(`WEBSITE DESIGN BRIEF — for [BUSINESS NAME]`);
  lines.push(`Design direction reference: "${insp.title}"${category ? ` (${category.name})` : ""}`);
  lines.push("");
  lines.push(
    "IMPORTANT: Create an ORIGINAL design inspired by the direction below. Do not copy the reference site's exact layout, branding, imagery, or copy — use the vocabulary and system described here to make new, independent decisions for this business."
  );
  lines.push("");

  lines.push("BUSINESS CONTEXT");
  lines.push("- Business name: [BUSINESS NAME]");
  lines.push("- Business type: [BUSINESS TYPE]");
  lines.push("- Primary goal of the site: [PRIMARY GOAL]");
  lines.push("- Primary call to action: [PRIMARY CTA]");
  lines.push("- Services/products to feature: [SERVICES]");
  lines.push("- Location(s) served: [LOCATION]");
  lines.push("- Target customer: [TARGET CUSTOMER]");
  lines.push("");

  if (b.visualDirection || a.styleName) {
    lines.push("VISUAL DIRECTION");
    if (a.styleName) lines.push(`Style name: ${a.styleName}`);
    if (b.visualDirection) lines.push(b.visualDirection);
    lines.push("");
  }

  const vocabEntries = Object.entries(a.vocabulary).filter(([, v]) => v);
  if (vocabEntries.length) {
    lines.push("DESIGN VOCABULARY");
    for (const [k, v] of vocabEntries) {
      lines.push(`- ${capitalize(k)}: ${v}`);
    }
    lines.push("");
  }

  if (b.colorPalette.length) {
    lines.push("SUGGESTED COLOR PALETTE");
    for (const c of b.colorPalette) {
      lines.push(`- ${c.name}: ${c.hex}`);
    }
    lines.push("(Adjust hues as needed to fit [BUSINESS NAME]'s existing brand, if any.)");
    lines.push("");
  }

  if (b.typography) {
    lines.push("TYPOGRAPHY DIRECTION");
    lines.push(b.typography);
    lines.push("");
  }

  if (b.layoutSystem) {
    lines.push("LAYOUT & SPACING SYSTEM");
    lines.push(b.layoutSystem);
    lines.push("");
  }

  if (b.heroDirection) {
    lines.push("HERO SECTION DIRECTION");
    lines.push(b.heroDirection);
    lines.push("");
  }

  if (b.sections.length) {
    lines.push("RECOMMENDED PAGE SECTIONS");
    for (const s of b.sections) lines.push(`- ${s}`);
    lines.push("");
  }

  if (b.ctaStyle) {
    lines.push("BUTTONS & CALL-TO-ACTION STYLE");
    lines.push(b.ctaStyle);
    lines.push("");
  }

  if (b.cardStyle) {
    lines.push("CARD & COMPONENT STYLING");
    lines.push(b.cardStyle);
    lines.push("");
  }

  if (b.imageDirection) {
    lines.push("IMAGE DIRECTION");
    lines.push(b.imageDirection);
    lines.push("(Do not reuse the original reference photo — source or generate new original imagery in this direction.)");
    lines.push("");
  }

  if (b.mobileBehavior) {
    lines.push("RESPONSIVE / MOBILE BEHAVIOR");
    lines.push(b.mobileBehavior);
    lines.push("");
  }

  if (b.interactionIdeas) {
    lines.push("SUBTLE INTERACTION / ANIMATION IDEAS");
    lines.push(b.interactionIdeas);
    lines.push("");
  }

  if (b.accessibility) {
    lines.push("ACCESSIBILITY REQUIREMENTS");
    lines.push(b.accessibility);
  } else {
    lines.push("ACCESSIBILITY REQUIREMENTS");
    lines.push(
      "Meet WCAG AA contrast for all text, provide visible keyboard focus states, alt text for all meaningful images, and ensure all interactive elements are reachable and operable by keyboard."
    );
  }
  lines.push("");

  if (b.conversion) {
    lines.push("CONVERSION-FOCUSED RECOMMENDATIONS");
    lines.push(b.conversion);
    lines.push("");
  }

  if (a.reusableElements.length) {
    lines.push("REUSABLE ELEMENTS FROM THE REFERENCE (adapt, don't copy verbatim)");
    for (const r of a.reusableElements) lines.push(`- ${r}`);
    lines.push("");
  }

  if (a.avoidCopying.length) {
    lines.push("DO NOT COPY FROM THE REFERENCE");
    for (const r of a.avoidCopying) lines.push(`- ${r}`);
    lines.push("");
  }

  lines.push(
    "Build this as an original, production-quality site for [BUSINESS NAME] using the direction above as a design system, not a template to trace."
  );

  return lines.join("\n");
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
