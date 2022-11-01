import React, { PropsWithChildren } from 'react'

const envCanBeUsedInPackages = import.meta.env.PUBLIC_USE_IN_PACKAGE

export interface ShowcaseComponentProps extends PropsWithChildren<any> {
  text?: string
}

export function ShowcaseComponent({ text, children }: ShowcaseComponentProps) {
  return (
    <>
      <p>
        ShowcaseComponent (React) from packages/react-tsx-example: {text}
      </p>
      <p>
        Packages can also use .env: {envCanBeUsedInPackages}
      </p>
      Children:
      {children}
    </>
  )
}
