/*
 * @Author: Debonex
 * @Date: 2021-09-03 13:01:51
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-10 13:29:32
 */

import { Component } from 'react'
import { base } from '../themes'
import { Theme } from '../types'
import { FuncGetStyle } from '../types/func'

import GithubInfo, {
  GithubInfoProps,
  defaultGithubInfoProps
} from './cards/github-info'
import OsuInfo, { defaultOsuInfoProps, OsuInfoProps } from './cards/osu-info'

const getStyles: FuncGetStyle = (theme?: Theme) => {
  !theme && (theme = base)
  return {
    global: {
      fontFamily: theme.fontFamily,
      color: theme.colorText
    }
  }
}

export type ProfileProps = {
  username: string
  width: number
  githubInfoShow: string | boolean
  githubInfo: GithubInfoProps
  osuInfoShow: string | boolean
  osuUsername: string
  osuInfo: OsuInfoProps
}

export const defaultProfileProps: ProfileProps = {
  username: '',
  width: 600,
  githubInfoShow: true,
  githubInfo: defaultGithubInfoProps,
  osuInfoShow: false,
  osuUsername: '',
  osuInfo: defaultOsuInfoProps
}

class Profile extends Component<ProfileProps, { height: number }> {
  constructor(props: ProfileProps) {
    super(props)
    let height = 0
    if (props.githubInfoShow) height += 200
    if (props.osuInfoShow) height += 200
    this.state = {
      height: height
    }
  }

  render() {
    const styles = getStyles()
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={this.props.width}
        height={this.state.height}
        style={styles.global}>
        <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml">
            {!!this.props.githubInfoShow &&
              this.props.githubInfoShow !== 'false' && (
                <GithubInfo {...this.props.githubInfo} />
              )}
            {!!this.props.osuInfoShow && this.props.osuInfoShow !== 'false' && (
              <OsuInfo {...this.props.osuInfo} />
            )}
          </div>
        </foreignObject>
      </svg>
    )
  }
}

export default Profile
