/*
 * @Author: Debonex
 * @Date: 2021-09-10 11:50:26
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-16 13:30:55
 */

import { parse } from 'node-html-parser'
import { ProfileProps } from '../components/profile'
import { commonRequests, urlToBase64 } from '../utils/requests'

export async function tellOsuInfo(
  profileProps: ProfileProps
): Promise<boolean> {
  if (!profileProps.osuInfoShow) return true
  profileProps.osuInfo.username = profileProps.osuUsername

  return commonRequests
    .get(`https://osu.ppy.sh/users/${profileProps.osuUsername}`)
    .then(async (res) => {
      if (res.status === 200) {
        const root = parse(res.data)
        const user = JSON.parse(root.querySelector('#json-user').rawText)
        const extras = JSON.parse(root.querySelector('#json-extras').rawText)

        profileProps.osuInfo = {
          ...profileProps.osuInfo,
          username: user.username,
          playmode: user.playmode,
          country: user.country_code,
          rankHistory: user.rankHistory.data,
          globalRank: user.statistics.global_rank,
          pp: user.statistics.pp,
          gradeCounts: user.statistics.grade_counts,
          scoresRecent: extras.scoresRecent
        }

        profileProps.osuInfo.avatarUrl = `data:image/png;base64,${await urlToBase64(
          user.avatar_url
        )}`

        return true
      } else return false
    })
    .catch((e) => {
      return false
    })
}
