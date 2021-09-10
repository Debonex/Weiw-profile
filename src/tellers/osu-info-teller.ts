/*
 * @Author: Debonex
 * @Date: 2021-09-10 11:50:26
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-10 13:36:21
 */

import { ProfileProps } from '../components/profile'
import { commonRequests } from '../utils/requests'

export async function tellOsuInfo(
  profileProps: ProfileProps
): Promise<boolean> {
  if (!profileProps.osuInfoShow) return true
  profileProps.osuInfo.username = profileProps.osuUsername
  return commonRequests
    .get(`https://osu.ppy.sh/users/${profileProps.osuUsername}`)
    .then((res) => {
      if (res.status === 200) {
        return true
      } else return false
    })
}
