# Welcome to [LITE on Astro](https://astro.build)

Live demo: https://litecms-astro.vercel.app/

TODO: use SSR + SSG in combination

## Design System: Radix

STOLEN FROM: https://github.com/radix-ui/design-system
PREVIEW: https://design-system.modulz-deploys.com/

## Remote Caching is activated using `turborepo`

https://turbo.build/repo/docs/core-concepts/remote-caching

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `yarn`                 | Installs dependencies                              |
| `yarn dev`             | Starts local dev server at `localhost:3000`        |
| `yarn build`           | Build your production site to `./dist/`            |
| `yarn preview`         | Preview your build locally, before deploying       |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro preview` |
| `yarn astro --help`    | Get help using the Astro CLI                       |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
