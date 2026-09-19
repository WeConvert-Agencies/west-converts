# Agency / B2B Service Marketing Site — Design Research

Live-browsed September 2026. All hex values, px sizes, durations and easing curves below were read from
computed styles / CSSOM on the actual production sites (Chrome, 1440×900 viewport) unless marked "copy only"
(extracted via page fetch, no CSS inspection).

Sites inspected with full CSS/DOM audit:
- gohighlevel.com (B2B SaaS / agency OS)
- webstacks.com (high-end B2B web agency)
- hookagency.com (home-services marketing agency)
- ramotion.com (product & brand design agency)
- clay.global (branding / UX agency, heavy motion)
- kickcharge.com (home-services branding agency — levergy.io now redirects here)
- deptagency.com (global digital/ad agency)

Copy-only: bluecorona.com, scorpion.co, basement.studio

---

## 1. GOHIGHLEVEL — gohighlevel.com

### Hero
- **Eyebrow pill:** `⚡ Power up your business with AI` — small pill, light-blue text on `#ffffff0a` glass over dark navy.
- **H1:** "The AI-powered business operating system" — 48px / 700 / lh 57.6px (1.2) / ls normal / `#ffffff`.
  Wrapped to ~523px wide (a deliberately narrow measure — the headline breaks to 3 lines).
  Structure = `[Qualifier: AI-powered] + [category noun phrase: business operating system]`. No verb, no "we".
- **Subhead:** "All the tools you need to capture, nurture and close new leads into bookings, sales, reviews and repeat customers!"
  ~19px, white/muted. Note the **verb triplet** (capture / nurture / close) that becomes the site's section spine.
- **CTA count: 1** in hero — `Start 14 Day Free Trial`, bg `#8de1ff`, text `#021221`, padding `10px 20px`, radius `10px`,
  16px/400, transition `0.3s cubic-bezier(0.4, 0, 0.2, 1)`. Nav has a second: `Start 14-day trial` in `#1fb9e6`, plus `Login`
  as a `rgba(255,255,255,0.04)` ghost pill.
- **Hero visual:** split layout — copy left, angled product-UI screenshot right (dashboard with charts). Plus 5 autoplay
  `<video>` elements further down the page for feature demos.
- **Hero background:** a single tall vertical gradient, bottom-lit:
  ```css
  background-image: linear-gradient(0deg,
    rgba(255,255,255,0) 11.84%,
    rgb(125,210,255) 27.88%,
    rgb(0,149,229)   36.97%,
    rgb(4,81,158)    47.01%,
    rgb(1,38,76)     56.81%,
    rgb(1,22,42)     69.88%,
    rgb(3,16,29)     76.79%);
  padding: 10px 0 230px;   /* huge bottom pad so the gradient glow reads */
  ```
  This is the single most copyable asset on the page: dark navy at top → saturated sky blue at the bottom edge.
- **Trust bar directly under hero:** YES — an animated stat counter row (see below), then a logo/claim band
  "We're in the business of helping you grow your business" (H2, 30px/700).

### Animation
- **Animated number counters** in the trust strip. They render at `0+` on load and count up. Final values:
  `7,000,000+ AI Voice Calls` / `7,300,000,000 Leads Generated` / `179,000,000 Appointments Booked` /
  `$5,200,000,000+ Sales Facilitated in 2025`. Displayed abbreviated (7.2B / 179M / $5.2B+).
- **Tab-switcher** on the features block: `Capture / Nurture / Close / Evangelize / Reactivate` — pill buttons,
  `#ededed87` inactive bg, `7px 20px`, radius `5px`, `transition: 0.4s`.
- Declared keyframes in the stylesheet (a hover-effects library is loaded):
  - `elevate`: `0%{box-shadow:none; translateY(0)} 100%{box-shadow: 0 8px 5px -5px rgba(0,0,0,.25); translateY(-10px)}`
    at `0.2s ease forwards` — this is the card hover lift.
  - `pulseGlow`: box-shadow ramps `0 → rgba(255,255,255,.5) 0 0 5px 2px → 0` over `2s ease-in-out infinite`.
  - `gradient`: `background-position 0% 50% → 100% 50% → 0% 50%` (animated gradient fill).
  - `rocking`: `rotate(0) → 2deg → -2deg → 0` over `2s ease-out infinite` — subtle idle motion on illustrations.
  - Hover sweeps: `hvr-sweep-right` (`scaleX(0) → 1`), `hvr-sweep-bottom` (`scaleY(0) → 1`),
    `hvr-radial-in` (`scale(2) → 0`), `hvr-bounce-top` with `cubic-bezier(.47, 2.02, .31, -.36)` (overshoot).
- Transition durations in use: `0.15s`, `0.2s`, `0.3s`, `0.4s`, `0.5s`, `0.6s`. Dominant button curve:
  `cubic-bezier(0.4, 0, 0.2, 1)` (Material standard). Feel: **safe, mainstream, not showy.**
- Glow shadows used as accent: `0 0 30px rgba(255,208,0,.6)`, `0 0 30px rgba(40,150,251,.6)`, `0 0 30px rgba(23,217,75,.6)`.
- Big soft product-shot shadow: `0 3px 34px rgba(107,178,255,.12), 0 53px 114px -45px rgba(0,0,0,.13)`.

### Color + Type
| Role | Hex |
|---|---|
| Page dark / hero base | `#03101c`, `#03101d`, `#021221` |
| Deep navy (footer, panels) | `#07223d`, `#011d38`, `#0d3056` |
| Primary cyan CTA | `#1fb9e6`, light variant `#8de1ff`, glow `#0ccaff` |
| Blue link / sticky bar | `#178af6`, `#2896fb`, `#0487ff` |
| Brand green | `#37ca37` / `#17d94b` |
| Yellow accent | `#ffd000` / `#febd03` |
| Red accent | `#eb3d32` |
| Light section bg | `#f9fbfc`, `#f6f6f6`, `#fafafa` |
| Body text | `#000000`, muted `#575757`, faint `#999999` |

- **Neutral : accent ratio ≈ 92 : 8.** Cyan appears only on CTAs, the eyebrow icon and a few glow rings.
- **Font: Poppins only**, five weights self-hosted (Regular 400, Medium 500, SemiBold 600, Bold 700, ExtraBold 800).
- **Type scale (desktop):** H1 48/57.6 (1.2) · section H2 40/52 (1.3) · sub-H2 30/39 (1.3) · eyebrow H3 15/19.5 (1.3)
  **uppercase 600** · body 16–19 · button 16/700.
- Letter-spacing: `normal` everywhere. GHL does **not** use tight display tracking. (The agency sites do — see below.)
- Container: **1170px**, single value, used site-wide.

### Layout / section order
1. Dark nav bar (`#03101c`, 146px tall block)
2. Hero split (copy L / product UI R), pb `230px`
3. Animated stat counters (4 across)
4. Positioning H2 band
5. "Your all-in-one solution" + 5-tab feature switcher (pb 60px)
6–10. Five long feature blocks, one per verb (Capture / Nurture / Close / Evangelize / Reactivate), 872–990px tall each
11. Philosophy 3-up (`ALL-IN-ONE` / `AI AS THE FOUNDATION` / `COMMUNITY-DRIVEN`) — uppercase eyebrow + para
12. Single large testimonial (dark `#03101d`, pb `300px`)
13. "Join the movement" community 3-up
14. "What's included" feature grid
15. Mobile app / support / automation 3-bullet
16. **Pricing**
17. Testimonial carousel ("Discover More Success Stories!")
18. Closing pitch + CTA
19. Integrations logo grid
20. Footer `#07223d`
21. **Sticky bottom bar** `#178af6`

