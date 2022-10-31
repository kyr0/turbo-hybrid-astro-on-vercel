# server / SSR

This app is the `server` Astro project. It is set-up in SSR (Server Side Rendering) mode.
Whenever a pages routes, a serverless function on Vercel is triggered and responds with the page content.

Use this Astro project to render all dynamic routes, that you cannot statically pre-generate 
in the `static` Astro project.

Don't worry, all `static` dist files become automatically available in this project.

## How it works

### In `dev` mode

The Vite plugin implemented in `packages/static-serve-dev` is integrates in `astro.config.ts`
and serves all static content from `apps/static/dist`.

## In `prod` mode

The `postbuild` NPM script in `package.json` makes sure that all statically generated SSG
content lands in the folder, the hosting platform (in this case Vercel), expects as its 
output directory. In case of the Vercel adaper integration, this is `.vercel/output/static`.
Adapt this for any other hosting platform adapter integration, if you're heading for another one.
Check the respective integration code - you might be suprised: https://github.com/withastro/astro/blob/main/packages/integrations/vercel/src/serverless/adapter.ts#L37
