import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import serviceWorker from 'astrojs-service-worker'
import robotsTxt from 'astro-robots-txt'
import webmanifest from 'astro-webmanifest'
import sitemap from 'astro-sitemap'
import image from '@astrojs/image'

// alternatively, use '@astrojs/vercel/edge'
import vercel from '@astrojs/vercel/serverless'

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
      start_url: 'https://turbo-hybrid-astro-on-vercel.vercel.app/',
      display: 'standalone',
    }),

    // support for <Image> and <Picture> using sharp for optimization
    // see:
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
})
