# Spec: wc-roi-calculator (feature: interactive ROI calculator section)

The owner wants a calculator that lets a trades-business owner see what new leads are worth to them.
It goes on the West Converts site as a new section. Every rule below comes from the owner or is a
decision the owner already made. Build exactly this; where the spec is silent, match the page.

Read `weconvert-site/README.md` and `PRODUCT.md` first. The page is one self-contained file that is
dragged onto Netlify: vanilla JS, the existing inline `<style>` and `<script>`, no library, no
external request, no build step.

## Own ONLY this file
- `weconvert-site/index.html` (edit)

Do not create files. Do not touch anything else in the repo.

## Placement and the section labels (owner's decisions)
1. Insert a new `<section class="section …" id="roi">` **directly after `#services` and before
   `#process`**. Use the same container, `sec-head`, eyebrow and heading structure as the other
   sections.
2. Section labels are numbered (`<p class="eyebrow section-label">01 / Services</p>`). The new label
   is `02 / Let's do the math` (use a typographic apostrophe, `&rsquo;`, as the page does). Renumber
   the labels that follow by one: How it works → 03, Why us → 04, About West Converts → 05,
   Our clients → 06, Your questions → 07, Let's talk → 08. **Change only the number in each label**,
   nothing else in those sections.
3. Do not add the section to the nav.

## Copy (exact; do not rewrite)
- Eyebrow: `02 / Let's do the math` (the page's CSS uppercases eyebrows)
- `h2`: What Are New Leads Actually Worth To You?
- Lede: Adjust the two numbers below to match your business.
- Output label: Estimated monthly revenue from new leads (styled like the page's small uppercase
  labels, so it reads ESTIMATED MONTHLY REVENUE FROM NEW LEADS)
- Output: the range, e.g. `$3,800 – $10,500` (en dash with spaces)
- Beneath the output, smaller: Based on the 5 to 14 leads a month we&rsquo;ve seen at our recommended
  ad spend. This is an estimate from the numbers you entered, not a promise of results — your
  market, season, and how fast you return calls all move it.
- One CTA: the **existing** primary button — `<a class="btn btn--primary btn--lg" href="#start">Book
  Your Free Strategy Call <svg class="btn__arrow" …></a>` exactly as the hero uses it. No new button
  style. (The owner wrote "Book a Free Strategy Call"; the sitewide wording is "Book Your Free
  Strategy Call", so use the sitewide wording.)

## Inputs (two; each a range slider paired with a number input)
1. **Average job value** (dollars): slider min 250, max 15000, step 250, default 2500.
   Number input min 250, max 15000, step 1. Show a visible `$` adornment beside the number input,
   and show the formatted value (`$2,500`) in the control's readout.
2. **How many leads do you close?** (percent): slider min 5, max 80, step 5, default 30.
   Number input min 5, max 80, step 1. Visible `%` adornment, formatted readout (`30%`).

Sync, both directions:
- Slider `input` → number field shows the same value → result updates.
- Number field `input` → the result updates from the typed value (clamped; empty or invalid →
  the field's default), and the slider moves to that value (the browser snaps it to the nearest
  step, which is fine). Do not rewrite the text while the user is still typing (typing "1" on the
  way to "1500" must not jump to 250).
- Number field `change`/`blur` → normalize the field itself: clamp to min/max; empty, non-numeric
  or NaN resets it to the default. Typed off-step values like 2600 are legitimate job values: keep
  them and use them in the math.

## The math (exact — do not substitute your own model)
```js
const LEADS_LOW  = 5;
const LEADS_HIGH = 14;
const closed     = closeRatePercent / 100;
let low  = LEADS_LOW  * closed * avgJobValue;
let high = LEADS_HIGH * closed * avgJobValue;
// round each to the nearest 100 for display
low  = Math.round(low  / 100) * 100;
high = Math.round(high / 100) * 100;
```
5 and 14 are constants. Never expose them as inputs. Format with `Intl.NumberFormat('en-US',
{style:'currency',currency:'USD',maximumFractionDigits:0})`.
**The defaults (2500, 30%) must display exactly `$3,800 – $10,500`.** The owner confirmed that the
rounding makes it $3,800, not $3,750. The result must never show `NaN`, `undefined`, `$0 – $0` or an
empty string in any state, including before JS runs: render the default range in the HTML so the
section reads correctly with JavaScript off.

## Hard constraints
- No price, fee, retainer or ad-spend figure anywhere in the section. "Our recommended ad spend"
  stays qualitative.
- No lead-capture form, email gate or contact field. The CTA is the only action.
- None of these words anywhere in the section: guaranteed, guarantee, will earn, you will make.
- No animated number counting at all (this satisfies reduced motion outright). Any other motion
  you add must be switched off inside the existing `prefers-reduced-motion` block.
- Do not change any other section, style or behaviour, apart from the label numbers above.

## Accessibility (required)
- Every slider and number input has a visible `<label>` tied by `for`/`id`. Two labels per pair
  is fine, or one visible label plus `aria-labelledby`. Every input must have an accessible name.
- Sliders carry `aria-valuemin`, `aria-valuemax`, `aria-valuenow` and `aria-valuetext` (formatted:
  `$2,500`, `30%`), kept up to date on every change, including when the number field drives them.
- Announcements: the visible result updates instantly while dragging. Announce it through an
  `aria-live="polite"` region that is updated on a **~300ms debounce**, so dragging does not spam
  screen readers. Recommended: keep the visible number out of the live region and mirror the
  settled sentence ("Estimated monthly revenue from new leads: $3,800 to $10,500") into a
  visually hidden `aria-live="polite"` element (the page already has `.sr-only`). Do not use
  `aria-live` on anything that updates every frame.
- Keyboard: Tab reaches each control in order; arrow keys move the sliders (native `type="range"`
  gives this); every control shows a visible focus ring that meets the page's rules (charcoal ring
  on light surfaces, white ring on dark ones: see the existing `:focus-visible` rules).
- Contrast: all text at least 4.5:1 (3:1 for large text) against its actual background. Brick red
  `#B91C1C` is never text on charcoal (use ember `#D85A5A`). Meaning is never carried by colour
  alone.
- Touch targets at least 44×44px: the number inputs, and the slider's hit area (make the input's box
  at least 44px tall even if the visible track is thin).

