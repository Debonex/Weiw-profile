/*
 * @Author: Debonex
 * @Date: 2021-09-03 13:02:32
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-08 18:05:58
 */

import type { NextApiRequest, NextApiResponse } from 'next'
import { renderToString } from 'react-dom/server'
import { defaultBaseInfoProps } from '../../src/components/base-info'

import Profile from '../../src/components/profile'
import { tellBaseInfo } from '../../src/tellers/base-info-teller'
import { ProfileProps } from '../../src/types/props'

const defaultProfileProps: ProfileProps = {
  username: '',
  width: 600,
  height: 200,
  baseInfoShow: true,
  baseInfo: defaultBaseInfoProps
}

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
