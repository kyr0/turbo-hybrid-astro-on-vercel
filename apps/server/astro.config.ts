import { defineConfig } from 'astro/config'
import vercel from "@astrojs/vercel/serverless"
import { multiSitemapSSR } from "../../packages/multi-sitemap"

// https://astro.build/config
import react from '@astrojs/react';
import { ssgProxy } from '../../packages/ssg-proxy';

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'ignore',
  output: 'server', // SSR
  adapter: vercel(),
  vite: {
    // the ssgProxy() plugin makes the dev server Vite serve all statically pre-generated content
    plugins: import.meta.env.DEV ? [ssgProxy('http://127.0.0.1:2999')] : []
  },
  integrations: [react(), multiSitemapSSR()],
});