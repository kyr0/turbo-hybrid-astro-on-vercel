import { APIRoute } from 'astro'
import pagesData from '../../data/pages.json'

// Static API endpoint:
// e.g. GET /data/cv.json
// e.g. GET /data/welcome.json
// -> gets pre-rendered by executing as a Vercel Function (locally: Node.js)
//    the content is written to disk according to the routing path

// see: https://docs.astro.build/de/core-concepts/endpoints/#static-file-endpoints
export const get: APIRoute = async ({ params }) => {
  const slug = params.slug
  return {
    body: JSON.stringify({
      name: pagesData.filter((pageData) => pageData.slug === slug)[0],
    }),
  }
}

// only supports GET method (obviously), but dynamic routing can be done

// see: https://docs.astro.build/de/core-concepts/endpoints/#params-and-dynamic-routing
export function getStaticPaths() {
  return pagesData.map((pageData) => ({
    params: { slug: pageData.slug },
  }))
}
