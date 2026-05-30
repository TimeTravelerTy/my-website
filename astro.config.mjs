// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with your real domain once you connect it on Vercel.
  site: 'https://tyronewhite.dev',
  output: 'static',
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  vite: {
    // @ts-expect-error — Tailwind's Vite plugin ships a different Vite type than
    // the one Astro bundles; this is a dual-package typing artifact, not a runtime issue.
    plugins: [tailwindcss()],
  },
});
