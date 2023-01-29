# preact-components

This package demonstrate how to manage Preact components on a per-package basis
and use them in your Astro project.

Always define the dependencies of each package directly per-package.

## Usage

### In Astro files

```tsx
---
import { PreactShowcase } from "@packages/preact-components"
---
<PreactShowcase text="Using preact components from turporepo packages in Astro works">
    Yay
</PreactShowcase>

```

### From React components

```tsx
import { ShowcaseComponent } from '@packages/preact-components'

export default function MyReactComponent() {
  return (
    <PreactShowcase text="Using Preact components from turporepo packages in Astro works">
      Yay
    </PreactShowcase>
  )
}
```
