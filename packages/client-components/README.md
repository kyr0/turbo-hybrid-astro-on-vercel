# client-components

This package demonstrate how to manage React components on a per-package basis
and use them in your Astro project.

Always define the dependencies of each package directly per-package.

## Usage

### In Astro files

```tsx
---
import { ShowcaseComponent } from "@packages/client-components"
---
<ShowcaseComponent text="Using React components from turporepo packages in Astro works">
    Yay
</ShowcaseComponent>

```

### From React components

```tsx
import { ShowcaseComponent } from '@packages/showcase-react'

export default function MyReactComponent() {
  return (
    <ShowcaseComponent text="Using React components from turporepo packages in Astro works">
      Yay
    </ShowcaseComponent>
  )
}
```
