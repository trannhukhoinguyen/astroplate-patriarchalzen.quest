// @ts-check
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import config from "./src/config/config.json";
import languagesJSON from "./src/config/language.json";

const { default_language } = config.settings;

const supportedLang = [...languagesJSON.map((lang) => lang.languageCode)];
const disabledLanguages = config.settings.disable_languages;

// Filter out disabled languages from supportedLang
const filteredSupportedLang = supportedLang.filter(
    (lang) => !disabledLanguages.includes(lang),
);

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  prefetch: true,
  site: 'https://patriarchalzen.quest',
  trailingSlash: config.site.trailing_slash ? "always" : "ignore",
  integrations: [
    react(),
    sitemap(),
    tailwind(),
  ],
  i18n: {
    locales: filteredSupportedLang,
    defaultLocale: default_language,
  },
  experimental: {
    svg: true,
  },
});
