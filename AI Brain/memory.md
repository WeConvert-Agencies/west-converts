# WeConvert — Running Log

This is the living memory file — durable facts only, not brainstorm ideas or advice that hasn't been acted on.

Log here: agent/client feedback and quotes, outreach response numbers, pricing or offer decisions, demo/product decisions, objections heard, and committed next steps.

Newest entries go on top. One fact per bullet. Numbers get denominators (e.g. "8 replies / 34 calls" not just "8 replies").

---

# 2026-08-26 — R.E.S. Painting and Drywall demo built for 5pm call

## Signals
- R.E.S. Painting and Drywall (owner Ralph, solo operator + 1 employee) called back off Danny's voicemail, wants to see a demo. Follow-up call booked 2026-08-26 5pm (phone first, Zoom if skeptical).

## Decisions
- Demo lives at demos/res-painting-drywall/index.html — single self-contained file, no assets except Google Fonts.
- Style direction: MODERN MINIMAL (chosen by Danny over bold/warm/premium/rustic). Ralph is an older gentleman + likely older client base, so: 18px body min, near-black on white, no thin weights, no scroll animations, big tap targets, phone shown as large tappable text, sticky mobile call bar. Fonts: Archivo (display) + Inter (body). One blue accent (#1652CE), hairline rules, no gradients/glass/shadows.
- Extreme value-gap case: Thumbtack is the ONLY citation anywhere — no site, no social, weak Google. So demo has NO star ratings / review counts anywhere, NO social links in footer (section omitted entirely), reviews section is structure-only with an honest empty state.
- Also absent per unconfirmed status: no "16 years"/"30 years"/any tenure claim, no license/insurance/bonding language, no street address, no specific service-area town (uses "Northern Colorado / Front Range").
- "Numbers" section from the standing template replaced with a qualitative "What you can count on" section since zero figures are confirmed.
- Confirmed facts used: painting + drywall, interior/exterior, residential + commercial (kept general); owner-operated; payment = cash/check/Zelle (shown in quote section).
- Hero is a full-bleed background image with white text overlaid on a left-weighted dark gradient scrim (same build pattern as demos/hh-painting), per Danny — he wants the photo visible without scrolling, not a section lower down. Image is AI-generated via Bloom (pro model, Sherwin-Williams brand session as style inspo per Danny), stored at demos/res-painting-drywall/assets/hero.jpg — an older painter rolling a blue-grey wall in a bright room. Small corner tag reads "Sample image — real project photos to come" so it's not passed off as a real job. Bloom balance after: 7/10 credits (used 3).
- Hero overlay contrast tuned and verified by sampling composited pixels behind each text element: desktop kicker 5.0 / h1 6.4 / sub 6.3 / phone 12.7 / phone-sub 5.2 / ghost btn 7.3 — all pass WCAG AA; mobile all 9.8+.
- Owner name "Ralph" kept out of the H1 (per [[feedback_hh-painting-copy-personalization]]), used in CTA/body copy ("talk straight to Ralph, the owner").
- Verified: WCAG AA contrast passes light + dark, no horizontal scroll desktop/mobile, heading hierarchy clean, all form labels associated, all SVGs aria-hidden, LocalBusiness JSON-LD with no aggregateRating.

## Decisions (cont.)
- Netlify deploy showed a blank white hero (same failure H&H had) because the hero used a relative `assets/hero.jpg` path and the deploy only serves the single index.html. Fix (same as H&H): inline the hero as a base64 data URI directly in the `<img>` src. index.html is now ~293KB and fully self-contained (only external dep is Google Fonts). Standing rule for these demos: never reference a local image by relative path — inline every image as a data URI so a single-file deploy works.

## 2026-08-26 later — accuracy fixes before follow-up call
- Ralph's real number confirmed: (720) 309-4641 (tel:+17203094641). Replaced the (970) 555-0143 placeholder everywhere in demos/res-painting-drywall/index.html — 6 tel: hrefs, 1 sms: href, 9 visible spots, JSON-LD telephone, aria-labels. Removed the "phone number is a placeholder" line from the footer.
- Drywall scope trimmed for accuracy: only new-wall additions + texture/finish are confirmed. "What we do" went from 6 cards to 5 — dropped "Drywall Installation" and "Drywall Repair", added "New Wall Framing". Also updated the quote-form dropdown, JSON-LD description/knowsAbout, and meta description to match. "Drywall Repair" dropped entirely, not guessed.
- Live site: https://res-demo-site.netlify.app/ . NO git repo exists for this demo and Netlify CLI here isn't authed — deploy is manual drag-and-drop. Danny must re-upload index.html to Netlify for the redeploy.

## Standing next steps
- [ ] Confirm on call: full service scope, service-area towns, tenure, license/insurance status, then update demo copy.
- [ ] Demo has robots noindex — flip to index at launch.
- [ ] og:image still points to assets/hero.jpg (relative) — harmless (noindex demo) but fix if the folder isn't deployed.

# 2026-08-25 — Demo sites must be full multi-section builds, not a single hero mockup

## Decisions
- Standing template for every WeConvert demo going forward: reference is https://4js-painting-demo.netlify.app/ (the 4 J's Painting demo already in demos/4js-painting-service/). A demo must give the client something to scroll through, not one hero screen.
- Required sections, in order: (1) Header with trust badges (rating/review count, years in business, phone) (2) Hero — kicker + bold headline + subtext + dual CTA (call + text) (3) Services grid — real service names pulled from the business's actual directory listings (Yahoo/Google/BBB), one line each (4) Trust/Numbers section — ONLY confirmed, verifiable figures (rating, review count, years in business), with an explicit "reconfirm before publishing live" disclaimer (5) Service area section — real city/zip only, never a fabricated town list or street address (6) Placeholder gallery when there are no real job photos yet — sample color pairings or style directions, clearly labeled "not actual job photos," never faked before/afters (7) Quote/contact form section (name, phone, property address, service-type dropdown, notes) plus direct call/text, labeled as a non-connected presentation demo (8) Footer with business name, city/zip, phone.
- First caught on demos/hh-painting/ — first pass was a hero-only comparison page, corrected to match this template because "the client needs to know they are gonna get some good stuff."

## Next Steps
- [ ] Apply this section list by default to every new demo site (don't wait to be told it's too short).

# 2026-08-30 — Pricing corrected to $800, hybrid ads model confirmed, Sunday call session logged

## Decisions
- context.md and instructions.md were stale (still said $550 build fee, phased-not-hybrid ads model). Corrected both — real pricing is $800 one-time + $30/mo, ads now sell as a hybrid offer alongside Web Design (not gated behind 5 clients), currently in a 1-2 month free testbed on Hot & Cold Mechanical and NuWave before selling ads to paying clients.
- Lead sourcing no longer geographically range-limited near Longmont — now statewide Colorado for cold-call outreach (in-person walk-in demos still depend on driving distance).
- 4 J's Painting (Jose) — discounted to $700 (from $800) as a one-time relationship exception, tied to an explicit referral ask, since he's a priority relationship with multiple businesses. Real build will be multi-page (separate pages per service: interior, exterior, shutters, roofing, snow removal, landscaping) rather than the single-page demo structure.

## Signals
- Jose's last touch before today was Monday (demo + Hot & Cold Mechanical site sent as portfolio proof). Six days of silence broke the self-imposed 3-4 day follow-up rule. Sunday follow-up: called ~11:47am, no answer, left voicemail (demo/wife check-in + propose Zoom or in-person meet), followed with a text to (970) 909-0098 same message. Awaiting reply — priority redial if nothing by tomorrow.
- Restaurant walk-in idea (Longmont/Firestone/Frederick/Berthoud) was explored but shelved in favor of returning to the painting pipeline. Two solid restaurant leads flagged for a future pass: Old Philly Town (Frederick — broken https://www.oldphillytown.com, 404s on www/https, only bare http works) and Serrated Burger Bar (Frederick — brand new, no owned website, only delivery apps + Facebook).
- Full call log for today's fresh painting leads (Nathan Johnson's — dead number, Fort Collins Painting Consultants — permanently closed, Fort Collins Painting LLC — unclear identity, Fort Collins Infinitive Coatings — reached employee Manny, owner is Mike, callback needed) lives in the claude.ai Project at claude/8-30-cold-call-log-sunday.md — not duplicated here in full, check there for details.

## Data quality lesson
The raw lead-scrape CSV's website column is unreliable — several businesses called today (Double J Drywall & Painting, Greater Area Painting, AMC Painting, Foran Painting) actually have real websites the scrape missed. Verify with an actual search before handing off a call script, don't trust the CSV column alone.

## Next Steps
- [ ] Jose — redial/check text reply by tomorrow if no response tonight.
- [ ] Fort Collins Painting LLC — verify it's actually a painting business before running any pitch.
- [ ] Fort Collins Infinitive Coatings — redial tomorrow, ask for Mike by name directly (don't rely on Manny's relay).
- [ ] Humberto's Home Painting — needs a voicemail left (none left on first no-answer today).

<!-- New entries go above this line. Example entry shape:

# 2026-08-23 — [3-6 word summary]

## Signals
- What a prospect/client actually said, quoted where possible.

## Decisions
- What was decided, and why in one line.

## Numbers
- Metric: value / denominator.

## Objections & Friction
- What pushed back or slowed things down.

## Next Steps
- [ ] Concrete action, owner/date if known.

-->
