import React, { Component } from 'react'
import themes from '../../themes'
import { Theme } from '../../types'
import { FuncGetStyle } from '../../types/func'
import langColors from '../../assets/ts/langColor'
import LangsBar, { LangRatio } from './langs-bar'

export type LangsCardProps = {
  langDict: Record<string, number>
  topN?: number
}

class LangsCard extends Component<LangsCardProps, { langRatioArr: Array<LangRatio> }> {
  constructor(props: LangsCardProps) {
    super(props)

    const langArr: Array<{ lang: string; score: number }> = []
    let total = 0
    let topTotal = 0
    for (let lang in this.props.langDict) {
      total += this.props.langDict[lang]
      langArr.push({ lang: lang, score: this.props.langDict[lang] })
    }

    langArr.sort((x, y) => y.score - x.score)
    for (let i = 0; i < langArr.length && i < 6; i++) {
      topTotal += langArr[i].score
    }

    const langRatioArr: Array<LangRatio> = []
    for (let i = 0; i < langArr.length && i < 6; i++) {
      langRatioArr.push({
        lang: langArr[i].lang,
        topRatio: topTotal === 0 ? 0 : langArr[i].score / topTotal,
        totalRatio: total === 0 ? 0 : langArr[i].score / total
      })
    }

    this.state = {
      langRatioArr: langRatioArr
    }
  }

  render() {
    const _ = getStyles()
    return (
      <div style={_.containerMain}>
        <LangsBar langRatioArr={this.state.langRatioArr}></LangsBar>
        <div style={_.containerBadges}>
          {this.state.langRatioArr.map((item) => {
            return (
              <div key={`badge-${item.lang}`} style={_.containerBadge}>
                <div
                  style={{
                    ..._.badge,
                    backgroundColor: langColors[item.lang]
                  }}></div>
                <span style={{ marginRight: 4 }}>{item.lang}</span>
                <span>{`${(item.totalRatio * 100).toFixed(2)}%`}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const getStyles: FuncGetStyle = (theme?: Theme) => {
  !theme && (theme = themes.base)
  return {
    containerMain: {
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 16
    },
    containerBadges: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    containerBadge: {
      display: 'flex',
      marginTop: 12,
      minWidth: '50%',
      fontSize: 12,
      alignItems: 'center'
    },
    badge: {
      width: 10,
      height: 10,
      borderRadius: 10,
      marginRight: 4
    }
  }
}

export default LangsCard