## Design direction
Make the result the focal point: a large, confident figure is the reason this section exists. Keep
the page's language: Archivo, the existing type scale, radii (`--r`, `--r-lg`), shadows
(`--shadow-sm`, `--shadow-d`), `--feedback`/`--ease` timing and the charcoal / stone / brick-red
palette. Style the range sliders to match (brick-red fill or thumb on light, ember on dark;
`accent-color` is acceptable as a base). Cross-browser range styling needs both `::-webkit-slider-*`
and `::-moz-range-*`.

Seams: `#services` ends on `--paper-2` and `#process` begins with a gradient from `--paper-2`. A
section background of `--paper-2` joins both edges without a visible band. A dark calculator
surface inside it (like the flagship Ads card, `.flag`: `--char` with `--shadow-d`) gives the
separation. That is a recommendation, not a requirement; whatever you choose must not create a
hard or accidental-looking seam.

Responsive: at 375px nothing scrolls sideways and nothing is clipped. Each slider and its number
input **stack** (label, then number field, then slider at full width) rather than squeeze. On wide
screens a two-column layout (inputs | result) is appropriate.

## Verify
`python3 tools/check-site.py`
It must print PASS. It now also asserts the `#roi` structure: placement, 2 sliders + 2 number
inputs with labels, the slider ARIA attributes, `aria-live="polite"`, the constants, the CTA, the
banned wording and the label numbering 01..08. Do NOT run the full project check. Claude verifies
the live behaviour, the edge cases, keyboard, contrast and 375px in a real browser afterwards.

## Constraints
Match the file's existing style: comment banners, token naming, formatting, and the script's
existing helpers (for example `each`, the `reduce` flag) rather than new patterns. Report per
`AGENTS.md`. You cannot open a browser, so mark live behaviour NOT VERIFIED rather than implying
you checked it.
