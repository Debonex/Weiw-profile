/*
 * @Author: Debonex
 * @Date: 2021-09-03 13:02:32
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-04 01:58:51
 */

import type { NextApiRequest, NextApiResponse } from 'next'
import { renderToString } from 'react-dom/server'
import { defaultBaseInfoProps } from '../../src/components/base-info'

import Profile from '../../src/components/profile'
import { fetchBaseInfo } from '../../src/fetchers/profile-fetcher'
import { ProfileProps } from '../../src/types/props'

const defaultProfileProps: ProfileProps = {
  username: '',
  width: 1000,
  height: 500,
  baseInfoShow: true,
  baseInfo: defaultBaseInfoProps
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query: ProfileProps = { ...defaultProfileProps, ...req.query }
  if (query.baseInfoShow) {
    const response = await fetchBaseInfo(query.username)
    if (response.status === 200) {
      query.baseInfo = {
        username: query.username,
        name: response.data.name,
        avatarUrl: response.data.avatar_url,
        bio: response.data.bio
      }
    }
  }
  res
    .writeHead(200, { 'Content-Type': 'image/svg+xml' })
    .end(renderToString(<Profile {...query} />))
}
