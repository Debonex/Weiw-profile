/*
 * @Author: Debonex
 * @Date: 2021-09-09 00:18:01
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-10 14:47:46
 */

import { Component } from 'react'
import langColors from '../../assets/langColor'

export type LangsBarProps = {
  langRatioArr: Array<LangRatio>
}

export type LangRatio = { lang: string; ratio: number }

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
                width: `${item.ratio * 100}%`,
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
