# West Converts marketing site

Single self-contained file: **`index.html`** (~250 KB). Every image is base64-inlined; Google Fonts
(Archivo) is the only external request. Open it directly or drag it onto Netlify.

Preview locally: the `weconvert-site` entry in `.claude/launch.json` serves it on :5190.

`_src/` is build material, **not** part of the deploy: `hotncold.jpg` is the source of the embedded
Hot & Cold screenshot, `hotncold-logo@3x.png` the source of the grayscale logo, `stage1-palette-type.html`
the approved palette/type specimen, and `shots/` the stage-by-stage verification renders.

Product truth (who it's for, what we claim and never claim) lives in `../PRODUCT.md`.

## Look (redesign, 2026-09)

- **Palette:** charcoal `#0A0A0A` and white/stone neutrals, one deep brick-red accent `#B91C1C`
  (hover `#991B1B`). A lighter "ember" `#D85A5A` is used only for red text on charcoal.
- **Type:** Archivo throughout, 800-weight headlines (36–56px), 16–18px body.
- **Sections, in order:** Hero (with the "How a lead reaches you" demo) → Services → How it works →
  Why us + comparison → Founder → Proof → FAQ → Final CTA + form. Footer carries the service area.
- **Region** (Fort Collins, Loveland, Greeley…) appears only in the founder section and the footer.
- **No public pricing.** Every service is "Custom quote" and routes to the strategy call.

## SWAP BEFORE LAUNCH

Every one of these is marked with a `PLACEHOLDER` or `TESTIMONIAL SLOT` comment in the source.

| # | What | Where | Notes |
|---|------|-------|-------|
| 1 | **`noindex` + canonical** | `<head>` | **While `noindex` is present Google will not index the page at all.** Delete it and add `<link rel="canonical">` with the real domain. |
| 2 | **Netlify form detection** | Netlify dashboard | The form is wired (`name="strategy-call"`, honeypot `company-website`). Turn on form detection in Netlify, then send one test submission. Off Netlify, the form shows its "didn't go through" message. |
| 3 | **Hot & Cold testimonial** | `#proof`, spotlight card | Only in their own words. Never write one for them. |
| 4 | **Phone + email** | footer "Get started" column | Not published yet. Personal Gmail deliberately left off. Add `"telephone"` and `"url"` to the JSON-LD at the same time. |
| 5 | **Hero photo** | `--hero-photo` on `.hero` | A real technician photo, base64-inlined (see the CSS comment). The dark overlay and grain are already in place. |
| 6 | **Founder photo** | `#about` | Replaces the "DT" monogram. Natural light beats studio. |
| 7 | **Chat widget** | bottom-right bubble | Front-end preview only and labeled as such. Wire it to a real backend or remove it before promoting the chatbot. |

## Decisions you may want to reverse

- **No "AI-powered" above the fold.** AI shows up only as a functional label (AI Receptionist,
  AI Website Chatbot, "AI-assisted targeting and reporting").
- **Testimonials:** one real client (Hot & Cold). The small "Want your business and testimonial
  featured here?" pill invites others without inventing any.
- **Team voice ("we")** throughout, founder-led. No headcount, named staff or team photos are claimed.
- **The trust-strip pills overshoot slightly when they pop in** (a "back" ease). Kept on purpose; you
  asked for "bubbly and pop". The design linter flags it as bounce easing.

## Motion (what moves and why)

- **Hero lead path**, the one authored moment: ad shown → phone rings → job booked, cycling HVAC →
  roofing → plumbing → electrical. Labeled "example". Content lives in the `leads` array in the script.
  It pauses offscreen and in background tabs, and has a **Pause/Play** button (which also freezes the
  background glows).
- **Supporting:** staggered hero fade-up, nav indicator slide, process line draw, pill pop-in, button press.
- **Reduced motion:** loops, slides and fades are removed; the lead path shows all three steps complete.

## Accessibility (WCAG 2.1 AA, verified in real Chrome at 320, 375 and 1440px)

- **Contrast:** every visible text element measured against its real background (241 on desktop,
  209 on mobile): all pass. White text on red buttons 6.20:1 (7.96:1 on hover), red on white 6.47:1,
  red on stone 5.93:1. Brick red on charcoal is only 3.06:1, so it is never used for text on dark;
  red text there uses ember (5.21:1). Hero headline over the glow pixel-sampled at 4.17:1 worst case
  (large text, needs 3:1).
- **Non-text contrast:** form inputs and interest chips have 3.45:1 borders; every focus ring is ≥3:1
  against its section (dark sections use a white ring, light sections a charcoal ring).
- **Keyboard:** 56 tab stops in logical order, all with a visible ring. None land under the sticky
  header (`scroll-padding-top`), none are hidden. Skip link works. Mobile menu opens with Enter,
  closes on Escape (focus returns to the toggle) and closes itself when you tab out. FAQ buttons use
  `aria-expanded`. Chat preview opens with focus on Close, Escape closes it and returns focus.
- **Form:** labeled fields, a real radio group, autocomplete hints. Empty submit marks every missing
  field `aria-invalid`, links it to the error message and focuses the first one; status is announced.
- **Touch targets:** every control is ≥44×44px at 375px and 320px.
- **Reflow:** no horizontal scroll and nothing clipped at 320px, including the comparison table.
- **Also:** one `h1`, no heading skips, no duplicate ids, landmarks labeled, decorative SVG hidden,
  new-tab links say so, text-spacing override doesn't clip anything, no-JS safe.