Section vertical padding pattern: `pt 20px / pb 20–80px` on most, with one-off `pb 300px` for the testimonial
and `pb 230px` for the hero. Not a rigorous scale.

### Pricing
Two cards, side by side.
- **Starter — $97 /Month** · "Perfect for freelancers & solo marketers" · 5 bullets · CTA `Start Your Trial` ·
  under-CTA microcopy `Experience it for 14 Days FREE`
- **Unlimited — $297 /Month** · **`MOST POPULAR` badge above the card title** · "Built for growing agencies" ·
  first bullet is `Everything in Starter Plan and...` · 4 additional bullets · same CTA + microcopy
- Price format: big number `$297` + small `/Month` on the same line. One-line audience descriptor under the price,
  not above. Risk-reversal microcopy *under* the button, not in it.
- No "custom quote" tier on the homepage.

### CTA placement
`Start 14 Day Free Trial` appears **7+ times**: nav (sticky), hero, after the Capture feature block,
after the mobile/support block, in both pricing cards, in the closing pitch, and in the sticky bottom bar.
Every single one is the *same label*. The **sticky bottom bar** (`#178af6`) reads:
"Take your marketing to the next level! / **14 DAY FREE TRIAL** / No obligation, cancel at any time".

### Social proof
- Animated stat counters immediately under hero (strongest placement on the page).
- One hero-sized testimonial with photo, name, company, 4-line quote, on a dark panel.
- A 4-up testimonial carousel lower down with short one-line quotes (lowercase, conversational, ellipsis-terminated:
  "really groundbreaking product particularly for marketing agency owners...").
- Integration logo grid near the footer (not the hero).

---

## 2. WEBSTACKS — webstacks.com

The most disciplined design system of everything inspected. Worth copying wholesale.

### Hero
- **Eyebrow (marked up as the `h1`):** `COMPOSABLE WEB AGENCY` — **ui-monospace**, 14px / 400 / lh 19.88 /
  **ls 0.35px** / uppercase / `#e6e6e6`. It runs a **text-scramble animation** (captured mid-flight as
  `COMPOSABLE WEB AGENSK`).
- **Display line (marked up as `h2`):** "We build composable websites for **AI companies.**" —
  **64px / 400 / lh 67.2px (1.05) / ls -1.6px (-0.025em) / `#ffffff`**.
  The trailing phrase **rotates** through `AI companies.` / `Healthcare organizations.` etc., in a dimmer grey,
  using the `ws-slideUp` keyframe.
- **Subhead:** 20px / 400 / lh 30px (1.5) / `#e6e6e6`.
- **CTA count: 2 in hero, both ghost pills** — `Website projects` and `Ongoing retainers`.
  Nav carries the solid one: `Talk to an expert`, bg `#ffffff`, text `#000000`, `12px 24px`, **fully round pill**,
  14px, `transition: color .15s cubic-bezier(.4,0,.2,1), background-color .15s …`.
  Plus an `Ask AI` pill (`4px 12px`, radius `999px`) and a top announcement bar with a `Download now` link.
- **Hero visual:** two large image/video tiles immediately below the fold, each with a floating stat/label chip
  overlaid bottom-left. Background is pure `#000000`.
- **Trust bar:** logo marquee (Braze, ServiceTitan, Calendly, Solana, Fireworks AI, Circle, Justworks, Klaviyo,
  Fortra, Epicor, Snowflake, HubSpot, Tanium, Varonis, Aspire, Deepgram, FieldRoutes, Poly, Acoustic) — 19 logos,
  infinite `marquee` keyframe.

### Animation
Uses **Motion (framer-motion)** + **three.js** (`window.__THREE__`, `window.MotionIsMounted`).
Named keyframes read straight from the stylesheet:
```css
@keyframes ws-slideUp   { 0%{opacity:0; transform:translateY(8px)}  100%{opacity:1; transform:translateY(0)} }
@keyframes ws-stepEnter { 0%{opacity:0; transform:translateX(-8px)} 100%{opacity:1; transform:translateX(0)} }
@keyframes ws-fadeIn    { 0%{opacity:0} 100%{opacity:1} }
@keyframes ws-cursorBlink { 0%,100%{opacity:1} 50%{opacity:0} }        /* 0.8s step-end infinite */
@keyframes shimmer      { 0%{background-position:200% 0} 100%{background-position:-200% 0} } /* 2s ease-in-out ∞ */
@keyframes ws-dotGridReveal { 0%{opacity:0} 100%{opacity:1} }
@keyframes ws-pulseExpand {   /* radar ping from a point */
  0%   { opacity:.6; width:40px;  height:40px;  top:-20px;  left:-20px }
  100% { opacity:0;  width:300px; height:300px; top:-150px; left:-150px } }
@keyframes ai-border-spin   { 0%{transform:rotate(0)} 100%{transform:rotate(1turn)} }  /* conic gradient border */
@keyframes ai-border-slide  { 0%{background-position:100% 0} 100%{background-position:-100% 0} }
@keyframes ai-perlin-translate { 0%{background-position:0 0} 100%{background-position:512px 512px} } /* noise drift */
```
Applied durations: `ws-slideUp .3s ease-out`, `ws-stepEnter .25s ease-out forwards`.
**Reveal distance is only 8px** — extremely restrained. Nothing travels 40–60px.

Key transitions:
```css
transition: width .3s cubic-bezier(0.32, 0.72, 0, 1), padding .3s …, gap .3s …;  /* iOS-style ease-out */
transition: transform .4s, opacity .4s, height .4s, box-shadow .2s;
transition: opacity .1s, background .2s, border-color .2s;
transition: color .5s cubic-bezier(0.16, 1, 0.3, 1);                             /* easeOutExpo */
```
Focus rings are layered white spreads, not outlines: `0 0 0 3px rgba(255,255,255,.1)`, `0 0 0 5px rgba(255,255,255,.15)`.
Card hover: `0 4px 12px rgba(0,0,0,.1)` + `0 0 0 2px rgba(0,0,0,.2)`.

Feel: **subtle, fast, engineered.** Short distances, short durations, expo/ios easing, a lot of state
transitions rather than entrance animations.

### Color + Type
Full 3-tier token system (`--color-*` primitives → `--token-*` semantics). The semantic layer is the
lesson — a component never names a raw color:
```
--token-text-heading:        var(--color-black)
--token-text-body:           var(--color-neutral-700)
--token-bg-button-primary:   var(--color-blue-700)
--token-bg-button-primary-hover: var(--color-blue-900)
--token-bg-card-hover:       var(--color-neutral-100)
--token-border-card:         var(--color-neutral-500)
--token-border-card-hover:   var(--color-blue-600)
--token-bg-cta-bar:          var(--color-alpha-mint)
--token-bg-stats-card:       var(--color-neutral-100)
--token-bg-surface-elevated / --token-bg-surface-sunken / --token-bg-surface-dark / --token-bg-surface-inverse
```
The homepage runs almost entirely on `#000000` bg + `#ffffff` / `#e6e6e6` text. Accent blue `#335cff`,
greys `#171717 / #1a1a1a / #333 / #5c5c5c / #999 / #b3b3b3 / #d1d1d1 / #ebebeb / #f7f7f7`.
**Neutral : accent ≈ 97 : 3.**

