/*
 * @Author: Debonex
 * @Date: 2021-09-03 23:17:37
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-08 18:01:51
 */

export type ProfileProps = {
  username: string
  width: number
  height: number
  baseInfoShow: string | boolean
  baseInfo: BaseInfoProps
}

export type BaseInfoProps = {
  username: string
  name: string
  avatarUrl: string
  bio: string
  langDict: Record<string, number>
}
