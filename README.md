# tyronewhite.dev

Personal website + blog for Tyrone White. Built with [Astro](https://astro.build), styled with
Tailwind CSS v4, deployed on Vercel.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
```

## Build

```sh
npm run build    # static output → dist/
npm run preview  # serve the built site locally
```

## Structure

- `src/pages/` — routes (home, about, projects, blog, cv).
- `src/content/blog/` — blog posts as `.mdx`. Add a new file here to publish a post; no code
  changes needed. Schema lives in `src/content.config.ts`.
- `src/components/` — reusable UI (header, footer, cards, figure, prose).
- `src/layouts/BaseLayout.astro` — shared page shell (head, theme toggle, header, footer).
- `src/styles/global.css` — design tokens (light/dark, accent) + Tailwind import.
- `src/assets/` — images optimized at build time via Astro's `<Image>`.

## Adding a blog post

Create `src/content/blog/<slug>.mdx` with frontmatter:

```mdx
---
title: "Post title"
description: "One-line summary."
pubDate: 2026-05-30
tags: ["tag-a", "tag-b"]
heroImage: "../../assets/blog/<slug>/hero.png"  # optional
draft: false
---

import Figure from "../../components/Figure.astro";
```

## Notes

- CV content, social links, and the downloadable resume PDF are placeholders — fill them in.
- `site` in `astro.config.mjs` should be set to the real domain before deploy.