Type scale (`primaryFont`, a geometric sans, all weight 400 — size and tracking do the hierarchy work):
| Level | Size | LH | Ratio | Letter-spacing | em |
|---|---|---|---|---|---|
| Hero display | 64px | 67.2px | 1.05 | -1.6px | -0.025em |
| Section H2 | 48px | 50.4px | 1.05 | -1.056px | -0.022em |
| Card H3 | 30px | 40px | 1.33 | -0.6px | -0.02em |
| Body | 20px | 30px | 1.50 | normal | — |
| Eyebrow (mono) | 14px | 19.88px | 1.42 | **+0.35px** | +0.025em |

The rule: **display type tracks negative (−0.02 to −0.025em), eyebrow/mono tracks positive (+0.025em), body stays 0.**

### Layout
- Containers: **1280px** (content), **1600px** (wide media), **1008px / 770px / 720px** (prose measures).
- **Section padding is a strict 8px scale:** `96px` top+bottom for a full section; a heading block uses
  `pt 96 / pb 0` and its body continues with `pt 64 / pb 96`. Sub-blocks use `48/48`. Tailwind `py-24`, `pt-24 pb-0`, `pt-16 pb-24`.
- Every section carries `scroll-mt-16` for anchored nav.

### Section order
1. Announcement bar → 2. Hero (eyebrow / display / sub / 2 ghost CTAs) → 3. Two large media tiles with stat chips
→ 4. Logo marquee → 5. "Future-proof websites that grow with your business." → 6. `Our Expertise` eyebrow +
"End-to-end website expertise." → 7. Composable-stack expert grid → 8. `Our Work` + case studies (Gong, ServiceTitan,
Calendly as H3s) → 9. "From Series A to IPO…" → 10. "The trusted web team for 12% of the Forbes Cloud 100" + G2 ratings
→ 11. `Our Insights` blog grid → 12. FAQ accordion → 13. Final CTA → 14. Footer.

### Pricing
No numeric pricing. Handled as a **two-path fork in the hero itself**: `Website projects` vs `Ongoing retainers`.
That is the entire pricing UX — segment the buyer before qualifying them.

### CTA placement
Sticky white-on-black nav with `Talk to an expert` always visible. Two ghost CTAs in the hero.
Section-level `Learn more` links. **Final CTA section: "Got a project? Let's talk" with the supporting
line "Your website is never done."** — a de-risking one-liner rather than an offer.

### Social proof
- 19-logo infinite marquee.
- Named-role testimonials, one-line each, always `Name, Title, Company`:
  *"Webstacks operates like our internal web team. Their program management keeps our roadmap moving."* — Alex Romano, Team Lead Web Experience, Cribl.
- G2 rating quartet: `4.8 Quality / 4.9 On-time Delivery / 4.8 Willing to Refer / 4.9 Overall`.
- Statistic-as-headline: "The trusted web team for **12% of the Forbes Cloud 100**".

---

## 3. HOOK AGENCY — hookagency.com  ⭐ best template for a local-services marketing agency

### Hero
- **Eyebrow pill:** `Join 100s of satisfied contractors` — centered above the H1.
- **H1:** `BECOME THE OBVIOUS CHOICE IN YOUR MARKET` — **Champion (condensed display), 72px / 500 /
  lh 74.88px (1.04) / uppercase / `#ffffff`**, centered.
  Pattern = `[imperative verb] + [the outcome the owner actually wants] + [in your market]`. No service words.
- **Subhead (one long sentence, 3 clauses + a trust clause):**
  "We help home service companies dominate local search, build a brand homeowners trust, and turn their website
  into their best 24/7 salesperson, with a proactive team that treats your marketing dollars like their own."
- **CTA count: 2**, side by side:
  - `Book An Intro Call` — bg `#d4fd52` (lime), text `#000000`, `12px 26px`, radius `4px`, 15px/600, `transition: .5s`
  - `View Contractor Results` — transparent, `1px solid rgba(255,255,255,.5)`, white text, identical metrics
- **Hero background gradient** (reused verbatim on the final CTA banner — a nice cohesion trick):
  ```css
  background-image: linear-gradient(rgb(25,25,28) 30.2%, rgb(42,50,83) 91%, rgb(67,89,167) 142.92%);
  /* #19191c → #2a3253 → #4359a7 ; note the 142% stop, so the indigo never fully arrives */
  ```
- Hero padding: `pt 169px / pb 96px`, total height 1050px.
- **Trust bar directly under hero:** YES — `.client-logos` section, `#000000`, `pt 64 / pb 64`, 178px tall,
  6 contractor logos (GenZ Ryan, Badgerland Exteriors & Solar, Smock Heating & Air, TCBacker, Bears Plumbing, Panther).
  Real client logos, not badge logos.

### Animation
Deliberately minimal — jQuery only, no GSAP/Lenis. Transitions in use: `.15s ease-in-out` (Bootstrap default),
`.3s ease-in-out`, `.5s` on all buttons, `.6s` opacity for reveals. Card shadow is a single soft
`0 2px 4px rgba(0,0,0,.08)`. Fixed transparent header, 73px tall, no backdrop-filter.
**Takeaway: a site can read as premium in this category with essentially no scroll animation, if the typography
and section rhythm are right.**

### Color + Type
| Role | Hex |
|---|---|
| Page black | `#000000` |
| Charcoal panel | `#19191c` |
| Navy mid / indigo (gradient) | `#2a3253` / `#4359a7` |
| **Lime accent** | `#d4fd52` |
| Light section | `#f5f7fa` |
| White section | `#ffffff` |
| Body text | `#464747`, muted `#828282`, faint `#adb5bd` |

**Neutral : accent ≈ 95 : 5.** Lime appears only on primary buttons and eyebrow labels.

Two-font system:
- **Champion** (condensed grotesque) — all headings, weight 500, **uppercase**, lh ≈ 1.04–1.2, ls `normal`.
  H1 72/74.88 · H3 52/62.4 · H2 46/55.2 · H3 40/48.
- **Archivo** — eyebrows (16px/600, capitalize, `#adb5bd` on dark or `#d4fd52` on charcoal), body 13–17px, lh 1.5.

Container: **1140px** (Bootstrap), prose measures 650/699px.

### Layout — section order (exact classnames, in DOM order)
| # | Section | Padding | Height | Background |
|---|---|---|---|---|
| 1 | `.hero--main-value` | 169 / 96 | 1050 | gradient |
| 2 | `.client-logos` | 64 / 64 | 178 | `#000000` |
| 3 | `.problem-breakdown` | 96 / 96 | 920 | `#19191c` |
| 4 | `.process` | 96 / 96 | 783 | transparent |
| 5 | `.video-testimonials.bg-gray` | 96 / 96 | 539 | `#f5f7fa` |
| 6 | `.services-bento.bg-charcoal` | 96 / 96 | 1393 | `#19191c` |
| 7 | `.industry-callout.bg-gradient` | 0 / 96 | 919 | gradient |
| 8 | `.stats-case-studies` | 96 / 96 | 992 | `#000000` |
| 9 | `.reviews.bg-wt` | 64 / 64 | 635 | `#ffffff` |
| 10 | `.company-promise.blend-black` | 64 / 64 | 706 | transparent |
| 11 | `.pricing-breakdown` | 64 / 64 | 1289 | `#000000` |
| 12 | `.faq-accordion.bg-white` | 96 / 96 | 994 | `#ffffff` |
| 13 | `.recent-articles` | 96 / 96 | 787 | transparent |
| 14 | `.cta-banner.primary` | 64 / 64 | 432 | same hero gradient |

