/*
 * @Author: Debonex
 * @Date: 2021-09-03 13:01:51
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-09 01:06:22
 */

import { Component } from 'react'
import { base } from '../themes'
import { Theme } from '../types'
import { FuncGetStyle } from '../types/func'

import BaseInfo, {
  BaseInfoProps,
  defaultBaseInfoProps
} from './cards/base-info'

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
  baseInfoShow: string | boolean
  baseInfo: BaseInfoProps
}

export const defaultProfileProps: ProfileProps = {
  username: '',
  width: 600,
  height: 200,
  baseInfoShow: true,
  baseInfo: defaultBaseInfoProps
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
        {!!this.props.baseInfoShow && this.props.baseInfoShow !== 'false' && (
          <BaseInfo {...this.props.baseInfo} />
        )}
      </svg>
    )
  }
}

export default Profile
