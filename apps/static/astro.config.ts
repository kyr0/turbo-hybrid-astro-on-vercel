import { defineConfig } from 'astro/config';
import { multiSitemapSSG } from "../../packages/multi-sitemap"

// https://astro.build/config
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [react(), multiSitemapSSG()]
});