**Padding scale is exactly two values: 96px for content sections, 64px for band/strip sections.**
Backgrounds alternate dark → charcoal → light → charcoal → dark → white in a deliberate rhythm.

### Problem section — the most stealable copy structure on the page
Eyebrow `The Reality` → H3 `YOUR MARKETING IS WORKING AGAINST YOU` → intro
"Most contractors don't have a lead problem. They have a presence problem. Your pieces don't fit together,
so customers see confusion instead of confidence." → then **three numbered cards `01 / 02 / 03`**:
- `01 — Inconsistency kills conversions.` "If every touchpoint looks or sounds different, you're not building trust, you're creating doubt. Doubt doesn't book jobs."
- `02 — Google shows you. Your site doesn't close.` "A homeowner clicks your ad, lands on your site, and something feels off. That disconnect kills the conversion before you ever get the call."
- `03 — You look like everyone else.`

Every headline is a **short declarative sentence with a period**, not a noun phrase.

### Process section
Eyebrow `Our Process` → H3 `SEE HOW EASY IT IS TO GET STARTED WITH US` → 5 numbered steps
`Quick Intro Call 01` → `Strategy Meeting + Proposal 02` → `Onboarding + Kickoff 03` → `Web Design + Strategy 04` →
`Monthly Reporting Rhythm + Adapt 05`. Number is rendered *after* the label, large and low-contrast.

### Pricing — best "productized service" pricing treatment found
Header: `PRICING OPTIONS THAT FIT YOUR BUSINESS`
Framing paragraph: *"Most contractors are overspending on marketing that underdelivers. Hook is built the opposite way,
focused on the work that actually drives leads, calls, and booked jobs."*

Six rows, **one per service, not per bundle**. Each: name → one-sentence benefit → price → **asterisked qualifier**:

| Service | Price | Qualifier |
|---|---|---|
| Local SEO | `$2,800 /mo` | *Starting price for SEO only |
| AEO | `$4,000 /mo` | *$2k when added to an SEO package |
| Pay-Per-Click | `$2,000 /mo` | *Starting price, scales based on service scope & ad spend |
| Meta Ads | `$3,000 /mo` | *Starting price |
| Standard Website | `$1,000 /mo` | $12K Total – Split into 12 Months |
| Custom Website | `$2,000 /mo` | $24K Total – Split into 12 Months |

Footer row: **`Package Options? Talk to Sales`** — that is how "custom quote" is handled: not a third tier card,
just a single line at the bottom of the price list.
Note the website pricing trick: lead with the **monthly** number, disclose the total in the qualifier.

### Stats / case studies
Eyebrow `Proof` → H `REAL CONTRACTORS. REAL RESULTS.` →
*"We don't measure success in rankings or impressions. We measure it in calls, leads, and booked jobs."*
→ three stats `$240M+ Revenue Driven` · `200+ Contractors Served` · `4 YRS In the trades`
→ then a case-study row where each client is tagged with the services used: `Badgerland Exteriors — WEB | SEO | PPC`.

### CTA placement
Sticky header CTA `Book an Intro Call` (lime) + a phone number `612-712-8528` rendered as plain text beside it.
Hero: 2. Then section-level CTAs (`More Case Studies`, `See All Reviews`, `Talk to Sales`).
**Final CTA banner:** `READY TO TAKE THE LEAP?` / "Let's talk about what's possible for your business." /
`Book an Intro Call` — on the same gradient as the hero. 432px tall, `pt 64 / pb 64`.

### Social proof
Four distinct layers, each in a different visual format:
1. Logo bar (black, under hero)
2. **Video testimonials** on a light grey section — headline is the client's own quote:
   `Nothing short of amazing!` / `It's a complete night and day difference` / `They really ensured that they were capturing our vision`
3. Stats + case-study grid (black)
4. Reviews section (white) with `175+ Google Reviews` and `See All Reviews`
Plus an authority band: `Home service leaders recognize our work & endorse us`.

---

## 4. RAMOTION — ramotion.com

### Hero
- **H1:** "Product & brand design agency" — **92px / 600 / lh 101.2px (1.10) / ls -3.2px (-0.035em) / `#262626`**
  on `#fafafa`. Font: **Graphik Web**.
- **Subhead:** "We help marketing & product executives build impactful brands, engage users, and drive growth" —
  18px / 400 / lh 27.9px (1.55).
- **CTA count: 1, and it is not a button** — a text link `All works`. Nav has `Let's talk` and `Subscribe`.
  Extremely restrained; the work *is* the CTA.
- **Hero visual:** none in the fold — pure type on near-white. The case-study reel starts immediately below.
- **Trust bar:** a 30-logo client list (Netflix, CBRE, Stripe, NBCUniversal, Mozilla, Universal Music, Adobe,
  Crunchbase, Opera, Redis, Okta, Turo, Citrix, Descript, Clearbit, Streamlit, Filecoin, Xero, Salesforce, …).

### Animation — the cleanest reveal recipe found, and it is pure CSS
Elements sit pre-reveal at:
```css
opacity: 0;
transform: translateY(40px);
transition: opacity .3s ease-in, filter .3s ease-in, transform .6s ease-in-out;
```
On enter: `opacity:1; transform:none`. Note the **split durations** — opacity resolves in 300ms while the
transform takes 600ms, so the element is fully visible while still finishing its glide. That is what makes it
feel expensive rather than laggy. A `filter` (blur) transition rides along at 300ms.

Secondary pattern on descriptions: `transform: translateY(40px); transition: .3s ease-out`.

Declared keyframes: `fadeInUp` (`translateY(20px)→0`), `slideInUp` (`translateY(40px)→0`),
`fadeInLeft` (`translateX(20px)→0`), `scaleInOut` (`scale(0)→1`),
`popupIn` (`scale(.9) translateY(20px) → scale(1) translateY(0)`),
`videoBtn` (`opacity 1 scale(1) → opacity 0 scale(1.5)` — the ripple-away play button).

Micro transitions: `.15s cubic-bezier(0, 0, .58, 1)` (ease-out) on link color; `transform .1s ease-out`
for cursor-follow; `width .24s ease-in-out` for underline draws.
**No GSAP, no Lenis, no scroll library.** IntersectionObserver + class toggle.
Because everything starts at `opacity:0`, an un-scrolled screenshot of the page is literally blank.

### Color + Type
- Background `#fafafa`, text `#262626`. That is essentially the whole palette — **no accent color at all** on the
  homepage. Color comes exclusively from the case-study imagery. Neutral : accent = 100 : 0.
- **Graphik Web**, weights 400/500/600.
- Scale: H1 92/101.2 (1.10) ls -3.2px · H2 48/57.6 (1.20) ls normal · H3 24/33.6 (1.40) · body 18/27.9 (1.55).
  **Tracking is applied only at the display size and released entirely below it** — a very common pro move.
- Containers: **1312px** and **980px**.
- Section padding: the capability block runs `pt 120 / pb 60`.

