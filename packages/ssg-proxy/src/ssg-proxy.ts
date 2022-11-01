import type { ViteDevServer } from 'vite'
import { IncomingMessage, ServerResponse } from 'http'
import { get } from 'http'

async function requestFile(url: string) {
  return new Promise<IncomingMessage>((resolve, reject) => {
    try {
      get(url, resolve)
    } catch (e) {
      reject(e)
    }
  })
}

// proxy requests that hit the SSR dev server first to SSG pre-generated files first,
// just as if they were served by the CDN on the hosting platform
export function ssgProxy(ssgBaseUrl: string) {
  return {
    name: 'ssg-proxy',
    configureServer(server: ViteDevServer) {
      server.middlewares.use(async (req: IncomingMessage, res: ServerResponse, next) => {
        if (
          req.method === 'GET' &&
          // skip @fs and @id fetches
          !req.url!.startsWith('/@') &&
          // node_modules requests which might not be part of the SSG project
          !req.url!.startsWith('/node_modules/.vite')
        ) {
          try {
            const requestUrl = `${ssgBaseUrl}${req.url}`
            const result = await requestFile(requestUrl)

            if (result.statusCode === 200) {
              // console.log('[ssg-proxy] answering static reqest for file:', requestUrl)
              // high-performance stream piping the SSG response

              result.pipe(res)
            } else {
              next()
            }
          } catch (e) {
            console.log('[ssg-proxy] error', e)
          }
        } else {
          next()
        }
      })
    },
  }
}
