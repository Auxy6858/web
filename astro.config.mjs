import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import astroI18next from "astro-i18next";
import markdownConfig from './markdown.config.ts'

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  markdown: markdownConfig,
  integrations: [
    mdx({
      ...markdownConfig,
      extendPlugins: false,
    }),
  ],
  integrations: [astroI18next()],

});