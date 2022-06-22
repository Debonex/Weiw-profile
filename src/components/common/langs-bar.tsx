import { Component } from 'react'
import langColors from '../../assets/ts/langColor'

export type LangsBarProps = {
  langRatioArr: Array<LangRatio>
}

export type LangRatio = { lang: string; topRatio: number; totalRatio: number }

class LangsBar extends Component<LangsBarProps> {
  render() {
    return (
      <div style={{ display: 'flex', height: '8px' }}>
        {this.props.langRatioArr.map((item) => {
          return (
            <div
              key={`lang-${item.lang}`}
              style={{
                backgroundColor: langColors[item.lang],
                width: `${item.topRatio * 100}%`,
                height: '100%'
              }}
            />
          )
        })}
      </div>
    )
  }
}

export default LangsBar
