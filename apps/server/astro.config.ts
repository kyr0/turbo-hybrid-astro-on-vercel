import { defineConfig } from 'astro/config'

// alternatively, use '@astrojs/vercel/edge'
import vercel from '@astrojs/vercel/serverless'
import preact from '@astrojs/preact'
import sitemap from '@astrojs/sitemap'
import serviceWorker from 'astrojs-service-worker'

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'ignore',
  output: 'server',
  site: 'http://localhost:3000/',
  adapter: vercel(),
  publicDir: '../../public',
  vite: {
    base: './',
  },
  integrations: [preact({ compat: true }), sitemap(), serviceWorker()],
})
