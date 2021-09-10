/*
 * @Author: Debonex
 * @Date: 2021-09-10 11:50:58
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-09-10 12:55:41
 */

import { Component } from 'react'
import { base } from '../../themes'
import { Theme } from '../../types'
import { FuncGetStyle } from '../../types/func'

export type OsuInfoProps = {
  username: string
}

export const defaultOsuInfoProps: OsuInfoProps = {
  username: ''
}

class OsuInfo extends Component<OsuInfoProps> {
  render() {
    const _ = getStyles()
    return (
      <div style={_.containerMain}>
        <div style={_.containerHeader}>Osu! info</div>
        <div style={_.containerBody}></div>
      </div>
    )
  }
}

const getStyles: FuncGetStyle = (theme?: Theme) => {
  !theme && (theme = base)
  return {
    containerMain: {
      backgroundColor: theme.githubInfo.bgColorMain,
      height: 200,
      display: 'flex',
      flexDirection: 'column'
    },
    containerHeader: {
      height: 40,
      backgroundColor: theme.githubInfo.bgColorTitle,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 20,
      fontSize: 20,
      color: theme.githubInfo.colorTitle
    },
    containerBody: {
      display: 'flex',
      padding: 16
    }
  }
}

export default OsuInfo