### Layout
1. Hero title block (494px) → 2. Showreel strip (165px) → 3. Work grid → 4. `For companies with tech leverage` →
5. `At the intersection of product and brand` (capability block, 3612px tall — a long scroll-through) →
6. `What our partners say` testimonials → 7. Footer / subscribe.

Only **four** section headings on the entire homepage.

### Pricing
None. Handled entirely off-site.

### Social proof — result-first case-study captions
Every case study is titled by its outcome, not its scope:
`Clearbit — $150M acquisition by Hubspot` · `Streamlit — 90% Fortune 50 adoption and Snowflake's $800M acquisition` ·
`Flatfile — $50M funding, 1.75M onboarded customers, 25B records processed` · `Turo — 30% improvement in users'
ability to find answers` · `Xero — 4.2M+ global subscribers` · `Volusion — $29B+ in global merchant sales`.

Testimonials are attributed to **title + brand you recognize**, quote kept to one sentence:
> "Ramotion is a rock solid team combining instinct for design with business acumen." — Khoi Vinh, Senior Director of Product Design, Adobe

---

## 5. CLAY — clay.global

### Hero
- **H1:** "Clay is a global branding and UX design agency" —
  **74px / weight 740 / lh 81.4px (1.10) / ls -2.96px (-0.04em) / `#06070a`** on white.
  Custom variable font **UniversalSans-740-Headlines**. Note the headline is a **complete sentence naming
  the company and the category** — no cleverness.
- **Subhead:** "We build transformative digital experiences for the world's leading brands by blending AI, design, and technology."
- **CTA:** `Contact` pill in the nav only. Work tiles carry `View case study`.
- **Hero visual:** floating 3D objects rendered in `<canvas>` (three.js) — a gradient-lacquered sphere,
  a large pale half-disc, a small orange ball — drifting over white. Plus `<video>` elements in the work tiles.
- **Client logos:** Meta, Google, Discover, Stripe, Coca-Cola, Coinbase, Uber, Sony, Slack, Amazon, Fiverr,
  Credit Karma, Cisco, ADP, UPS, VMware, Fossil, Western Digital, Toyota, Samsung, Grayscale.

### Animation — best easing/stagger system found. Copy these variables verbatim.
```css
:root{
  --easeOutExpo: cubic-bezier(0.16, 1, 0.3, 1);      /* the workhorse */
  --ease-out:    cubic-bezier(0.19, 1, 0.22, 1);     /* even sharper expo */
  --ease-in:     cubic-bezier(0.95, 0.05, 0.795, 0.035);
  --easeInExpo:  cubic-bezier(0.7, 0, 0.84, 0);
  --default:     cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease:        cubic-bezier(1, 0, 0, 1);           /* extreme, for wipes */
}
```
Applied:
```css
transition: transform 1.3s var(--easeOutExpo), opacity .65s ease;  /* big hero/media entrances */
transition: transform .7s  var(--easeOutExpo), opacity .35s var(--easeOutExpo);
transition: transform .35s var(--easeOutExpo);                     /* hover */
transition: opacity .9s cubic-bezier(0.16,1,0.3,1) 0.03s;          /* nav items, staggered */
```
**The stagger is exactly 30ms per item** — nav links carry delays `0.03s / 0.06s / 0.09s / 0.12s`,
service links `0.03 / 0.06 / 0.09`. Pre-reveal state: `opacity:0; transform: translateY(15px)`.
Note: **transform duration is 2× the opacity duration** (1.3s vs .65s, .7s vs .35s) — same trick as Ramotion.

Signature keyframes:
```css
/* underline that draws in from the left and exits to the right */
@keyframes line-on     { 0%{transform:scaleX(0); transform-origin:0 50%}   100%{transform:scaleX(1); transform-origin:0 50%} }
@keyframes line-off    { 0%{transform:scaleX(1); transform-origin:100% 50%} 100%{transform:scaleX(0); transform-origin:100% 50%} }
@keyframes line-active { 0%{scaleX(0); origin:0 50%} 50%{scaleX(1); origin:0 50%} 51%{origin:100% 50%} 100%{scaleX(0)} }

@keyframes li-fade-position { 0%{opacity:0; transform:translateY(15px)} 75%{opacity:1} 100%{opacity:1; transform:translateY(0)} }
@keyframes tooltip-face-position-in  { 0%{opacity:0; transform:scale(.8)} 100%{opacity:1; transform:translateZ(0)} }
@keyframes tooltip-face-position-out { 0%{opacity:1; transform:translateZ(0)} 100%{opacity:0; transform:scale(.8)} }
```
Work items use a **cursor-following tooltip with the team member's face** that scales in from 0.8.
Feel: **showy but controlled** — long durations with expo easing read as "heavy, expensive object settling."

### Color + Type
```
--color-white:   #fff        --color-gray-5:   #f3f4f6     --color-gray-100: #e6e8eb
--color-gray-200:#cbd0d6     --color-gray-300: #b2b8c2     --color-gray-400: #989fab
--color-gray-500:#7f8694     --color-gray-600: #666c7a     --color-gray-700: #4e5361
--color-gray-800:#353945     --color-gray-850: #252833     --color-gray-900: #171921
--color-black:   #06070a
--color-red-600: #cf3723     --color-blue-200: #bacdff     --color-blue-600: #31356d
--color-headerWhite: #ffffff80   --color-headerDark: #17191f80   /* 50% alpha, for backdrop-blur headers */
```
A **13-step cool grey ramp plus exactly three accent hues.** Neutral : accent ≈ 97 : 3.
Note `--color-black` is `#06070a`, not `#000` — a very slightly blue-black.

Type (UniversalSans, weights 500 body / 740 headlines):
| Level | Size | LH | Ratio | ls | em |
|---|---|---|---|---|---|
| H1 | 74px | 81.4 | 1.10 | -2.96px | -0.040em |
| Feature H3 | 40px | 50 | 1.25 | -1.2px | -0.030em |
| Card H2 | 30px | 36 | 1.20 | -0.6px | -0.020em |
| Lead p | 20px | 24 | 1.20 | -0.2px | -0.010em |

**Tracking scales with size in a clean ramp: −0.04em → −0.03em → −0.02em → −0.01em.** This is the single
most transferable typographic rule in this document.

### Layout
Containers `1440px` / `1400px` outer, `850px / 839px / 780px / 775px / 632px` for prose.
Section paddings: `100/65`, `12/80`, `48/48`, `0/112`, `0/122`, `120/0`, `120/70`.
Backgrounds: white → `#ffffff` → `#f3f4f6` → `#171921` (the page goes dark for the last third).
One section is **8741px tall** — an extremely long scroll-driven work showcase.

### Section order
Hero (3D) → Services list (Branding / Digital Products / Websites / Development / Content / Generative AI) →
Work grid with hover video + face tooltips → Industry block (Fintech — "The Future of Finance is Intelligent") →
"We transform companies through design innovation" → Featured News → FAQ → **`Let's Talk`** (email, phone,
and both office addresses inline — no form).

### Pricing
No numbers. One sentence does the job:
> "We offer three engagement models: time & materials, fixed fee, and retainer."
Plus a qualifier-softener: *"We work with clients of all sizes, from enterprise-level organizations to startups."*

---

## 6. KICKCHARGE CREATIVE — kickcharge.com (levergy.io redirects here)

