import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import { multiSitemapSSR } from '../../packages/multi-sitemap'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

// https://astro.build/config
import react from '@astrojs/react'
import { ssgProxy } from '../../packages/ssg-proxy'

const pathOfThisFile = fileURLToPath(import.meta.url)

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'ignore',
  output: 'server', // SSR
  site: 'http://localhost:3000',
  adapter: vercel(),
  publicDir: '../../public',
  vite: {
    // the ssgProxy() plugin makes the dev server Vite serve all statically pre-generated content
    plugins: [ssgProxy('127.0.0.1:2999')],
  },
  integrations: [
    react(),
    multiSitemapSSR({ ssgDistPath: `${dirname(pathOfThisFile)}/../static/dist` }),
  ],
})
