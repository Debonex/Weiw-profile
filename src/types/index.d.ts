import { CSSProperties } from 'react'

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    xmlns?: string
  }
}

export type Theme = {
  fontFamily?: string
  colorText: string
  bgColorMain: string
  bgColorTitle: string
}
