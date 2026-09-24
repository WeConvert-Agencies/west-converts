# West Converts marketing site

Single self-contained file: **`index.html`** (~125 KB). Every image is base64-inlined; Google Fonts
(Archivo) is the only external request. Open it directly or drag it onto Netlify.

Preview locally: the `weconvert-site` entry in `.claude/launch.json` serves it on :5190.

`_src/` is build material, **not** part of the deploy: `hotncold-logo-white@3x.png` and
`nuwave-logo-white.png` are the embedded client logos (white on transparent, made from
`hotncold-logo@3x.png` and `nuwave-logo.png`), `hotncold.jpg` is the old
screenshot (no longer on the page), `stage1-palette-type.html` the approved palette/type specimen,
and `shots/` the stage-by-stage verification renders.

Product truth (who it's for, what we claim and never claim) lives in `../PRODUCT.md`.

## Look (redesign, 2026-09)

- **Palette:** charcoal `#0A0A0A` and white/stone neutrals, one deep brick-red accent `#B91C1C`
  (hover `#991B1B`). A lighter "ember" `#D85A5A` is used only for red text on charcoal.
- **Type:** Archivo throughout, 800-weight headlines (36–56px), 16–18px body.
- **Sections, in order:** Hero (with the "How a lead reaches you" demo) → Services → How it works →
  Why us + comparison → Founder → Clients ("You're in good company") → FAQ → Final CTA + form.
  Footer carries the service area.
- **Region** (Fort Collins, Loveland, Greeley…) appears only in the founder section and the footer.
- **No public pricing.** Every service is "Custom quote" and routes to the strategy call.

## SWAP BEFORE LAUNCH

Every one of these is marked with a `PLACEHOLDER` or `TESTIMONIAL SLOT` comment in the source.

| # | What | Where | Notes |
|---|------|-------|-------|
| 1 | **`noindex` + canonical** | `<head>` | **While `noindex` is present Google will not index the page at all.** Delete it and add `<link rel="canonical">` with the real domain. |
| 2 | **Netlify form detection** | Netlify dashboard | The form is wired (`name="strategy-call"`, honeypot `company-website`). Turn on form detection in Netlify, then send one test submission. Off Netlify, the form shows its "didn't go through" message. |
| 3 | **Client testimonial** | `#clients`, under the logos | Only in a client's own words. Never write one for them. |
| 4 | **Phone + email** | footer "Get started" column | Not published yet. Personal Gmail deliberately left off. Add `"telephone"` and `"url"` to the JSON-LD at the same time. |
| 5 | **Hero photo** | `--hero-photo` on `.hero` | A real technician photo, base64-inlined (see the CSS comment). The dark overlay and grain are already in place. |
| 6 | **Founder photo** | `#about` | Replaces the "DT" monogram. Natural light beats studio. |
| 7 | **Chat widget** | bottom-right bubble | Front-end preview only and labeled as such. Wire it to a real backend or remove it before promoting the chatbot. |

## Adding a client logo

1. Get a logo with a transparent background, ideally white or light (it sits on charcoal).
2. Base64-inline it and add another `<li><img …></li>` inside `.marquee__track` in `#clients`,
   with the business name as `alt`. Wide wordmarks sit at the base height; give a squarer logo
   `style="--s:1.2"` so it carries the same visual weight (NuWave uses this).
3. That's it. At 5 logos the row starts scrolling on its own; below that it stays still and centered.

## Decisions you may want to reverse

- **No "AI-powered" above the fold.** AI shows up only as a functional label (AI Receptionist,
  AI Website Chatbot, "AI-assisted targeting and reporting").
- **Clients band, not a case study.** Clients appear only as logos: NuWave (ads client) and Hot & Cold
  (website client). No screenshots or live-site links, so no single client dominates. NuWave's only
  logo file is 164×92, a touch soft on retina screens; ask them for a larger one. The small "Want your business and testimonial featured
  here?" pill invites others without inventing any.
- **No website upsell.** The site says plainly that a website isn't required to run ads with us.
- **Team voice ("we")** throughout, founder-led. No headcount, named staff or team photos are claimed.
- **The trust-strip pills overshoot slightly when they pop in** (a "back" ease). Kept on purpose; you
  asked for "bubbly and pop". The design linter flags it as bounce easing.

## Motion (what moves and why)

- **Hero lead path**, the one authored moment: ad shown → phone rings → job booked, cycling HVAC →
  roofing → plumbing → electrical. Labeled "example". Content lives in the `leads` array in the script.
  It pauses offscreen and in background tabs, and has a **Pause/Play** button (which also freezes the
  background glows).
- **Client logos:** a still row today. Once the band holds 5+ logos (`data-min`) it scrolls on a loop
  with fading edges, pauses on hover, and gets its own Pause button.
- **Supporting:** staggered hero fade-up, nav indicator slide, process line draw, pill pop-in, button press.
- **Reduced motion:** loops, slides and fades are removed; the lead path shows all three steps complete.

## Accessibility (WCAG 2.1 AA, verified in real Chrome at 320, 375 and 1440px)

- **Contrast:** every visible text element measured against its real background (229 on desktop,
  198 on mobile): all pass. White text on red buttons 6.20:1 (7.96:1 on hover), red on white 6.47:1,
  red on stone 5.93:1. Brick red on charcoal is only 3.06:1, so it is never used for text on dark;
  red text there uses ember (5.21:1). Hero headline over the glow pixel-sampled at 4.17:1 worst case
  (large text, needs 3:1).
- **Non-text contrast:** form inputs and interest chips have 3.45:1 borders; every focus ring is ≥3:1
  against its section (dark sections use a white ring, light sections a charcoal ring).
- **Keyboard:** 52 tab stops in logical order, all with a visible ring. None land under the sticky
  header (`scroll-padding-top`), none are hidden. Skip link works. Mobile menu opens with Enter,
  closes on Escape (focus returns to the toggle) and closes itself when you tab out. FAQ buttons use
  `aria-expanded`. Chat preview opens with focus on Close, Escape closes it and returns focus.
- **Form:** labeled fields, a real radio group, autocomplete hints. Empty submit marks every missing
  field `aria-invalid`, links it to the error message and focuses the first one; status is announced.
- **Touch targets:** every control is ≥44×44px at 375px and 320px.
- **Reflow:** no horizontal scroll and nothing clipped at 320px, including the comparison table.
- **Also:** one `h1`, no heading skips, no duplicate ids, landmarks labeled, decorative SVG hidden,
  new-tab links say so, text-spacing override doesn't clip anything, no-JS safe.
