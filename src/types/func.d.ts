import { CSSProperties } from 'react'
import { Theme } from './types'
import { Styles } from '.'

// TODO how to declare a function type like (theme:Theme):Record<string,CSSProperties>|CSSProperties
export type FuncGetStyle = {
  (theme?: Theme): Record<string, CSSProperties>
}
