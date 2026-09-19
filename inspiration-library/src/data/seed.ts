import type { Inspiration } from "./types";

// Seed entries: each screenshot in /public/seed was analyzed by hand during
// development. These are the only entries that ship pre-analyzed — anything
// added later through the app UI starts as "Needs Analysis" until its
// fields are filled in (see src/lib/db.ts -> createBlankInspiration).

const DAY = 24 * 60 * 60 * 1000;
const NOW = Date.now();
// Stagger creation timestamps so "Newest/Oldest" sort has a real order.
const t = (i: number) => NOW - (20 - i) * DAY;

export const SEED_INSPIRATIONS: Inspiration[] = [
  {
    id: "seed-1405",
    title: "Vela Armon — Sculptural Architecture",
    imageSrc: "/seed/img_1405.jpg",
    imageStorage: "seed",
    primaryCategory: "premium-luxury",
    secondaryCategories: ["editorial-minimal"],
    description:
      "Architecture-firm homepage built around a single sculptural villa photograph, oversized lowercase wordmark, and a warm stone-and-terracotta accent color.",
    tags: ["architecture", "real estate", "lowercase type", "terracotta accent", "villa", "stats badges"],
    needsAnalysis: false,
    createdAt: t(1),
    updatedAt: t(1),
    analysis: {
      styleName: "Sculptural Lowercase Modernism",
      whatItIs:
        "A one-page architecture studio site where the hero photograph of a cantilevered villa does the selling and the type gets out of the way — except for one deliberate move: an oversized, all-lowercase wordmark laid directly over the roofline so the logotype reads as part of the architecture.",
      whyItWorks:
        "The lowercase display type feels confident rather than shouty, and letting it overlap the building's silhouette ties brand and product together in a single glance. Warm terracotta accents against cool dusk photography give the page one clear accent color instead of a rainbow of UI color, and floating stat badges (\"15 Years\", \"120 Homes\") add credibility without a cluttered stats dashboard.",
      vocabulary: {
        layout: "single dominant hero, asymmetric text-over-image overlay, generous full-bleed sections",
        composition: "large-scale typographic overlay anchored to the subject's roofline for visual unity",
        typography: "oversized lowercase display sans, wide letter-tracking on nav and eyebrow labels",
        color: "neutral stone/slate base with one warm terracotta/amber accent",
        contrast: "light wordmark against a mid-tone dusk sky for legibility without a solid scrim",
        spacing: "generous negative space around the wordmark; tight, chip-like spacing inside stat badges",
        shapes: "soft-rounded pill buttons and stat cards echoing the architecture's rounded corners",
        imagery: "professional dusk/twilight architectural photography with warm interior lighting",
        texture: "matte, clean render with subtle photographic grain — no heavy overlays",
        hierarchy: "wordmark first, then a single supporting line, then one clear CTA pill",
        interfaceStyle: "editorial marketing site, not app-like — minimal chrome, translucent top nav",
        motion: "implied subtle parallax on hero scroll; asterisk glyph used as a static brand motif",
      },
      keywords: [
        "architecture studio",
        "lowercase wordmark",
        "dusk photography",
        "terracotta accent",
        "pill CTA",
        "stat badges",
        "asymmetric hero",
        "editorial luxury",
        "cantilevered villa",
        "warm neutral palette",
        "wide letter-tracking",
        "full-bleed sections",
      ],
      layout: {
        header: "Transparent floating nav bar over the hero image, centered logo mark, uppercase tracked links",
        hero: "Full-bleed villa photo at dusk with an oversized lowercase two-line wordmark overlapping the roofline",
        hierarchy: "Wordmark → one-line supporting phrase → single 'Contact us' pill CTA with arrow icon",
        grid: "12-column desktop grid; content sections alternate full-bleed photo and centered text blocks",
        cta: "Rounded pill button, dark fill, small circular arrow icon breaking out of the pill's edge",
        imagePlacement: "Hero image full-bleed top; supporting images appear as smaller rounded-corner tiles beneath body copy",
        transitions: "Sections meet with soft rounded 'notch' cutouts rather than hard rectangular edges",
        footer: "Not visible in this crop, implied to continue the dark stone palette",
      },
      reusableElements: [
        "Oversized lowercase wordmark placed as a graphic element, not just a logo",
        "Floating stat badges layered on the hero image",
        "Rounded-corner section transitions instead of hard edges",
        "Single warm accent color against a neutral, photography-led palette",
      ],
      avoidCopying: [
        "The 'Vela Armon' name and exact logotype mark",
        "The specific villa photograph and its architecture (client-owned imagery)",
        "The exact stat numbers (15 years / 120 homes) — these are this studio's claims",
      ],
    },
    imagePromptFields: {
      subject: "A single-story modern villa with a dramatic cantilevered roof overlooking a coastal or mountain horizon at dusk",
      composition: "Wide establishing shot, low horizon line, the structure's roofline given room to breathe with negative sky above for headline text",
      colorPalette: "warm stone, sand, and terracotta tones against a cool dusk-blue sky",
      lighting: "golden-hour architectural lighting, warm interior glow visible through glass facades, soft ambient dusk sky",
      mood: "confident, calm, aspirational — quiet luxury rather than flashy wealth",
      texture: "clean matte concrete and glass surfaces, subtle natural grain from real photography, no artificial gloss",
      perspective: "eye-level to slightly low angle, wide-angle architectural lens, minimal distortion",
      renderStyle: "high-end architectural photography style (not illustration or 3D render)",
      placement: "full-bleed website hero background, image, with the upper third left open for an overlaid wordmark and the lower third open for a CTA button",
      aspectRatio: "16:9",
      negative: "no text, no logos, no watermarks, no legible signage, no people in the foreground, no brand names",
    },
    briefFields: {
      visualDirection:
        "Sculptural, quiet-luxury architecture brand. Oversized lowercase display type used as a graphic element over full-bleed dusk photography, one warm accent color, rounded-corner section transitions.",
      colorPalette: [
        { name: "Stone", hex: "#EDEAE4" },
        { name: "Charcoal Slate", hex: "#2B2E33" },
        { name: "Terracotta Accent", hex: "#C98A55" },
        { name: "Dusk Blue", hex: "#5B6B7C" },
      ],
      typography:
        "Oversized, all-lowercase display sans (e.g. a grotesk like Neue Montreal or General Sans at 120–200px) for the hero wordmark; a clean geometric sans for body copy at generous line-height; uppercase, wide-tracked micro-labels for nav and eyebrow text.",
      layoutSystem:
        "12-column grid, full-bleed hero image, alternating photo/text sections, rounded 24–40px corner radii on section breaks and cards, generous 96–160px vertical section padding on desktop.",
      heroDirection:
        "Full-bleed architectural or lifestyle photograph with the primary headline overlapping the subject rather than sitting in a plain text block. Floating translucent stat badges in a corner. One pill-shaped primary CTA.",
      sections: [
        "Hero with overlapping wordmark headline",
        "About / mission statement in oversized editorial type",
        "Services or offering grid",
        "Featured work / portfolio showcase",
        "Credentials or stats band",
        "Contact / consultation CTA",
        "Footer",
      ],
      ctaStyle:
        "Rounded pill buttons, solid dark fill on light backgrounds, with a small circular icon button (arrow) attached to the end of the pill.",
      cardStyle:
        "Soft-rounded cards (20–28px radius) with subtle shadow, used sparingly — mostly for stat badges and secondary content tiles, not overused as a grid pattern.",
      imageDirection:
        "Professional, warm-toned architectural or lifestyle photography at dusk/golden hour. Avoid stock-photo gloss; favor real materials, natural light, and a sense of scale.",
      mobileBehavior:
        "Stack the overlapping headline above the image instead of on top of it below ~768px to protect legibility; stat badges collapse into a horizontal scroll row or stack vertically; nav collapses to a single menu icon.",
      interactionIdeas:
        "Subtle parallax/scroll-fade on hero imagery; CTA pill's arrow icon nudges right on hover; section transitions use a soft cross-fade rather than a hard cut.",
      accessibility:
        "Ensure headline-over-image contrast meets WCAG AA (add a subtle gradient scrim behind text if needed); all interactive pills need visible focus rings; do not convey stats through color alone.",
      conversion:
        "Keep exactly one primary CTA per section; lead with the emotional hero before any pricing or process content; place a low-friction 'Contact us' pill directly in the hero, not just the footer.",
    },
  },

  {
    id: "seed-1406",
    title: "Glasshaven — Modern Living",
    imageSrc: "/seed/img_1406.jpg",
    imageStorage: "seed",
    primaryCategory: "dark-cinematic",
    secondaryCategories: ["premium-luxury"],
    description:
      "Dark-mode real-estate site for a single glass-walled house, built from stacked dark panel sections (services, floor plan) rather than a long scrolling photo story.",
    tags: ["real estate", "dark mode", "condensed type", "floor plan", "panel sections", "night photography"],
    needsAnalysis: false,
    createdAt: t(2),
    updatedAt: t(2),
    analysis: {
      styleName: "Panelled Dark-Mode Real Estate",
      whatItIs:
        "A property showcase built as a stack of distinct rounded dark 'panels' — a hero photo panel, a services panel, a floor-plan panel — rather than one continuous scroll, giving the page a modular, almost slide-deck feel.",
      whyItWorks:
        "Condensed heavyweight type reads as confident and modern at small sizes, and the near-black panel backgrounds make the twilight architectural photography and warm interior lighting pop without competing UI chrome. Numbering the services 01–04 and showing an actual dimensioned floor plan signals real substance behind the mood board.",
      vocabulary: {
        layout: "modular stacked panel sections with consistent corner radius, not a single continuous scroll",
        composition: "centered, symmetric hero type over an asymmetric architectural photo",
        typography: "condensed, heavy-weight uppercase sans for headings; light-weight labels for meta text",
        color: "near-black and deep slate panels with warm amber interior-light accents",
        contrast: "high contrast white type on near-black panels for a premium, cinematic feel",
        spacing: "tight internal panel padding with clear air between separate panel sections",
        shapes: "consistently rounded rectangle panels (large radius) used as the core structural unit",
        imagery: "twilight/night architectural photography with glowing interior lighting and reflections",
        texture: "clean digital dark surfaces, photographic grain only within the imagery itself",
        hierarchy: "wordmark-scale headline, then location tag, then numbered service list",
        interfaceStyle: "portfolio/showcase site with card-like modularity, dark theme throughout",
        motion: "not visible, but the panel structure implies snap-scroll or reveal-on-scroll sections",
      },
      keywords: [
        "dark mode real estate",
        "condensed uppercase type",
        "panel sections",
        "twilight photography",
        "numbered services",
        "floor plan diagram",
        "rounded dark cards",
        "cinematic lighting",
        "modular layout",
        "night architecture",
        "warm interior glow",
        "quebec modern house",
      ],
      layout: {
        header: "Minimal top-left handle/credit and top nav links inside the hero panel itself",
        hero: "Rounded dark panel containing a full-width night photo of a glass house with an oversized condensed headline overlaid",
        hierarchy: "Big condensed headline → location tag → 'OUR SERVICES' numbered grid → house plan with room-by-room area table",
        grid: "4-column numbered service grid (01–04) with square thumbnail photos above short labels",
        cta: "Understated — no loud button visible in this crop; the content itself is the pitch",
        imagePlacement: "One large hero photo, four small square service thumbnails, one large floor-plan diagram image",
        transitions: "Clear panel breaks with visible rounded top/bottom corners and background color shifts",
        footer: "Not shown in this crop",
      },
      reusableElements: [
        "Stacked rounded 'panel' sections as the core structural unit instead of a flat scroll",
        "Condensed heavy uppercase headline treatment",
        "Numbered 01–04 service grid with square photo + label",
        "Including a real dimensioned floor plan as content, not just glamour shots",
      ],
      avoidCopying: [
        "The 'Glasshaven' name and '@enor.designs' / '@glasshaven' handles",
        "The specific house photography and exact floor-plan dimensions",
        "The literal Quebec, Canada location claim",
      ],
    },
    imagePromptFields: {
      subject: "A modern glass-and-timber house glowing with warm interior light, photographed at night surrounded by dark trees",
      composition: "Centered architectural composition, symmetric framing, ample dark negative space above and below for overlaid headline type",
      colorPalette: "near-black and deep charcoal-blue exterior tones with warm amber-gold interior light",
      lighting: "night photography, warm practical interior lighting glowing through glass walls, minimal ambient moonlight",
      mood: "cinematic, private, exclusive, quietly dramatic",
      texture: "smooth glass and dark timber cladding, soft reflections on a still water feature",
      perspective: "slightly low, straight-on three-quarter view emphasizing the horizontal glass facade",
      renderStyle: "cinematic architectural night photography",
      placement: "full-width dark hero panel background, with a large safe zone at top for oversized condensed headline type",
      aspectRatio: "16:9",
      negative: "no text, no logos, no watermarks, no people, no daytime lighting, no brand names",
    },
    briefFields: {
      visualDirection:
        "Dark-mode, cinematic real-estate showcase built from modular rounded panels rather than a continuous scroll. Condensed heavy type, twilight photography, warm interior-light accents.",
      colorPalette: [
        { name: "Near Black", hex: "#14181C" },
        { name: "Deep Slate", hex: "#2A323B" },
        { name: "Warm Amber Glow", hex: "#E8A85C" },
        { name: "Off-White Text", hex: "#F4F4F2" },
      ],
      typography:
        "Condensed, heavy-weight uppercase sans (e.g. Archivo Condensed / Oswald) for headlines; a clean neutral sans for body and labels; generous letter-spacing on small uppercase meta labels.",
      layoutSystem:
        "Stacked rounded panels (32–40px radius) each with its own background tone, 24–32px gaps between panels, internal 48–64px padding, 4-column grid for numbered service tiles.",
      heroDirection:
        "Full-bleed night photograph inside the first rounded panel, oversized condensed headline centered or left-aligned over the image, small location/meta tag beneath.",
      sections: [
        "Hero panel with property name and tagline",
        "Numbered services/offerings grid (01–04)",
        "Floor plan / specifications panel",
        "Gallery or lifestyle imagery",
        "Contact or inquiry panel",
        "Footer",
      ],
      ctaStyle:
        "Understated ghost or outline buttons that don't fight the photography; when solid, use a single warm accent fill sparingly.",
      cardStyle:
        "Large rounded dark panels as macro-structure; small square photo tiles with numbered labels for services; a clean light-background card for the floor-plan diagram to contrast the dark theme.",
      imageDirection:
        "Twilight or night architectural photography with visible warm interior lighting; avoid daytime or overcast shots which lose the cinematic mood.",
      mobileBehavior:
        "Panels stack full-width with reduced padding; the 4-column service grid collapses to 2 columns then 1; floor-plan image scales down with a horizontal-scroll fallback for the area table.",
      interactionIdeas:
        "Panels reveal with a soft fade/rise on scroll; hovering a service tile lightens its background slightly; floor-plan rooms could highlight on hover with their area label.",
      accessibility:
        "Maintain AA contrast for white text on dark panels; don't rely on the amber accent alone to indicate interactive elements; provide text alternatives for the floor-plan diagram's room data.",
      conversion:
        "Follow the hero immediately with proof of substance (services, then real floor plan) before asking for contact — this builds credibility before the ask.",
    },
  },

  {
    id: "seed-1407",
    title: "Orizon — Property Finder App",
    imageSrc: "/seed/img_1407.jpg",
    imageStorage: "seed",
    primaryCategory: "soft-ui-glass",
    secondaryCategories: ["high-conversion"],
    description:
      "A property-search app UI shown as a floating frosted-glass device frame over a mountain photo, with organic blob-shaped panels replacing rectangular cards.",
    tags: ["real estate app", "glassmorphism", "blob shapes", "floating UI", "sidebar nav", "listing card"],
    needsAnalysis: false,
    createdAt: t(3),
    updatedAt: t(3),
    analysis: {
      styleName: "Frosted Blob-Glass Interface",
      whatItIs:
        "A property-finder app interface rendered as a single floating frosted-glass panel with deliberately organic, blob-like rounded corners — not the usual rectangle — sitting over a full-bleed mountain-and-villa photograph.",
      whyItWorks:
        "Breaking the rectangle with soft, irregular blob corners makes an otherwise ordinary listings UI feel distinctive and premium, while the translucent glass material lets the background photography carry the emotional weight. A left icon rail keeps navigation compact so the content area stays spacious, and one listing card is pulled forward with real detail (price, specs, social proof) to demonstrate the product rather than just implying it.",
      vocabulary: {
        layout: "floating centered app frame over a full-bleed background photo, icon rail + content pattern",
        composition: "organic asymmetric panel shape breaking a strict grid, layered translucent cards",
        typography: "large rounded-sans display headline, compact UI labels for filters and specs",
        color: "cool blue-white glass tones over a warm dusk mountain photo for contrast",
        contrast: "frosted light panels against a darker photographic background for legibility",
        spacing: "tight, functional spacing within UI chrome; generous breathing room around the whole floating frame",
        shapes: "intentionally irregular 'blob' rounded corners instead of uniform rectangles",
        imagery: "dreamlike architectural render blended with real mountain landscape photography",
        texture: "frosted/blurred glass (glassmorphism) with soft drop shadows for elevation",
        hierarchy: "headline → search filters → one hero listing card with full detail",
        interfaceStyle: "SaaS/consumer app UI mockup — icon sidebar, pill filters, floating cards",
        motion: "implied hover/press states on filter pills and the swipe/like icons",
      },
      keywords: [
        "glassmorphism",
        "blob UI shape",
        "property finder app",
        "frosted glass panel",
        "icon rail navigation",
        "floating listing card",
        "search filters",
        "dusk mountain background",
        "organic corners",
        "app mockup",
        "social proof icons",
        "translucent overlay",
      ],
      layout: {
        header: "Top filter bar with Buy/Rent toggle pills and dropdown filters for location, type, price",
        hero: "Large centered headline 'New Way Of Living' inside the glass frame over the mountain photo",
        hierarchy: "Headline + supporting copy → property stats badge (10K+ properties) → detailed listing card",
        grid: "Loose asymmetric composition rather than a strict column grid — panels overlap intentionally",
        cta: "Rounded pill buttons ('Buy', 'Rent') and a circular arrow icon button on the listing card",
        imagePlacement: "One large background photo/render; a smaller inset property photo within the listing card",
        transitions: "Panels blend into each other via blur and overlap rather than hard edges",
        footer: "Not shown — this is a scrollable app screen crop, not a marketing page",
      },
      reusableElements: [
        "Icon-only left sidebar rail for primary navigation",
        "Frosted glassmorphism panel material over photography",
        "Breaking rectangular cards with one organic/blob-shaped exception for visual interest",
        "A single 'hero' listing card that surfaces full detail (price, specs, likes) instead of a generic teaser",
      ],
      avoidCopying: [
        "The 'Orizon Design' branding, logo mark, and Instagram/Behance-style watermark",
        "The specific surreal architectural render (client/portfolio-owned visual)",
        "The exact copy ('Lunar Oasis Villa', '1874 Forest Haven Rd')",
      ],
    },
    imagePromptFields: {
      subject: "A dreamlike, softly organic modern villa with curved architectural forms nestled into a desert or mountain landscape at dusk",
      composition: "Wide atmospheric shot with the structure's fluid, rounded lines taking up the lower two-thirds, open sky above for UI overlay",
      colorPalette: "cool dusk blues and lavender in the sky, warm amber interior light glowing from the structure",
      lighting: "golden hour transitioning to blue hour, warm interior light contrasting cool ambient exterior light",
      mood: "futuristic, serene, aspirational, slightly surreal",
      texture: "smooth curved architectural surfaces, soft atmospheric haze, fine desert or alpine ground texture",
      perspective: "wide-angle, slightly elevated three-quarter view",
      renderStyle: "photorealistic 3D architectural render with a soft, dreamlike finish",
      placement: "full-bleed background image behind a floating glassmorphism app UI panel — keep the center-left open for headline text and center-right open for a card",
      aspectRatio: "4:5",
      negative: "no text, no logos, no watermarks, no UI elements baked into the image, no people",
    },
    briefFields: {
      visualDirection:
        "Glassmorphic app interface with intentionally organic, blob-shaped panel corners floating over rich atmospheric photography or render. Feels premium, futuristic, and tactile.",
      colorPalette: [
        { name: "Frosted White", hex: "#F3F5F9" },
        { name: "Deep Indigo", hex: "#241E3D" },
        { name: "Dusk Lavender", hex: "#8B9BC7" },
        { name: "Warm Amber", hex: "#E8A860" },
      ],
      typography:
        "Rounded geometric sans for display headlines (e.g. Poppins/Outfit) at large sizes with soft weight contrast; compact UI sans (Inter) for filters, labels, and card metadata.",
      layoutSystem:
        "Centered floating app frame, max-width ~1200px, irregular/blob border-radius (mix of large and small corner values) on the primary panel, 8px-based spacing scale inside UI chrome.",
      heroDirection:
        "Full-bleed atmospheric background image or render behind a frosted glass panel; headline sits directly on the glass, with a search/filter bar as the first interactive element.",
      sections: [
        "Hero search panel with headline and filters",
        "Featured/hero listing card",
        "Category or property-type browser",
        "Stats or trust band (properties listed, users)",
        "Testimonial or social proof",
        "Footer/CTA to download or sign up",
      ],
      ctaStyle:
        "Pill-shaped buttons with soft fills or frosted-glass backgrounds; circular icon buttons for secondary actions (arrow, heart, share) with subtle elevation shadows.",
      cardStyle:
        "Frosted/translucent glass cards with backdrop blur, soft shadow for elevation, and at least one card given an organic 'blob' corner treatment to break monotony.",
      imageDirection:
        "Atmospheric, slightly surreal architectural or lifestyle photography/renders with warm-cool color contrast; avoid flat, evenly-lit stock photography.",
      mobileBehavior:
        "Collapse the icon sidebar into a bottom tab bar; stack filter pills into a horizontal scroll row; the hero listing card becomes full-width and swipeable.",
      interactionIdeas:
        "Glass panels gain a subtle blur/brightness shift on hover; filter pills animate a soft scale-in on selection; listing cards support swipe gestures on mobile.",
      accessibility:
        "Frosted glass text needs a tested contrast fallback (add a scrim if under AA); icon-only sidebar buttons require aria-labels; blob shapes must not clip focus outlines.",
      conversion:
        "Surface one fully-detailed listing above the fold as social proof of the product's quality, and keep Buy/Rent as the single most prominent action pair.",
    },
  },

  {
    id: "seed-1408",
    title: "Icelend — Discover Tours",
    imageSrc: "/seed/img_1408.jpg",
    imageStorage: "seed",
    primaryCategory: "soft-ui-glass",
    secondaryCategories: ["dark-cinematic"],
    description:
      "A split-screen travel hero: one half a frosted, semi-legible glass panel with the destination name blurred behind it, the other half sharp landscape photography with clean outline type.",
    tags: ["travel", "glassmorphism", "split screen", "blurred panel", "outline typography", "landscape photography"],
    needsAnalysis: false,
    createdAt: t(4),
    updatedAt: t(4),
    analysis: {
      styleName: "Split Focus-Blur Travel Hero",
      whatItIs:
        "A destination-marketing hero split down the middle: the left half is a frosted glass panel where the same landscape photo is heavily blurred behind muted type, and the right half is the identical photo left completely sharp with clean outline lettering — literally illustrating 'discover' by moving from blur to clarity.",
      whyItWorks:
        "Using one photograph twice, at two different focus levels, is a simple trick that creates instant visual rhythm and a sense of before/after discovery without needing two different images. Thin outline type on the sharp side keeps the landscape as the real subject, while the frosted side hosts all the UI chrome (nav, socials, carousel controls) so it never fights the photography.",
      vocabulary: {
        layout: "50/50 split-screen hero, one photo used twice at different blur levels",
        composition: "left = UI/content zone, right = pure photography zone, divided by a soft vertical seam",
        typography: "thin outline/stroke display type on the photo side, softer filled type on the glass side",
        color: "muted natural greens and blues from the mountain landscape, no added brand color",
        contrast: "low-contrast blurred type on the left vs. high-contrast sharp landscape on the right",
        spacing: "compact utility spacing for nav/social icons, generous open space for the outline headline",
        shapes: "clean rectangular split, no rounded corners — this is a full-bleed editorial layout",
        imagery: "single landscape photograph reused at two focus levels within the same hero",
        texture: "heavy gaussian blur/frost on one half against tack-sharp detail on the other",
        hierarchy: "destination name (split across both halves) → short pitch copy → carousel/CTA",
        interfaceStyle: "travel marketing site with minimal nav and a slide-counter/carousel pattern",
        motion: "implied carousel dots and arrow controls suggest slide transitions between destinations",
      },
      keywords: [
        "split screen hero",
        "glassmorphism blur",
        "outline typography",
        "landscape photography",
        "focus contrast",
        "travel destination site",
        "carousel dots",
        "minimal nav",
        "dual-use photography",
        "iceland volcanic landscape",
        "thin stroke type",
        "editorial travel",
      ],
      layout: {
        header: "Split nav: social/follow icons on the blurred left, main destination links on the sharp right",
        hero: "One landscape image shown blurred-left / sharp-right with the destination name split across the seam",
        hierarchy: "Split wordmark → short descriptive paragraph on the blurred side → 'View all trips' link with arrow",
        grid: "Simple two-column 50/50 split, no complex grid needed",
        cta: "Understated text link with an arrow icon rather than a filled button",
        imagePlacement: "Single photo spans the entire hero, doing double duty as both background textures",
        transitions: "Numbered slide indicator (01/02/03/04) implies a horizontal carousel between destinations",
        footer: "Not shown in this crop",
      },
      reusableElements: [
        "Reusing one photograph at two blur levels to create a split hero without sourcing a second image",
        "Thin outline display type paired with heavily blurred UI-hosting glass panels",
        "Numbered slide counter as a lightweight carousel indicator",
      ],
      avoidCopying: [
        "The literal 'Iceland' destination framing and split wordmark treatment",
        "The specific landscape photograph",
        "The exact copy about waterfalls, volcanoes, and black-sand beaches",
      ],
    },
    imagePromptFields: {
      subject: "A dramatic volcanic mountain landscape with a still glacial lake reflecting green moss-covered peaks",
      composition: "Wide panoramic composition with the lake and mountains centered, even balance of land and sky for a split-treatment hero",
      colorPalette: "muted moss green, slate grey, and cool glacial blue",
      lighting: "soft overcast diffused daylight, low contrast, misty atmosphere",
      mood: "remote, contemplative, quietly epic",
      texture: "rugged volcanic rock and soft moss texture, still reflective water surface",
      perspective: "elevated wide-angle landscape view, horizon roughly centered",
      renderStyle: "editorial landscape photography, natural and unretouched in feel",
      placement: "full-bleed hero background intended to be duplicated and treated two ways: sharp on one half, heavily blurred behind text on the other",
      aspectRatio: "21:9",
      negative: "no text, no logos, no watermarks, no people, no man-made structures",
    },
    briefFields: {
      visualDirection:
        "Editorial travel hero built on a single striking landscape photo split into a sharp half and a frosted/blurred half, with outline typography over the sharp side.",
      colorPalette: [
        { name: "Moss Green", hex: "#6B7A5E" },
        { name: "Glacial Blue-Grey", hex: "#8FA3AC" },
        { name: "Volcanic Charcoal", hex: "#2E2E2C" },
        { name: "Frost White", hex: "#F2F1EC" },
      ],
      typography:
        "Thin-weight outline/stroke display sans for the hero wordmark (large scale, letter-spaced), paired with a light-weight humanist sans for body copy on the blurred side.",
      layoutSystem:
        "50/50 split-screen hero at desktop, stacking to a single column with the sharp image on top at mobile; simple two-column grid, no card-heavy structure needed.",
      heroDirection:
        "Use one strong landscape photo twice — sharp on one half for atmosphere, heavily blurred on the other as a backdrop for nav, copy, and CTA — with a destination name split visually across the seam.",
      sections: [
        "Split hero with destination intro",
        "Trip highlights / reasons to visit",
        "Featured tour or itinerary card",
        "About / trust section",
        "Popular tours grid",
        "Booking request form",
        "Footer",
      ],
      ctaStyle:
        "Understated text links with a thin arrow icon for primary navigation; one solid rounded button reserved for the main booking action.",
      cardStyle:
        "Minimal bordered cards on the blurred/glass side for trip details; keep the sharp photography side free of cards entirely.",
      imageDirection:
        "Single strong landscape photographs, reused at varying blur levels rather than sourcing many separate images — keeps visual cohesion high with less asset production.",
      mobileBehavior:
        "Stack the split into sharp-image-on-top, blurred-content-below; carousel indicator becomes a swipeable dot pagination; nav collapses to a hamburger.",
      interactionIdeas:
        "Horizontal swipe/carousel between destination slides; subtle parallax on the sharp-image half; slide counter animates as the user progresses.",
      accessibility:
        "Ensure the blurred-panel text has sufficient contrast against the frosted background (test at actual blur radius); carousel controls need keyboard and screen-reader support, not just arrow icons.",
      conversion:
        "Keep the single 'View all trips' or 'Book now' action visually distinct from social/nav icons so it isn't lost among the minimal chrome.",
    },
  },

  {
    id: "seed-1409",
    title: "BloomFi — Where Money Grows",
    imageSrc: "/seed/img_1409.jpg",
    imageStorage: "seed",
    primaryCategory: "playful-3d-product",
    secondaryCategories: ["premium-luxury"],
    description:
      "A fintech/crypto landing page that replaces cold, technical stablecoin imagery with soft 3D coin renders nestled in lavender wildflowers — 'money that grows' made literal.",
    tags: ["fintech", "crypto", "3D render", "lavender palette", "botanical metaphor", "dark navy cards"],
    needsAnalysis: false,
    createdAt: t(5),
    updatedAt: t(5),
    analysis: {
      styleName: "Botanical Fintech Surrealism",
      whatItIs:
        "A stablecoin/DeFi landing page that trades the category's usual dark, technical, chart-heavy visual language for a soft, almost cosmetics-brand palette — glossy 3D coins and a miniature Greek-temple 'bank' rendered in pale lavender, sitting inside real flowering shrubs.",
      whyItWorks:
        "Literalizing the headline 'Where Money Grows' with an actual growing/blooming visual makes an abstract financial product feel tangible and calming instead of intimidating, which is a smart differentiation move in a category dominated by dark, jargon-heavy design. Deep navy cards for the trust-building copy ('always liquid', '100% hands-free') give the page just enough gravity to still read as a serious financial product.",
      vocabulary: {
        layout: "centered hero with symmetric flanking product renders, followed by a 3-card benefit row",
        composition: "product-as-hero: 3D renders are the visual subject, not supporting decoration",
        typography: "clean rounded-serif-adjacent display type, friendly rather than technical",
        color: "soft lavender and periwinkle with deep navy/eggplant contrast cards",
        contrast: "pale product renders against a light background, flipped to light text on dark cards for section 2",
        spacing: "airy hero spacing; tighter, structured spacing in the benefit-card row",
        shapes: "smooth glossy rounded coin forms and softly rounded card corners throughout",
        imagery: "custom 3D renders (coins, a temple/bank) integrated into real macro flower photography",
        texture: "glossy, reflective 3D render surfaces against soft, matte botanical texture",
        hierarchy: "headline → one-line product description → single CTA → trio of trust benefits",
        interfaceStyle: "marketing/landing page for a fintech product, not an app dashboard",
        motion: "not visible, but the glossy render style implies subtle reflection/rotation animation potential",
      },
      keywords: [
        "fintech landing page",
        "3D coin render",
        "botanical metaphor",
        "lavender palette",
        "stablecoin branding",
        "soft luxury fintech",
        "glossy render",
        "trust benefit cards",
        "greek temple icon",
        "crypto without dark mode",
        "growth visual metaphor",
        "pastel finance",
      ],
      layout: {
        header: "Simple horizontal nav with logo left, product links center, single dark 'Launch BETA' button right",
        hero: "Centered headline and subhead over a wide photo of lavender flowers with two glossy coin renders emerging from the foliage",
        hierarchy: "'Where Money Grows' headline → subhead → CTA → 'What is X' section → 3-card benefit row → logo trust bar → use cases",
        grid: "3-column benefit card row (1 light + 2 dark cards) beneath a 2-column 'what is it' intro",
        cta: "Solid dark pill button for primary action; ghost/outline pill for secondary 'Explore now'",
        imagePlacement: "Large photographic/render hero image, plus smaller supporting product renders inside benefit cards",
        transitions: "Clean flat section breaks on a light neutral background, no overlap or scrim effects",
        footer: "Not shown, but implied to continue the light background with a partner-logo trust bar already visible",
      },
      reusableElements: [
        "Using a literal visual metaphor (growth = flowers) to soften a technical/financial product category",
        "Mixing one light hero card with two dark benefit cards in the same row for rhythm",
        "Custom glossy 3D renders as the primary hero visual instead of screenshots or stock photography",
        "A trust logo bar directly beneath the benefit row to build credibility early",
      ],
      avoidCopying: [
        "The 'BloomFi' / 'USD Bloom' name, logo mark, and specific token branding",
        "The exact partner/investor logos shown in the trust bar",
        "The specific 3D temple and coin render assets",
      ],
    },
    imagePromptFields: {
      subject: "Glossy, softly reflective abstract 3D coin or sphere forms in pale lavender and pearl tones, emerging from a bed of blooming lavender-colored wildflowers",
      composition: "Centered symmetric arrangement with flowers filling the lower two-thirds and clear open sky/negative space in the upper third for headline text",
      colorPalette: "soft lavender, periwinkle, pearl white, with a single deep navy or eggplant accent",
      lighting: "soft diffused studio-like lighting with gentle specular highlights on the glossy 3D forms",
      mood: "calm, optimistic, gently luxurious, approachable rather than technical",
      texture: "smooth glossy render surfaces contrasted with soft matte botanical detail",
      perspective: "eye-level, centered, slightly macro on the foreground flowers",
      renderStyle: "hybrid of photorealistic 3D product render and macro floral photography",
      placement: "full-width website hero banner, with generous open negative space at top for a headline and centered CTA button",
      aspectRatio: "16:9",
      negative: "no text, no logos, no watermarks, no readable branding, no currency symbols, no charts or graphs",
    },
    briefFields: {
      visualDirection:
        "A fintech brand that replaces dark, technical crypto visuals with a soft, botanical, almost cosmetics-brand aesthetic — glossy 3D product renders growing out of real flowers, paired with confident but calm copy.",
      colorPalette: [
        { name: "Soft Lavender", hex: "#C7C3E8" },
        { name: "Periwinkle", hex: "#8B87C4" },
        { name: "Deep Navy Eggplant", hex: "#211B36" },
        { name: "Pearl White", hex: "#F6F5FA" },
      ],
      typography:
        "A warm, slightly rounded grotesk (e.g. General Sans, Aeonik) for headlines at 48–64px, regular weight for a calm rather than aggressive tone; consistent sizing for body copy with generous 1.6 line-height.",
      layoutSystem:
        "Centered single-column hero, max-width ~1100px; 3-column benefit-card grid beneath with one light + two dark cards for rhythm; 24px base spacing unit, 16–20px card radius.",
      heroDirection:
        "Centered headline and one-sentence subhead over a soft, custom hero visual (illustration, 3D render, or photography) that turns the core value proposition into a literal, calming image rather than an abstract graphic.",
      sections: [
        "Hero with headline, subhead, and primary CTA",
        "Product explainer (\"What is [PRODUCT]?\")",
        "Three-card benefit row",
        "Trust/partner logo bar",
        "Use cases split by audience",
        "Secondary CTA / business section",
        "Footer",
      ],
      ctaStyle:
        "Solid dark pill buttons for the primary action, paired with a lighter ghost/outline pill for secondary actions — always rounded, never sharp-cornered.",
      cardStyle:
        "Rounded cards (16–24px radius) alternating light and dark backgrounds within the same row to avoid monotony, each with a short headline, one supporting sentence, and a small icon or render.",
      imageDirection:
        "Custom soft 3D renders or illustrations that turn the abstract product benefit into a literal, calming visual metaphor; avoid stock photography of laptops, charts, or generic 'business people'.",
      mobileBehavior:
        "Hero image scales down but keeps its centered composition; the 3-card benefit row stacks to a single column; trust logo bar becomes a horizontal scroll strip.",
      interactionIdeas:
        "Subtle floating/bobbing animation on the 3D hero renders; benefit cards lift slightly on hover; CTA buttons have a soft scale/darken on hover, not an abrupt color swap.",
      accessibility:
        "Verify light-lavender-on-white text meets AA contrast (it likely needs darkening); dark cards need sufficiently light text; don't rely on card color alone (light vs dark) to convey meaning.",
      conversion:
        "Lead with the emotional/differentiating visual before any technical explanation; keep exactly one primary CTA in the hero and repeat it contextually in later sections rather than introducing new competing actions.",
    },
  },

  {
    id: "seed-1410",
    title: "Travel — Plan Your Experience",
    imageSrc: "/seed/img_1410.jpg",
    imageStorage: "seed",
    primaryCategory: "dark-cinematic",
    secondaryCategories: ["high-conversion"],
    description:
      "A dense, dark-toned travel-agency homepage: starfield night hero, then a stacked feed of tours, reviews, and a booking form — built for information density more than minimalism.",
    tags: ["travel agency", "dark theme", "night sky hero", "tour cards", "reviews carousel", "booking form"],
    needsAnalysis: false,
    createdAt: t(6),
    updatedAt: t(6),
    analysis: {
      styleName: "Dense Dark-Mode Travel Portal",
      whatItIs:
        "A full-featured travel agency homepage — night-sky hero, destination quick-picks, a 'trip of the dream' itinerary card, a photo-and-stats about section, popular tours, reviews, and a booking form — all unified by a single dark, moody color treatment rather than by minimal restraint.",
      whyItWorks:
        "Committing to one consistent dark, desaturated-teal treatment across many different content types (cards, stats, forms, carousels) keeps a genuinely dense page feeling cohesive instead of chaotic. A bright cyan accent used only for buttons and headings gives the eye a single reliable place to look for 'what to click next' across a long page.",
      vocabulary: {
        layout: "long vertical stack of distinct full-width content modules, each dark-themed but visually varied",
        composition: "hero uses a widescreen starfield/mountain photo; lower sections use smaller framed photo cards",
        typography: "bold letter-spaced uppercase display type for the hero wordmark, simpler sans for body sections",
        color: "near-black and deep teal backgrounds with a single bright cyan accent",
        contrast: "high-contrast white/cyan text on dark backgrounds throughout for a moody but legible feel",
        spacing: "moderately tight vertical rhythm to accommodate many sections without excessive page length",
        shapes: "small rounded-corner tags for destination pickers and rounded pill CTA buttons",
        imagery: "a mix of night sky, waterfall, sailing, and mountain photography spanning many outdoor tour types",
        texture: "photographic and slightly grainy/moody in the hero, cleaner and flatter in lower content cards",
        hierarchy: "hero wordmark → destination quick-select → featured trip → about → why-us → tours → reviews → form",
        interfaceStyle: "content-heavy agency marketing site with e-commerce-like tour cards and a lead-gen form",
        motion: "implied carousel for tours and reviews (visible partial cards at the edges)",
      },
      keywords: [
        "travel agency website",
        "dark mode hero",
        "starfield night photo",
        "cyan accent color",
        "destination picker tags",
        "tour card carousel",
        "reviews carousel",
        "booking lead form",
        "uppercase letter-spaced wordmark",
        "stats row",
        "dense content stack",
        "outdoor adventure photography",
      ],
      layout: {
        header: "Simple top nav (Home/About/Hot tours/Contact) with a solid dark 'Book now' button",
        hero: "Full-width night-sky mountain photo with a huge letter-spaced 'TRAVEL' wordmark and three destination quick-pick tags",
        hierarchy: "Wordmark → destination tags → featured itinerary card → about stats → why-us highlight → popular tours → reviews → contact form",
        grid: "4-across tour card grid; 2-column about section (photo + stat/text panel)",
        cta: "Solid cyan pill buttons ('Book now', 'Book a tour', 'Send') used consistently for every primary action",
        imagePlacement: "Full-bleed hero photo; medium framed photos for about/why-us; small square photos for tour cards and reviews",
        transitions: "Sections separated mainly by subtle background tone shifts rather than hard dividers",
        footer: "Contact/request form doubles as the page's closing section",
      },
      reusableElements: [
        "One consistent dark palette with a single bright accent color used only for CTAs and key numbers",
        "Destination quick-pick tags directly in the hero for fast wayfinding",
        "Stat row (tours/years/members/reviews) as lightweight social proof without a heavy analytics-style dashboard",
        "Reviews shown as a carousel with a large photo, not just a text quote block",
      ],
      avoidCopying: [
        "The specific tour names, prices, and itinerary details (e.g. Hobbiton, Milford Sound)",
        "The exact customer review content and reviewer photo",
        "The literal New Zealand destination focus if not relevant to the new brief",
      ],
    },
    imagePromptFields: {
      subject: "A dramatic mountain silhouette beneath a clear starry night sky with a soft moonrise glow on the horizon",
      composition: "Wide letterboxed composition, mountains occupying the lower third, expansive starry sky filling the upper two-thirds for headline space",
      colorPalette: "deep near-black navy sky with subtle warm moonrise glow and cool star highlights",
      lighting: "night photography, long-exposure style star visibility, soft warm glow at the horizon line",
      mood: "adventurous, vast, quietly thrilling, wanderlust-inducing",
      texture: "smooth gradient night sky with fine star detail, textured mountain silhouette",
      perspective: "wide-angle landscape view, low horizon line",
      renderStyle: "long-exposure night landscape photography",
      placement: "full-bleed website hero background with the upper two-thirds left open for an oversized wordmark and destination-picker UI",
      aspectRatio: "16:9",
      negative: "no text, no logos, no watermarks, no people, no light pollution or artificial structures",
    },
    briefFields: {
      visualDirection:
        "A dense, content-rich travel-agency site unified by one consistent dark, moody color treatment with a single bright accent color, keeping many different modules (cards, forms, carousels) feeling cohesive.",
      colorPalette: [
        { name: "Near Black", hex: "#0E1416" },
        { name: "Deep Teal", hex: "#16333A" },
        { name: "Bright Cyan Accent", hex: "#3FD0E0" },
        { name: "Warm Moonrise Glow", hex: "#E8C68A" },
      ],
      typography:
        "Bold, letter-spaced uppercase display sans for the hero wordmark and section titles; a clean readable sans (e.g. Inter) for body copy and card text at 15–16px.",
      layoutSystem:
        "Full-width stacked sections, no side margins on hero imagery; 4-column tour card grid collapsing to 2 then 1; consistent 12–16px card radius; 64–96px vertical rhythm between major sections.",
      heroDirection:
        "Full-bleed atmospheric night or golden-hour landscape photo with an oversized letter-spaced wordmark and 2–3 quick destination-picker tags directly beneath it for immediate engagement.",
      sections: [
        "Hero with destination quick-picks",
        "Featured trip / itinerary spotlight",
        "About with stats (trips, years, members, reviews)",
        "Why-us highlight with a signature experience",
        "Popular tours grid",
        "Reviews carousel",
        "Contact / booking request form",
        "Footer",
      ],
      ctaStyle:
        "One consistent solid pill-button style in the single bright accent color, used identically for every primary action across the entire page so users always recognize what's clickable.",
      cardStyle:
        "Dark, subtly-bordered rounded cards with a photo, short title, and one line of detail; tour cards include a price and hover-reveal arrow icon.",
      imageDirection:
        "Moody, adventurous outdoor photography (mountains, water, forests) with consistent color grading toward teal/dark tones so many different photos still feel like one brand.",
      mobileBehavior:
        "Destination tags scroll horizontally; tour and review carousels become swipeable; stats row wraps to 2x2; booking form fields stack full-width.",
      interactionIdeas:
        "Carousel arrows/dots for tours and reviews; tour cards reveal an arrow-button on hover; form fields get an accent underline on focus.",
      accessibility:
        "Cyan-on-dark accent text must be checked for AA contrast at smaller sizes; carousels need visible, keyboard-operable prev/next controls, not swipe-only; form labels must remain visible (not placeholder-only).",
      conversion:
        "Keep the visual accent color reserved exclusively for actions (never decoration) so it trains the eye; place a low-friction quick-pick directly in the hero rather than making users scroll to start planning.",
    },
  },

  {
    id: "seed-1411",
    title: "AroundMe — St. Maurice",
    imageSrc: "/seed/img_1411.jpg",
    imageStorage: "seed",
    primaryCategory: "editorial-minimal",
    secondaryCategories: ["premium-luxury"],
    description:
      "A restrained, editorial destination-guide page for an alpine resort town, with generous white space, a big serifless headline over a mountain photo, and a genuine interactive map module.",
    tags: ["destination guide", "editorial", "white space", "alpine photography", "map module", "content cards"],
    needsAnalysis: false,
    createdAt: t(7),
    updatedAt: t(7),
    analysis: {
      styleName: "Editorial Alpine Travel Guide",
      whatItIs:
        "A quiet, magazine-style destination guide that lets a single dramatic alpine photograph and a lot of white space carry the page, with body copy treated like real travel journalism rather than marketing blurbs.",
      whyItWorks:
        "The restraint is the point: white space around a short, confident headline reads as editorial authority rather than a hard sell, and pairing that calm layout with an actual interactive map (zoom controls, pin markers) gives the page real utility instead of only mood. A simple black 'ABOUT' tag and understated blue CTA keep the UI from ever competing with the photography.",
      vocabulary: {
        layout: "generous white-space sections alternating with full-bleed photo breaks",
        composition: "left-aligned text blocks paired with a single supporting photo, classic editorial two-column rhythm",
        typography: "large clean sans headline, small black uppercase category tag, readable serif-free body copy",
        color: "neutral white/grey base with natural photography color and one soft blue CTA accent",
        contrast: "moderate — text is dark-on-white rather than the high-drama white-on-photo of the hero",
        spacing: "wide margins and generous line-height throughout, true editorial breathing room",
        shapes: "simple rectangular photo crops, small rounded map control buttons",
        imagery: "large-format alpine mountain photography, both static hero shots and an interactive map view",
        texture: "clean and photographic, no overlays, filters, or added grain",
        hierarchy: "location eyebrow → destination name → short editorial intro → map → entertainment listing grid",
        interfaceStyle: "content/publishing site with light functional UI (search, favorites, map controls)",
        motion: "not visible, but map zoom/pan and carousel arrows imply light interactivity",
      },
      keywords: [
        "editorial travel guide",
        "white space layout",
        "alpine photography",
        "interactive map module",
        "black category tag",
        "minimal destination site",
        "left-aligned text block",
        "clean sans headline",
        "content card grid",
        "resort town guide",
        "understated CTA",
        "magazine-style travel",
      ],
      layout: {
        header: "Simple top nav (Our News, Favorites, Contact) with a search icon, trips counter, and menu button",
        hero: "Full-bleed alpine mountain photo with a black category eyebrow and large destination name overlaid at lower-left",
        hierarchy: "Destination name → short 'About' intro paragraph → interactive map → entertainment/activity card grid",
        grid: "2-column about section (text + photo); 4-column activity card grid below the map",
        cta: "Simple pill button with an arrow ('Book a tour'), soft blue fill, low visual weight relative to photography",
        imagePlacement: "Full-bleed hero photo, a large supporting photo in the About section, an interactive map, and small square activity thumbnails",
        transitions: "Clean white-to-photo-to-white section breaks with no overlap effects",
        footer: "Pagination control (01...06) suggests this guide continues across multiple destination pages",
      },
      reusableElements: [
        "Black pill 'category tag' used consistently to label sections (ABOUT, ENTERTAINMENT)",
        "Pairing a real interactive map module with editorial content, not just a static photo",
        "Generous white space and left-aligned text blocks for an editorial, trustworthy tone",
        "Numbered pagination footer for a series/guide format",
      ],
      avoidCopying: [
        "The 'AroundMe' brand name and specific 'St. Maurice' destination content",
        "The exact activity listings and star ratings shown",
        "The specific photography of St. Moritz/St. Maurice",
      ],
    },
    imagePromptFields: {
      subject: "A dramatic snow-covered alpine mountain peak rising above a layer of soft clouds, with a smaller sunlit ridge in the foreground",
      composition: "Wide landscape composition, mountain peak slightly off-center, generous open sky and cloud space in the lower third for text overlay",
      colorPalette: "cool whites, pale blue-greys, and soft natural stone tones",
      lighting: "bright, clear daylight with soft directional sun creating gentle shadow definition on the peaks",
      mood: "crisp, serene, quietly grand, trustworthy",
      texture: "sharp rocky mountain detail contrasted with soft, diffuse cloud texture",
      perspective: "elevated wide-angle view, eye-level with the peak",
      renderStyle: "high-resolution editorial landscape photography",
      placement: "full-bleed hero image for a destination guide page, with lower-left space reserved for a category tag and destination name",
      aspectRatio: "16:9",
      negative: "no text, no logos, no watermarks, no people, no buildings or infrastructure",
    },
    briefFields: {
      visualDirection:
        "A restrained, editorial destination-guide aesthetic: large-format photography, generous white space, left-aligned text blocks, and a black pill category tag as the only strong graphic accent.",
      colorPalette: [
        { name: "Editorial White", hex: "#FAFAF8" },
        { name: "Ink Black", hex: "#1A1A1A" },
        { name: "Soft Slate Grey", hex: "#8C9096" },
        { name: "Muted Blue Accent", hex: "#8FB6D9" },
      ],
      typography:
        "A clean, confident grotesk sans (e.g. Neue Haas, Suisse) for headlines at 40–56px, regular weight body copy at 16–17px with 1.7 line-height for an editorial reading feel; small uppercase tracked labels for category tags.",
      layoutSystem:
        "Wide outer margins (80–120px desktop), alternating full-bleed photo sections and constrained-width (max ~1100px) text sections, 4-column card grid for listings, 8–12px radius on buttons and map controls only.",
      heroDirection:
        "Full-bleed large-format photography with a small black pill eyebrow label and a confident, moderately-sized headline — avoid an oversized shouty headline; let the photo carry the drama.",
      sections: [
        "Hero with location eyebrow and headline",
        "Editorial 'About' section with photo and short intro",
        "Interactive map or location module",
        "Highlighted content block (feature story)",
        "Activity/listing card grid",
        "Numbered pagination footer",
      ],
      ctaStyle:
        "Low-key rounded pill buttons in a single muted accent color with a small arrow icon; never more than one solid CTA visible per section.",
      cardStyle:
        "Simple rectangular photo cards with a title, short tag line, and star rating; minimal border, no heavy shadow — cleanliness over ornamentation.",
      imageDirection:
        "Large-format, well-composed location photography that could run in a print travel magazine; avoid busy stock photography or heavy filters.",
      mobileBehavior:
        "Two-column About section stacks to one column with photo first or text first depending on content priority; activity grid collapses 4→2→1; map module remains interactive with touch pan/zoom.",
      interactionIdeas:
        "Map pins expand on tap/hover with a small info card; pagination arrows and carousel controls use a subtle scale/opacity hover state; category tags could filter content on click.",
      accessibility:
        "Map interactions need keyboard alternatives (a linked list view of locations); ensure the muted blue CTA meets AA contrast against white; photo-heavy sections need descriptive alt text for each location image.",
      conversion:
        "Let editorial trust-building content (the About section) precede any booking ask; keep the single CTA visually consistent so it's recognizable no matter how far down the page a visitor is.",
    },
  },

  {
    id: "seed-1412",
    title: "Flash — Time To Travel",
    imageSrc: "/seed/img_1412.jpg",
    imageStorage: "seed",
    primaryCategory: "dark-cinematic",
    secondaryCategories: [],
    description:
      "A dark outdoor/adventure landing page using a numbered vertical slide indicator, teal-cyan headline type, and a video-thumbnail wall as a secondary content module.",
    tags: ["adventure travel", "dark theme", "cyan headline", "vertical slide indicator", "video thumbnails", "tour cards"],
    needsAnalysis: false,
    createdAt: t(8),
    updatedAt: t(8),
    analysis: {
      styleName: "Cyan-Accent Adventure Portal",
      whatItIs:
        "A dark, nature-photography-led travel site for outdoor adventure trips, distinguished by a bright teal-cyan headline color, a numbered vertical progress indicator in the hero corner, and a closing 'watch the video' module built from a grid of small video thumbnails rather than one big player.",
      whyItWorks:
        "The single saturated cyan color, used only for headlines and key labels against near-black backgrounds and muted nature photography, gives the brand a distinct, energetic signature without needing bright imagery. The numbered slide indicator (01–05) in the corner subtly signals 'there's more content here' the way a slide deck would, which helps orient users on a long single-page site.",
      vocabulary: {
        layout: "single dark full-bleed hero with a numbered index, followed by a card grid and a video-wall module",
        composition: "left-aligned hero text over a right-weighted photographic subject (a hiker on a ridge)",
        typography: "bold condensed cyan display headline for section titles, clean white sans for body copy",
        color: "near-black background, muted natural photography, one saturated cyan accent",
        contrast: "bright cyan against near-black for headline emphasis; white body text at lower contrast for readability",
        spacing: "moderate section spacing, tight card gutters in the tour grid",
        shapes: "simple rectangular photo cards with slightly rounded corners, circular play-button icon",
        imagery: "natural outdoor adventure photography — forests, lakes, mountain ridgelines, waterfalls",
        texture: "photographic with a slightly desaturated, moody dark grade",
        hierarchy: "headline → short description → numbered supporting facts → popular tours grid → video wall",
        interfaceStyle: "content/marketing site with light e-commerce card patterns (tour cards) and a media grid",
        motion: "numbered index and play-button icon imply scroll-based section progress and video playback",
      },
      keywords: [
        "adventure travel site",
        "dark theme",
        "cyan accent color",
        "numbered slide indicator",
        "video thumbnail grid",
        "tour card grid",
        "outdoor photography",
        "condensed display type",
        "hiking ridge photo",
        "moody nature grade",
        "play button icon",
        "single accent color branding",
      ],
      layout: {
        header: "Simple dark nav bar (Main, About Us, Tours, Gallery, Reviews, Contacts) with a search icon",
        hero: "Full-width nature photo with left-aligned cyan headline and a numbered 01–05 index in the top-right corner",
        hierarchy: "Headline → intro paragraph → three supporting fact blurbs → 'Popular Tours' card grid → video-wall CTA module",
        grid: "4-column tour card grid; asymmetric video-thumbnail grid of varying sizes in the closing module",
        cta: "Small text links with arrow icons ('more detailed →') rather than large buttons — low-pressure, editorial tone",
        imagePlacement: "Full-bleed hero photo, uniform tour-card thumbnails, and a mixed-size video thumbnail wall",
        transitions: "Hard cuts between the photographic hero and solid near-black content sections",
        footer: "Simple centered social icon row (Instagram, Facebook, Telegram, Twitter)",
      },
      reusableElements: [
        "A single saturated accent color reserved exclusively for headlines and key UI moments",
        "Numbered vertical index in a hero corner as a lightweight progress/orientation device",
        "A closing 'video wall' of mixed-size thumbnails instead of one large embedded video",
        "Small arrow-text links instead of heavy buttons for a lower-pressure editorial feel",
      ],
      avoidCopying: [
        "The 'Flash' brand name and specific Rocky Mountain National Park content",
        "The exact tour names/numbering and video thumbnail photography",
      ],
    },
    imagePromptFields: {
      subject: "A lone hiker standing at the edge of a rocky mountain ridge overlooking a vast forested valley and a turquoise alpine lake",
      composition: "Rule-of-thirds placement of the hiker on the right side, expansive layered landscape filling the rest of the frame, open space on the left for headline text",
      colorPalette: "deep forest green and charcoal with a cool turquoise lake accent",
      lighting: "soft overcast daylight with muted, moody color grading",
      mood: "contemplative, adventurous, small-human-in-vast-nature",
      texture: "detailed rock and forest texture, smooth still water in the lake",
      perspective: "wide-angle elevated view, subject at middle distance",
      renderStyle: "moody outdoor adventure photography with a desaturated cinematic grade",
      placement: "full-bleed dark hero background with left-third open for a bold headline and a small numbered index reserved in a top corner",
      aspectRatio: "16:9",
      negative: "no text, no logos, no watermarks, no bright saturated colors outside the accent, no other people",
    },
    briefFields: {
      visualDirection:
        "A moody, dark outdoor-adventure brand distinguished by exactly one saturated cyan accent color against near-black backgrounds and desaturated nature photography.",
      colorPalette: [
        { name: "Near Black", hex: "#101314" },
        { name: "Charcoal Green", hex: "#20302B" },
        { name: "Saturated Cyan", hex: "#3FE0D0" },
        { name: "Off-White Text", hex: "#EDEFEE" },
      ],
      typography:
        "Bold condensed sans for headlines in the cyan accent color; clean regular-weight sans for body copy in off-white at reduced opacity for a softer, secondary read.",
      layoutSystem:
        "Full-bleed hero with a constrained-width text column (max ~600px) on one side; 4-column tour card grid collapsing responsively; asymmetric masonry-style grid for the closing video/media wall.",
      heroDirection:
        "Full-bleed moody outdoor photography with left- or right-aligned bold cyan headline, a short supporting paragraph, and a subtle numbered section index in a corner to hint at page depth.",
      sections: [
        "Hero with headline and numbered index",
        "Three-column supporting facts/highlights",
        "Popular tours/offerings grid",
        "Media wall (\"discover in a new way\") with mixed-size thumbnails",
        "Footer with social icons",
      ],
      ctaStyle:
        "Minimal text links with a small arrow icon for most actions, reserving any solid button for the single highest-priority conversion action only.",
      cardStyle:
        "Simple photo-forward cards with a title and one line of supporting text, subtle rounded corners, no heavy borders or shadows so the photography stays dominant.",
      imageDirection:
        "Desaturated, moody outdoor/nature photography graded toward cool greens and charcoal, consistent enough that the single cyan accent always feels like the odd, intentional pop of color.",
      mobileBehavior:
        "Numbered index moves inline above the headline; tour grid collapses to 2 then 1 column; video wall becomes a simple stacked or horizontally-scrolling list.",
      interactionIdeas:
        "Section index number highlights/updates as the user scrolls; video thumbnails show a play icon on hover that scales slightly; arrow-text links underline or shift right on hover.",
      accessibility:
        "Reduced-opacity white body text must still clear AA contrast against the dark background; video thumbnails need descriptive alt text and accessible play controls, not click-only hover states.",
      conversion:
        "Keep pressure low with text-link CTAs through most of the page, reserving a single stronger call-to-action for tour booking so it stands out by contrast rather than volume.",
    },
  },

  {
    id: "seed-1413",
    title: "Island* — Explore the Azores",
    imageSrc: "/seed/img_1413.jpg",
    imageStorage: "seed",
    primaryCategory: "high-conversion",
    secondaryCategories: ["editorial-minimal"],
    description:
      "A clean, white-background tour-booking landing page with a rounded-corner photo hero, four-icon value grid, and a shoppable grid of rated tour cards with prices.",
    tags: ["tour booking", "clean white UI", "rounded hero image", "value proposition icons", "rated product cards", "bold rounded type"],
    needsAnalysis: false,
    createdAt: t(9),
    updatedAt: t(9),
    analysis: {
      styleName: "Clean E-Commerce Tour Booking",
      whatItIs:
        "A tour-operator homepage that borrows conversion patterns straight from e-commerce: a rounded-corner hero photo with a clear CTA, an icon-led value-proposition row, and a shoppable grid of tour 'products' each with a star rating and a per-person price.",
      whyItWorks:
        "Treating tours exactly like purchasable products — rating badge top-right, price bottom-left, arrow-button bottom-right — makes the booking decision feel as easy and familiar as online shopping, which lowers friction for a category that can otherwise feel complicated to plan. A bold rounded sans and an all-white background keep a genuinely busy page (icons, cards, ratings, prices) feeling light and uncluttered.",
      vocabulary: {
        layout: "centered rounded hero card, followed by a 4-icon value row and a 4-up product-style card grid",
        composition: "symmetric, centered composition throughout — no strong diagonal or overlapping elements",
        typography: "bold, rounded, friendly display sans for the headline; simple sans for card labels and prices",
        color: "all-white background with natural photography color and near-black UI text",
        contrast: "high — black text and dark buttons on a pure white background for maximum clarity",
        spacing: "generous consistent card gutters and section padding, very even rhythm",
        shapes: "large rounded-corner photo frame, small rounded rating/price badges on cards",
        imagery: "vibrant travel/adventure photography (landscapes, jeep tours, hiking, aerial lagoon shots)",
        texture: "clean and flat, photography provides all the visual texture",
        hierarchy: "headline → CTA → value icons → 'Choose your tour' product grid → (continues below fold)",
        interfaceStyle: "e-commerce-influenced booking/marketplace site",
        motion: "implied hover states on arrow-icon buttons and 'See all' pill",
      },
      keywords: [
        "tour booking site",
        "e-commerce card pattern",
        "rounded hero photo",
        "star rating badge",
        "price tag on card",
        "value proposition icons",
        "bold rounded typography",
        "clean white background",
        "shoppable product grid",
        "azores travel",
        "arrow icon button",
        "high conversion layout",
      ],
      layout: {
        header: "Simple centered nav (Our tours, About us, Booking, FAQ) with a hamburger icon, logo top-left",
        hero: "Large rounded-corner full-width photo with overlaid bold headline, subhead, and a white pill 'Book now' button",
        hierarchy: "Headline → 'Top values for you' 4-icon row → 'Choose your tour' rated/priced card grid → 'See all' CTA",
        grid: "4-column icon row; 4-column tour card grid with consistent card anatomy (photo, rating, title, price, arrow)",
        cta: "White pill button in the hero; small dark circular arrow-icon buttons on each product card",
        imagePlacement: "One large rounded hero photo plus four uniform rounded-corner tour thumbnail photos",
        transitions: "Clean white section breaks, no overlays; a colored band peeks in at the very bottom of the crop",
        footer: "Not fully shown — a colored (teal) section begins at the bottom of this crop",
      },
      reusableElements: [
        "E-commerce-style product card anatomy (photo + rating badge + title + price + action icon) applied to bookable experiences",
        "Rounded-corner hero photo framed with visible white margin rather than true full-bleed",
        "Four-icon value-proposition row directly beneath the hero to build quick trust",
        "A single consistent card grid pattern reused for the tour catalog",
      ],
      avoidCopying: [
        "The 'island*' brand name and 'visit ronasit.com' credit",
        "The specific Azores tour names, prices, and ratings",
        "The exact photography of the featured tours",
      ],
    },
    imagePromptFields: {
      subject: "A sweeping green coastal cliff landscape overlooking the ocean, with patchwork farmland fields leading to a rocky headland",
      composition: "Wide landscape shot with the headline given a full third of open sky/cloud space at the top for text overlay",
      colorPalette: "vivid greens, ocean blue, and soft cloud-grey",
      lighting: "natural bright daylight with soft cloud cover diffusing shadows",
      mood: "fresh, adventurous, inviting, optimistic",
      texture: "detailed field and grass texture in the foreground, smooth atmospheric haze toward the horizon",
      perspective: "elevated wide-angle aerial-adjacent view",
      renderStyle: "vibrant travel photography, naturally saturated but not over-processed",
      placement: "rounded-corner full-width hero image with a visible white page margin around it; keep upper-left area open for headline text and a CTA button",
      aspectRatio: "16:9",
      negative: "no text, no logos, no watermarks, no people close to camera, no man-made structures dominating the frame",
    },
    briefFields: {
      visualDirection:
        "A clean, conversion-focused tour-booking site that borrows e-commerce card patterns (rating, price, action icon) to make booking experiences feel as easy as online shopping.",
      colorPalette: [
        { name: "Pure White", hex: "#FFFFFF" },
        { name: "Ink Black", hex: "#141414" },
        { name: "Ocean Teal Accent", hex: "#2FA6A0" },
        { name: "Soft Grey", hex: "#F1F1EF" },
      ],
      typography:
        "Bold, rounded, friendly display sans (e.g. Circular, Poppins SemiBold) for headlines and card titles; regular-weight matching sans for body and price text — one type family throughout for cohesion.",
      layoutSystem:
        "Centered max-width container (~1200px) with a visible white margin around the rounded-corner hero image; 4-column grids for both the value-icon row and the tour card catalog; 16–24px card radius; consistent 24px gutters.",
      heroDirection:
        "Rounded-corner full-width photo (not edge-to-edge) with a bold two-line headline, one-line subhead, and a single white pill CTA button — plus small prev/next and scroll-down affordances.",
      sections: [
        "Hero with headline and primary CTA",
        "Value proposition icon row",
        "\"Choose your tour\" rated/priced card grid",
        "Secondary promotional band",
        "Testimonials or trust section",
        "Footer",
      ],
      ctaStyle:
        "Solid white or solid dark pill buttons for primary actions; small circular dark icon buttons (arrow) for card-level actions; an outlined pill for 'See all' secondary actions.",
      cardStyle:
        "Consistent product-style cards: photo top, floating rating badge in the corner, title and price beneath, small circular arrow-button bottom-right — reused identically across the entire catalog.",
      imageDirection:
        "Bright, vibrant, naturally saturated travel/adventure photography that reads as aspirational but authentic — avoid overly staged or artificial-looking stock imagery.",
      mobileBehavior:
        "Hero image keeps rounded corners but reduces margin; value-icon row wraps to 2x2; tour card grid collapses 4→2→1 with full-width cards; nav collapses to a hamburger menu.",
      interactionIdeas:
        "Card arrow-buttons scale slightly and darken on hover; 'See all' pill has a subtle border-fill transition; hero photo could support a lightweight prev/next fade transition.",
      accessibility:
        "Rating badges need text alternatives (not icon/color only); ensure white CTA buttons on photo backgrounds keep sufficient contrast (add a scrim if the photo is light); card action icons need descriptive aria-labels (\"View Jeep ride tour\").",
      conversion:
        "Show pricing and ratings directly on the browsing grid (not hidden behind a click) to reduce decision friction, and keep the value-proposition row directly under the hero, before the catalog, to pre-empt objections.",
    },
  },

  {
    id: "seed-1414",
    title: "GreenSpace — Office Greenery",
    imageSrc: "/seed/img_1414.jpg",
    imageStorage: "seed",
    primaryCategory: "warm-organic",
    secondaryCategories: ["dark-cinematic"],
    description:
      "A dark-background B2B service site (office plant installation) that stays warm and organic through layered fern photography and a soft cream CTA button rather than saturated color.",
    tags: ["B2B service", "dark organic", "plant photography", "russian ui", "lead form", "layered foliage"],
    needsAnalysis: false,
    createdAt: t(10),
    updatedAt: t(10),
    analysis: {
      styleName: "Dark Botanical B2B",
      whatItIs:
        "A local B2B service site (corporate plant/greenery installation) that achieves a warm, organic feeling on a dark background purely through dense, layered fern and leaf photography, rather than through the light backgrounds that 'organic' design usually relies on.",
      whyItWorks:
        "Letting real fern foliage bleed across section boundaries as a recurring texture ties a fairly ordinary B2B service page together visually, and a single warm cream CTA pill against all that deep green gives it real pop without needing a second accent color. Concrete numeric proof (10 years, 500+ projects, 99% satisfaction) sits directly beside a real workplace photo, which is a credible, low-hype way to build B2B trust.",
      vocabulary: {
        layout: "dark full-bleed foliage backdrop with floating light-content cards layered on top",
        composition: "asymmetric layering of photography, text blocks, and numbered stat cards over one continuous botanical background",
        typography: "clean modern sans headline, small case body copy, minimal decoration",
        color: "deep forest green and near-black background with a warm cream/tan CTA accent",
        contrast: "light text and cream buttons against dense dark green foliage for legibility",
        spacing: "moderate spacing with intentional overlap between the background texture and foreground cards",
        shapes: "simple rounded-corner cards and pill buttons, no heavy iconography",
        imagery: "dense, layered real plant/fern photography used as a continuous environmental backdrop",
        texture: "rich, detailed organic texture from the foliage itself rather than added graphic texture",
        hierarchy: "headline → CTA product card → mission statement → workplace proof photo + stats → 4-reason grid → lead form",
        interfaceStyle: "B2B service marketing site with a straightforward lead-generation form",
        motion: "a visible play-button suggests an embedded video of the office transformation",
      },
      keywords: [
        "B2B service site",
        "dark organic design",
        "fern photography backdrop",
        "cream CTA accent",
        "office plants",
        "stat proof cards",
        "numbered reasons grid",
        "lead generation form",
        "layered foliage texture",
        "corporate greenery",
        "workplace photography",
        "warm dark palette",
      ],
      layout: {
        header: "Simple dark nav (О нас/Почему мы/Контакты) with logo left and a cart icon right",
        hero: "Dense fern-photo background with headline top-left and a floating plant-product card top-right with a CTA",
        hierarchy: "Headline → intro statement → workplace photo + stat cards (10 years/500+ projects/99% clients) → 4-reason numbered grid → contact form",
        grid: "2-column stat/photo section; 4-column numbered reasons grid",
        cta: "Solid cream/tan pill button with arrow icon for primary actions, dark pill for form submission",
        imagePlacement: "Full-bleed foliage background throughout, one workplace lifestyle photo with a video play button",
        transitions: "Foliage texture bleeds continuously across section boundaries rather than hard-cutting to flat color",
        footer: "Simple link list (About/Assortment/Order/Contacts) with social icons on a continued dark background",
      },
      reusableElements: [
        "Using dense natural photography as a continuous full-page background texture, not just a hero image",
        "Floating light-colored content cards layered directly on top of a dark photographic background",
        "Pairing a real workplace photo with concrete numeric proof points for B2B credibility",
        "One warm neutral accent color (cream/tan) instead of a bright saturated brand color",
      ],
      avoidCopying: [
        "The 'GreenSpace' brand name, Russian-language copy, and Moscow location reference",
        "The specific stats (10 years, 500+, 99%) and workplace photograph",
      ],
    },
    imagePromptFields: {
      subject: "Dense, layered fern and broad tropical leaf foliage in rich deep greens, photographed close-up as an immersive backdrop",
      composition: "Full-frame, edge-to-edge foliage with no visible background gaps, dark shadow pockets between leaves for text legibility",
      colorPalette: "deep forest green, near-black shadow, with warm highlight edges on select leaves",
      lighting: "soft directional light creating natural highlights on leaf edges and deep shadow between layers",
      mood: "grounded, calm, quietly premium, natural",
      texture: "highly detailed leaf veining and layered depth, tactile and lush",
      perspective: "close-up macro-adjacent framing, shallow depth of field on background leaves",
      renderStyle: "rich botanical photography, editorial quality",
      placement: "full-bleed background texture usable across an entire dark-themed page, dark pockets throughout for overlaid light text and cards",
      aspectRatio: "16:9",
      negative: "no text, no logos, no watermarks, no people, no flowers or bright colors breaking the green palette",
    },
    briefFields: {
      visualDirection:
        "A dark, botanical B2B service brand: dense real plant photography as a continuous full-page backdrop, light content cards floating on top, one warm cream accent color for all calls to action.",
      colorPalette: [
        { name: "Deep Forest Green", hex: "#16241C" },
        { name: "Near Black", hex: "#0E1410" },
        { name: "Warm Cream Accent", hex: "#E8DCC4" },
        { name: "Soft Off-White Text", hex: "#F2F0E8" },
      ],
      typography:
        "Clean modern grotesk sans for both headlines and body copy (single type family, varied weight) — headline at 36–48px semi-bold, body at 15–16px regular for a calm, trustworthy B2B tone.",
      layoutSystem:
        "Full-bleed background texture with floating cards on a loose grid; 2-column proof section (photo + stat cards); 4-column numbered reasons grid collapsing responsively; 16–20px card radius.",
      heroDirection:
        "Full-bleed dense natural photography as the hero (and continued page) background, with a floating light-colored card presenting the core product/offer and a single clear CTA.",
      sections: [
        "Hero with floating offer card",
        "Mission/value statement",
        "Proof section: workplace photo + numeric stats",
        "Numbered reasons-to-choose-us grid",
        "Contact/lead-generation form",
        "Footer with links and social icons",
      ],
      ctaStyle:
        "Solid warm cream/tan pill buttons with a small arrow icon for primary actions; dark solid buttons for form submission to differentiate from marketing CTAs.",
      cardStyle:
        "Floating semi-opaque dark or light cards with soft rounded corners (16–20px), layered directly over the photographic background rather than sitting in flat white sections.",
      imageDirection:
        "Rich, layered real plant/foliage photography used continuously as a backdrop, plus one authentic workplace photo showing the product in a real environment (not a sterile stock office).",
      mobileBehavior:
        "Floating cards stack full-width with reduced overlap on the background texture; stat cards move to a vertical stack; numbered reasons grid collapses to 2 then 1 column; form fields stack full-width.",
      interactionIdeas:
        "Play-button overlay on the workplace photo opens a lightweight video modal; CTA pills darken slightly on hover; numbered reason cards could reveal extra detail on hover/tap.",
      accessibility:
        "Verify light text over dense foliage photography holds AA contrast in the darkest and lightest leaf areas; form needs visible labels and clear error states, not placeholder-only fields; video modal must be keyboard-dismissible.",
      conversion:
        "Put concrete, specific proof (a real photo plus real numbers) directly after the value statement, before asking for contact details — B2B buyers convert on credibility, not just aesthetics.",
    },
  },

  {
    id: "seed-1416",
    title: "Путешествие — World Travel Route",
    imageSrc: "/seed/img_1416.jpg",
    imageStorage: "seed",
    primaryCategory: "editorial-minimal",
    secondaryCategories: ["dark-cinematic"],
    description:
      "A trip-planner homepage that resolves from a dark full-photo hero into a bright white body, then connects three route photos with a hand-drawn dotted path, like a map come to life.",
    tags: ["trip planner", "dotted route path", "hero-to-white transition", "russian ui", "wavy section divider", "editorial travel"],
    needsAnalysis: false,
    createdAt: t(11),
    updatedAt: t(11),
    analysis: {
      styleName: "Dotted-Route Trip Planner",
      whatItIs:
        "A trip-planning homepage where a dark river-and-forest photo hero flows into a bright white page via a wavy divider, and three separate destination photos are connected by a hand-drawn dotted line — visually turning the itinerary into a literal map route the eye can follow down the page.",
      whyItWorks:
        "The dotted connecting line is a small idea that does a lot of work: it makes an otherwise ordinary list of three destinations feel like a planned journey rather than a generic content grid, reinforcing the product's actual job (route planning). The wavy white-to-photo divider softens the hard transition from a dramatic dark hero into a clean, form-driven planning tool, so the mood shift doesn't feel jarring.",
      vocabulary: {
        layout: "dark photographic hero flowing into a long single-column white body via a wavy divider",
        composition: "vertically linked destination photos connected by a diagonal dotted path with waypoint markers",
        typography: "bold uppercase sans headline, simple sans labels and body copy",
        color: "dark forest-photo hero, white page body, one warm coral/red accent for primary buttons",
        contrast: "white-on-photo in the hero, dark-on-white through the body for easy scanning",
        spacing: "generous vertical spacing between waypoint sections so the connecting path has room to breathe",
        shapes: "organic wavy section divider, small circular waypoint dots, rounded pill search fields and CTA",
        imagery: "moody forest-river photography in the hero; bright destination/landscape photos along the route",
        texture: "photographic in the hero, otherwise flat and clean through the planning body",
        hierarchy: "headline → route-selection form → sequential waypoint sections (image + trip details) → footer",
        interfaceStyle: "trip-planning marketing site with a functional-looking (if non-working) route-picker form",
        motion: "the dotted line and wavy divider imply a guided, scroll-driven journey down the page",
      },
      keywords: [
        "trip planner homepage",
        "dotted route line",
        "wavy section divider",
        "waypoint markers",
        "dark-to-white transition",
        "route selection form",
        "editorial travel photography",
        "coral accent color",
        "sequential itinerary layout",
        "russian travel site",
        "hand-drawn path",
        "destination waypoints",
      ],
      layout: {
        header: "Simple centered nav over the dark hero photo (Главная/О путешествиях/Туры/Отзывы) plus a search icon",
        hero: "Full-bleed dark forest-river photo with bold uppercase headline and subhead, wavy bottom edge transitioning to white",
        hierarchy: "Headline → route-selection form (place + activity type + CTA) → three dotted-line-connected waypoint sections",
        grid: "Single-column vertical sequence for the route section; simple 3-field horizontal form above it",
        cta: "Solid coral/red pill button for the primary 'ПОДОБРАТЬ' (select) action",
        imagePlacement: "Full-bleed hero photo plus three large photos, one per waypoint, alternating visual weight",
        transitions: "Organic wavy divider between hero and body; dotted path visually transitions between waypoint sections",
        footer: "Simple 3-column dark footer (contacts, links, social) closing the page",
      },
      reusableElements: [
        "A dotted connecting line with waypoint dots linking sequential content sections into a 'journey'",
        "An organic wavy divider to soften the transition from a dramatic photo hero into a clean white body",
        "A simple, prominent route/trip-selection form directly in the hero",
        "Alternating left/right image placement along a vertical sequence to create visual rhythm",
      ],
      avoidCopying: [
        "The Russian-language copy and specific trip names (Поход по тайге, Восхождение на Эльбрус)",
        "The specific river/forest hero photograph and waypoint photography",
      ],
    },
    imagePromptFields: {
      subject: "A wide, slow-moving forest river flanked by dense pine trees under a moody, softly lit sky",
      composition: "Wide horizontal composition with the river leading the eye toward the center horizon, open sky space at the top for a bold headline",
      colorPalette: "deep forest green and slate blue-grey with soft ambient sky light",
      lighting: "soft overcast natural light with gentle atmospheric haze",
      mood: "adventurous, grounded, quietly epic",
      texture: "detailed pine forest texture, smooth reflective river surface",
      perspective: "wide-angle elevated landscape view, horizon roughly centered",
      renderStyle: "moody editorial landscape photography",
      placement: "full-bleed dark hero background transitioning to a white page below via a wavy divider; leave the upper half open for a bold headline and route-selection form",
      aspectRatio: "16:9",
      negative: "no text, no logos, no watermarks, no people, no man-made structures",
    },
    briefFields: {
      visualDirection:
        "A trip-planning site that turns its itinerary into a literal visual journey — a dark photographic hero flowing into a clean white body, with a hand-drawn dotted line connecting sequential destination sections like waypoints on a map.",
      colorPalette: [
        { name: "Deep Forest Hero", hex: "#26302A" },
        { name: "Clean White", hex: "#FFFFFF" },
        { name: "Coral Accent", hex: "#D9615A" },
        { name: "Ink Text", hex: "#232323" },
      ],
      typography:
        "Bold uppercase tracked sans for the hero headline; clean regular-weight sans for form labels, waypoint titles, and body copy — one family throughout for a cohesive, unfussy feel.",
      layoutSystem:
        "Full-bleed hero with a wavy SVG divider into a max-width (~1000px) single-column body; sequential alternating image/text waypoint blocks connected by an SVG dotted path with circular markers; 64–96px vertical rhythm between waypoints.",
      heroDirection:
        "Full-bleed moody landscape photo with a bold short headline, one-line supporting tagline, and a simple horizontal route-selection form (destination, trip type, submit) as the primary early interaction.",
      sections: [
        "Hero with route-selection form",
        "Sequential dotted-path waypoint sections (destination photo + trip details)",
        "Closing CTA or newsletter signup",
        "Footer with contact and social links",
      ],
      ctaStyle:
        "One solid warm-accent pill button for the primary 'plan/select' action in the hero form; simple text links for secondary 'read more' actions within each waypoint.",
      cardStyle:
        "Minimal — this style favors full photos with adjacent text blocks over boxed cards; where cards are needed, keep them borderless with generous padding.",
      imageDirection:
        "A mix of one moody, atmospheric hero photograph and several bright, editorial destination photos along the route — vary mood between the hero and the waypoints to signal the emotional arc of the journey.",
      mobileBehavior:
        "Route-selection form fields stack vertically; waypoint image/text blocks stack with image always first; the dotted connecting path simplifies to a straight vertical line with dots.",
      interactionIdeas:
        "The dotted path could draw itself in as the user scrolls; waypoint sections fade/slide in on scroll; form fields get a coral focus outline.",
      accessibility:
        "Decorative dotted-path SVGs need aria-hidden treatment so screen readers aren't confused; the wavy divider must not clip focusable content; ensure coral CTA meets AA contrast against white.",
      conversion:
        "Put the trip-selection form directly in the hero, before any storytelling content, so ready-to-plan visitors aren't forced to scroll past inspiration first.",
    },
  },

  {
    id: "seed-1417",
    title: "Regal Crest — Premium Golf Club",
    imageSrc: "/seed/img_1417.jpg",
    imageStorage: "seed",
    primaryCategory: "premium-luxury",
    secondaryCategories: ["warm-organic"],
    description:
      "A premium members'-club microsite using an aerial course photograph, an elegant serif wordmark with an 'EST. 1998' mark, and a rich olive-green icon-grid section for club amenities.",
    tags: ["luxury club", "serif wordmark", "aerial photography", "olive green", "icon grid", "membership CTA"],
    needsAnalysis: false,
    createdAt: t(12),
    updatedAt: t(12),
    analysis: {
      styleName: "Heritage Club Elegance",
      whatItIs:
        "A premium golf-club site that signals exclusivity through classic cues — an elegant italic serif wordmark, an 'EST. 1998' heritage mark, and a bird's-eye course photograph — then backs it up with a rich, deep olive-green feature section laying out concrete member amenities as a clean icon grid.",
      whyItWorks:
        "The italic serif logotype and aerial photography do the emotional work of 'this is exclusive' quickly and efficiently, borrowing established visual cues from real heritage club branding. Following that with a plainly organized, icon-labeled list of tangible amenities (personal coaches, private events, partner program) prevents the page from being all mood with no substance — a common membership-site failure mode.",
      vocabulary: {
        layout: "full-bleed aerial photo hero, followed by a 3-photo about grid, then a full-width colored feature panel",
        composition: "centered symmetric hero composition; grid-based amenity section with balanced icon+label pairs",
        typography: "elegant italic serif for the wordmark, small tracked sans caps for supporting labels",
        color: "natural fairway green photography paired with a deep olive-green graphic section and cream text",
        contrast: "white/cream serif type over a natural green photo; light icons and text on a solid deep-green panel",
        spacing: "generous, evenly balanced spacing befitting a premium/luxury tone",
        shapes: "simple rounded-corner photo tiles, minimal line icons, one large rounded content panel",
        imagery: "aerial/drone golf course photography and lifestyle photography of club members",
        texture: "clean and photographic in the hero, flat and graphic in the icon-grid panel",
        hierarchy: "wordmark + est. year → 'join the club' CTA → about statement → 3 lifestyle photo tiles → amenities icon grid",
        interfaceStyle: "premium membership marketing microsite, restrained UI chrome",
        motion: "not visible, but the layered aerial photo suggests parallax on hero scroll",
      },
      keywords: [
        "luxury membership club",
        "italic serif wordmark",
        "established since heritage mark",
        "aerial course photography",
        "olive green feature panel",
        "icon amenity grid",
        "premium branding",
        "cream and green palette",
        "elegant minimal nav",
        "golf club website",
        "photo tile grid",
        "exclusive tone",
      ],
      layout: {
        header: "Minimal centered nav in small tracked caps (О нас/Гольф-поле/Членство/Инфраструктура/Локация/Мероприятия)",
        hero: "Full-bleed aerial golf-course photo with a centered italic serif wordmark, 'EST.' year mark, and a rounded CTA pill",
        hierarchy: "Wordmark → 'Вступить в клуб' CTA → 'О нас' intro statement → 3-photo lifestyle grid → deep-green amenities icon grid",
        grid: "3-column photo tile grid for 'about'; 4-column (x2 row) icon grid for amenities",
        cta: "Cream/white rounded pill button, understated, centered in the hero",
        imagePlacement: "Full-bleed aerial hero photo plus three square lifestyle photo tiles",
        transitions: "Clean flat-color section breaks (cream body to deep olive-green panel)",
        footer: "Not shown in this crop",
      },
      reusableElements: [
        "Italic serif wordmark with an 'EST. [year]' heritage mark for instant premium/legacy signaling",
        "Aerial/drone photography as a distinctive premium hero choice over eye-level shots",
        "A solid-color (non-white) feature panel to break up an otherwise light, airy page and give amenities their own visual 'room'",
        "Pairing a small icon with a short label for each amenity, one consistent pattern repeated in a grid",
      ],
      avoidCopying: [
        "The 'Regal Crest' name, wordmark, and 'EST. 1998' claim",
        "The Russian-language copy and specific amenity list",
        "The specific aerial course photograph",
      ],
    },
    imagePromptFields: {
      subject: "An aerial drone view of a manicured golf course fairway with sculpted sand bunkers and scattered mature trees casting long shadows",
      composition: "Symmetric top-down/aerial composition with fairway curves leading the eye, generous open turf space in the center for a centered wordmark overlay",
      colorPalette: "rich fairway green, warm sand-bunker tan, deep tree-shadow green",
      lighting: "late-afternoon directional sunlight casting long, well-defined shadows",
      mood: "exclusive, calm, aspirational, quietly prestigious",
      texture: "fine manicured grass texture, soft sand texture in the bunkers",
      perspective: "aerial/drone top-down to slightly angled view",
      renderStyle: "premium drone photography, natural color, minimal post-processing",
      placement: "full-bleed hero background for a membership club site, with the center reserved for an overlaid serif wordmark and a small CTA pill beneath it",
      aspectRatio: "21:9",
      negative: "no text, no logos, no watermarks, no people, no golf carts or visible branding on the course",
    },
    briefFields: {
      visualDirection:
        "A premium heritage-club aesthetic combining an elegant italic serif wordmark, aerial photography, and a rich solid-color (deep green) feature panel for tangible member benefits.",
      colorPalette: [
        { name: "Fairway Green", hex: "#3E5C36" },
        { name: "Deep Olive Panel", hex: "#2B3A22" },
        { name: "Warm Cream", hex: "#F4EFE2" },
        { name: "Sand Tan", hex: "#C9B893" },
      ],
      typography:
        "An elegant italic serif (e.g. Canela, Playfair Display Italic) for the wordmark and major headlines; a small tracked uppercase sans for nav and supporting labels — the serif/sans pairing is what signals 'heritage meets modern'.",
      layoutSystem:
        "Centered symmetric hero; 3-column photo grid for lifestyle/about content; 4-column icon grid (wrapping to 2 rows) for amenities inside a full-width solid-color panel; generous 96–140px section padding.",
      heroDirection:
        "Full-bleed aerial or wide establishing photography with a centered serif wordmark, an optional 'EST. [year]' heritage mark, and a single understated rounded CTA — avoid a busy or oversized headline.",
      sections: [
        "Hero with wordmark and membership CTA",
        "About / mission statement",
        "Lifestyle photo grid",
        "Amenities icon grid in a solid-color panel",
        "Facilities or course detail section",
        "Membership tiers or contact",
        "Footer",
      ],
      ctaStyle:
        "A single understated rounded pill button in cream or white for the primary 'join/inquire' action — deliberately quiet rather than loud, consistent with a premium tone.",
      cardStyle:
        "Simple square or slightly rounded photo tiles with a small caption; amenity items styled as icon-over-label pairs rather than boxed cards, to keep the feature panel feeling open rather than gridded/dashboard-like.",
      imageDirection:
        "Aerial/drone photography and candid lifestyle photography of the space and experience — avoid generic stock imagery of golf equipment; favor a sense of place and atmosphere.",
      mobileBehavior:
        "Aerial hero photo crops to preserve the centered wordmark; 3-photo grid stacks to a single column; amenities icon grid collapses to 2 columns then 1, keeping icon+label pairs intact.",
      interactionIdeas:
        "Subtle fade-in of the wordmark and CTA on load; lifestyle photo tiles scale slightly on hover; amenity icons could have a soft color shift on hover to add polish without motion overload.",
      accessibility:
        "Serif wordmark over photography needs verified contrast (add a subtle gradient scrim if needed); icon-only amenity items need text labels (already implied) — never icon-only without text; maintain AA contrast for cream text on the deep-green panel.",
      conversion:
        "Lead with prestige (wordmark, aerial photo, heritage mark) before asking for any commitment, then substantiate it quickly with the tangible amenities panel — emotion first, proof second, single CTA repeated sparingly.",
    },
  },

  {
    id: "seed-1418",
    title: "Akina Hotel — Trip to the Alps",
    imageSrc: "/seed/img_1418.jpg",
    imageStorage: "seed",
    primaryCategory: "soft-ui-glass",
    secondaryCategories: ["premium-luxury"],
    description:
      "A boutique hotel landing page built as a tall frosted-glass card floating over an alpine dusk photo, with social handles, a phone number, and nav all embedded directly inside the glass frame.",
    tags: ["boutique hotel", "glassmorphism", "alpine dusk photo", "embedded contact info", "purple-pink gradient glass", "single-card hero"],
    needsAnalysis: false,
    createdAt: t(13),
    updatedAt: t(13),
    analysis: {
      styleName: "Embedded-Contact Glass Card Hero",
      whatItIs:
        "A boutique hotel hero built as one tall, rounded frosted-glass card floating over a dusk-lit alpine town photo, with the brand wordmark, headline, CTA, and — unusually — the hotel's phone number and social handles all embedded directly inside the glass frame's edges.",
      whyItWorks:
        "Putting contact info (phone, Instagram, Telegram) inside the same glass card as the headline, rather than relegating it to a tiny footer, keeps a real conversion path visible at all times without adding a second competing UI element. The soft purple-pink gradient tint on the glass, layered over a warm sunset mountain photo, gives the page a distinctive romantic mood that a plain white glass treatment wouldn't achieve.",
      vocabulary: {
        layout: "single tall centered glass card as the entire hero, contact details embedded at its edges",
        composition: "vertically centered symmetric card composition over a full-bleed photo",
        typography: "clean modern sans for the wordmark and headline, small case labels for embedded contact info",
        color: "dusk purple-pink gradient glass over a warm alpine sunset photo",
        contrast: "white text on tinted frosted glass, keeping legibility while preserving the photo's visibility",
        spacing: "compact spacing for the embedded contact chips, generous space around the central headline",
        shapes: "one large rounded rectangle glass card, small pill-shaped contact chips along its bottom edge",
        imagery: "warm dusk alpine mountain and town photography, romantic golden-purple light",
        texture: "frosted glassmorphism blur throughout, soft photographic warmth beneath",
        hierarchy: "wordmark → headline → CTA pill → embedded contact/social row across the card's base",
        interfaceStyle: "boutique hospitality marketing site with an app-like glass UI treatment",
        motion: "not visible, but the layered glass card suggests a subtle depth/blur transition on scroll",
      },
      keywords: [
        "boutique hotel site",
        "glassmorphism card hero",
        "alpine dusk photography",
        "purple-pink gradient glass",
        "embedded contact info",
        "social handle chips",
        "frosted glass UI",
        "romantic mountain mood",
        "single-card layout",
        "hospitality branding",
        "telegram whatsapp handles",
        "soft rounded UI",
      ],
      layout: {
        header: "Wordmark centered at the top of the glass card, small menu and profile icons at its corners",
        hero: "Tall glass card over a full-bleed dusk mountain photo, headline centered, CTA pill beneath it",
        hierarchy: "Wordmark → 'Trip to the Alps' headline → 'view trip selection' CTA → phone/social contact row → secondary tagline row",
        grid: "Single centered card, no multi-column grid in this crop — deliberately minimal",
        cta: "Ghost/outline pill button ('view trip selection') sitting directly on the frosted glass",
        imagePlacement: "One full-bleed atmospheric photo serving as the backdrop for the entire glass card",
        transitions: "The glass card itself is the transition device between photo and content",
        footer: "A second full-bleed photo band with the wordmark and a search bar appears to close the section",
      },
      reusableElements: [
        "A single glass card used as the entire hero unit, with contact/social info embedded at its base rather than in a separate footer",
        "Tinting the frosted glass to match the photo's mood (warm dusk tones) instead of a neutral grey/white glass",
        "Pairing a big emotional photo with genuinely useful, immediately visible contact chips",
      ],
      avoidCopying: [
        "The 'AKINA Hotel' name, phone number, and specific social handles",
        "The exact Grenoble location claim and the specific alpine photography",
      ],
    },
    imagePromptFields: {
      subject: "A dramatic snow-capped mountain range at dusk with a warm-lit town glowing at its base",
      composition: "Wide vertical-friendly composition, mountains filling the upper two-thirds, glowing town lights along the bottom edge, open space in the mountain area for a centered glass card overlay",
      colorPalette: "warm dusk pink-purple sky fading to soft blue, with golden-amber town lights",
      lighting: "blue-hour/dusk lighting with warm artificial light from the town contrasting cool ambient sky",
      mood: "romantic, cozy, quietly luxurious, inviting",
      texture: "soft atmospheric gradient sky, crisp snow-covered peak detail",
      perspective: "elevated wide view looking across the valley toward the mountain range",
      renderStyle: "atmospheric travel/hospitality photography with a warm cinematic grade",
      placement: "full-bleed vertical-oriented hero background intended to sit behind a tall centered frosted-glass card containing headline text and a CTA",
      aspectRatio: "3:4",
      negative: "no text, no logos, no watermarks, no people, no visible signage",
    },
    briefFields: {
      visualDirection:
        "A boutique hospitality brand built around one tall, tinted frosted-glass hero card floating over warm dusk photography, with contact and social details embedded directly in the card rather than tucked into a footer.",
      colorPalette: [
        { name: "Dusk Purple Glass", hex: "#8A7EA8" },
        { name: "Warm Blush Pink", hex: "#D9A0A6" },
        { name: "Golden Town Light", hex: "#E8B978" },
        { name: "Frost White Text", hex: "#FBFAF9" },
      ],
      typography:
        "A clean, modern sans (e.g. Inter, Sora) for the wordmark and headline at a confident but not oversized scale; small-caps or reduced-size sans for embedded contact chips so they stay legible without competing with the headline.",
      layoutSystem:
        "Single centered glass card, max-width ~600–700px, tall aspect ratio, 24–32px card radius, consistent internal padding with contact chips distributed evenly along the card's bottom edge.",
      heroDirection:
        "Full-bleed atmospheric photography behind one tinted, frosted glass card containing the wordmark, headline, primary CTA, and directly-embedded contact/social information — no separate contact bar needed.",
      sections: [
        "Glass-card hero with embedded contact info",
        "About / location section",
        "Booking or trip-selection panel",
        "Team/private trip options",
        "Search or destination picker band",
        "Footer",
      ],
      ctaStyle:
        "Ghost/outline pill buttons that sit directly on frosted glass without a heavy fill, preserving the photo's visibility; reserve one solid pill for the single highest-priority action.",
      cardStyle:
        "One dominant frosted glass card tinted to match the photography's mood, plus smaller secondary glass or solid cards for supporting content (e.g. a location panel, a booking panel).",
      imageDirection:
        "Warm, atmospheric dusk or golden-hour photography with a strong sense of place; the photo's color temperature should directly inform the glass tint for cohesion.",
      mobileBehavior:
        "Glass card scales to near full-width with reduced padding; embedded contact chips wrap to two rows or become a horizontal scroll; secondary sections stack full-width.",
      interactionIdeas:
        "Subtle increase in glass blur/brightness on card hover; contact chips get a soft highlight on hover/focus; CTA pill border brightens on hover.",
      accessibility:
        "Text on tinted frosted glass must be contrast-tested against the busiest part of the background photo; embedded contact chips need real tappable targets (min 44px) and descriptive labels, not icon-only links.",
      conversion:
        "Keep booking/contact actions physically embedded in the hero card so they're never more than one glance away, rather than relying on users to scroll to a footer.",
    },
  },

  {
    id: "seed-1419",
    title: "Wander.ph — Philippine Adventures",
    imageSrc: "/seed/img_1419.jpg",
    imageStorage: "seed",
    primaryCategory: "high-conversion",
    secondaryCategories: ["editorial-minimal"],
    description:
      "A destination-marketplace homepage with a big overlapping-typography wordmark cut by the horizon, a 3-badge trust row, a labeled icon-card benefit column, and a priced destination carousel.",
    tags: ["destination marketplace", "overlapping typography", "trust badges", "priced destination cards", "benefit icon cards", "aerial photography"],
    needsAnalysis: false,
    createdAt: t(14),
    updatedAt: t(14),
    analysis: {
      styleName: "Overlap-Type Destination Marketplace",
      whatItIs:
        "A full-featured travel-booking marketplace homepage whose signature move is a huge wordmark ('WANDER') where the landscape photo's horizon line visually slices through the letters — part sky, part ground — making the logotype feel physically embedded in the destination rather than pasted on top.",
      whyItWorks:
        "That horizon-cut typography trick turns a fairly conventional travel-marketplace layout (search bar, trust stats, destination cards, packages) into something with one genuinely memorable moment, without adding any design complexity elsewhere. Everything below the hero is deliberately conventional and information-dense — icon benefit cards, priced destination tiles with star ratings, a numbered 3-step booking process — which is the right trade-off for a conversion-focused marketplace.",
      vocabulary: {
        layout: "full-bleed photo hero with a horizon-cut wordmark, followed by a dense conventional content stack",
        composition: "the hero's typography is deliberately composed to interact with the photo's horizon line",
        typography: "massive bold condensed display wordmark for the hero, clean sans for all supporting UI",
        color: "natural landscape photography color with a dark navy UI accent for buttons and text",
        contrast: "white/dark wordmark split across a light-sky/dark-ground photo for a built-in contrast trick",
        spacing: "tight, functional spacing typical of a conversion-optimized marketplace layout",
        shapes: "rounded search bar and buttons, rounded-corner destination photo cards with price/rating badges",
        imagery: "aerial and landscape destination photography across many different locations",
        texture: "clean and photographic, no added texture or grain",
        hierarchy: "hero wordmark → trust stats → benefit icon cards → destination card carousel → package cards → booking steps",
        interfaceStyle: "OTA/marketplace-style booking site with a functional top search bar",
        motion: "carousel arrows on the destination row imply horizontal scroll/paging",
      },
      keywords: [
        "destination marketplace",
        "horizon-cut typography",
        "overlapping wordmark",
        "trust stat row",
        "benefit icon cards",
        "priced destination carousel",
        "star rating badge",
        "booking search bar",
        "package cards",
        "3-step booking process",
        "philippines travel",
        "conversion-focused layout",
      ],
      layout: {
        header: "Standard nav (Home/Destinations/Packages/Blog/About) with a functional search bar and 'Book now' button",
        hero: "Full-bleed aerial coastal photo with an oversized wordmark whose baseline sits exactly on the horizon line",
        hierarchy: "Wordmark → 'why choose us' intro with trust stats → 3 benefit icon cards → destination carousel → package cards → booking steps",
        grid: "3-stat row, 3 stacked benefit cards, 4-across destination carousel, 3-column package row",
        cta: "Solid dark navy pill buttons ('Plan Your Trip', 'Book now') plus outline variants for secondary actions",
        imagePlacement: "Full-bleed hero photo, uniform rounded destination thumbnails with price/rating overlays, package photo cards",
        transitions: "Clean white section breaks; the hero photo itself is the only dramatic transition device",
        footer: "Not shown in this crop, but implied to continue the light, structured layout",
      },
      reusableElements: [
        "Aligning a hero wordmark's baseline to the photo's horizon line for a memorable typographic moment",
        "A compact 3-stat trust row directly beneath the intro paragraph",
        "Destination cards that surface price and rating directly on the thumbnail, not behind a click",
        "A numbered 'booking made easy as 1-2-3' process strip to reduce perceived friction",
      ],
      avoidCopying: [
        "The 'WANDER.ph' brand name and the specific Philippine destinations/pricing shown",
        "The exact stats (12k travelers, 10yrs, 50+ destinations) and package names",
      ],
    },
    imagePromptFields: {
      subject: "A dramatic green coastal cliff landscape with a lighthouse on a headland, ocean meeting the horizon in the upper portion of the frame",
      composition: "Wide landscape shot with a clearly defined horizon line roughly through the middle third, positioned so a large centered wordmark could visually straddle sky and land",
      colorPalette: "vivid green cliffside, deep ocean blue, soft overcast sky",
      lighting: "natural bright daylight with diffused cloud cover",
      mood: "adventurous, expansive, optimistic",
      texture: "detailed grass and cliffside texture, smooth ocean surface",
      perspective: "elevated aerial/drone wide-angle view",
      renderStyle: "vibrant aerial travel photography",
      placement: "full-bleed hero image for a travel marketplace, composed so a large central wordmark can align its baseline with the photo's horizon line",
      aspectRatio: "16:9",
      negative: "no text, no logos, no watermarks, no people, no boats or visible vessels",
    },
    briefFields: {
      visualDirection:
        "A conversion-focused travel marketplace with one memorable hero typography trick (wordmark aligned to the photo's horizon) followed by a dense, conventional, trust-building content stack.",
      colorPalette: [
        { name: "Deep Navy UI", hex: "#1B2A41" },
        { name: "Ocean Blue", hex: "#3E7CA6" },
        { name: "Fresh Green", hex: "#5C8C4A" },
        { name: "Clean White", hex: "#FFFFFF" },
      ],
      typography:
        "Massive bold condensed display sans for the hero wordmark (sized to interact with the photo's horizon); a clean, highly legible UI sans (Inter/Work Sans) for all search, card, and body content.",
      layoutSystem:
        "Full-bleed hero; constrained max-width (~1200–1280px) content body; 3-column benefit and package grids collapsing responsively; horizontally scrollable destination carousel; 12–16px card radius throughout.",
      heroDirection:
        "Full-bleed landscape photo with a huge wordmark positioned so its baseline aligns with the photo's natural horizon line, plus a short supporting line and two CTAs (primary + secondary/outline).",
      sections: [
        "Hero with horizon-aligned wordmark",
        "Trust intro with stat row and benefit icon cards",
        "Destination carousel with price/rating",
        "Package/tour highlight cards",
        "Booking-made-easy step strip",
        "Footer",
      ],
      ctaStyle:
        "Solid dark navy pill for the primary action ('Book now' / 'Plan Your Trip'), paired with an outline pill of the same shape for secondary actions ('Explore Destinations').",
      cardStyle:
        "Rounded-corner destination cards with the photo filling most of the card, a price badge top-corner and rating/location text beneath; benefit cards pair a colored icon tile with a short headline and description.",
      imageDirection:
        "Bright, vivid aerial and landscape destination photography that reads well behind bold overlaid typography — favor images with a clear horizon or strong compositional line.",
      mobileBehavior:
        "Hero wordmark scales down while preserving the horizon-alignment concept where possible; stat row wraps or becomes horizontally scrollable; destination carousel becomes swipeable; benefit cards stack full-width.",
      interactionIdeas:
        "Destination carousel supports drag/swipe with visible prev/next arrows; cards lift slightly on hover; the booking-steps strip could animate its connecting line as the user scrolls.",
      accessibility:
        "Verify wordmark-over-photo contrast at the horizon boundary specifically (the riskiest zone); carousel needs accessible prev/next controls and pause-on-focus if auto-playing; price/rating badges need text, not color/icon alone.",
      conversion:
        "Keep the search/booking entry point visible in the header at all times; surface price and rating directly on browsing cards; close with a low-friction numbered process strip to reassure hesitant users right before the final CTA.",
    },
  },

  {
    id: "seed-1420",
    title: "Турпоходы — Russia Trekking Routes",
    imageSrc: "/seed/img_1420.jpg",
    imageStorage: "seed",
    primaryCategory: "textured-collage",
    secondaryCategories: ["warm-organic"],
    description:
      "A hiking-tour brand with a torn-paper/canvas texture background, a hand-lettered script tagline, and a dotted itinerary path connecting torn-edge photo tiles down a long scrolling page.",
    tags: ["hiking tours", "torn paper texture", "script tagline", "dotted itinerary path", "grunge background", "outdoor photography"],
    needsAnalysis: false,
    createdAt: t(15),
    updatedAt: t(15),
    analysis: {
      styleName: "Grunge-Canvas Expedition Journal",
      whatItIs:
        "A hiking/trekking tour site styled like a physical expedition journal: a worn canvas-and-torn-paper background texture runs through the entire page, photos have irregular torn edges instead of clean rectangles, and a hand-written script tagline ('Собирайте моменты, а не вещи') sits beside a serif headline.",
      whyItWorks:
        "The torn-paper photo treatment and canvas texture do a lot of emotional work for an outdoor/adventure brand — it feels tactile, well-traveled, and analog in a way a clean digital grid never could, which fits a hiking audience specifically. Faint oversized numerals (01, 02, 03) watermarked behind each route section add a journal-like sense of sequence without needing heavy UI chrome, and the dotted path connecting route photos mirrors an actual trail map.",
      vocabulary: {
        layout: "long single-column scroll with a continuous background texture running through every section",
        composition: "route photos torn/cut into irregular shapes rather than clean rectangles, connected by a dotted trail line",
        typography: "bold serif display headline paired with a hand-written script accent line",
        color: "warm sepia/khaki tones with muted greens and blues from outdoor photography",
        contrast: "dark serif text over light canvas texture; light overlay text over darker route photos",
        spacing: "generous vertical spacing between route sections to let the dotted trail path read clearly",
        shapes: "irregular torn/ripped photo edges as the primary distinctive shape motif",
        imagery: "authentic outdoor trekking, camping, and mountaineering photography with a documentary feel",
        texture: "heavy canvas/paper grain texture layered across the entire background",
        hierarchy: "headline + script tagline → route-selection filter form → sequential numbered route sections",
        interfaceStyle: "editorial/journal-style content site, deliberately non-'appy' and tactile",
        motion: "not visible, but the torn-paper and numeral watermark style suggests scroll-triggered reveal animation",
      },
      keywords: [
        "expedition journal style",
        "torn paper texture",
        "canvas grunge background",
        "hand-written script tagline",
        "dotted trail path",
        "irregular photo edges",
        "serif display headline",
        "numbered route watermark",
        "authentic hiking photography",
        "outdoor adventure brand",
        "sepia khaki palette",
        "documentary travel photography",
      ],
      layout: {
        header: "Simple centered nav (Главная/Туры/О путешествиях/Туристам/Отзывы) over the torn-paper hero photo",
        hero: "Torn-edge photo of a sunlit tent interior with a bold serif headline and hand-written script tagline beneath it",
        hierarchy: "Headline → route-selection form (place, trip type, month) → sequential numbered route sections connected by a dotted path",
        grid: "Simple horizontal 3-field form; single-column sequential route layout below",
        cta: "Bordered/outline button with a hand-drawn-style rectangle outline for the primary 'ПОДОБРАТЬ ТУР' action",
        imagePlacement: "Full-width torn-edge hero photo, then large irregular-edge route photos alternating down the page",
        transitions: "The canvas texture and dotted path provide continuity instead of hard section breaks",
        footer: "Not shown in this crop",
      },
      reusableElements: [
        "A continuous canvas/paper texture background to unify a long single-page scroll",
        "Torn/irregular photo edges as a signature shape motif instead of clean rectangles",
        "Pairing a bold serif headline with a hand-written script accent line for warmth",
        "Oversized faint numerals watermarking each sequential section",
      ],
      avoidCopying: [
        "The Russian-language copy and specific route names (Восхождение на Эльбрус, Поход по Горному Крыму)",
        "The specific torn-photo assets and hand-lettered script content",
      ],
    },
    imagePromptFields: {
      subject: "A rugged mountaineer in weather-worn outdoor gear standing at the edge of a rocky alpine ridge, backpack visible, looking out over a vast mountain range",
      composition: "Off-center subject placement with generous negative space, composed so the image could be cropped with an irregular torn-paper edge without losing the subject",
      colorPalette: "warm sepia and khaki tones with muted slate blue and forest green",
      lighting: "natural directional daylight with warm golden undertones, slightly documentary in feel",
      mood: "authentic, rugged, nostalgic, adventurous",
      texture: "natural rock and fabric texture, intended to be layered with a torn-paper/canvas overlay in post",
      perspective: "eye-level to slightly low angle, documentary photography style",
      renderStyle: "authentic documentary-style outdoor photography, desaturated toward sepia",
      placement: "large content image within a scrolling itinerary page, designed to be cropped with an irregular torn edge and connected to adjacent sections by a dotted path graphic",
      aspectRatio: "4:5",
      negative: "no text, no logos, no watermarks, no bright saturated colors, no modern gear branding",
    },
    briefFields: {
      visualDirection:
        "A tactile, journal-like expedition brand built on a continuous canvas/torn-paper texture, irregular photo shapes, and a serif-plus-script typography pairing that feels analog and well-traveled rather than digital and slick.",
      colorPalette: [
        { name: "Canvas Khaki", hex: "#D8CDB4" },
        { name: "Aged Paper", hex: "#EFE7D6" },
        { name: "Expedition Slate", hex: "#495A63" },
        { name: "Ink Brown", hex: "#3A2F26" },
      ],
      typography:
        "A bold, slightly weathered-feeling serif (e.g. Fraunces, Tiempos) for headlines, paired with a genuine hand-written script typeface for tagline accents — this pairing is the core of the brand's warmth.",
      layoutSystem:
        "Long single-column scroll with a continuous subtle canvas texture as the page background; irregular torn-edge photo masks (custom SVG clip-paths) rather than rectangles; generous 96–140px spacing between sequential sections.",
      heroDirection:
        "A torn-edge hero photograph with a bold serif headline and a hand-written script tagline beneath it, plus a simple bordered route/trip-selection form as the first interactive element.",
      sections: [
        "Hero with headline, script tagline, and route-selection form",
        "Sequential numbered route/itinerary sections with torn-edge photos",
        "Testimonials or traveler stories",
        "Footer with contact and links",
      ],
      ctaStyle:
        "Hand-drawn-style bordered/outline buttons (irregular or sketchy rectangle border) rather than smooth solid pills, reinforcing the analog, journal feel.",
      cardStyle:
        "Avoid conventional boxed cards; favor torn-edge photo masks with text placed directly alongside, connected by a dotted trail-path graphic with small circular waypoint markers.",
      imageDirection:
        "Authentic, documentary-style outdoor/adventure photography with a warm, slightly desaturated sepia grade — avoid glossy, overly commercial travel photography.",
      mobileBehavior:
        "Torn-edge photo masks simplify to gentler crops if performance/clarity requires it; sequential route sections stack full-width; the dotted path becomes a simple vertical line with waypoint dots.",
      interactionIdeas:
        "Faint oversized route numerals could fade/scale in as each section enters view; the dotted path could draw itself progressively on scroll; photo torn-edges could have a very subtle parallax.",
      accessibility:
        "Script typography must be reserved for short accent phrases only, never body copy, to remain legible; ensure sufficient contrast between ink-brown text and canvas texture (test against the busiest texture areas); irregular photo clip-paths must not crop out essential image content needed for alt-text meaning.",
      conversion:
        "Let mood and authenticity build trust before the ask — keep the route-selection form simple (3 fields) and place it directly under the hero so ready-to-book visitors don't have to hunt for it.",
    },
  },

  {
    id: "seed-1422",
    title: "Rennale Renuelly — Botanical Layers",
    imageSrc: "/seed/img_1422.jpg",
    imageStorage: "seed",
    primaryCategory: "warm-organic",
    secondaryCategories: ["textured-collage"],
    description:
      "A botanical/sustainability brand concept built from layered macro leaf photography, faceted paper-craft background shapes, and a card wall mixing photography, gradients, and line icons.",
    tags: ["botanical brand", "macro leaf photography", "paper-craft shapes", "mixed card wall", "gold foil accent", "sustainability"],
    needsAnalysis: false,
    createdAt: t(16),
    updatedAt: t(16),
    analysis: {
      styleName: "Layered Botanical Craft Wall",
      whatItIs:
        "A nature/sustainability brand concept where a hero of overlapping fresh and dried macro leaf photography sits above a dark faceted 'paper-craft' feature panel and a closing wall of mixed-treatment cards — some photographic, some flat-color with a line icon, some gradient with a gold-foil icon — all in one cohesive earthy palette.",
      whyItWorks:
        "Mixing fresh green and dried brown leaves in the same hero composition gives a sustainability-adjacent brand a natural 'full lifecycle' visual metaphor without saying a word about it. The closing card wall's deliberate material variety (photo, flat color, gradient, foil-icon) keeps a long grid of six cards visually interesting while every card still shares the same rounded shape language and warm-to-green palette, so the variety never reads as inconsistency.",
      vocabulary: {
        layout: "layered macro-photo hero, a faceted dark feature panel, then a 6-card mixed-material closing wall",
        composition: "diagonal, overlapping leaf placement in the hero for organic asymmetry",
        typography: "soft rounded display sans headline, simple centered sans for panel/card labels",
        color: "deep teal-green base with warm cream, tan, and a gold-foil accent",
        contrast: "light cream headline text over a deep green hero photo; white icons/text on a dark faceted panel",
        spacing: "tight card-wall gutters; generous breathing room in the hero and feature panel",
        shapes: "faceted low-poly panel background, consistently rounded card corners across all six closing cards",
        imagery: "macro photography of both fresh green and dried tan leaves, used as the dominant visual material",
        texture: "layered paper-like faceted texture in the feature panel, natural leaf texture in the hero",
        hierarchy: "headline + CTA → faceted feature panel (4 icon benefits) → 6-card mixed material wall",
        interfaceStyle: "brand/marketing concept site, presentation-deck-like card wall",
        motion: "not visible, but the layered leaf composition suggests parallax depth on scroll",
      },
      keywords: [
        "botanical brand concept",
        "macro leaf photography",
        "faceted paper-craft panel",
        "mixed-material card wall",
        "gold foil icon accent",
        "deep teal-green palette",
        "sustainability visual metaphor",
        "low-poly texture",
        "rounded pill CTA",
        "layered organic composition",
        "earthy warm neutrals",
        "nature brand identity",
      ],
      layout: {
        header: "Not distinctly visible — hero begins immediately with headline and leaf photography",
        hero: "Large layered macro-photo of green and dried leaves with a headline, body copy, and a warm gradient pill CTA on a teal-green backdrop",
        hierarchy: "Headline + CTA → faceted dark panel with 4 icon benefits → 6-card closing wall mixing photo/flat/gradient treatments",
        grid: "4-column icon-benefit row inside the feature panel; 3-column x 2-row closing card grid",
        cta: "Warm gradient (tan-to-cream) pill button with dark text for strong contrast against the green hero",
        imagePlacement: "One large layered macro leaf photo in the hero, one smaller photo card within the closing 6-card wall",
        transitions: "Flat color-block section breaks (green hero → dark faceted panel → lighter green card-wall background)",
        footer: "A small centered label ('Pestres 1') suggests a footer/credit line begins here",
      },
      reusableElements: [
        "Mixing fresh and dried/aged versions of the same natural material in one hero photo as a lifecycle metaphor",
        "A faceted, low-poly textured panel as a distinctive alternative to a plain solid-color feature section",
        "A closing card wall that intentionally varies material (photo/flat-color/gradient) while keeping shape and palette consistent",
        "A warm gradient pill CTA used as the single accent against an otherwise green-and-neutral palette",
      ],
      avoidCopying: [
        "The specific (placeholder/garbled) headline and body copy text as shown",
        "The exact leaf photography and faceted panel graphic asset",
      ],
    },
    imagePromptFields: {
      subject: "An overlapping arrangement of fresh green leaves and dried autumn-toned leaves layered together in a diagonal composition",
      composition: "Diagonal layered arrangement filling roughly two-thirds of the frame, with open space in the opposite corner for headline text",
      colorPalette: "deep forest and sage green fresh leaves, warm tan and sepia dried leaves, soft teal background",
      lighting: "soft diffused studio lighting with gentle directional highlights defining leaf veining",
      mood: "natural, grounded, quietly optimistic, sustainable",
      texture: "detailed leaf veining and surface texture, crisp dried-leaf edges contrasted with smooth fresh-leaf surfaces",
      perspective: "flat-lay to slightly angled macro perspective",
      renderStyle: "high-detail macro botanical photography",
      placement: "full-width hero image for a nature/sustainability brand, composed with open negative space in one corner for a headline and CTA",
      aspectRatio: "16:9",
      negative: "no text, no logos, no watermarks, no people, no plastic or synthetic materials",
    },
    briefFields: {
      visualDirection:
        "A nature/sustainability brand built on layered macro leaf photography mixing fresh and dried materials, a faceted low-poly feature panel, and a closing card wall that deliberately varies material treatment within one cohesive earthy palette.",
      colorPalette: [
        { name: "Deep Forest Teal", hex: "#1F4A3E" },
        { name: "Sage Green", hex: "#7C9873" },
        { name: "Warm Tan", hex: "#B98A5E" },
        { name: "Gold Foil Accent", hex: "#D8AE5C" },
      ],
      typography:
        "A soft, rounded geometric sans (e.g. Quicksand, Nunito Sans at a heavier weight) for headlines, giving warmth without losing modernity; a simple matching sans at regular weight for card and panel labels.",
      layoutSystem:
        "Full-width hero with diagonal photo layering; a full-width faceted/textured panel for a 4-icon benefit row; a 3-column (2-row) closing card grid with consistent 16–20px rounded corners across all card types.",
      heroDirection:
        "Full-width layered macro photography (or illustration) combining two states of the same natural material for a lifecycle metaphor, paired with a centered or left-aligned headline and a warm gradient pill CTA.",
      sections: [
        "Hero with headline and CTA",
        "Faceted feature panel with icon-led benefits",
        "Mixed-material closing card wall (offerings, values, or product highlights)",
        "Footer",
      ],
      ctaStyle:
        "A warm gradient (tan-to-cream) rounded pill button with dark text, reserved for the single primary action; simple text links for secondary navigation within cards.",
      cardStyle:
        "A deliberately varied set of card treatments — one photographic, several flat-color with a simple line icon, one gradient with a foil-style icon — unified by identical rounded corners and a shared color family so variety reads as intentional richness, not inconsistency.",
      imageDirection:
        "Macro/close-up natural photography showing texture and material detail, ideally contrasting two states (fresh/dried, raw/refined) of the same subject to reinforce a lifecycle or sustainability narrative.",
      mobileBehavior:
        "Hero photo simplifies its diagonal layering for smaller viewports; the 4-icon benefit row collapses to 2x2 then a single column; the 6-card wall stacks to 2 columns then 1, preserving each card's individual material treatment.",
      interactionIdeas:
        "Leaves in the hero could have a very subtle floating/parallax motion; cards in the closing wall lift slightly on hover; the gradient CTA could shift its gradient angle on hover for a soft shimmer.",
      accessibility:
        "Confirm cream/white text holds AA contrast against both the green hero photo and the dark faceted panel; icon-only card elements need accompanying text labels; gold-foil accents should not be the sole indicator of an interactive card.",
      conversion:
        "Use the lifecycle visual metaphor to build an emotional, values-led case before presenting concrete offerings in the card wall, and keep exactly one CTA style reserved for the primary action so it stays recognizable across a visually varied page.",
    },
  },

  {
    id: "seed-1423",
    title: "Hero — Bold Portrait Type",
    imageSrc: "/seed/img_1423.jpg",
    imageStorage: "seed",
    primaryCategory: "bold-swiss-typography",
    secondaryCategories: [],
    description:
      "A stripped-down agency hero: a giant grotesk wordmark spanning the full width in a plain white band, sitting directly above an uncropped saturated-orange portrait photograph.",
    tags: ["swiss typography", "giant wordmark", "duotone orange", "portrait photography", "minimal nav", "agency hero"],
    needsAnalysis: false,
    createdAt: t(17),
    updatedAt: t(17),
    analysis: {
      styleName: "Two-Block Swiss Portrait Hero",
      whatItIs:
        "An agency/portfolio hero reduced to exactly two stacked blocks: a plain white band holding one enormous grotesk wordmark ('Hero') and a minimal nav, sitting directly on top of an uncropped, richly saturated orange-toned portrait photograph — no gradient, no overlay, no scrim.",
      whyItWorks:
        "The extreme scale of the wordmark relative to the tiny nav type creates an immediate, confident hierarchy that needs no further explanation, and letting the photo occupy its own full, unmodified color block (rather than fading it into the white section) makes the split itself the visual statement. This is Swiss/International Typographic Style logic applied directly to a web hero: strict grid, minimal palette, type as the dominant graphic element.",
      vocabulary: {
        layout: "two stacked full-width blocks — plain type band, then a full-bleed photo band — no overlap between them",
        composition: "extreme scale contrast between the giant wordmark and the tiny nav/label type",
        typography: "massive tight-tracked grotesk display wordmark; tiny uppercase tracked nav labels",
        color: "pure white type band paired with a single saturated orange duotone-style photo block",
        contrast: "black-on-white for type; deep shadow-to-orange contrast within the portrait photo itself",
        spacing: "wide even margins on the type band; the photo band uses zero internal padding (full-bleed)",
        shapes: "a hard rectangular split between the two blocks, no rounding, no softening",
        imagery: "a single dramatic profile portrait with a strong saturated color grade",
        texture: "flat and clean in the type band, rich photographic shadow/highlight texture in the portrait",
        hierarchy: "wordmark dominates completely; nav is present but intentionally near-invisible in scale",
        interfaceStyle: "portfolio/agency marketing site, radically minimal chrome",
        motion: "not visible, but the hard block-to-block cut suggests a scroll-triggered reveal of the next section",
      },
      keywords: [
        "swiss typography",
        "giant wordmark hero",
        "duotone orange portrait",
        "two-block layout",
        "grotesk display type",
        "minimal agency site",
        "extreme scale contrast",
        "full-bleed photography",
        "tight letter-tracking",
        "international typographic style",
        "flat color block",
        "portrait photography hero",
      ],
      layout: {
        header: "Tiny nav embedded directly inside the white type band: small label left, links center, social abbreviations right",
        hero: "Giant wordmark fills the white band; the full-bleed portrait photo forms the entire lower half with zero text overlay",
        hierarchy: "Wordmark completely dominates; everything else (nav, photo) is secondary by scale alone",
        grid: "Simple two-row block grid — no columns needed at this level of reduction",
        cta: "None visible — the hero is pure brand statement, not a conversion moment",
        imagePlacement: "One full-bleed portrait photograph occupying the entire lower half of the hero",
        transitions: "A single hard horizontal cut between the white band and the photo band",
        footer: "Not shown in this crop",
      },
      reusableElements: [
        "Extreme type-scale contrast between a giant wordmark and near-invisible nav labels for instant hierarchy",
        "A hard, ungraded cut between a flat color block and a full-bleed photo block instead of blending them",
        "Committing to a single saturated duotone-style color for hero photography instead of natural color grading",
        "Radically minimal nav (just a handful of small words) when the brand statement itself is the content",
      ],
      avoidCopying: [
        "The literal word 'Hero' as a brand name/wordmark",
        "The specific portrait photograph and its exact orange color grade",
      ],
    },
    imagePromptFields: {
      subject: "A dramatic side-profile portrait of a person with strong facial structure, photographed against a solid saturated orange background",
      composition: "Tight profile crop filling the frame, subject positioned right-of-center with negative space on the left",
      colorPalette: "a single saturated orange-red duotone treatment across the entire image, deep shadow tones",
      lighting: "hard directional side lighting creating strong shadow definition and a graphic silhouette quality",
      mood: "confident, bold, editorial, striking",
      texture: "smooth skin rendered in deep shadow and highlight contrast, minimal fine detail — graphic rather than photorealistic",
      perspective: "eye-level profile view, tightly cropped",
      renderStyle: "high-contrast duotone editorial portrait photography",
      placement: "full-bleed lower half of a two-block website hero, sitting directly beneath a plain white band reserved for an oversized wordmark",
      aspectRatio: "16:9",
      negative: "no text, no logos, no watermarks, no natural/neutral color grading, no busy background",
    },
    briefFields: {
      visualDirection:
        "A radically minimal Swiss/International Typographic Style hero: an oversized grotesk wordmark in a plain white band directly above a single saturated duotone-style portrait photograph, with no blending between the two.",
      colorPalette: [
        { name: "Pure White", hex: "#FFFFFF" },
        { name: "Ink Black", hex: "#111111" },
        { name: "Saturated Orange", hex: "#F4551E" },
        { name: "Deep Shadow", hex: "#2A1208" },
      ],
      typography:
        "A tight-tracked grotesk display sans (e.g. Neue Haas Grotesk, Helvetica Now Display) at an extreme scale (12–18vw) for the wordmark, contrasted against tiny uppercase tracked nav labels (11–12px) for maximum hierarchy difference.",
      layoutSystem:
        "Two full-width stacked blocks with a hard horizontal division — no rounded corners, no overlap, no gradient blend; wide consistent side margins (5–8% of viewport width) in the type band only.",
      heroDirection:
        "A plain white or neutral band holding one massive wordmark and minimal nav, sitting directly atop a full-bleed, single-color-graded photograph with zero text overlay on the image itself.",
      sections: [
        "Two-block type + photo hero",
        "About/mission statement in large type",
        "Services or work grid",
        "Selected work/portfolio showcase",
        "Contact block",
        "Footer",
      ],
      ctaStyle:
        "If used at all, keep CTAs as understated text links in the same tight-tracked type as the nav — avoid rounded pill buttons, which would undercut the hard-edged Swiss aesthetic.",
      cardStyle:
        "Avoid decorative cards; where content needs grouping, use simple ruled dividers and generous type-driven hierarchy instead of boxed containers.",
      imageDirection:
        "Single, boldly color-graded (duotone or near-duotone) editorial photography — commit to one saturated color treatment per image rather than natural, neutral color grading.",
      mobileBehavior:
        "Wordmark scales down proportionally but remains dominant (still large relative to nav); the two-block structure stays intact (stacked, full-width) since it's already a single-column layout.",
      interactionIdeas:
        "Minimal — perhaps a slow, subtle color-grade shift on the photo on load, or a hard-cut reveal transition between sections rather than a soft fade, to stay consistent with the aesthetic's confidence.",
      accessibility:
        "Ensure the tiny nav type still meets minimum legible size and AA contrast despite its intentionally small scale; provide a skip-to-content link since the wordmark isn't a landmark; duotone photography needs meaningful alt text since color alone carries mood.",
      conversion:
        "This style deliberately delays conversion pressure — use it for brand/portfolio credibility first, and place a clear, simple contact path in the very next section rather than trying to force a CTA into the hero itself.",
    },
  },

  {
    id: "seed-1424",
    title: "Enblox — Work Smarter Gradient",
    imageSrc: "/seed/img_1424.jpg",
    imageStorage: "seed",
    primaryCategory: "gradient-saas",
    secondaryCategories: ["bold-swiss-typography"],
    description:
      "A productivity-app landing page pairing a crisp black display headline and italic serif eyebrow with a soft multicolor mesh-gradient backdrop that floods in behind the product shot.",
    tags: ["saas landing page", "mesh gradient", "italic serif eyebrow", "product phone mockup", "three-feature grid", "soft glow background"],
    needsAnalysis: false,
    createdAt: t(18),
    updatedAt: t(18),
    analysis: {
      styleName: "Editorial-Serif Gradient SaaS",
      whatItIs:
        "A productivity-app landing page that starts on a plain white section with a confident black display headline and a small italic serif eyebrow line, then lets a soft multicolor mesh gradient bloom in behind a floating phone product shot — mixing an editorial typographic voice with a distinctly consumer-app visual warmth.",
      whyItWorks:
        "Pairing a serious black grotesk headline with a delicate italic serif eyebrow ('Your Day, in Perfect Rhythm.') gives the page more personality than the category's usual all-sans SaaS voice, while costing nothing in clarity. The mesh gradient is introduced gradually — starting as a soft glow around the product shot rather than a full-bleed background — so it reads as atmosphere rather than decoration, and the page can still return to plain white for the feature-explanation section without feeling inconsistent.",
      vocabulary: {
        layout: "centered single-column hero flowing into a soft gradient product zone, then a plain-white two-column feature section",
        composition: "symmetric centered hero type, an off-axis floating hand-holding-phone product shot",
        typography: "bold black grotesk display headline, italic serif eyebrow and pull-quote accents",
        color: "white base with a soft pink-orange-purple mesh gradient bloom and a separate vivid purple-to-yellow closing band",
        contrast: "black text on white for clarity in copy-heavy zones; light UI elements floating on the soft gradient for the product moment",
        spacing: "generous centered hero spacing; a clean 2-column split with ample gutter in the feature section",
        shapes: "fully rounded pill nav buttons and CTAs, no hard rectangles in the interactive UI",
        imagery: "a naturalistic product-in-hand photograph and a separate vivid lifestyle portrait for the closing section",
        texture: "soft, airbrushed gradient blur transitioning to clean flat white, then to a punchy saturated photo",
        hierarchy: "eyebrow → headline → subhead → CTA → product visual → feature headline + 3-column detail",
        interfaceStyle: "consumer productivity SaaS marketing site, warm rather than clinical",
        motion: "not visible, but the gradient bloom suggests an animated or scroll-linked glow effect",
      },
      keywords: [
        "saas landing page",
        "mesh gradient background",
        "italic serif eyebrow",
        "black grotesk headline",
        "product phone mockup",
        "pill nav and CTA",
        "three-feature grid",
        "soft glow product zone",
        "consumer productivity app",
        "vivid closing photo band",
        "editorial serif accent",
        "warm saas branding",
      ],
      layout: {
        header: "Simple centered nav (Home/Services/Features/Blog/Pricing) with a pill 'Try it for free' button, all on plain white",
        hero: "Centered italic eyebrow, bold headline, subhead, and CTA on white, transitioning into a soft gradient zone holding a phone-in-hand product photo",
        hierarchy: "Eyebrow → headline → subhead → CTA → product photo → 'Designed to help you do more' feature headline → 3-column feature detail",
        grid: "Centered single column for the hero; simple 2-column (headline + supporting text) into a 3-column feature detail row",
        cta: "Rounded pill button, outline style in the nav, likely solid-fill for the primary hero CTA",
        imagePlacement: "One large centered product photograph (hand holding a phone) and one full-bleed vivid portrait closing the section",
        transitions: "Gradual gradient bloom-in behind the product shot, then a hard cut back to white, then a hard cut into a saturated photo band",
        footer: "Not shown in this crop",
      },
      reusableElements: [
        "Pairing a bold black grotesk headline with a small italic serif eyebrow/accent line for editorial warmth in an otherwise clean SaaS layout",
        "Introducing a mesh gradient gradually as a glow around one focal product shot rather than flooding the whole page",
        "Returning to plain white for information-dense feature sections so the gradient stays a special moment, not wallpaper",
        "A vivid, punchy full-bleed lifestyle photo band as a page-closing mood shift",
      ],
      avoidCopying: [
        "The 'Enblox' brand name and specific product copy",
        "The exact gradient colorway and the specific product/portrait photography used",
      ],
    },
    imagePromptFields: {
      subject: "A softly diffused, colorful mesh-gradient light bloom in pink, orange, and violet tones, radiating outward from a central point on a white background",
      composition: "Centered radial gradient bloom with soft, organic edges fading to pure white at the frame's corners, leaving the center clear for a product photo overlay",
      colorPalette: "soft pink, warm orange, and light violet blending into white",
      lighting: "soft, diffused, airbrushed glow with no hard edges or defined light source",
      mood: "optimistic, energetic, approachable, calm",
      texture: "smooth airbrushed gradient blur, completely free of grain or photographic texture",
      perspective: "flat, frontal, no perspective depth",
      renderStyle: "digital mesh-gradient illustration",
      placement: "background asset behind a centered product photograph on a SaaS landing page, designed to fade to white at the edges so it can sit within an otherwise white page",
      aspectRatio: "1:1",
      negative: "no text, no logos, no watermarks, no photographic elements, no hard geometric shapes",
    },
    briefFields: {
      visualDirection:
        "A consumer productivity SaaS brand that pairs an editorial black-headline-plus-italic-serif voice with a soft mesh-gradient glow introduced only around key product moments, staying otherwise clean and white.",
      colorPalette: [
        { name: "Clean White", hex: "#FFFFFF" },
        { name: "Ink Black", hex: "#161616" },
        { name: "Gradient Coral", hex: "#F27D6B" },
        { name: "Gradient Violet", hex: "#8A5FC4" },
      ],
      typography:
        "A bold black grotesk (e.g. Neue Montreal, General Sans Bold) for display headlines, paired with a delicate italic serif (e.g. Canela Italic, Times-adjacent) for short eyebrow lines and pull-quote emphasis within headlines — this pairing is the brand's signature voice.",
      layoutSystem:
        "Centered single-column hero, max-width ~800px for copy; a soft radial gradient introduced as a background layer only within the product-shot section; clean 3-column feature grid on plain white beneath; fully rounded pill buttons throughout.",
      heroDirection:
        "Centered italic eyebrow line, bold headline, one-sentence subhead, and a single pill CTA on a plain white background, with a soft mesh-gradient glow blooming in behind a product photograph directly beneath it.",
      sections: [
        "Hero with eyebrow, headline, and CTA",
        "Gradient-backed product showcase",
        "Feature explanation with 3-column detail",
        "Vivid full-bleed lifestyle/mood photo band",
        "Testimonial or social proof",
        "Final CTA",
        "Footer",
      ],
      ctaStyle:
        "Fully rounded pill buttons — outline style for secondary nav actions, solid-fill for the primary hero and closing CTAs — kept simple and text-forward rather than icon-heavy.",
      cardStyle:
        "Minimal use of boxed cards; feature content presented as clean typographic columns (headline + short paragraph) rather than bordered cards, keeping the page feeling editorial rather than dashboard-like.",
      imageDirection:
        "One naturalistic product-in-use photograph (e.g. a phone in hand) for the hero, and one vivid, high-saturation lifestyle portrait to close the page with an emotional beat — avoid generic stock 'people at laptops' imagery.",
      mobileBehavior:
        "Hero copy and CTA remain centered and stack normally; the gradient glow scales down proportionally behind the product shot; the 3-column feature grid collapses to a single stacked column.",
      interactionIdeas:
        "The mesh gradient could shift slowly and subtly (very slow animation, not distracting) to feel alive; pill buttons get a soft shadow-lift on hover; the closing photo band could have a gentle parallax scroll.",
      accessibility:
        "Italic serif eyebrow text must stay short and large enough to remain legible (italics reduce readability at small sizes); ensure black text on the softest gradient areas still passes AA contrast; the closing vivid photo needs meaningful alt text if it conveys brand message rather than pure decoration.",
      conversion:
        "Keep the primary CTA identical in the nav and hero so it's instantly recognizable on return visits; use the gradient product moment as the emotional hook, then immediately ground it with a clear, concrete 3-point feature explanation.",
    },
  },

  {
    id: "seed-1425",
    title: "MNTN — Hiking Guide",
    imageSrc: "/seed/img_1425.jpg",
    imageStorage: "seed",
    primaryCategory: "dark-cinematic",
    secondaryCategories: ["editorial-minimal"],
    description:
      "A long-form editorial hiking guide on a near-black background, using a right-edge numbered progress rail and giant translucent numerals to structure sequential how-to content.",
    tags: ["editorial guide", "dark theme", "numbered progress rail", "translucent numerals", "serif headline", "alternating image layout"],
    needsAnalysis: false,
    createdAt: t(19),
    updatedAt: t(19),
    analysis: {
      styleName: "Numbered Dark Editorial Guide",
      whatItIs:
        "A long-form 'how to hike' guide styled like a dark, premium digital magazine feature — a full-bleed mountain hero with a classic serif headline, then three sequential lesson sections, each announced by a giant translucent numeral watermark and a small gold uppercase eyebrow label.",
      whyItWorks:
        "Using oversized translucent numerals as section markers turns what could be a plain FAQ-style page into something with real visual rhythm and a sense of progression, while a right-edge '01/02/03' index rail gives readers a persistent sense of where they are in a long scroll. A classic serif headline against a near-black nature photo signals editorial authority (like a real outdoor magazine) rather than generic marketing copy.",
      vocabulary: {
        layout: "full-bleed photo hero followed by three alternating-side lesson sections on solid near-black",
        composition: "each lesson pairs a giant translucent numeral, a small label, a headline, body text, and one photo — alternating left/right",
        typography: "classic serif display headline, small gold tracked uppercase labels, clean sans body copy",
        color: "near-black background, natural landscape photography, a single warm gold/mustard accent",
        contrast: "white/cream serif headline over a darkened photo; gold accent text against near-black for wayfinding elements",
        spacing: "generous vertical spacing between the three lesson sections for a slow, deliberate reading pace",
        shapes: "simple rectangular photo crops, a thin vertical rule for the progress rail",
        imagery: "authentic hiking and mountaineering photography, both wide landscape and in-the-moment action shots",
        texture: "photographic in the hero and lesson images, otherwise flat near-black with subtle numeral watermarks",
        hierarchy: "hero headline → 'get started' eyebrow + numeral → lesson headline → body copy → 'read more' link",
        interfaceStyle: "long-form editorial/content site, magazine-like rather than product-marketing-like",
        motion: "the right-edge index rail and 'scroll down' cue imply a guided, sequential reading experience",
      },
      keywords: [
        "dark editorial guide",
        "translucent numeral watermark",
        "numbered progress rail",
        "serif display headline",
        "gold accent label",
        "long-form content layout",
        "alternating image sections",
        "authentic hiking photography",
        "magazine-style web design",
        "sequential lesson structure",
        "near-black background",
        "outdoor guide branding",
      ],
      layout: {
        header: "Minimal top nav (Equipment/About us/Blog) with an account icon, social icons on the left edge",
        hero: "Full-bleed mountain landscape photo with a classic serif headline and a small 'A HIKING GUIDE' eyebrow tag; a right-edge 01/02/03 index rail",
        hierarchy: "Hero headline → lesson 01 (numeral + label + headline + text + photo) → lesson 02 → lesson 03 → footer",
        grid: "Simple 2-column lesson layout (text block + photo) alternating sides for each of the three numbered sections",
        cta: "Small text link with an arrow ('read more →') repeated identically for each lesson — low-pressure, editorial tone",
        imagePlacement: "Full-bleed hero photo, then one supporting photo per lesson section, alternating left/right placement",
        transitions: "Continuous near-black background ties all lesson sections together with no hard visual breaks",
        footer: "Dark footer with brand statement, two link columns (blog links, brand links), and copyright line",
      },
      reusableElements: [
        "Giant translucent numeral watermarks to mark sequential sections in a long-form guide",
        "A thin right-edge numbered index rail as a persistent 'you are here' wayfinding device",
        "Alternating left/right image placement across repeated content blocks to avoid monotony",
        "A single warm gold accent reserved for small labels and wayfinding, keeping the rest of the palette strictly neutral",
      ],
      avoidCopying: [
        "The 'MNTN' brand name and the specific hiking-guide copy",
        "The specific landscape and action photography used",
      ],
    },
    imagePromptFields: {
      subject: "A vast layered mountain range with a lone hiker standing on a grassy foreground ridge, photographing the view",
      composition: "Wide landscape composition with the hiker small in the frame for scale, layered mountain ridges receding into the distance, open sky space at the top for headline text",
      colorPalette: "muted sage green foreground, cool blue-grey layered mountains, soft overcast sky",
      lighting: "soft diffused daylight with atmospheric haze separating the mountain layers",
      mood: "contemplative, adventurous, quietly epic",
      texture: "detailed grassy foreground texture, soft atmospheric haze on distant peaks",
      perspective: "elevated wide-angle landscape view",
      renderStyle: "editorial outdoor/adventure photography with a slightly desaturated, moody grade",
      placement: "full-bleed dark hero background for a long-form guide, with the upper portion left open for a serif headline and a small eyebrow label",
      aspectRatio: "16:9",
      negative: "no text, no logos, no watermarks, no additional people beyond the single hiker, no man-made structures",
    },
    briefFields: {
      visualDirection:
        "A dark, magazine-style long-form editorial guide using classic serif headlines, giant translucent numeral watermarks, and a persistent numbered index rail to structure sequential content with real reading rhythm.",
      colorPalette: [
        { name: "Near Black", hex: "#12181C" },
        { name: "Deep Slate", hex: "#232E33" },
        { name: "Warm Gold Accent", hex: "#D6B15E" },
        { name: "Cream Text", hex: "#F1EDE3" },
      ],
      typography:
        "A classic editorial serif (e.g. Freight Display, Tiempos) for headlines at 40–56px; a small tracked uppercase sans in the gold accent color for eyebrow labels and index numbers; a clean sans for body copy at 16–17px with generous line-height.",
      layoutSystem:
        "Full-bleed hero, then a continuous near-black background hosting sequential two-column lesson blocks that alternate text/photo sides; a thin fixed or sticky numbered index rail along the right edge; oversized (120px+) translucent numeral watermarks behind each section's content.",
      heroDirection:
        "Full-bleed darkened landscape or action photography with a classic serif headline, a small uppercase eyebrow tag, and a subtle 'scroll down' cue — plus the numbered index rail introduced immediately as a wayfinding device.",
      sections: [
        "Hero with eyebrow and serif headline",
        "Sequential numbered lesson/how-to sections (alternating image side)",
        "Closing CTA or newsletter signup",
        "Footer with brand statement and link columns",
      ],
      ctaStyle:
        "Understated text links with a small arrow icon and a gold accent color, repeated identically at the end of each content section rather than large buttons — consistent with the editorial, low-pressure tone.",
      cardStyle:
        "No boxed cards — content lives in clean text blocks paired with a single photo per section, unified by the numeral watermark and consistent alternating layout rhythm.",
      imageDirection:
        "Authentic, moody outdoor/adventure photography (wide landscapes and in-the-moment action shots) with a consistent desaturated dark grade so the gold accent always reads as the intentional pop of color.",
      mobileBehavior:
        "The index rail either hides or collapses into a simple horizontal progress indicator; alternating two-column lesson blocks stack to image-then-text or text-then-image consistently; numeral watermarks scale down but remain visible behind the section headline.",
      interactionIdeas:
        "The index rail highlights the current section number as the user scrolls; numeral watermarks could fade/scale in as their section enters view; 'read more' links underline or shift on hover.",
      accessibility:
        "Decorative numeral watermarks need aria-hidden treatment; verify cream text against the darkest and lightest photo areas passes AA contrast; the index rail needs an accessible equivalent (e.g. a visually-hidden 'section X of Y' announcement) since it's a purely visual device.",
      conversion:
        "This format is built for engagement and trust, not hard conversion — keep any CTA (newsletter, product link) minimal and placed only after the full-guide content, so it doesn't undercut the editorial credibility being built.",
    },
  },

  {
    id: "seed-1426",
    title: "City Arcade — Real Estate Bento",
    imageSrc: "/seed/img_1426.jpg",
    imageStorage: "seed",
    primaryCategory: "bold-swiss-typography",
    secondaryCategories: ["high-conversion"],
    description:
      "A real-estate platform hero pairing a huge geometric display wordmark with a motion-blurred 3D-rendered building, plus a bento-style feature list mixing a solid black card among plain white rows.",
    tags: ["real estate platform", "geometric display type", "3D render building", "bento feature list", "motion blur", "stat counters"],
    needsAnalysis: false,
    createdAt: t(20),
    updatedAt: t(20),
    analysis: {
      styleName: "Geometric Bento Real-Estate Platform",
      whatItIs:
        "A modern real-estate platform hero pairing a massive geometric wordmark with a glossy, motion-blurred 3D-rendered building that looks mid-transit rather than static, followed by a feature list styled like a bento grid — plain white rows for most items, with exactly one item flipped to a solid black card to draw the eye.",
      whyItWorks:
        "Giving the hero's 3D render a deliberate motion-blur trail is a small, specific choice that makes an otherwise generic 'future of real estate' render feel kinetic and premium rather than static and stock-like. In the feature list, flipping just one row to solid black among several plain white rows is an easy, high-leverage way to create a natural focal point in a repetitive list without redesigning every item.",
      vocabulary: {
        layout: "centered hero with a huge geometric wordmark and a large central 3D-render hero image, feature list as vertical bento rows",
        composition: "symmetric centered hero, asymmetric emphasis introduced later via the single black feature row",
        typography: "huge geometric/rounded-terminal display wordmark, clean simple sans for stats and body copy",
        color: "light neutral background with a black-and-white core palette, no added brand color",
        contrast: "black display type on white for the hero; one fully inverted (white-on-black) card in the feature list for contrast",
        spacing: "airy hero spacing; tighter, evenly divided spacing across the stacked feature rows",
        shapes: "clean rectangular photo/render frames, simple rounded stat pills off to the side",
        imagery: "a glossy, motion-blurred 3D architectural render suggesting movement and modernity",
        texture: "smooth reflective 3D render surfaces, otherwise flat and minimal throughout the UI",
        hierarchy: "wordmark → tagline/CTA row → stat counters (10K/5K/15+) → hero render → bold statement copy → bento feature rows",
        interfaceStyle: "real-estate SaaS/marketplace platform site, confident and minimal",
        motion: "the render's built-in motion blur strongly implies an animated/parallax hero treatment",
      },
      keywords: [
        "real estate platform",
        "geometric display wordmark",
        "3D render building",
        "motion blur render",
        "bento feature grid",
        "black accent card",
        "stat counter row",
        "minimal black and white palette",
        "modern real estate branding",
        "glossy architectural render",
        "confident hero typography",
        "sign-in nav pattern",
      ],
      layout: {
        header: "Simple nav (Home/Properties/Buy/Rent/Find Agent/Contact) with a search icon and 'Sign In' pill button",
        hero: "Centered huge wordmark with a tagline, small badge, and stat counters (10K/5K/15+) beside a large motion-blurred 3D render of a building",
        hierarchy: "Wordmark → tagline/badge → stat counters → 3D render hero image → bold statement line → bento-style feature rows",
        grid: "Simple stacked list for the feature rows, alternating a plain white row with one bold black row for emphasis",
        cta: "Small pill 'Sign In' button in the nav; arrow icons on feature rows imply each is clickable/expandable",
        imagePlacement: "One large centered 3D-render hero image, repeated as a smaller secondary render further down the page",
        transitions: "Clean flat white section breaks; the single black feature row is the only strong color break",
        footer: "Not shown in this crop",
      },
      reusableElements: [
        "Flipping exactly one item in an otherwise uniform list to an inverted (black/white) treatment to create a natural focal point",
        "Giving a 3D render deliberate motion blur to suggest kinetic energy rather than a static product shot",
        "Small stat counters placed directly beside the hero wordmark rather than in a separate section",
        "A strict black-and-white palette that lets typography and render quality carry the premium feeling instead of color",
      ],
      avoidCopying: [
        "The 'City Arcade' brand name and specific stats (10K happy clients, 5K properties sold)",
        "The specific 3D building render asset and its exact geometric form",
      ],
    },
    imagePromptFields: {
      subject: "A glossy, futuristic 3D-rendered modular building with reflective glass surfaces, captured with a strong motion-blur trail suggesting rapid movement",
      composition: "Centered hero composition with the building's motion-blur trail extending to one side, generous negative space above for an oversized wordmark",
      colorPalette: "monochrome black, white, and warm sunset-gold reflections on the glass surfaces",
      lighting: "dramatic directional lighting with warm golden-hour reflections against cool glass and metal surfaces",
      mood: "futuristic, confident, dynamic, premium",
      texture: "smooth glossy reflective glass and metal, motion-blur streaking for a sense of speed",
      perspective: "eye-level three-quarter view emphasizing the structure's modular geometric form",
      renderStyle: "photorealistic 3D architectural render with cinematic motion blur",
      placement: "large centered hero visual on a real-estate platform homepage, with ample white space above for an oversized wordmark and stat counters",
      aspectRatio: "16:9",
      negative: "no text, no logos, no watermarks, no people, no added brand colors outside black/white/gold",
    },
    briefFields: {
      visualDirection:
        "A confident, strictly black-and-white real-estate platform brand built around an oversized geometric wordmark, a kinetic motion-blurred 3D hero render, and a bento-style feature list that uses exactly one inverted card for focal emphasis.",
      colorPalette: [
        { name: "Pure White", hex: "#FFFFFF" },
        { name: "Ink Black", hex: "#0F0F0F" },
        { name: "Warm Gold Reflection", hex: "#D9A857" },
        { name: "Neutral Grey", hex: "#8C8C8C" },
      ],
      typography:
        "A huge geometric display sans with rounded or squared terminals (e.g. Poppins ExtraBold, Clash Display) for the hero wordmark; a clean simple grotesk for stats, nav, and body copy — keep the type palette to exactly two weights for discipline.",
      layoutSystem:
        "Centered hero, max-width ~1200px; stat counters placed inline beside hero copy rather than in a separate stats section; feature content organized as full-width stacked rows (bento-style) with exactly one row inverted to a solid black background for emphasis.",
      heroDirection:
        "Oversized centered wordmark with a short tagline and inline stat counters, above a large glossy 3D render with deliberate motion blur to suggest speed and modernity — avoid a static, stock-photo-style hero image.",
      sections: [
        "Hero with wordmark, stats, and 3D render",
        "Bold statement/positioning line",
        "Bento-style feature row list (one inverted for emphasis)",
        "Secondary render or property showcase",
        "\"Why choose us\" section",
        "Footer",
      ],
      ctaStyle:
        "Small rounded pill button for the primary nav action (e.g. 'Sign In' / 'Get Started'); feature rows use a simple arrow icon rather than a full button to suggest they're each clickable without adding visual weight.",
      cardStyle:
        "Full-width stacked feature rows rather than a grid of boxed cards; exactly one row flipped to a solid black background with white text as the visual anchor among otherwise plain white rows.",
      imageDirection:
        "Glossy, photorealistic 3D architectural renders with intentional motion blur or dynamic framing — avoid flat, static renders that could pass for a stock asset.",
      mobileBehavior:
        "Stat counters wrap beneath the wordmark instead of sitting inline; the hero render scales down but keeps its motion-blur direction; bento feature rows remain full-width stacked (already mobile-friendly by design).",
      interactionIdeas:
        "The 3D render could have a subtle scroll-linked parallax or rotation; the inverted black feature row could pulse or highlight briefly on scroll-into-view; arrow icons on feature rows shift right on hover.",
      accessibility:
        "Ensure the single inverted black row still meets AA contrast for white text; stat counters should be real text (not image-based) for screen readers; arrow-only affordances on feature rows need a full accessible name, not just an icon.",
      conversion:
        "Keep the stat counters directly in the hero as immediate credibility, and reserve the one inverted black row in the feature list for your single most compelling differentiator — the contrast will do the persuading.",
    },
  },
];
