/*
 * @Author: Debonex
 * @Date: 2021-09-10 11:50:58
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-10 16:25:45
 */

import { Component } from 'react'
import { base } from '../../themes'
import { Theme } from '../../types'
import { FuncGetStyle } from '../../types/func'

export type OsuInfoProps = {
  username: string
  avatarUrl: string
  playmode: string
  country: string
  rankHistory: Array<number>
  globalRank: number
  pp: number
  gradeCounts: { ss: number; ssh: number; s: number; sh: number; a: number }
  scoresRecent: Array<object>
}

export const defaultOsuInfoProps: OsuInfoProps = {
  username: '',
  avatarUrl: '',
  playmode: 'osu',
  country: '',
  rankHistory: [],
  globalRank: 0,
  pp: 0,
  gradeCounts: { ss: 0, ssh: 0, s: 0, sh: 0, a: 0 },
  scoresRecent: []
}

class OsuInfo extends Component<OsuInfoProps> {
  render() {
    const _ = getStyles()
    return (
      <div style={_.containerMain}>
        <div style={_.containerHeader}>Osu! info</div>
        <div style={_.containerBody}>
          <div style={_.bodyLeft}>
            <img style={_.avatarImg} src={this.props.avatarUrl} alt="" />
            <div style={_.bodyLeftInfo}>
              <div style={{ fontSize: 24 }}>{this.props.username}</div>
            </div>
          </div>

          <div style={_.bodyRight}>
            <div style={_.containerInfoItems}>
              <div style={_.infoItem}>
                <div
                  style={{ ..._.infoItemBefore, backgroundColor: '#ff66ab' }}
                />
                <div style={_.infoItemLabel}>Global Ranking</div>
                <div style={_.infoItemText}># {this.props.globalRank}</div>
              </div>
              <div style={_.infoItem}>
                <div
                  style={{ ..._.infoItemBefore, backgroundColor: '#ed1221' }}
                />
                <div style={_.infoItemLabel}>PP</div>
                <div style={_.infoItemText}>{this.props.pp}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const getStyles: FuncGetStyle = (theme?: Theme) => {
  !theme && (theme = base)
  return {
    containerMain: {
      backgroundColor: theme.bgColorMain,
      height: 200,
      display: 'flex',
      flexDirection: 'column'
    },
    containerHeader: {
      height: 40,
      backgroundColor: theme.bgColorTitle,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 20,
      fontSize: 20,
      color: theme.colorText
    },
    containerBody: {
      display: 'flex',
      padding: 16
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
    avatarImg: {
      width: 112,
      height: 112,
      borderRadius: 12
    },
    bodyRight: {
      width: '50%',
      paddingLeft: 16
    },
    containerInfoItems: {
      display: 'flex'
    },
    infoItem: {
      display: 'flex',
      flexDirection: 'column',
      marginRight: 32
    },
    infoItemBefore: {
      height: 2,
      marginBottom: 2
    },
    infoItemLabel: {
      fontSize: 12,
      fontWeight: 700
    },
    infoItemText: {
      fontSize: 18,
      fontWeight: 300
    }
  }
}

export default OsuInfo
