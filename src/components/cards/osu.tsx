import themes from '../../themes'
import { Theme } from '../../types'
import { FuncGetStyle } from '../../types/func'
import GradeBadge from '../common/osu-grade-badge'

export type OsuInfoProps = {
  username: string
  avatarUrl: string
  playMode: string
  country: string
  rankHistory: Array<number>
  globalRank: number
  pp: number
  gradeCounts: { ss: number; ssh: number; s: number; sh: number; a: number }
  scoresRecent: Array<object>
  scoresBest: Array<object>
}

export const defaultOsuInfoProps: OsuInfoProps = {
  username: '',
  avatarUrl: '',
  playMode: 'osu',
  country: '',
  rankHistory: [],
  globalRank: 0,
  pp: 0,
  gradeCounts: { ss: 0, ssh: 0, s: 0, sh: 0, a: 0 },
  scoresRecent: [],
  scoresBest: []
}

function PlayCard(props: { play: any; emptyText: string }) {
  const _ = getStyles()
  const play = props.play
  return (
    <div style={_.containerPlay}>
      <div style={_.playCut} />
      {play ? (
        <div style={_.containerPlayInfo}>
          <GradeBadge height={16} width={32} grade={play.rank}></GradeBadge>
          <div style={{ flexGrow: 1, paddingLeft: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ fontSize: 14 }}>{play.beatmapset.title_unicode}</div>
              <div style={_.creator}>by {play.beatmapset.creator}</div>
              <div style={_.pp}>{play.pp?.toFixed(0) ?? '0'}pp</div>
            </div>
            <div style={{ display: 'flex', marginTop: 4 }}>
              <div style={{ color: '#ffcc22', fontSize: 12 }}>{play.beatmap.version}</div>
              <div style={_.accuracy}>{(play.accuracy * 100).toFixed(2)}%</div>
            </div>
          </div>
        </div>
      ) : (
        <span style={{ fontSize: 12, padding: '4px 8px' }}>{props.emptyText}</span>
      )}
    </div>
  )
}

function Osu(props: OsuInfoProps) {
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
              <InfoItem label="Global Ranking" text={`# ${props.globalRank}`} color="#ff66ab" />
              <InfoItem label="PP" text={`${props.pp}`} color="#ed1221" />
              <InfoItem label="Mode" text={`${props.playMode}`} color="#b3d944" />
            </div>
          </div>
          <div style={{ marginRight: 16, position: 'relative' }}>
            <div style={{ ..._.recentControl, ..._.control }}>
              <div style={{ paddingBottom: 2 }}>Recent play</div>
              <PlayCard play={props.scoresRecent[0] ?? null} emptyText="No recent play." />
            </div>

            <div style={{ ..._.bestControl, ..._.control }}>
              <div style={{ paddingBottom: 2 }}>Best play</div>
              <PlayCard play={props.scoresBest[0] ?? null} emptyText="No play." />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  function InfoItem(props: { label: string; text: string; color: string }) {
    return (
      <div style={_.infoItem}>
        <div style={{ ..._.infoItemBefore, backgroundColor: props.color }} />
        <div style={_.infoItemLabel}>{props.label}</div>
        <div style={_.infoItemText}>{props.text}</div>
      </div>
    )
  }
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
    containerPlay: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 4,
      backgroundColor: theme.bgColorTitle,
      animationName: 'fade-in',
      animationDuration: '1000ms',
      animationFillMode: 'forwards'
    },
    playCut: {
      height: 2,
      backgroundColor: '#02B5C3'
    },
    containerPlayInfo: {
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
    },
    control: {
      position: 'absolute',
      width: '100%',
      animationDuration: '8000ms',
      animationDelay: '1500ms',
      animationFillMode: 'forwards',
      animationTimingFunction: 'ease',
      animationIterationCount: 'infinite'
    },
    recentControl: {
      animationName: 'rotate-fade-in-out',
      opacity: 0
    },
    bestControl: {
      animationName: 'rotate-fade-out-in'
    }
  }
}

export default Osu
