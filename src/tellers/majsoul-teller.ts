import { ProfileProps } from '../components/profile'
import { gTellerLogger } from '../utils/log'
import { green } from 'chalk'
import { commonRequests } from '../utils/requests'
const log = gTellerLogger('majsoul', '📥')

export async function majsoulTeller(profileProps: ProfileProps): Promise<boolean> {
  if (!profileProps.majsoul) return true

  const majsoulInfo = profileProps._majsoulInfo
  majsoulInfo.id = profileProps.majsoul

  log(`Start fetching info of ${green(majsoulInfo.id)}`)
  const startTime = Date.now()

  const levelPromise = commonRequests
    .get(
      `https://ak-data-1.sapk.ch/api/v2/pl4/player_stats/${majsoulInfo.id}/0/99999999999?mode=8.9.11.12.15.16`
    )
    .then((res) => {
      if (res.status === 200) {
        majsoulInfo.nickname = res.data.nickname
        majsoulInfo.level = {
          id: res.data.level.id,
          score: res.data.level.score + res.data.level.delta
        }
        return true
      } else {
        return false
      }
    })
    .catch((e) => {
      return false
    })

  const rankPromise = commonRequests
    .get(
      `https://ak-data-6.pikapika.me/api/v2/pl4/player_records/${majsoulInfo.id}/99999999999/0?limit=10&mode=8.9.11.12.15.16&descending=true`
    )
    .then((res) => {
      if (res.status === 200) {
        majsoulInfo.ranks = res.data.map((record: any) => {
          let rank = 0
          let mainIdx: number, mainPlayer: any
          for (let i = 0; i < record.players.length; i++) {
            if (record.players[i].accountId == majsoulInfo.id) {
              mainIdx = i
              mainPlayer = record.players[i]
              break
            }
          }
          record.players.forEach((player: any, idx: number) => {
            if (player.score - idx > mainPlayer.score - mainIdx) {
              rank++
            }
          })
          return rank
        })
        return true
      } else {
        return false
      }
    })
    .catch((e) => {
      return false
    })

  return Promise.all([levelPromise, rankPromise]).then((results) => {
    log({
      content: `Finish fetching info of ${green(majsoulInfo.id)}`,
      start: startTime
    })
    return results[0] && results[1]
  })
}
