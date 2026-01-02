# Empire Rewritten Hub

Static, framework-free site designed for GitHub Pages or custom domains using only relative paths. All pages use the shared CSS/JS under `assets/` and load external URLs from `assets/data/config.json`.

## Updating text and content
- Edit the HTML files in the repo root and subfolders (e.g., `books/index.html`, `world/index.html`).
- Meta titles and descriptions live in each page `<head>` block.
- Navigation/footer links are plain HTML; ensure relative paths remain intact when editing.

## External links configuration
- Open `assets/data/config.json` and update `externalLinks` (Patreon, Royal Road, email, socials) and `aheadCount`.
- Leave `baseUrl` empty for local/Pages path hosting; set it when moving to a custom domain if desired.
- Analytics keys are placeholders only; no provider is wired yet.

## Replacing hero/tile images
- Swap files in `assets/img/` with the same filenames (`hero.webp`, `tile-characters.webp`, `tile-timeline.webp`, `tile-maps.webp`, `tile-library.webp`, `og-default.webp`).
- Prefer optimized `.webp` images. Target ~150–300 KB for hero/tile images with responsive-friendly dimensions (e.g., 1600px width for hero, 800–1200px for tiles).

## Media library workflow
1. Upload images into `assets/img/library/<category>/` (books, characters, maps, timeline, news, misc).
2. Add or update entries in `assets/data/library.json` with filename, title, caption, category, and tags.
3. Commit changes. The library page auto-renders the gallery from the JSON.

## Newsletter form
- The homepage newsletter form is UI-only; submission triggers a JavaScript alert for now.

## Analytics note
- `assets/data/config.json` includes an `analytics` block left disabled. Wire a provider later if needed.
