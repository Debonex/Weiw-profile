/*
 * @Author: Debonex
 * @Date: 2021-09-09 10:13:24
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-10 12:57:41
 */

import React, { Component } from 'react'
import { base } from '../../themes'
import { Theme } from '../../types'
import { FuncGetStyle } from '../../types/func'
import langColors from '../../utils/langColor'
import LangsBar, { LangRatio } from './langsBar'

export type LangsCardProps = {
  langDict: Record<string, number>
  topN?: number
}

class LangsCard extends Component<
  LangsCardProps,
  { langRatioArr: Array<LangRatio> }
> {
  constructor(props: LangsCardProps) {
    super(props)

    const langArr: Array<{ lang: string; score: number }> = []
    let total: number = 0
    for (let lang in this.props.langDict) {
      langArr.push({ lang: lang, score: this.props.langDict[lang] })
    }

    langArr.sort((x, y) => y.score - x.score)
    for (let i = 0; i < langArr.length && i < 6; i++) {
      total += langArr[i].score
    }

    const langRatioArr: Array<LangRatio> = []
    for (let i = 0; i < langArr.length && i < 6; i++) {
      langRatioArr.push({
        lang: langArr[i].lang,
        ratio: langArr[i].score / total
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
                <span>{`${(item.ratio * 100).toFixed(2)}%`}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const getStyles: FuncGetStyle = (theme?: Theme) => {
  !theme && (theme = base)
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
