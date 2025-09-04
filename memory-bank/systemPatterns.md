# System Patterns

Purpose

- Document the high-level architecture, recurrent design patterns, and implementation conventions used across the `eriksssss` static site repository.
- Help future contributors and Cline (after a memory reset) understand where to make changes and how parts interact.

High-level architecture

- Monolithic static repo: content is stored as self-contained HTML pages, CSS under `css/`, images under `imgs/`, and small JS assets in the repo root (e.g., `flickity2.3.0.js`).
- No mandatory build step: pages are served as-is from GitHub Pages, S3, Netlify, or similar static hosts.

Core file responsibilities

- index.html — primary landing page; central navigation point.
- development.html, animation.html, mixtapes.html, music.html, cylinder.html — standalone pages for portfolio sections and demos.
- css/main.css — global layout and typographic rules.
- css/development.css, css/timeline.css — page / feature-specific styles.
- imgs/ — canonical location for media assets (posters, thumbnails, company logos, timeline assets).
- flickity2.3.0.js (+ css) — lightweight carousel interactions included for galleries.

Design patterns & conventions

- Single-page-per-asset concept: each project or demo is a self-contained HTML file that references local images and CSS to avoid cross-dependencies.
- Minimal JS pattern: JavaScript is used sparingly for interactive widgets (carousels, lightweight DOM enhancement), keeping progressive enhancement in mind.
- Progressive enhancement: pages render usable static HTML/CSS first; JS enhances behavior but is not required for core content visibility.
- Asset locality: images referenced by relative paths (e.g., `imgs/posters/`, `imgs/anim_timeline/`) so pages remain portable.
- Naming conventions: use descriptive, kebab- or snake-case filenames for images and pages; thumbnails in `_thumbnails/` when smaller variants are needed.
- Reuse of small libs: include only necessary, small third-party libs (Flickity) checked into repo to avoid external dependency failure.

Styling & CSS patterns

- Global + page-specific CSS: `main.css` for global rules; page-specific CSS files for isolated styling overrides and feature styles.
- Responsive-first rules: prefer fluid layouts and breakpoints for mobile-first rendering.
- Simple utility classes: small set of utility classes for spacing and layout rather than a full utility framework.

Content & authoring patterns

- Prefer static HTML for canonical pages; author short Markdown files for notes or drafts when useful (e.g., `customDevelopment.md`).
- Keep project writeups self-contained near their assets or in single-page writeups for clarity.
- Use in-repo TODO.md and changes tracked in `progress.md` (Memory Bank) for current work.

Critical implementation paths

- Adding a new portfolio page:
  1. Create an HTML file at repo root (or a clear subfolder).
  2. Add required images to `imgs/` or `_thumbnails/`.
  3. Link CSS from `css/main.css` or a page-specific CSS file.
  4. Commit and push; deploy via chosen static host.
- Updating gallery/carousel:
  1. Edit HTML to include new slides and images.
  2. Ensure Flickity initialization (if used) matches DOM structure.
  3. Test responsiveness and loading speed.
- Rendering Markdown (if used client-side):
  1. Sanitize or author trusted Markdown only (since rendering occurs client-side).

Performance & maintainability patterns

- Keep images optimized (compressed formats or webp where appropriate) and include appropriately sized thumbnails.
- Avoid large inlined assets in HTML; prefer links to optimized media files.
- Track large assets in a logical folder structure to avoid accidental duplication.

Security & content considerations

- No server-side code in repo — host via static providers to reduce attack surface.
- Client-side rendered Markdown assumes trusted content (repo-controlled) — if accepting external content, add sanitization.

Onboarding & contribution guidance (high-level)

- Read Memory Bank files first (projectbrief.md, productContext.md, activeContext.md, systemPatterns.md, techContext.md, progress.md).
- Follow naming and asset placement conventions.
- Keep PRs small and focused: change one page or feature per PR for easier review.

Notes

- This doc is intentionally lightweight; expand with code snippets or patterns when a recurring implementation detail needs explicit instruction.
