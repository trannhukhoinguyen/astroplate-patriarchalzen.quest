// @ts-check
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  prefetch: true,
  site: 'https://patriarchalzen.quest',
  integrations: [
    mdx(),
    react(),
    sitemap(),
    tailwind()
  ],
  experimental: {
    svg: true,
  },
});
