import type { AstroConfig, AstroIntegration } from 'astro'

export const multiSitemapSSG = (): AstroIntegration => {
  let config: AstroConfig
  return {
    name: 'multi-sitemap-ssg',
    hooks: {
      'astro:config:done': async ({ config: cfg }) => {
        config = cfg
        console.log('[multi-sitemap-ssg] config is done')
      },

      'astro:build:done': async ({ dir, pages }) => {
        // TODO: save to disk: dist/sitemap.json
        console.log('[multi-sitemap-ssg] build is done', dir, pages)
      },
    },
  }
}
