/*
 * @Author: Debonex
 * @Date: 2021-09-10 11:50:58
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-10-09 16:36:22
 */

import themes from '../../themes'
import { Theme } from '../../types'
import { FuncGetStyle } from '../../types/func'
import GradeBadge from '../common/osu-grade-badge'

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

function RecentPlay(props: { scoresRecent: Array<any> }) {
  const _ = getStyles()
  const play = props.scoresRecent[0] ?? null
  return (
    <div style={_.containerRecentPlay}>
      <div style={_.rencentPlayCut} />
      {play ? (
        <div style={_.containerPlay}>
          <GradeBadge height={16} width={32} grade={play.rank}></GradeBadge>
          <div style={{ flexGrow: 1, paddingLeft: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ fontSize: 14 }}>
                {play.beatmapset.title_unicode}
              </div>
              <div style={_.creator}>by {play.beatmapset.creator}</div>
              <div style={_.pp}>{play.pp?.toFixed(0) ?? '0'}pp</div>
            </div>
            <div style={{ display: 'flex', marginTop: 4 }}>
              <div style={{ color: '#ffcc22', fontSize: 12 }}>
                {play.beatmap.version}
              </div>
              <div style={_.accuracy}>{(play.accuracy * 100).toFixed(2)}%</div>
            </div>
          </div>
        </div>
      ) : (
        <span style={{ fontSize: 12, padding: "4px 8px" }}>No recent play.</span>
      )}
    </div>
  )
}

function OsuInfo(props: OsuInfoProps) {
  const _ = getStyles()
  return (
    <div style={_.containerMain}>
      <div style={_.containerHeader}>Osu!</div>
      <div style={{ display: 'flex' }}>
        <div style={{ padding: 16 }}>
          <img style={_.avatarImg} src={props.avatarUrl} alt="" />
        </div>

        <div style={{ flexGrow: 1, paddingTop: 16 }}>
          <div style={{ display: 'flex' }}>
            <div style={{ fontSize: 24 }}>{props.username}</div>
            <div style={_.containerInfoItems}>
              <div style={_.infoItem}>
                <div
                  style={{ ..._.infoItemBefore, backgroundColor: '#ff66ab' }}
                />
                <div style={_.infoItemLabel}>Global Ranking</div>
                <div style={_.infoItemText}># {props.globalRank}</div>
              </div>
              <div style={_.infoItem}>
                <div
                  style={{ ..._.infoItemBefore, backgroundColor: '#ed1221' }}
                />
                <div style={_.infoItemLabel}>PP</div>
                <div style={_.infoItemText}>{props.pp}</div>
              </div>
              <div style={_.infoItem}>
                <div
                  style={{ ..._.infoItemBefore, backgroundColor: '#b3d944' }}
                />
                <div style={_.infoItemLabel}>Mode</div>
                <div style={_.infoItemText}>{props.playmode}</div>
              </div>
            </div>
          </div>
          <RecentPlay scoresRecent={props.scoresRecent} />
        </div>
      </div>
    </div>
  )
}

const getStyles: FuncGetStyle = (theme?: Theme) => {
  !theme && (theme = themes.base)
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
    avatarImg: {
      width: 112,
      height: 112,
      borderRadius: 12,
      animationName: 'fade-in',
      animationDuration: '1000ms',
      animationFillMode: 'forwards'
    },
    containerInfoItems: {
      display: 'flex',
      width: 300,
      marginLeft: 'auto'
    },
    infoItem: {
      display: 'flex',
      flexDirection: 'column',
      marginRight: 32
    },
    infoItemBefore: {
      height: 2,
      marginBottom: 2,
      animationName: 'width-in',
      animationDuration: '400ms',
      animationFillMode: 'forwards'
    },
    infoItemLabel: {
      fontSize: 12,
      fontWeight: 700
    },
    infoItemText: {
      fontSize: 18,
      fontWeight: 300
    },
    containerRecentPlay: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 16,
      marginRight: 16,
      borderRadius: 4,
      backgroundColor: theme.bgColorTitle,
      animationName: 'fade-in',
      animationDuration: '1000ms',
      animationFillMode: 'forwards'
    },
    rencentPlayCut: {
      height: 2,
      backgroundColor: '#02B5C3'
    },
    containerPlay: {
      display: 'flex',
      alignItems: 'center',
      padding: '4px 12px'
    },
    creator: { fontSize: 12, fontWeight: 600, marginLeft: 8 },
    pp: { fontSize: 14, fontWeight: 600, marginLeft: 'auto' },
    accuracy: {
      color: '#ffcc22',
      fontSize: 14,
      fontWeight: 600,
      marginLeft: 12
    }
  }
}

export default OsuInfo
