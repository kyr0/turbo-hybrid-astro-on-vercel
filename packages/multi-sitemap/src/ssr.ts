import type { AstroConfig, AstroIntegration } from 'astro'
import sitemap from '@astrojs/sitemap'
import type { SitemapOptions } from '@astrojs/sitemap'
import { readFileSync } from 'fs'
import { SSG_SITEMAP_CACHE_FILENAME } from './const'

export interface multiSitemapSSROptions extends SitemapOptions {
  // absolute path to the SSG app dist folder
  ssgDistPath: string
}

export const multiSitemapSSR = (options: multiSitemapSSROptions): AstroIntegration => {
  let config: AstroConfig
  let ssgDistFolderPath = options.ssgDistPath
  // need to remove it to escape the schema check in sitemap() impl.
  delete options.ssgDistPath
  const sizemapHooks = sitemap(options)
  return {
    name: 'multi-sitemap-ssr',
    hooks: {
      'astro:config:done': async (result) => {
        config = result.config
        sizemapHooks.hooks['astro:config:done']!(result)
      },

      'astro:build:done': async (result) => {
        // read from pre-generated static pages sitemap-ssg.json (see ./ssg.ts)
        const ssgPages = JSON.parse(
          readFileSync(`${ssgDistFolderPath}/${SSG_SITEMAP_CACHE_FILENAME}`, {
            encoding: 'utf-8',
          })
        )

        // merge pages data
        result.pages = [...ssgPages, ...result.pages]

        sizemapHooks.hooks['astro:build:done']!(result)
      },
    },
  }
}
