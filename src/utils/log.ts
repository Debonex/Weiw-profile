/*
 * @Author: Debonex
 * @Date: 2021-10-05 00:41:15
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-10-05 01:50:58
 */
import { green, yellow } from 'chalk'

export function gTellerLogger(subject: string, icon: string) {
  return (
    info: { content: string; time?: number; start?: number } | string
  ) => {
    if (typeof info === 'string') {
      console.log(`${icon}  ${green(`[${subject}]`)} ${info}`)
    } else {
      if (info.time) {
        console.log(
          `${icon}  ${green(`[${subject}]`)} ${info.content} ${yellow(
            `${info.time}s`
          )}`
        )
      } else if (info.start) {
        console.log(
          `${icon}  ${green(`[${subject}]`)} ${info.content} ${yellow(
            `${(Date.now() - info.start) / 1000}s`
          )}`
        )
      } else {
        console.log(`${icon} ${green(`[${subject}]`)} ${info.content}`)
      }
    }
  }
}
