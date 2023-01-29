import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import serviceWorker from 'astrojs-service-worker'
import robotsTxt from 'astro-robots-txt'
import webmanifest from 'astro-webmanifest'
import sitemap from 'astro-sitemap'
import image from '@astrojs/image'

// alternatively, use '@astrojs/vercel/edge'
import vercel from '@astrojs/vercel/serverless'

const siteUrl =
  process.env.VERCEL_ENV === 'production'
    ? process.env.VERCEL_URL // 'your.prod.domain.here'
    : process.env.VERCEL_URL // default vercel hosting site url
    ? `https://${process.env.VERCEL_URL}/` // remote CI fallback
    : 'https://localhost:3000/' // local fallback

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'ignore',
  output: 'server',
  site: siteUrl,
  adapter: vercel(),
  publicDir: '../../public',
  vite: {
    base: './',
  },
  integrations: [
    // add preact support with vast React compatibility
    // we use preact here to shrink down to 3k JS served per page that uses client components
    // but you can use any supported frontend framework of course
    // see: https://docs.astro.build/en/core-concepts/framework-components/
    preact({ compat: true }),

    // generate a customizable sitemap.xml
    // see: https://github.com/alextim/astro-lib/tree/main/packages/astro-sitemap
    sitemap(),

    // generate a custom robots.txt
    // see: https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt
    robotsTxt({
      policy: [
        {
          userAgent: '*',
        },
      ],
    }),

    // generate a custom service-worker.js using WorkBox
    // see: https://github.com/tatethurston/astrojs-service-worker
    serviceWorker(),

    // generates a manifest.json for PWA support,
    // see: https://github.com/alextim/astro-lib/tree/main/packages/astro-webmanifest
    webmanifest({
      name: 'turbo-hybrid-astro-on-vercel',
      icon: '../../public/favicon.svg',
      start_url: siteUrl,
      display: 'standalone',
    }),

    // support for <Image> and <Picture> using sharp for optimization
    // see:
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
})
