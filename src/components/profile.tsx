/*
 * @Author: Debonex
 * @Date: 2021-09-03 13:01:51
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-09 18:31:45
 */

import { Component } from 'react'
import { base } from '../themes'
import { Theme } from '../types'
import { FuncGetStyle } from '../types/func'

import GithubInfo, {
  GithubInfoProps,
  defaultGithubInfoProps
} from './cards/github-info'

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
  height: number
  githubInfoShow: string | boolean
  githubInfo: GithubInfoProps
}

export const defaultProfileProps: ProfileProps = {
  username: '',
  width: 600,
  height: 200,
  githubInfoShow: true,
  githubInfo: defaultGithubInfoProps
}

class Profile extends Component<ProfileProps> {
  render() {
    const styles = getStyles()
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={this.props.width}
        height={this.props.height}
        viewBox={`0 0 ${this.props.width} ${this.props.height}`}
        style={styles.global}>
        {!!this.props.githubInfoShow && this.props.githubInfoShow !== 'false' && (
          <GithubInfo {...this.props.githubInfo} />
        )}
      </svg>
    )
  }
}

export default Profile
