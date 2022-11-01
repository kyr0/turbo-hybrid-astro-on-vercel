import React, { PropsWithChildren } from 'react'

const envCanBeUsedInPackages = import.meta.env.USE_IN_PACKAGE

export interface ShowcaseComponentProps extends PropsWithChildren<any> {
  text?: string
}

export function ShowcaseComponent({ text, children }: ShowcaseComponentProps) {
  return (
    <>
      <p>
        ShowcaseComponent (React) from packages/react-tsx-example:
        {text}
        <p>Packages can also use .env: {envCanBeUsedInPackages}</p>
      </p>
      Children:
      {children}
    </>
  )
}
