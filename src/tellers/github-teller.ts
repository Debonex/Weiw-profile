/*
 * @Author: Debonex
 * @Date: 2021-09-04 00:52:13
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-10-05 00:49:38
 */
import { AxiosResponse } from 'axios'
import { ProfileProps } from '../components/profile'
import { githubAPI, urlToBase64 } from '../utils/requests'

import { generateLogger } from '../utils/log'
import { green } from 'chalk'
const log = generateLogger('github', '📥')

export async function githubTeller(
  profileProps: ProfileProps
): Promise<boolean> {
  if (!profileProps.githubInfoShow) return true
  profileProps.githubInfo.username = profileProps.githubUsername

  log(`Start fetching base info of ${green(profileProps.githubInfo.username)}`)
  const baseInfoStart = Date.now()

  const leftInfo = githubAPI
    .get(`/users/${profileProps.githubUsername}`)
    .then((res) => {
      profileProps.githubInfo.name = res.data.name
      profileProps.githubInfo.bio = res.data.bio
      if (res.status === 200) {
        return urlToBase64(res.data.avatar_url)
      }
    })
    .then((base64) => {
      profileProps.githubInfo.avatarUrl = `data:image/png;base64,${base64}`
      log({
        content: `Finish fetching base info of ${green(
          profileProps.githubInfo.username
        )}`,
        start: baseInfoStart
      })
      return true
    })
    .catch((e) => {
      return false
    })

  log(`Start fetching top langs of ${green(profileProps.githubInfo.username)}`)
  const topLangsStart = Date.now()
  const topLangs = githubAPI
    .get(`/users/${profileProps.githubUsername}/repos`)
    .then((res) => {
      if (res.status === 200) {
        const langDict: Record<string, number> = {}
        const langPromises: Array<Promise<AxiosResponse>> = []
        res.data.forEach(
          (repo: { fork: boolean; language: string; full_name: string }) => {
            if (!repo.fork) {
              langPromises.push(
                githubAPI.get(`/repos/${repo.full_name}/languages`)
              )
            }
          }
        )
        return Promise.all(langPromises).then((results) => {
          log({
            content: `Finish fetching top langs of ${green(
              profileProps.githubInfo.username
            )}`,
            start: topLangsStart
          })
          results.forEach((result: { data: Record<string, number> }) => {
            for (let wt in result.data) {
              if (langDict[wt]) langDict[wt] += result.data[wt]
              else langDict[wt] = result.data[wt]
            }
          })
          profileProps.githubInfo.langDict = langDict
          return true
        })
      } else return false
    })
    .catch((e) => {
      return false
    })

  return Promise.all([leftInfo, topLangs]).then((results) => {
    return results[0] && results[1]
  })
}
