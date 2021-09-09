/*
 * @Author: Debonex
 * @Date: 2021-09-03 23:45:41
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-09 15:24:05
 */

import { Component } from 'react'
import { base } from '../../themes'
import { Theme } from '../../types'
import { FuncGetStyle } from '../../types/func'
import LangsCard from '../common/langsCard'

export type BaseInfoProps = {
  username: string
  name: string
  avatarUrl: string
  bio: string
  langDict: Record<string, number>
}

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
            <div style={_.bodyRight}>
              <LangsCard langDict={this.props.langDict} />
            </div>
          </div>
        </div>
      </foreignObject>
    )
  }
}

// #region styles
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
      display: 'flex',
      padding: 16
    },
    avatarImg: {
      width: 112,
      height: 112,
      borderRadius: 12
    },
    bodyLeft: {
      width: '50%',
      display: 'flex'
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
    },
    bodyRight: {
      width: '50%',
      paddingLeft: 16
    }
  }
}
// #endregion

export default BaseInfo
