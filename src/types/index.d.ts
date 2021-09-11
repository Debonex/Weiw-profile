/*
 * @Author: Debonex
 * @Date: 2021-09-03 13:03:21
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-10 18:25:53
 */

import { CSSProperties } from 'react'

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    xmlns?: string
  }
}

declare module '*.svg' {
  import React from 'react'
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

export type Theme = {
  fontFamily?: string
  colorText: string
  bgColorMain: string
  bgColorTitle: string
}
