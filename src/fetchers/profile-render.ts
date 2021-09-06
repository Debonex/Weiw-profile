/*
 * @Author: Debonex
 * @Date: 2021-09-04 00:52:13
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-07 01:36:57
 */
import { ProfileProps } from '../types/props'
import { githubAPI, urlToBase64 } from '../utils/requests'

export async function renderBaseInfo(
  profileProps: ProfileProps
): Promise<boolean> {
  if (!profileProps.baseInfoShow) return true
  profileProps.baseInfo.username = profileProps.username
  return githubAPI
    .get(`/users/${profileProps.username}`)
    .then((resBaseInfo) => {
      profileProps.baseInfo.name = resBaseInfo.data.name
      profileProps.baseInfo.bio = resBaseInfo.data.bio
      if (resBaseInfo.status === 200) {
        return urlToBase64(resBaseInfo.data.avatar_url)
      }
    })
    .then((base64) => {
      profileProps.baseInfo.avatarUrl = `data:image/png;base64,${base64}`
      return true
    })
}
