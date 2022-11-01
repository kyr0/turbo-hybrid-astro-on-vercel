import type { AstroConfig, AstroIntegration } from 'astro'
import sitemap from '@astrojs/sitemap'
import type { SitemapOptions } from '@astrojs/sitemap'

export const multiSitemapSSR = (options: SitemapOptions = {}): AstroIntegration => {
  let config: AstroConfig
  const sizemapHooks = sitemap(options)

  console.log('sizemapHooks', sizemapHooks)
  return {
    name: 'multi-sitemap-ssr',
    hooks: {
      'astro:config:done': async (result) => {
        config = result.config
        sizemapHooks.hooks['astro:config:done']!(result)
      },

      'astro:build:done': async (result) => {
        // TODO: load from disk: ../static/dist/sitemap.json, merge then call
        console.log('[multi-sitemap-ssr] build is done', result.dir, result.pages)
        sizemapHooks.hooks['astro:build:done']!(result)
      },
    },
  }
}
