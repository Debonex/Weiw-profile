/*
 * @Author: Debonex
 * @Date: 2021-09-03 13:02:32
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-09 01:06:34
 */

import type { NextApiRequest, NextApiResponse } from 'next'
import { renderToString } from 'react-dom/server'

import Profile, {
  defaultProfileProps,
  ProfileProps
} from '../../src/components/profile'
import { tellBaseInfo } from '../../src/tellers/base-info-teller'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const profileProps: ProfileProps = { ...defaultProfileProps, ...req.query }

  const promiseBaseInfo = tellBaseInfo(profileProps)

  Promise.all([promiseBaseInfo]).then((results) => {
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
