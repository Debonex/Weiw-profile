import { parse } from 'node-html-parser'
import { ProfileProps } from '../components/profile'
import { commonRequests, urlToBase64 } from '../utils/requests'

import { gTellerLogger } from '../utils/log'
import { green } from 'chalk'
const log = gTellerLogger('osu', '📥')

export async function osuTeller(profileProps: ProfileProps): Promise<boolean> {
  if (!profileProps.osu) return true
  profileProps._osuInfo.username = profileProps.osuName

  log(`Start fetching base info of ${green(profileProps._osuInfo.username)}`)
  const startTime = Date.now()
  return commonRequests
    .get(`https://osu.ppy.sh/users/${profileProps.osuName}`)
    .then(async (res) => {
      log({
        content: `Finish fetching base info of ${green(profileProps._osuInfo.username)}`,
        start: startTime
      })
      if (res.status === 200) {
        const root = parse(res.data)
        const content = JSON.parse(
          root.querySelector('.js-react--profile-page').getAttribute('data-initial-data') as string
        )
        const user = content.user
        const extras = content.extras

        profileProps._osuInfo = {
          ...profileProps._osuInfo,
          username: user.username,
          playMode: user.playmode,
          country: user.country_code,
          rankHistory: user.rankHistory.data,
          globalRank: user.statistics.global_rank,
          pp: user.statistics.pp,
          gradeCounts: user.statistics.grade_counts,
          scoresRecent: extras.scoresRecent,
          scoresBest: extras.scoresBest
        }

        profileProps._osuInfo.avatarUrl = `data:image/png;base64,${await urlToBase64(
          user.avatar_url
        )}`

        return true
      } else return false
    })
    .catch((e) => {
      return false
    })
}
