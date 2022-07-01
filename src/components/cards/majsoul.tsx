import themes from '../../themes'
import { Theme } from '../../types'
import { FuncGetStyle } from '../../types/func'

export type MajsoulProps = {
  nickname: string
  id: string
  theme: Theme
  level: {
    id: number
    score: number
  }
  ranks: number[]
}

export const defaultMajsoulProps: MajsoulProps = {
  nickname: '',
  id: '',
  theme: themes.base,
  level: {
    id: 0,
    score: 0
  },
  ranks: []
}

function Majsoul(props: MajsoulProps) {
  const _ = getStyles(props.theme)
  return (
    <div style={_.containerMain}>
      <div style={_.containerHeader}>Majsoul</div>
      <div style={{ display: 'flex' }}>
        <div style={{ padding: 16 }}>
          <div style={{ fontSize: 24 }}>{props.nickname}</div>
          <div style={{ marginTop: 24 }}>
            {props.level.id}:{props.level.score}
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          {props.ranks.reverse().map((rank, idx) => (
            <div key={idx}>{rank + 1}</div>
          ))}
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
    }
  }
}

export default Majsoul
