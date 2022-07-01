import themes from '../themes'
import { Theme } from '../types'
import { FuncGetStyle } from '../types/func'

import Github, { GithubInfoProps, defaultGithubInfoProps } from './cards/github'
import Osu, { defaultOsuInfoProps, OsuInfoProps } from './cards/osu'
import cssRaw from '!!raw-loader!../styles/keyframes.module.css'
import Majsoul, { defaultMajsoulProps, MajsoulProps } from './cards/majsoul'

const getStyles: FuncGetStyle = (theme?: Theme) => {
  !theme && (theme = themes.base)
  return {
    global: {
      fontFamily: theme.fontFamily,
      color: theme.colorText
    }
  }
}

export type ProfileProps = {
  width: number
  github: string | boolean
  githubName: string
  _githubInfo: GithubInfoProps
  osu: string | boolean
  osuName: string
  _osuInfo: OsuInfoProps
  majsoul: string
  _majsoulInfo: MajsoulProps
  theme: string
}

export const defaultProfileProps: ProfileProps = {
  width: 600,
  github: true,
  githubName: '',
  _githubInfo: defaultGithubInfoProps,
  osu: false,
  osuName: '',
  _osuInfo: defaultOsuInfoProps,
  majsoul: '',
  _majsoulInfo: defaultMajsoulProps,
  theme: 'base'
}

function Profile(props: ProfileProps) {
  let height = 0
  if (!!props.github && props.github !== 'false') height += 200
  if (!!props.osu && props.osu !== 'false') height += 200
  if (!!props.majsoul) height += 200

  const theme = themes[props.theme] ?? themes.base
  const _ = getStyles(theme)
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={height} style={_.global}>
      <foreignObject width="100%" height="100%">
        <style type="text/css">{cssRaw}</style>
        <div xmlns="http://www.w3.org/1999/xhtml">
          {!!props.github && props.github !== 'false' && (
            <Github {...props._githubInfo} theme={theme} />
          )}
          {!!props.osu && props.osu !== 'false' && <Osu {...props._osuInfo} theme={theme} />}
          {!!props.majsoul && <Majsoul {...props._majsoulInfo} theme={theme} />}
        </div>
      </foreignObject>
    </svg>
  )
}

export default Profile
