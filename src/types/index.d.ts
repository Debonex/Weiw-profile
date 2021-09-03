/*
 * @Author: Debonex
 * @Date: 2021-09-03 13:03:21
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-04 00:30:09
 */

import { CSSProperties } from 'react'

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    xmlns?: string
  }
}

export type Theme = {
  fontFamily?: string
  colorText: string
  baseInfo: {
    bgColorMain: string
    bgColorTitle: string
    colorTitle?: string
  }
}
