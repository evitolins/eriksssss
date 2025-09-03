# Tech Context

Core technologies

- Static HTML, CSS, minimal JavaScript.
- No required build system; pages render as authored in the repository.
- Small third-party libraries included in-repo:
  - Flickity (carousel) — `flickity2.3.0.js` and `css/flickity2.3.0.css`
  - Marked (client-side Markdown renderer) — `bower_components/marked`

Development environment

- Platform: macOS (primary developer environment noted in repo context).
- Editor: any text editor / IDE that works with static files (VSCode recommended).
- Local preview: open HTML files directly in a browser (double-click) or run a simple local static server:
  - Python 3: `python3 -m http.server 8000`
  - Node: `npx serve` (if Node installed)
  - Or use VSCode Live Server extension for live reload.

Dependencies & package management

- Bower components are present for compatibility; no active package install required for basic work.
- Repo intentionally vendors small libs to reduce external dependency breakage.

Hosting & deployment

- Recommended hosts:
  - GitHub Pages (branch-based or docs folder)
  - Netlify (drag-and-drop or linked to repo)
  - S3 + CloudFront for static hosting
- Deploy workflow (simple):
  1. Edit content locally.
  2. Commit changes: `git add -A && git commit -m "Update: <desc>"`
  3. Push: `git push origin main`
  4. Host provider picks up deploy (e.g., GitHub Pages) or manual deploy to S3/Netlify as configured.

Build & optimization recommendations

- Optimize images before committing: convert to WebP where appropriate and create thumbnails for galleries.
- Run an image audit occasionally to remove duplicates and oversized files.
- Minify JS/CSS only if adding larger assets; keep source copies in repo for clarity.

Tooling & suggested developer commands

- Preview a local server:
  - `python3 -m http.server 8000`
  - `npx serve` (requires Node)
- Check large files:
  - `du -sh imgs/* | sort -h`
- Basic commit & push:
  - `git add -A && git commit -m "message" && git push`
- Optional: run Lighthouse audits via Chrome DevTools or automated tools to check performance/accessibility.

Constraints & compatibility

- Keep to small, well-known libraries; avoid heavy runtime frameworks to preserve lightweight site goals.
- Client-side Markdown rendering assumes content is trusted (repo-controlled). If external content is introduced, add sanitization steps.

Recommendations for future improvements

- Optionally introduce a small build step (e.g., a lightweight task runner) only if a clear benefit (image pipeline, templating) is required.
- Consider a simple script to generate thumbnails and optimize images automatically (e.g., a small Node or Python script).
- Add a CONTRIBUTING.md to document the recommended file naming, image sizes, and deploy steps for new contributors.

Notes

- This file should be updated when new tooling is added or hosting/deploy workflows change.