The "loud trades" end of the spectrum. Useful as a contrast to Hook.

### Hero
- **H1:** `POWERFUL MARKETING SOLUTIONS®` — **Proxima Nova 900, 140px, lh 119px — a ratio of 0.85 (negative leading!)**,
  uppercase. Line 1 white, lines 2–3 in `#feba12` yellow, with a lightning-bolt glyph.
- **Hero visual:** hard-edged diagonal parallelogram shapes in black / `#333` / yellow, layered like a race livery.
  No photo, no gradient — flat geometry.
- **CTA:** `REQUEST INFO` — bg `#feba12`, text `#000`, padding `16px 40px`, **radius 0**, 17px / **900** / uppercase,
  `transition: .3s ease-in-out`.

### Color + Type
- `#feba12` yellow / `#000000` / `#ffffff` / `#292828` body text / `#b6b9ba` muted headline grey. Neutral : accent ≈ 88 : 12
  (the loudest ratio of anything inspected).
- Proxima Nova at 800–900 exclusively. H1 140/119 (0.85) · H2 50/44 (**0.88**) · H3 20/24 (1.2) · body 17/22.95 (1.35).
- **Headline line-height below 1.0 is the entire aesthetic.** Uppercase + heavy weight + negative leading =
  the "trades/contractor" look, instantly.
- Containers: `1860 / 1710 / 1460 / 1200 / 1170 / 1055 / 960 / 840` — an unusually wide top container.
- Section padding much tighter: `50/50` on the CTA.

### Animation
jQuery + CSS only. Fast and small: `.1s`–`.3s` on everything; `opacity .12s, transform .12s`;
`grid-template-rows .3s ease-out` for accordions (the modern auto-height trick).
`overlay-menu__fade-in` = `opacity 0→1, translateY(0.5em)→0`.

### Copy structure — service blocks
Four blocks, each an uppercase one-word H3 + one paragraph that opens with a punchy fragment:
- `BRAND` — "Your 'bland' days are over. It's time to establish the cornerstone of your home service company's powerful new identity… You only get one chance to make a first impression—so brand wisely."
- `PRINT` — "The most effective brand is one that is seen."
- `DIGITAL` — "The Internet can be one of your most powerful marketing tools—but only when you use it properly."
- `WEBSITE` — "Your website is the digital home for your brand—the place where leads and existing clients alike get to know who you really are."

Headline pattern is multi-line all-caps declaratives:
`YOUR COMPANY'S BEFORE AND AFTER STORY IS WAITING TO BE TOLD` ·
`IT'S NOT ABOUT TRANSFORMING YOUR TRUCK, IT'S ABOUT TRANSFORMING YOUR BUSINESS` ·
`BUCKLE UP: BUSINESS GROWTH AHEAD` · `BEHIND EVERY HOME SERVICE BRAND, THERE IS A DREAM TURNED REALITY`.

CTA `VIEW MORE TESTIMONIALS` repeats the same yellow square button.

---

## 7. DEPT — deptagency.com

### Hero
- **H1:** `THE GROWTH INVENTION COMPANY` — **Inter Variable 900, 112px, lh 96.32px (0.86), ls -3.36px (-0.030em)**,
  uppercase, `#000000` on white.
- **Subhead:** "Invention at the intersection of marketing and technology. Home to the most ambitious brands."
- Section headings reuse the exact same 112px/900 treatment (`AI TRANSFORMATION`, `WORK`) — **the section label
  IS the display type**, with a secondary 48px/400/ls -1.2px used for editorial subheads.
- **CTA:** `CONTACT` pill, bg `#121212`, white text, `12px 24px 10.4px` (note the optical bottom-pad correction),
  fully round, `transition: color .3s cubic-bezier(.4,0,.2,1), background-color .3s …`.

### Animation
GSAP is loaded (`window.gsapVersions`, `window._gsap`).
Key transition: `opacity .22s cubic-bezier(0.16,1,0.3,1), transform .3s cubic-bezier(0.16,1,0.3,1), filter …`
— **easeOutExpo again**, and again opacity resolves faster than transform.
```css
@keyframes marquee { 0%{transform:translate3d(var(--move-initial),0,0)} 100%{transform:translate3d(var(--move-final),0,0)} }
@keyframes dpt-slide-in-and-fade  { 0%{opacity:0; translate:0 -0.5rem} 100%{opacity:1; translate:0} }
@keyframes dpt-slide-out-and-fade { 0%{opacity:1; translate:0; scale:1} 100%{opacity:0; translate:0 -0.25rem; scale:.99} }
@keyframes dept-event-program-slide-up { 0%{opacity:0; transform:translateY(10rem)} 100%{opacity:1; translateY(0)} }
```
Note `dpt-slide-out-and-fade` scaling to `0.99` on exit — a 1% shrink, invisible individually but it makes
dismissals feel physical.
Video posters fade at `opacity .5s cubic-bezier(.4,0,.2,1)`.

### Color + Type
Accent palette (from the design tokens) is deliberately electric and used at ~2% coverage:
`#FF4901` fiery orange · `#FF4E00` int orange · `#5115F7` han purple · `#57EE6F` refreshed green ·
`#FFE61C` refreshed yellow · `#3C73FB` vibrant blue · `#FFEA86` yellow · `#D0E8FF` light blue.
Neutrals: `#121212` onyx · `#181818` cod grey · `#333333` anthrazit · `#545454` davy · `#595959` ·
`#646464` dim · `#767676` **body-on-white** · `#818181` **body-on-black** · `#A7A7A7` · `#C4C4C4` ·
`#DEDFE1` iron · `#F2F2F2` platinum · `#F7F9FA` background-grey · `#F9F9F9` alabaster.

**The `body-on-white` / `body-on-black` token pair is worth stealing** — body text is never pure black or
pure white, and the two values are asymmetric (`#767676` vs `#818181`) to compensate for optical bloom on dark.

Prose containers: `662–848px`. Everything else is full-bleed.

### Stats treatment
`4,000 people` · `5 continents` · `50/50 tech & marketing` · `15+ years of experience` · `50% AI-enabled revenue` ·
`37% renewable energy consumption` · `100% climate neutral`. Mixes scale, ratio, and values-based stats in one row.

---

## 8. COPY-ONLY REFERENCES

**Blue Corona** — H1 `GROW your BUSINESS` (mixed-case emphasis on the verbs), sub "We help you create, capture,
and convert more leads from the internet." Single CTA `Schedule a Call`. ~12 partner/certification badges under hero.
Section spine mirrors the funnel: `Build Your Website & Online Presence` → `Drive More Qualified Traffic` →
`Capture & Convert More Leads` → `Track & Understand Your Results`. Results stated as ratios, not just dollars:
`$34M revenue generated`, `77:1 ROI`, `14:1 ROI`, `500+ keywords ranked page one`. No pricing.

**Scorpion** — H1 is a **rotating-word headline**: `MAXIMIZE Your Wins / Your Growth / Your Brand / Your Impact /
Your Time / Your Potential / Your Revenue`. Sub is a two-sentence antithesis: "Stop Chasing Leads. Start Generating
Revenue." Four CTAs: `Show Me How`, `Pick Your Industry`, `Schedule Consultation`, `Book a Meeting`.
Trust bar = platform badges (Google Partner, Meta Partner, Microsoft Advertising).
Stats: `20k+ Businesses helped succeed` · `$100B+ Revenue generated` · `200M+ Leads driven for clients` ·
**`Countless Records broken`** (a non-numeric stat in a numeric row — a nice tension break).
Final CTA reuses the hero verb: `MAXIMIZE Your Growth`.

