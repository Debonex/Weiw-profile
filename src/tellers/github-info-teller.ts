/*
 * @Author: Debonex
 * @Date: 2021-09-04 00:52:13
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-09 18:32:43
 */
import { AxiosResponse } from 'axios'
import { ProfileProps } from '../components/profile'
import { githubAPI, urlToBase64 } from '../utils/requests'

export async function tellGithubInfo(
  profileProps: ProfileProps
): Promise<boolean> {
  if (!profileProps.githubInfoShow) return true
  profileProps.githubInfo.username = profileProps.username
  const leftInfo = githubAPI
    .get(`/users/${profileProps.username}`)
    .then((resGithubInfo) => {
      profileProps.githubInfo.name = resGithubInfo.data.name
      profileProps.githubInfo.bio = resGithubInfo.data.bio
      if (resGithubInfo.status === 200) {
        return urlToBase64(resGithubInfo.data.avatar_url)
      }
    })
    .then((base64) => {
      profileProps.githubInfo.avatarUrl = `data:image/png;base64,${base64}`
      return true
    })

  const topLangs = githubAPI
    .get(`/users/${profileProps.username}/repos`)
    .then((repos) => {
      const langDict: Record<string, number> = {}
      const langPromises: Array<Promise<AxiosResponse>> = []
      repos.data.forEach(
        (repo: { fork: boolean; language: string; full_name: string }) => {
          if (!repo.fork)
            langPromises.push(
              githubAPI.get(`/repos/${repo.full_name}/languages`)
            )
        }
      )
      return Promise.all(langPromises).then((results) => {
        results.forEach((result: { data: Record<string, number> }) => {
          for (let wt in result.data) {
            if (langDict[wt]) langDict[wt] += result.data[wt]
            else langDict[wt] = result.data[wt]
          }
        })
        profileProps.githubInfo.langDict = langDict
        return true
      })
    })

  return Promise.all([leftInfo, topLangs]).then((results) => {
    return results[0] && results[1]
  })
}
