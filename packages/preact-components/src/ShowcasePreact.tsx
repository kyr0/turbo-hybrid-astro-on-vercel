/** @jsxImportSource preact */
import { RenderableProps } from 'preact'

const envCanBeUsedInPackages = import.meta.env.PUBLIC_USE_IN_PACKAGE

export interface ShowcasePreactProps {
  text?: string
}

export function ShowcasePreact({ text, children }: RenderableProps<ShowcasePreactProps>) {
  return (
    <>
      <p>ShowcaseComponent (Preact) from packages/preact-components: {text}</p>
      <p>Packages can also use .env: {envCanBeUsedInPackages}</p>
    </>
  )
}