**basement.studio** — H1 "A digital studio & branding powerhouse making cool shit that performs."
Services as nav-like CTAs: `Websites & Features` / `Visual Branding` / `IRL Experience Design` / `Marketing Execution`.

---

## CROSS-SITE SYNTHESIS

### Hero headline formulas observed
| Formula | Example |
|---|---|
| `[Qualifier] + [category noun]` | "The AI-powered business operating system" (GHL) |
| `[We build] + [thing] + [for] + <rotating audience>` | "We build composable websites for **AI companies.**" (Webstacks) |
| `[Imperative verb] + [owner's desired status]` | "BECOME THE OBVIOUS CHOICE IN YOUR MARKET" (Hook) |
| `[Category] + [agency]`, bare | "Product & brand design agency" (Ramotion) |
| `[Company] is a [scope] [category] agency` | "Clay is a global branding and UX design agency" |
| `THE [abstract noun] [noun] COMPANY` | "THE GROWTH INVENTION COMPANY" (Dept) |
| `[VERB] + <rotating object>` | "MAXIMIZE **Your Revenue**" (Scorpion) |

### CTA count down the page
| Site | Hero CTAs | Total repeats | Sticky? |
|---|---|---|---|
| GoHighLevel | 1 | 7+ (identical label) | sticky nav + sticky bottom bar |
| Hook Agency | 2 (solid + ghost) | ~6 | fixed transparent header + phone |
| Webstacks | 2 (both ghost) | ~5 | sticky nav (solid pill) |
| Ramotion | 1 text link | 2 | nav only |
| Clay | 1 (`Contact`) | 2 | blurred sticky header (`#ffffff80`) |
| Scorpion | 4 distinct labels | many | yes |

**Consensus: 1–2 CTAs in the hero. If 2, one solid + one ghost/outline, identical padding and radius.**
The high-converting sites repeat *one* label; the brand-led sites vary theirs.

### Section vertical padding
- Webstacks: strict `96 / 64 / 48` (Tailwind `py-24 / py-16 / py-12`)
- Hook: strict `96` (content) / `64` (bands)
- Clay: `120 / 112 / 100 / 80 / 65 / 48`
- Ramotion: `120 / 60`
- GoHighLevel: loose `20 / 40 / 60 / 80`, with one-off `230` and `300`
**`96px` is the modal desktop section padding. `64px` for strips. `120px` for premium/editorial.**

### Container widths
`1140` (Hook) · `1170` (GHL) · `1280`+`1600` (Webstacks) · `1312`+`980` (Ramotion) · `1440`+`1400` (Clay).
Prose measures cluster at **632–850px**.
**Pick 1200±80 for content, 640–780 for paragraphs.**

### Easing curves actually in production
| Curve | Who | Use |
|---|---|---|
| `cubic-bezier(0.16, 1, 0.3, 1)` easeOutExpo | Clay, Webstacks, Dept | the default for everything premium |
| `cubic-bezier(0.19, 1, 0.22, 1)` | Clay | sharper variant for large travel |
| `cubic-bezier(0.32, 0.72, 0, 1)` | Webstacks | iOS-style, for size/layout changes |
| `cubic-bezier(0.4, 0, 0.2, 1)` Material standard | GHL, Dept, KickCharge | buttons, colors |
| `cubic-bezier(0.47, 2.02, 0.31, -0.36)` | GHL | overshoot/bounce (used sparingly) |
| `ease-in-out` | Ramotion, Hook | transform on reveals |

### Reveal distances
`8px` (Webstacks) · `10px`/`0.5rem` (Dept) · `15px` (Clay) · `20px` (Ramotion fadeInUp) · `40px` (Ramotion slideInUp).
**Nothing travels more than 40px.** Modern sites trend toward 8–15px.

---

# PATTERNS WORTH STEALING
Ranked by impact-per-effort. All implementable in plain HTML/CSS/JS.

### 1. Split-duration reveal — opacity fast, transform slow
The single highest-leverage motion trick, used independently by Ramotion, Clay and Dept.
```css
.reveal{ opacity:0; transform:translateY(24px);
  transition: opacity .35s ease-out, transform .7s cubic-bezier(0.16,1,0.3,1); }
.reveal.is-in{ opacity:1; transform:none; }
```
```js
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target);}
}),{rootMargin:'0px 0px -12% 0px',threshold:0});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
```
Element is fully opaque while still gliding — reads as weight, not lag. Unobserve after firing so it never replays.

### 2. Exactly 30ms stagger via `--i`
Clay ships `0.03s / 0.06s / 0.09s / 0.12s` delays. Not 100ms, not 150ms.
```css
.stagger > *{ transition-delay: calc(var(--i,0) * 30ms); }
```
```js
document.querySelectorAll('.stagger').forEach(g=>
  [...g.children].forEach((c,i)=>c.style.setProperty('--i',i)));
```
Cap the group at ~8 items or the last one arrives late.

### 3. Letter-spacing ramp tied to font size
Clay's exact ladder — the fastest way to make type look professionally set:
```css
.display { font-size: clamp(44px, 6vw, 74px); letter-spacing: -0.040em; line-height: 1.08; }
.h2      { font-size: clamp(32px, 3.6vw, 48px); letter-spacing: -0.030em; line-height: 1.10; }
.h3      { font-size: 30px; letter-spacing: -0.020em; line-height: 1.20; }
.lead    { font-size: 20px; letter-spacing: -0.010em; line-height: 1.40; }
.body    { font-size: 17px; letter-spacing: 0;        line-height: 1.55; }
.eyebrow { font-size: 13px; letter-spacing: +0.08em;  text-transform: uppercase; }
```
Rule: **negative tracking above 24px, zero at body, positive on uppercase eyebrows.**

### 4. Bottom-lit hero gradient
GoHighLevel's exact stack — dark at top, saturated brand color glowing at the bottom edge, plus a huge
bottom padding so the glow has room. Costs nothing, reads as expensive.
```css
.hero{
  padding: 120px 0 230px;
  background-image: linear-gradient(0deg,
    rgba(255,255,255,0) 12%, #7dd2ff 28%, #0095e5 37%,
    #04519e 47%, #01264c 57%, #01162a 70%, #03101d 77%);
}
```
Hook's variant for a more corporate look:
`linear-gradient(#19191c 30.2%, #2a3253 91%, #4359a7 142.92%)` — the >100% stop means the brightest
color never fully lands, which keeps it subtle.

### 5. Reuse the hero gradient on the final CTA band
Hook applies the identical `linear-gradient(#19191c, #2a3253, #4359a7)` to `.hero` and `.cta-banner`.
Free visual bookending; the page feels composed rather than assembled.

### 6. Two-value section padding scale
```css
.section      { padding-block: 96px; }   /* content */
.section--band{ padding-block: 64px; }   /* logo bars, stats, final CTA */
@media (max-width:768px){ .section{padding-block:56px} .section--band{padding-block:40px} }
```
Hook and Webstacks both do exactly this. Two values, no exceptions — the vertical rhythm carries the whole page.

