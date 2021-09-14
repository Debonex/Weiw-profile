/*
 * @Author: Debonex
 * @Date: 2021-09-03 13:01:51
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-14 10:24:33
 */

import themes from '../themes'
import { Theme } from '../types'
import { FuncGetStyle } from '../types/func'

import GithubInfo, {
  GithubInfoProps,
  defaultGithubInfoProps
} from './cards/github-info'
import OsuInfo, { defaultOsuInfoProps, OsuInfoProps } from './cards/osu-info'

const getStyles: FuncGetStyle = (theme?: Theme) => {
  !theme && (theme = themes.base)
  return {
    global: {
      fontFamily: theme.fontFamily,
      color: theme.colorText
    }
  }
}

export type ProfileProps = {
  width: number
  githubInfoShow: string | boolean
  githubUsername: string
  githubInfo: GithubInfoProps
  osuInfoShow: string | boolean
  osuUsername: string
  osuInfo: OsuInfoProps
}

export const defaultProfileProps: ProfileProps = {
  width: 600,
  githubInfoShow: true,
  githubUsername: '',
  githubInfo: defaultGithubInfoProps,
  osuInfoShow: false,
  osuUsername: '',
  osuInfo: defaultOsuInfoProps
}

function Profile(props: ProfileProps) {
  let height = 0
  if (props.githubInfoShow) height += 200
  if (props.osuInfoShow) height += 200
  const _ = getStyles()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={height}
      style={_.global}>
      <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
          {!!props.githubInfoShow && props.githubInfoShow !== 'false' && (
            <GithubInfo {...props.githubInfo} />
          )}
          {!!props.osuInfoShow && props.osuInfoShow !== 'false' && (
            <OsuInfo {...props.osuInfo} />
          )}
        </div>
      </foreignObject>
    </svg>
  )
}

export default Profile
