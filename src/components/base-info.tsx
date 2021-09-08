/*
 * @Author: Debonex
 * @Date: 2021-09-03 23:45:41
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-08 18:04:00
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
  bio: '',
  langDict: {}
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
      height: 40,
      backgroundColor: theme.baseInfo.bgColorTitle,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 20,
      fontSize: 20,
      color: theme.baseInfo.colorTitle
    },
    containerBody: {
      height: 160,
      display: 'flex'
    },
    avatarImg: {
      width: 112,
      height: 112,
      borderRadius: 12
    },
    bodyLeft: {
      width: '50%',
      height: '100%',
      display: 'flex',
      paddingLeft: 16,
      paddingTop: 16
    },
    bodyLeftInfo: {
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: 16
    },
    username: {
      fontSize: 24
    },
    bio: {
      fontSize: 12,
      marginTop: 4
    }
  }
}

export default BaseInfo
