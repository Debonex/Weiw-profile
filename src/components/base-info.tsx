/*
 * @Author: Debonex
 * @Date: 2021-09-03 23:45:41
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-04 01:54:09
 */

import { Component } from 'react'
import { base } from '../themes'
import { Theme } from '../types'
import { FuncGetStyle } from '../types/func'
import { BaseInfoProps } from '../types/props'

export const defaultBaseInfoProps: BaseInfoProps = {
  username: '',
  name: '',
  avatarUrl: '',
  bio: ''
}

class BaseInfo extends Component<BaseInfoProps> {
  render() {
    const _ = getStyles()
    return (
      <foreignObject width="100%" height="100%">
        <div style={_.containerMain} xmlns="http://www.w3.org/1999/xhtml">
          <div style={_.containerHeader}>Coder info</div>
          <div style={_.containerBody}>
            <div style={_.bodyLeft}>
              <img style={_.avatarImg} src={this.props.avatarUrl} alt="" />
              <div style={_.bodyLeftInfo}>
                <div style={_.username}>{this.props.username}</div>
                <div style={_.bio}>{this.props.bio}</div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </foreignObject>
    )
  }
}

const getStyles: FuncGetStyle = (theme?: Theme) => {
  !theme && (theme = base)
  return {
    containerMain: {
      backgroundColor: theme.baseInfo.bgColorMain
    },
    containerHeader: {
      height: `2.5rem`,
      backgroundColor: theme.baseInfo.bgColorTitle,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: `1.25rem`,
      fontSize: `1.25rem`,
      color: theme.baseInfo.colorTitle
    },
    containerBody: {
      height: `10rem`,
      display: 'flex'
    },
    avatarImg: {
      width: '7rem',
      height: '7rem',
      borderRadius: '.75rem'
    },
    bodyLeft: {
      width: '50%',
      height: '100%',
      display: 'flex',
      paddingLeft: '1rem',
      paddingTop: '1rem'
    },
    bodyLeftInfo: {
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: '1rem'
    },
    username: {
      fontSize: '1.5rem'
    },
    bio: {
      fontSize: '.75rem',
      marginTop: '.25rem'
    }
  }
}

export default BaseInfo
