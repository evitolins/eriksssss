# Product Context

Overview

- The site is a lightweight, static personal portfolio for Ev, designed to showcase creative work (animation, music, mixtapes), development experiments, and documentation.
- It prioritizes fast page loads, accessible content, and easy editing without complex tooling.

Why this exists

- Centralize Ev's creative and technical portfolio in a single, maintainable repository.
- Provide an always-available reference for potential collaborators, employers, and personal archiving.
- Make it trivial to add or update work samples with minimal workflow friction.

Problems it solves

- Fragmented examples/artifacts across cloud drives and disparate formats.
- Heavy-weight portfolio systems that are difficult to maintain or host.
- Loss of context for projects—this repo stores images, notes, and pages alongside demos.

How it should work

- Content is authored as static HTML and Markdown and committed into the repository.
- The site can be served from any static host (GitHub Pages, S3, Netlify).
- Images and assets remain in repo subfolders (`imgs/`, `_thumbnails/`) with clear naming conventions.
- Pages are simple, self-contained HTML files with minimal JS and CSS dependencies.

Primary features & content types

- Gallery pages for animation and stills (imgs/posters, imgs/anim_timeline).
- Project pages that combine images, writeups, and embedded media (audio, video).
- Small interactive demos or animations using lightweight JS where necessary.
- A changelog / TODO references for in-progress work.

User experience goals

- Immediate readability: pages render cleanly on first load without waiting for heavy assets.
- Responsive layout: desktop and mobile-friendly with readable typography and touch-targets.
- Clear navigation: obvious access to major sections (Work, Animation, Music, Development).
- Searchability: content structured to be indexable by search engines and for local search.

Content workflow & editing

- Preferred workflow: edit page or Markdown -> commit -> deploy via static hosting (GitHub Pages).
- Avoid complex build steps unless a feature requires it.
- Keep content modular and consistently organized so additions are straightforward.

Success metrics (product-focused)

- Site loads within 1s on a typical broadband connection.
- New content can be added and deployed in under 10 minutes.
- Visitors can find a portfolio piece within 3 clicks or less.

Notes

- This document should be updated when the content strategy changes (e.g., adding a blog, switching hosting).
