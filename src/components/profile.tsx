/*
 * @Author: Debonex
 * @Date: 2021-09-03 13:01:51
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-04 01:58:16
 */

import { Component } from 'react'
import { base } from '../themes'
import { Theme } from '../types'
import { FuncGetStyle } from '../types/func'
import { ProfileProps } from '../types/props'

import BaseInfo from './base-info'

const getStyles: FuncGetStyle = (theme?: Theme) => {
  !theme && (theme = base)
  return {
    global: {
      fontFamily: theme.fontFamily,
      color: theme.colorText
    }
  }
}

class Profile extends Component<ProfileProps> {
  render() {
    const styles = getStyles()
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={this.props.height}
        height={this.props.width}
        viewBox={`0 0 ${this.props.height} ${this.props.width}`}
        style={styles.global}>
        {!!this.props.baseInfoShow && this.props.baseInfoShow !== 'false' && (
          <BaseInfo {...this.props.baseInfo} />
        )}
      </svg>
    )
  }
}

export default Profile
