/*
 * @Author: Debonex
 * @Date: 2021-09-03 13:11:39
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-04 00:46:12
 */

import { CSSProperties } from 'react'
import { Theme } from './types'
import { Styles } from '.'

// TODO how to declare a function type like (theme:Theme):Record<string,CSSProperties>|CSSProperties
export type FuncGetStyle = {
  (theme?: Theme): Record<string, CSSProperties>
}
