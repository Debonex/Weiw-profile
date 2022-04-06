import themes from '../../themes'
import { Theme } from '../../types'
import { FuncGetStyle } from '../../types/func'
import LangsCard from '../common/langs-card'

export type GithubInfoProps = {
  username: string
  name: string
  avatarUrl: string
  bio: string
  langDict: Record<string, number>
}

export const defaultGithubInfoProps: GithubInfoProps = {
  username: '',
  name: '',
  avatarUrl: '',
  bio: '',
  langDict: {}
}

function Github(props: GithubInfoProps) {
  const _ = getStyles()
  return (
    <div style={_.containerMain}>
      <div style={_.containerHeader}>Github</div>
      <div style={_.containerBody}>
        <div style={_.bodyLeft}>
          <img style={_.avatarImg} src={props.avatarUrl} alt="" />
          <div style={_.bodyLeftInfo}>
            <div style={_.username}>{props.username}</div>
            <div style={_.bio}>{props.bio}</div>
          </div>
        </div>
        <div style={_.bodyRight}>
          <LangsCard langDict={props.langDict} />
        </div>
      </div>
    </div>
  )
}

// #region styles
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
    containerBody: {
      display: 'flex',
      padding: 16
    },
    avatarImg: {
      width: 112,
      height: 112,
      borderRadius: 12,
      animationName: 'fade-in',
      animationDuration: '1000ms',
      animationFillMode: 'forwards'
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

export default Github
