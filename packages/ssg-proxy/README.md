# static-serve-dev

This package contains a tiny Vite plugin implementation that serves the statically generated
`dist` folder files from the `apps/static` Astro project configuration.

It is integrated in `apps/server/asto.config.ts` but only actively used, when the project
runs locally in `dev` mode. For production/in `build`, all `apps/static/dist` files are copied
over to the `apps/server` output directory and therefore copied over to the hosting platform (Vercel)
CDN for blazing fast, direct file serving.
