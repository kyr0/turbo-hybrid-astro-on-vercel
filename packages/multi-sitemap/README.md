# multi-sitemap

This package contains two Astro integrations for sitemap generation for multi-project Astro setups.

The `multiSitemapSSG` integration should be used in `apps/statuc/astro.config.ts`. 
This plugin saves the `pages` data passed in hook `astro:build:done`
to the `dist/sitemap.json` file on disk.

The `multiSitemapSSR` integration should be used in `apps/server/astro.config.ts`. 
This plugin loads the previously geneated SSG `pages` data from `dist/sitemap.json` 
and merges it with the SSR the `pages` data passed in hook `astro:build:done`.

Afterwards the official `sitemap` integration is called with the combined `pages` data.

