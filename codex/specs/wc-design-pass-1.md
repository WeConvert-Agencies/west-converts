# Spec: wc-design-pass-1 (design + interaction pass on the West Converts site)

The West Converts marketing site is finished to a solid baseline and committed on `main`. The owner
wants it to read as a premium agency a business would trust to build their own site: "this looks like
a company that knows how to build websites." The baseline is genuinely good — real design system,
verified WCAG 2.1 AA, authored motion — so this is an **elevation pass, not a redesign**. Ten
excellent changes beat a hundred edits, and anything you change must survive the same scrutiny the
current page already passed.

Read `weconvert-site/README.md` and `PRODUCT.md` before you touch the page. They are not background;
they are the constraints.

## Own ONLY this file
- `weconvert-site/index.html` (edit)

Everything else in the repo is off limits: `demos/`, `inspiration-library/`, `weconvert-site/_src/`,
`PRODUCT.md`, `weconvert-site/README.md`, `AGENTS.md`, `tools/`. Do not create new files. The page is
deployed by dragging this one file onto Netlify, so it must stay a single self-contained file.

## Where the quality actually is (ranked; spend your effort in this order)

1. **Hero depth.** The hero is a dark charcoal field with one radial glow and a grain layer. The
   composition (copy left, "How a lead reaches you" card right) works and must stay. What is missing
   is *intentional depth*: right now it reads flat, and `--hero-photo` is an unset placeholder, so the
   page must look deliberate with no photo at all. Build a layered background that would still work
   under a photo later: consider a soft multi-stop gradient field, a very low-contrast structural
   element (grid, arc, or edge light) that echoes the brand, refined vignetting, and a cleaner seam
   into the trust strip. Restrained and expensive-looking, not a light show. Keep the headline's
   measured contrast (it was pixel-sampled at 4.17:1 worst case over the glow — do not make the
   backdrop lighter behind the headline).
2. **Section rhythm and seams.** Dark and light sections currently meet at hard 1px borders and the
   vertical rhythm is uniform. Give the page a considered cadence: section transitions that feel
   authored, tighter relationships between a section's eyebrow/heading/lede, and deliberate variation
   in section padding so the page breathes instead of marching.
3. **Desktop composition above 1280px.** `--container` is 1200px and every section header is a
   left-aligned block with a large empty right half. On a 1440–1920px screen that reads unfinished.
   Improve the header composition (a right-hand element, an index, a rule, a considered asymmetry —
   your call) and revisit the container/gutter scale so large screens feel designed rather than
   stretched. Do not centre everything; the left-aligned editorial feel is part of the identity.
4. **Typography at scale.** `--fs-display` caps at 3.5rem and `--fs-h2` at 2.75rem. Headline
   presence at large widths is the single cheapest premium signal. Refine the type scale (fluid
   clamps), tighten optical letter-spacing at large sizes, control measure (`max-width` in ch) on
   ledes, and check the small-text end of the scale for the same care. Keep Archivo; no new fonts,
   no new weights beyond the five already loaded (400/500/600/700/800).
5. **Card and surface system.** Service cards, the flagship dark card, the comparison table, the
   founder card and the FAQ rows each carry slightly different borders, radii and elevations. Unify
   them into one deliberate surface system (border, radius, shadow, hover elevation) so the page
   feels like one hand made it.
6. **Interaction feedback.** Hover, focus and press states for buttons, cards, nav and FAQ rows
   should feel crisp and consistent — quick, small-distance, transform-based. The existing focus
   rings and their contrast rules must survive exactly.
7. **Motion refinement.** Keep the authored hero lead-path animation, its Pause control and the
   client-logo marquee behaviour as they are. Make the supporting reveals more consistent (one
   easing vocabulary, one distance vocabulary, sensible stagger), and make sure nothing animates
   on load below the fold that hurts LCP. No new libraries. CSS-first; transforms and opacity only.
8. **Mobile.** Re-check the result at 390px and 320px: hero height and the lead card, section
   padding, heading sizes, tap targets (≥44px), the comparison table's reflow, and that no new
   effect causes jank or horizontal scroll.

If you believe something in the existing design is already right, leave it alone and say so in your
report. That is a real answer, not a cop-out.

## Hard constraints (breaking one of these fails the task)

- **Copy is not yours.** Do not rewrite headlines, body copy, service descriptions, FAQ answers or
  button labels. Fixing a typo is fine. If you think a copy change would convert better, put it in
  your report as a recommendation; do not make it.
- **Invent nothing.** No testimonials, clients, logos, stats, results, years in business, awards or
  case studies. The testimonial slot and every `PLACEHOLDER` comment stay exactly as they are.
- **No pricing** anywhere on the page. Every service stays "Custom quote".
- **No "AI-powered" / "AI-run"** anywhere. AI stays a functional label only.
- **Keep the page self-contained.** No new external requests; Google Fonts (Archivo) is the only one
  allowed. No new dependencies, no animation libraries, no build step. Every image stays base64.
- **Keep the accessibility contract.** Section ids (`#top #services #process #why #about #clients
  #faq #start`), one `<h1>`, heading order, landmarks, the skip link, `aria-expanded` on FAQ buttons,
  the mobile menu's Escape/focus-return behaviour, the form's labels, radio group, honeypot
  (`company-website`), `name="strategy-call"`, error/`aria-invalid` handling, `scroll-padding-top`,
  and the `prefers-reduced-motion` block (extend it to cover anything new you add). Text contrast
  must stay at or above AA; brick red `#B91C1C` is never used for text on charcoal (use ember
  `#D85A5A`).
- **Do not regress performance.** Page stays under 400 KB. No continuously running effects that are
  not already there, no `filter: blur()` on large elements animating every frame, no layout thrash.
- **Palette stays** charcoal + white/stone + brick red with ember for red-on-dark. You may add
  neutral steps or alpha layers; do not introduce a new hue.

## Images
You have no image generation and no network. Where a custom visual asset would genuinely raise the
quality (hero artwork, section texture, an abstract brand element), **build the slot, not a fake
asset**: implement it so a real asset drops in later with a single CSS variable or one `<img>` swap,
mark it with a `PLACEHOLDER` comment in the same style the file already uses, and make the page look
finished and intentional with the asset absent. Then list each asset in your report with: intended
section, visual concept, style, composition, aspect ratio, pixel dimensions, whether transparency is
needed, suggested filename, and exactly how it drops in. Do not use stock photos, emoji or clip art.

## Verify
`python3 tools/check-site.py`
That script asserts the structural, conversion-path and product-truth invariants above. It must pass.
Do NOT run the full project check; Claude runs that, plus real-browser visual, responsive,
keyboard and contrast verification, after you hand back.

## Constraints
Match the file's existing style: same comment banners, same token naming, same formatting. Keep the
diff readable — a reviewer should be able to see what changed and why. Report per `AGENTS.md`,
including the literal words NOT VERIFIED for anything you could not prove (you cannot open a browser;
say so plainly rather than implying you checked rendering).
