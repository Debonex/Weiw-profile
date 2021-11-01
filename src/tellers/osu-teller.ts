/*
 * @Author: Debonex
 * @Date: 2021-09-10 11:50:26
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-10-09 17:50:54
 */

import { parse } from 'node-html-parser'
import { ProfileProps } from '../components/profile'
import { commonRequests, urlToBase64 } from '../utils/requests'

import { gTellerLogger } from '../utils/log'
import { green } from 'chalk'
const log = gTellerLogger('osu', '📥')

export async function osuTeller(profileProps: ProfileProps): Promise<boolean> {
  if (!profileProps.osuInfoShow) return true
  profileProps.osuInfo.username = profileProps.osuUsername

  log(`Start fetching base info of ${green(profileProps.osuInfo.username)}`)
  const startTime = Date.now()
  return commonRequests
    .get(`https://osu.ppy.sh/users/${profileProps.osuUsername}`)
    .then(async (res) => {
      log({
        content: `Finish fetching base info of ${green(
          profileProps.osuInfo.username
        )}`,
        start: startTime
      })
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
