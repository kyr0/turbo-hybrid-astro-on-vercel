# Welcome to [Turbo Hybrid Astro on Vercel](https://turbo-hybrid-astro-on-vercel.vercel.app/)

Demo site: https://turbo-hybrid-astro-on-vercel.vercel.app/

This is an Astro 2.0 template project that implements an optimal way to use SSG and SSR together in one Astro project using Astro 2.0's hybrid output. It is configured to deploy to Vercel for hosting, SSR and API microservices (serverless and edge, as you wish). Turborepo is used for the monorepo management and follows the `turbo` best practices for `eslint`, `prettier`, `tsconfig`, code sharing and build caching (local and remote).

## Project layout

This project deploys on [Vercel](https://vercel.com/). You can clone this repo and deploy it on Vercel.
Make sure to set the root directory to: `apps/server` as this is the primary Astro project we deploy!

<img src="vercel-root-dir.png" />

You can find the Vercel configuration in `apps/server/vercel.json`. It makes sure that `turbo` is used.
I've also decided to activate [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching).

### App

You can have many apps in parallel that could re-use code from the packages. They are always located in the `apps` folder. By default, one `server` app is created and serves are the primarily deploy target for Vercel.

- `apps/server`: An Astro 2.0 hybrid rendering-enabled project. Implements the application logic, all the pages, application data, API microservice endpoints etc. pp.

The project is also pre-configured with `@vercel/analytics`, `preact`, `astrojs-service-worker`, `@astrojs/image`, `astro-robots-txt`, `astro-sitemap`, `astro-webmanifest`, `eslint`, `browserslist`, `dotenv`, `prettier`, `tsconfig` custom base config. 

### Image optimization

This project comes with the `sharp` package for local image optimization pre-configured.
Make sure to run in case that you're running into issues like: 'Something went wrong installing the "sharp" module':

`brew uninstall vips` (in case it is already installed via brew)

`npm install --ignore-scripts=false --foreground-scripts --verbose sharp`

### Shared packages

Shared packages are located in `packages/*`, such as:

- `packages/astro-components`: Astro components to be used by all Apps and packages
- `packages/layouts`: Astro layout components to be used all Apps and packages
- `packages/preact-components`: Preact components to be used by all Apps and packages
- `packages/tsconfig`: A unified tsconfig that is used in all packages and apps
- `packages/format`: Prettier configuration for all packages and apps
- `packages/eslint-config-custom`: Eslint configuration for all packages and apps

## Performance stats

- No cache (Vercel, remote in CI/CD): Builds in 40s
- With cache (Vercel, remote in CI/CD): FULL TURBO: 6s, one package or app affected: 34s (of which 24s is `yarn install`...)
- Locally, full build: 3.79s (on a Apple M1 Max machine/2021)
