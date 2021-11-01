/*
 * @Author: Debonex
 * @Date: 2021-09-10 18:03:44
 * @Last Modified by: Debonex
 * @Last Modified time: 2021-11-01 16:29:23
 */

import React, { Component } from 'react'
import { osuGrades } from '../../assets/ts/osuGrades'

export type GradeBadgeProps = {
  width: number
  height: number
  grade: string
}

class GradeBadge extends Component<GradeBadgeProps> {
  render() {
    const colors = osuGrades[this.props.grade].colors
    const path = osuGrades[this.props.grade].path
    return (
      <svg width={this.props.width} height={this.props.height} xmlns="http://www.w3.org/2000/svg">
        <rect width={this.props.width} height={this.props.height} rx="8" fill={colors[0]} />
        <mask
          id="mask0"
          mask-type="alpha"
          x="0"
          y="0"
          width={this.props.width}
          height={this.props.height}>
          <rect width={this.props.width} height={this.props.height} rx="8" fill="#ffffff" />
        </mask>
        <g mask="url(#mask0)">
          <path d="M16 -9L33.3205 21H-1.32051L16 -9Z" fill={colors[1]} />
          <path d="M27.5 3L33.9952 14.25H21.0048L27.5 3Z" fill={colors[2]} />
          <path d="M7.5 -2L11.3971 4.75H3.60289L7.5 -2Z" fill={colors[3]} />
          <path d="M9.5 13L13.3971 19.75H5.60289L9.5 13Z" fill={colors[3]} />
        </g>
        {path}
      </svg>
    )
  }
}

export default GradeBadge
