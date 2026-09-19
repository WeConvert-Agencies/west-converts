# Inspiration Library

A private, local-first visual-reference tool for turning website screenshots you like into
reusable design vocabulary, image-generation prompts, and original website briefs — built for
designing client sites without copying anyone's work.

There is no login, no server, no database, and no paid API. Everything lives in your browser
(IndexedDB), on your machine.

## Running it

```bash
cd inspiration-library
npm install
npm run dev
```

Open the URL Vite prints (typically `http://localhost:5173`). To build a static production
bundle:

```bash
npm run build
npm run preview   # serve the built dist/ folder locally
```

## Adding screenshots

- Drag and drop image files anywhere on the page, or click **Add Inspiration** / **browse your
  files** to pick them from a dialog.
- Accepted formats: JPG, PNG, WEBP, GIF, up to 25MB per file. Larger images are automatically
  downscaled (longest edge capped at 2000px) and re-encoded as JPEG before being stored, so big
  phone screenshots don't bloat your local storage.
- Every new upload is marked **Needs Analysis**. Open it and click **Edit** to fill in:
  - Title, category, secondary categories, description, and tags
  - The full Design Analysis (style name, what it is, why it works, design vocabulary, keywords,
    layout breakdown, reusable elements, what to avoid copying)
  - The structured fields that generate the **Copy Image Prompt** and **Copy Website Brief**
    text
  - Once you're happy with an entry, uncheck **"Still needs analysis"** to clear the badge.
- The 20 seed inspirations that ship with the app were analyzed during development and don't
  need this step — they're there so you have a working example of a complete entry to reference.

## Using an entry

Each card has:

- **View Analysis** — opens the full breakdown: design style, what it is, why it works, design
  vocabulary (layout, composition, typography, color, contrast, spacing, shapes, imagery,
  texture, hierarchy, interface style, motion), keywords, layout breakdown, reusable elements,
  and what to avoid copying.
- **Copy Image Prompt** — copies a complete, ready-to-paste prompt for an image generator,
  describing subject, composition, palette, lighting, mood, texture, perspective, style,
  placement, aspect ratio, and negative instructions. It deliberately excludes the original
  brand/company and any text, logos, or watermarks.
- **Copy Website Brief** — copies a complete brief you can paste into Claude Code (or any AI
  coding tool) to build an *original* site inspired by the reference's direction — visual
  direction, color palette with hex values, typography, layout system, hero direction, page
  sections, CTA/button style, card styling, image direction, responsive behavior, interaction
  ideas, accessibility requirements, and conversion recommendations. It uses placeholders like
  `[BUSINESS NAME]`, `[BUSINESS TYPE]`, `[PRIMARY GOAL]`, `[PRIMARY CTA]`, `[SERVICES]`,
  `[LOCATION]`, and `[TARGET CUSTOMER]` for you to fill in per project, and explicitly instructs
  the reader not to clone the reference.
- **Edit** / **Delete** — edit any field, or permanently remove the entry (with a confirmation
  step).

Use the sidebar to filter by category or tag, the search bar to find entries by title, keyword,
category, or design characteristic, and the sort dropdown for newest/oldest/title/category.
Categories can be renamed, added, or deleted from the sidebar at any time.

## Backing up your library

- **Export Library** (sidebar) downloads a single JSON file containing all categories, all
  inspiration metadata and analysis, *and* the actual image bytes for anything you uploaded
  (base64-encoded inside the JSON). The 20 seed screenshots are not included in the export —
  they ship as static files with the app itself, so they don't need backing up.
- **Import Library** restores a previously exported JSON file, replacing your current library
  (including uploaded images) with the backup's contents.
- Refreshing or closing the browser does not lose anything — the library lives in IndexedDB and
  reloads automatically.

**Storage limitation:** because everything is local-first with no server, your library lives in
this specific browser's IndexedDB. It is not synced between browsers or devices — use Export /
Import to move your library, or to keep a safety copy outside the browser.

## Project structure

```
src/
  data/        Type definitions, default categories, and the 20 seed inspirations
  lib/         IndexedDB layer, image compression, prompt/brief generators, backup import/export
  hooks/       useLibrary (state + CRUD), useToast (notifications)
  components/  Sidebar, Toolbar, GalleryGrid, InspirationCard, DetailView, UploadZone, etc.
public/seed/   Compressed seed screenshots referenced by the seed data
```

No UI framework or component library is used — just React, TypeScript, and hand-written CSS
(`src/index.css`) designed to stay quiet and image-focused.

## Known limitations

- Clipboard copy relies on the browser's Clipboard API (`navigator.clipboard`), which requires a
  secure context (localhost or HTTPS) and, in some browsers, a user gesture — both are satisfied
  by normal use of the app.
- The library is per-browser, per-device local storage — see the backup note above.
- There is no AI-powered analysis. Design Analysis, Image Prompt, and Website Brief content is
  either hand-written (the 20 seed entries) or written by you through the Edit form for anything
  you add. The "Copy" buttons compose your structured fields into ready-to-paste text — they
  don't generate new analysis on their own.

## Suggested next improvement

The highest-value next step would be a lightweight **duplicate/near-duplicate detector** on
upload (perceptual hashing of the image) — with a library that grows over time from screenshots
saved on a whim, silently avoiding re-adding the same reference twice would keep the collection
clean without adding any account, server, or paid API.
