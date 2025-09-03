# Active Context

Current work focus

- Initialize the Memory Bank for the `eriksssss` repository so future sessions of Cline have a reliable project context.
- Keep the site lightweight and maintainable while documenting current priorities and immediate next steps.
- Stabilize the documentation so contributors (and Cline after reset) can resume work without needing oral history.

Recent changes

- Created `memory-bank/projectbrief.md` and `memory-bank/productContext.md`.
- Memory Bank initialized in the repository under `memory-bank/`.

Next steps

- Create remaining core Memory Bank files:
  - `systemPatterns.md` — document architecture and design patterns used in the site.
  - `techContext.md` — list technologies, hosting, build/deploy patterns and tooling.
  - `progress.md` — track what's complete, what's pending, and known issues.
- Periodically update `activeContext.md` when priorities shift or new decisions are made.
- Consider adding a short CONTRIBUTING.md or documentation checklist for adding new portfolio items.

Active decisions & constraints

- Keep content authored as static HTML and Markdown; avoid introducing a build system unless strictly necessary.
- Prefer explicit, human-readable structure in repo (folders like `imgs/`, `css/`, pages as top-level HTML).
- Memory Bank documents are the canonical source for Cline after memory reset; keep them current.

Important patterns & preferences

- Minimal dependencies: use only small, well-maintained JS/CSS where needed (e.g., Flickity included in repo).
- Asset organization: images under `imgs/` (subfolders for posters, anim_timeline, companies, etc.) and `_thumbnails/` when required.
- Semantic, accessible HTML: prioritize readable markup and sensible headings for SEO and readability.
- Manual deploy workflow: commit -> push -> GitHub Pages or S3/Netlify deploy (no mandatory CI required).

Learnings & notes

- The site has accumulated many assets and examples; consistent naming and small docs make onboarding easier.
- Memory Bank entries should be kept concise and actionable—avoid duplicate content across files.

Immediate todos

- [ ] Create `systemPatterns.md`
- [ ] Create `techContext.md`
- [ ] Create `progress.md`
- [ ] Add short CONTRIBUTING.md or checklist for adding portfolio items (optional)
