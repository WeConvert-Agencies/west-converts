# WeConvert site — design brief
Synthesized from two live-web research passes (see `agency-design-research.md`
and `trades-conversion-research.md` in this folder). Written 2026-09-11.

## 1. What this page is actually for
Not a lead-gen funnel. It is **credibility insurance for a live phone call** — when a
skeptical owner asks "do you even have a website?", this has to load fast on their phone
and read as unmistakably legitimate within about three seconds. Every decision below is
filtered through that.

Secondary job: a demo of the product. The site is itself the sales artifact — it has to be
the quality Danny is claiming to sell.

## 2. The audience, stated plainly
Owner-operators in painting / HVAC / roofing / plumbing across Northern Colorado. Hands-on,
frequently on mobile, frequently burned before. They are NOT enterprise SaaS buyers, and
the research is blunt about the difference:

- 71% of homeowners prefer contractors who post prices; 73% of trades customers prioritize
  upfront pricing. Hiding price behind a "discovery call" is on contractor red-flag lists.
- Their top objections, in order: locked-in contracts, agencies that go dark, paying for
  shared leads, not owning the site, long build times.
- "SEO" is a burned word — owners report paying $500–1,000/mo to firms with zero results.
- Caller patience is down to ~2.3 seconds, and 78% who hit voicemail call a competitor
  within two minutes.

## 3. The one real conflict, and how it was resolved
The brief described WeConvert as an "AI-run marketing agency." The conversion research says
do not put that on the page for this audience: ~50% of trades owners actively distrust AI,
65.5% fear it makes a business feel less personal, and unverified "AI-powered" claims are
now a top-3 reason B2B buyers abandon a vendor. It triggers the exact "I can't reach a
human" fear that is already objection #1.

**Resolution:** sell the consequence, not the mechanism.
- Hero leads with outcome + $800 + no contract + one week.
- "Why Us" explains the low price *structurally and honestly* — no office, no sales team,
  no account manager — which defuses the "$800 must be junk" read without an AI claim.
- AI stays prominent where it is a **product** (the AI Receptionist), not a trust claim
  about how the agency operates.
- Flagged to Danny as a reversible one-line decision.

## 4. Visual direction
Anchored on an entry already in Danny's own inspiration library — *Editorial-Serif Gradient
SaaS* — whose stated principle is exactly the 90/10 rule he asked for: "introduce a mesh
gradient gradually as a glow around one focal moment rather than flooding the whole page,"
and "return to plain white for information-dense sections so the gradient stays a special
moment, not wallpaper."

**Palette (all pairs WCAG-AA verified, light + dark):**
- Neutral: `#FFFFFF` / `#FAFAFA` / `#F4F4F6` surfaces, `#0E0F13` ink, `#63667A` muted.
- Accent: `#5B2BD9` → `#2F55D4` gradient. Used in exactly five places: one headline phrase,
  the primary CTA, the "Most Popular" border + glow, small icon/eyebrow accents, and the
  final CTA band glow. Nothing else.
- Measured neutral:accent ratio across the top agency sites was 95:5 or tighter. Ramotion
  runs 100:0. The brief's "10% purple" is already the loud end of the category.

**Type:** Instrument Sans (display) + Inter (body) + Instrument Serif italic (one accent
phrase). Letter-spacing ramps with size (−0.035em display → 0 body), uppercase eyebrows at
+0.08em — both lifted from measured production values on Clay and Ramotion.

**Motion:** split-duration reveals — opacity .35s, transform .7s, easeOutExpo
`cubic-bezier(.16,1,.3,1)`. Three independent top-tier sites animate opacity ~2× faster
than transform; the element is fully visible while still gliding, which reads as weight
rather than lag. Travel is 14px (modern sites are 8–15px, never over 40). Stagger is 30ms.
Card hover is a single translateY + shadow. Hero has three slow-drifting gradient blobs.
Everything is gated behind `prefers-reduced-motion`.

## 5. Page order (9 sections)
Hero (price in the subhead) → trust strip → services → process → why us + honest comparison
table + founder block → pricing → social proof (marked placeholder) → FAQ → final CTA → footer.

The real Hot & Cold Mechanical build sits directly under the hero in a browser frame. That
is the single strongest asset on the page: a real, named, local, multi-page client site,
and it doubles as the PREMIUM tier's proof.

## 6. Copy rules applied
- Headline formula: outcome + audience + geography + constraint.
- $800 appears in the first 15 words.
- Four objections killed in the first screen: price, contract, timeline, ownership.
- Primary CTA "See my demo site" — first-person, and uniquely true here since Danny really
  does build the demo before the call.
- Banned: "Get Started", "Learn More", "Submit", "Book a Free Consultation", "Request a
  Quote" — the last ones are what every agency that already cold-called them used.
- "Connected to your Google Business Profile" replaces "SEO".
- Towns named explicitly, not "Colorado".
- Three form fields only (name / phone / business). The 4th causes a sharp drop-off.
- $30/mo translated into their units: "$360 a year — one job pays for four years of it."

## 7. Hard constraints honored
- No fabricated stats, review counts, client counts, or tenure claims anywhere.
- No testimonial presented as real. Placeholders are visibly flagged in-page and in code.
- No AI-generated imagery (research: ~90% of consumers want AI-image disclosure; real photos
  beat stock ~35% on conversion).
- Single self-contained file; the one image is base64-inlined per the standing Netlify rule.
- WCAG AA verified numerically, not by eye.
