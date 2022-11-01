import type { AstroIntegration } from 'astro'
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { SSG_SITEMAP_CACHE_FILENAME } from './const'

export const multiSitemapSSG = (): AstroIntegration => {
  return {
    name: 'multi-sitemap-ssg',
    hooks: {
      'astro:build:done': async ({ dir, pages }) => {
        const ssgDistDir = fileURLToPath(dir)
        writeFileSync(`${ssgDistDir}/${SSG_SITEMAP_CACHE_FILENAME}`, JSON.stringify(pages), {
          encoding: 'utf-8',
        })
      },
    },
  }
}
