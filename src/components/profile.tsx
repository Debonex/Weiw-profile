/*
 * @Author: Debonex
 * @Date: 2021-09-03 13:01:51
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-06 02:25:03
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
