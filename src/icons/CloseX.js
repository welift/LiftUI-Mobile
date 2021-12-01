import React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import colors from '@theme/color'

const CloseX = (props) => {
  const { fill, ...rest } = props
  return (
    <Svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <G clipPath="url(#a)">
        <Path
          d="M23.442.558a1.907 1.907 0 0 0-2.697 0L12 9.304 3.255.558A1.907 1.907 0 0 0 .558 3.255L9.304 12 .558 20.745a1.907 1.907 0 0 0 2.697 2.697L12 14.697l8.745 8.745a1.907 1.907 0 0 0 2.697-2.697L14.696 12l8.746-8.745a1.907 1.907 0 0 0 0-2.697Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill='#fff' d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

CloseX.defaultProps = {
  fill: colors.secondary
}

export default CloseX
