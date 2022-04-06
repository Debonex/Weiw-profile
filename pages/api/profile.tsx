import type { NextApiRequest, NextApiResponse } from 'next'
import { renderToString } from 'react-dom/server'

import ProfileError from '../../src/components/profile-error'
import Profile, { defaultProfileProps, ProfileProps } from '../../src/components/profile'
import { githubTeller } from '../../src/tellers/github-teller'
import { osuTeller } from '../../src/tellers/osu-teller'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const profileProps: ProfileProps = { ...defaultProfileProps, ...req.query }

  const promiseGithubInfo = githubTeller(profileProps)
  const promiseOsuInfo = osuTeller(profileProps)

  Promise.all([promiseGithubInfo, promiseOsuInfo]).then((results) => {
    if (results[0] && results[1]) {
      res.status(200).end(renderToString(<Profile {...profileProps}></Profile>))
    } else {
      res.status(200).end(renderToString(<ProfileError />))
    }
  })
}

export const config = {
  api: {
    externalResolver: true
  }
}
