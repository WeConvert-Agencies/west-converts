# West Converts marketing site

Single self-contained file: **`index.html`** (~215 KB, one base64-inlined image,
Google Fonts is the only external request). Open it directly or drag it onto Netlify.

Preview locally: the `weconvert-site` entry in `.claude/launch.json` serves it on :5190.

`_src/` is build material, **not** part of the deploy (`hotncold.jpg` is the source of the
embedded hero screenshot; `shots/` and `capture.html` are verification renders).

## Positioning (updated 2026-09-18)

**Company name: West Converts** (renamed from WeConvert). The folder is still `weconvert-site/` so the
local preview config keeps working; rename it later if you want, and update `.claude/launch.json` with it.

**Meta & Google Ads Management is the main product.** Services, in order: Meta & Google Ads, Website
Design & Build, **AI Receptionist (live)**, Google Business Profile & Local SEO, **Brand & Growth
Strategy (new)**, Logo Design.

**Pricing lives only in the pricing section** (`#pricing`). The hero, trust strip, services rate card,
process, why-us, comparison table, FAQ, meta description and structured data carry no dollar amounts.
Custom quote for everything but ads and websites. Moving fully to custom quotes is a planned next edit.

Pricing section today:
- **Ads:** $1,000/month management + recommended $1,000–$1,500/month ad spend ≈ $2,000–$2,500/month.
- **Websites:** Base $800 · Standard $1,000 · Premium $1,200 (Recommended), each + $30/month.
- **Custom quote:** AI Receptionist, Brand & Growth Strategy, logo design, Google Business Profile & local SEO.
---

## CONFIRM — things the page deliberately does not claim yet

| # | Question | Why it matters |
|---|----------|----------------|
| 1 | **Is there a contract or minimum term on the ads retainer?** | "No contract" is currently scoped to website hosting only. If ads are month-to-month too, that's a strong selling point to add back to the hero, trust strip and FAQ. |
| 2 | **Is ad spend billed straight to the client's card by Meta/Google?** | The page says ad spend "goes to Meta & Google" (true either way). If it's billed directly, say so — burned owners love hearing their budget never passes through the agency. |
| 3 | **Any ad results you can show?** | None are claimed. Hot & Cold is shown as a website build only. |

## SWAP BEFORE LAUNCH

Flagged with `PLACEHOLDER` comments in the source; user-visible ones carry a dashed badge.

| # | What | Where | Notes |
|---|------|-------|-------|
| 1 | **Phone number** | final CTA + footer | `(970) 555-0100`. If phone becomes a primary CTA it can't hit voicemail — 78% of callers who get voicemail call a competitor within 2 minutes. |
| 2 | **Email** | footer | `hello@westconverts.com` is invented — swap for the real address once the domain exists. Personal Gmail deliberately not published. |
| 3 | **Form backend** | `#demoForm` | Visual only. On Netlify add `netlify name="plan-request"` to the `<form>` tag (it will capture the Ads / Website / AI Receptionist / Growth strategy / A mix choice too) and delete the fake-submit handler. |
| 5 | **Testimonials + logos** | `#proof` | Format examples, clearly labeled. Hot & Cold logo slot is real. |
| 6 | **Founder photo** | `#why` | Natural light beats studio. |
| 7 | **`noindex` + canonical** | `<head>` | **While `noindex` is present Google will not index the page at all — none of the SEO work counts until it's removed.** Add `<link rel="canonical">` with the real domain at the same time. |
| 8 | **Structured data** | `<script type="application/ld+json">` | Add `"url"` and `"telephone"` once the domain and phone are real. |

## Decisions you may want to reverse

- **"AI-run" is not on the page** — trades owners distrust it (see `_research/design-brief.md` §3).
- **Premium is badged "Recommended", not "Most popular"** — there's no client data behind "most popular", and unverified claims are off-limits.
- **Team voice ("we")** throughout, with Danny as the founder who personally oversees every project.
  No student mention; described as "a young entrepreneur based in Fort Collins". No headcount,
  named staff or team photos are claimed — add those only if they're real.
- **Trades positioning, HVAC-first:** HVAC, roofing, plumbing and electrical lead the copy; painting is no longer featured.

## Motion (what moves and why)

- **Hero lead path** — the one authored moment: ad shown → phone rings → job booked, cycling HVAC → roofing →
  plumbing → electrical. Labeled "example" in the UI; the rotating content lives in the `leads` array in the
  script if you want to change the trades, towns or ad lines. Pauses offscreen and in background tabs.
- **Supporting:** nav indicator slides to the section in view; the process line draws and lights each step;
  the pricing bar fills management → ad spend → range; services rows get a hover sweep; buttons have a press state.
- **Reduced motion:** loops, slides and tilts are removed; the lead path shows all three steps complete, statically.

## Accessibility — verified, not assumed

- Every text/background pair checked numerically in light **and** dark mode, including the new
  dark ads panel, form chips and button hover states. All pass WCAG AA. (The original light-mode
  button hover went to 3.69:1 — fixed; hover now darkens instead.)
- One `h1`, no heading-level skips, no duplicate ids, every input labeled, the interest choice is
  a real `<fieldset>`/radio group, decorative SVG `aria-hidden`, cost bar `aria-hidden` with the
  same numbers in a `<dl>`.
- Keyboard: skip link, visible focus rings, accordion + mobile nav are buttons with `aria-expanded`.
- `prefers-reduced-motion` respected; no-JS safe (reveal states gated behind a `.js` class).
- No horizontal scroll at 375px or 1440px.
