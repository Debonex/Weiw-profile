import { ProfileProps } from '../components/profile'
import { githubAPI, urlToBase64 } from '../utils/requests'

import { gTellerLogger } from '../utils/log'
import { green } from 'chalk'
const log = gTellerLogger('github', '📥')

export async function githubTeller(profileProps: ProfileProps): Promise<boolean> {
  if (!profileProps.github || profileProps.github === 'false') return true
  profileProps._githubInfo.username = profileProps.githubName

  log(`Start fetching github info of ${green(profileProps._githubInfo.username)}`)
  const startTime = Date.now()

  return githubAPI
    .gql(
      `
      query{
        user(login: "${profileProps.githubName}"){
          name
          bio
          avatarUrl
          repositories(privacy:PUBLIC, first:100, isFork:false){
            nodes{
              name
              languages(first:100, orderBy: {field:SIZE, direction:DESC}){
                edges{
                  size
                  node{
                    name
                  }
                }
              }
            }
          }
        }
      }
  `
    )
    .then(async (res) => {
      log({
        content: `Finish fetching github info of ${green(profileProps._githubInfo.username)}`,
        start: startTime
      })
      if (res.status === 200) {
        const langDict: Record<string, number> = {}
        const user = res.data.data.user as User
        profileProps._githubInfo.name = user.name
        profileProps._githubInfo.bio = user.bio
        // because of the cross origin policy, we need to to fetch the avatar at server side
        profileProps._githubInfo.avatarUrl = `data:image/png;base64,${await urlToBase64(
          user.avatarUrl
        )}`

        user.repositories.nodes.forEach((repo) => {
          repo.languages.edges.forEach((edge) => {
            if (langDict[edge.node.name]) {
              langDict[edge.node.name] += edge.size
            } else {
              langDict[edge.node.name] = edge.size
            }
          })
        })
        profileProps._githubInfo.langDict = langDict
        return true
      } else {
        return false
      }
    })
    .catch((e) => {
      return false
    })
}
