/*
 * @Author: Debonex
 * @Date: 2021-09-03 13:02:32
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-10 13:31:54
 */

import type { NextApiRequest, NextApiResponse } from 'next'
import { renderToString } from 'react-dom/server'

import Profile, {
  defaultProfileProps,
  ProfileProps
} from '../../src/components/profile'
import { tellGithubInfo } from '../../src/tellers/github-info-teller'
import { tellOsuInfo } from '../../src/tellers/osu-info-teller'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const profileProps: ProfileProps = { ...defaultProfileProps, ...req.query }

  const promiseGithubInfo = tellGithubInfo(profileProps)
  const promiseOsuInfo = tellOsuInfo(profileProps)

  Promise.all([promiseGithubInfo, promiseOsuInfo]).then((results) => {
    if (results[0])
      res.status(200).end(renderToString(<Profile {...profileProps}></Profile>))
    else res.end('something wrong.')
  })
}

export const config = {
  api: {
    externalResolver: true
  }
}
