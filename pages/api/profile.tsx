/*
 * @Author: Debonex
 * @Date: 2021-09-03 13:02:32
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-06 02:30:15
 */

import type { NextApiRequest, NextApiResponse } from 'next'
import { renderToString } from 'react-dom/server'
import { defaultBaseInfoProps } from '../../src/components/base-info'

import Profile from '../../src/components/profile'
import { fetchBaseInfo } from '../../src/fetchers/profile-fetcher'
import { ProfileProps } from '../../src/types/props'
import { urlToBase64 } from '../../src/utils/requests'

const defaultProfileProps: ProfileProps = {
  username: '',
  width: 600,
  height: 200,
  baseInfoShow: true,
  baseInfo: defaultBaseInfoProps
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query: ProfileProps = { ...defaultProfileProps, ...req.query }

  if (query.baseInfoShow) {
    fetchBaseInfo(query.username).then((resBaseInfo) => {
      if (resBaseInfo.status === 200) {
        urlToBase64(resBaseInfo.data.avatar_url).then((base64) => {
          query.baseInfo = {
            username: query.username,
            name: resBaseInfo.data.name,
            avatarUrl: `data:image/png;base64,${base64}`,
            bio: resBaseInfo.data.bio
          }
          res
            .writeHead(200, { 'Content-Type': 'image/svg+xml' })
            .end(renderToString(<Profile {...query} />))
        })
      }
    })
  }
}