### 7. Alternating background rhythm
Hook's sequence: `gradient → #000 → #19191c → transparent → #f5f7fa → #19191c → gradient → #000 → #fff → #000 → #fff`.
Never two identical adjacent backgrounds. Define three surfaces and cycle them:
```css
:root{ --surface-0:#0b0d10; --surface-1:#17191f; --surface-2:#f5f7fa; }
```

### 8. Semantic token layer over a primitive palette
Webstacks' structure — components never reference a raw hex:
```css
:root{
  --color-neutral-100:#f7f7f7; --color-neutral-700:#5c5c5c; --color-neutral-900:#171717;
  --color-blue-700:#335cff;    --color-blue-900:#2547d0;
  --token-text-heading: var(--color-neutral-900);
  --token-text-body:    var(--color-neutral-700);
  --token-bg-card:      #fff;
  --token-bg-card-hover:var(--color-neutral-100);
  --token-border-card:  #ebebeb;
  --token-border-card-hover: var(--color-blue-700);
  --token-bg-button-primary: var(--color-blue-700);
  --token-bg-button-primary-hover: var(--color-blue-900);
}
```
Makes a dark-mode or white-label swap a 6-line change.

### 9. Asymmetric body-text colors for light vs dark surfaces
Dept ships `--body-on-white:#767676` and `--body-on-black:#818181`. Never `#000` or `#fff` for paragraphs,
and the two are *different lightnesses* because white text blooms on dark.
```css
.on-light{ color:#767676 } .on-dark{ color:#818181 }
```

### 10. Numbered problem cards with declarative-sentence headlines
Hook's `.problem-breakdown`: eyebrow → uppercase section H → 1-sentence framing → three cards `01 / 02 / 03`,
each headline a full sentence ending in a period ("Inconsistency kills conversions."), each body 2 short sentences
naming a consequence ("Doubt doesn't book jobs."). Highest-converting content block found in the local-services set.
Pair with the framing formula: *"Most X don't have a [obvious problem]. They have a [reframed problem]."*

### 11. Per-service pricing rows with asterisked qualifiers
Hook's model beats three-tier cards for productized services:
one row per service → one-sentence benefit → `$X,XXX /mo` → small italic qualifier
(`*Starting price, scales based on service scope & ad spend`) → and a single closing line
**`Package Options? Talk to Sales`** instead of a "Custom" card.
For build fees, lead with the monthly and disclose the total in the qualifier: `$1,000/mo · $12K Total – Split into 12 Months`.

### 12. Badge above the card, risk-reversal below the button
GoHighLevel: `MOST POPULAR` sits **above** the recommended card's title, the second card's feature list opens with
`Everything in Starter Plan and...`, and each CTA has microcopy **under** it — `Experience it for 14 Days FREE`.
Price format is a large numeral with a small `/Month` on the same baseline, and a one-line audience descriptor
*below* the price ("Built for growing agencies"), never above.

### 13. Animated stat counters immediately under the hero
GHL puts four counters in the first scroll-inch, rendering `0+` then counting. Cheap to build:
```js
const fmt=n=>n>=1e9?(n/1e9).toFixed(1)+'B':n>=1e6?(n/1e6).toFixed(0)+'M':n.toLocaleString();
function count(el){const to=+el.dataset.to,t0=performance.now(),d=1600;
  (function tick(t){const p=Math.min((t-t0)/d,1);
    el.textContent=fmt(Math.round(to*(1-Math.pow(1-p,3))));   // ease-out cubic
    if(p<1)requestAnimationFrame(tick);})(t0);}
```
Format hint from the pros: display `7.2B`, `179M`, `$5.2B+`, `$240M+`, `200+`, `77:1` — abbreviate, and add
one non-numeric entry (Scorpion's `Countless — Records broken`) to break the row's monotony.

### 14. Rotating-word headline
Webstacks ("…for **AI companies.** / **Healthcare organizations.**") and Scorpion ("MAXIMIZE **Your Revenue**").
Keep the static part in full-contrast and the rotating part one step dimmer, animate with `ws-slideUp`:
```css
@keyframes slideUp{0%{opacity:0;transform:translateY(8px)}100%{opacity:1;transform:translateY(0)}}
.rotator span{ animation: slideUp .3s ease-out both; }
```
Swap every 2.2s; reserve the width with the longest string so the line never reflows.

### 15. Left-in / right-out underline draw for links
Clay's `line-on` / `line-off` pair. The exit going the *opposite* direction is what makes it feel crafted.
```css
.link{position:relative}
.link::after{content:'';position:absolute;left:0;bottom:-2px;height:1px;width:100%;
  background:currentColor;transform:scaleX(0);transform-origin:100% 50%;
  transition:transform .35s cubic-bezier(0.16,1,0.3,1);}
.link:hover::after{transform:scaleX(1);transform-origin:0 50%;}
```

### 16. Card hover = lift + shadow, 200ms, nothing else
GHL's `elevate` keyframe, distilled:
```css
.card{ transition: transform .2s cubic-bezier(0.4,0,0.2,1), box-shadow .2s cubic-bezier(0.4,0,0.2,1); }
.card:hover{ transform: translateY(-10px); box-shadow: 0 8px 5px -5px rgba(0,0,0,.25); }
```
On dark surfaces swap the shadow for a border-color change (`--token-border-card-hover`) — shadows disappear on black.

### 17. Glass eyebrow pill above the H1
GHL: `⚡ Power up your business with AI`. Hook: `Join 100s of satisfied contractors`.
Doubles as a proof statement and a visual anchor above the headline.
```css
.eyebrow-pill{ display:inline-flex; align-items:center; gap:8px;
  background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.12);
  backdrop-filter:blur(8px); border-radius:999px; padding:8px 16px;
  font-size:13px; letter-spacing:.02em; color:#8de1ff; }
```

### 18. Solid + ghost CTA pair with identical geometry
Hook's hero: both `padding:12px 26px; border-radius:4px; font:600 15px`. Only fill differs
(`#d4fd52` solid vs `transparent` + `1px solid rgba(255,255,255,.5)`). Matching metrics is what makes the
pair look designed rather than stacked.

### 19. Result-as-title case studies
Ramotion titles every case by its outcome: `Clearbit — $150M acquisition by Hubspot`.
Hook tags each client with the services delivered: `Badgerland Exteriors — WEB | SEO | PPC`.
Never title a case study with the scope of work.

### 20. Blurred translucent sticky header
Clay's `--color-headerWhite: #ffffff80` / `--color-headerDark: #17191f80`.
```css
.site-header{ position:fixed; inset:0 0 auto; background:rgba(23,25,31,.5);
  backdrop-filter:saturate(180%) blur(12px);
  transition: background-color .3s cubic-bezier(0.16,1,0.3,1); }
```
Hook's alternative is simpler and also works: `position:fixed`, fully transparent over the hero, 73px tall.

### 21. Always ship the reduced-motion escape hatch
None of these sites will be penalised for it and yours shouldn't be either:
```css
@media (prefers-reduced-motion: reduce){
  *,*::before,*::after{ animation-duration:.01ms!important; animation-iteration-count:1!important;
    transition-duration:.01ms!important; scroll-behavior:auto!important; }
  .reveal{ opacity:1!important; transform:none!important; }
}
```
Critical caveat learned from Ramotion: because every element starts at `opacity:0`, a JS failure or a
crawler with no IntersectionObserver sees a **blank page**. Gate the initial hidden state behind a
`<html class="js">` flag set by an inline script in `<head>`.
