import React from "react"
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg"
import colors from '@theme/color'

const Lifter = (props) => {
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
          d="M21 8h-4a3 3 0 0 0-3 3v5h-2v-4a6 6 0 0 0-3.107-5.253 4 4 0 1 0-5.786 0A6 6 0 0 0 0 12v11a1 1 0 1 0 2 0v-5h20v5a1 1 0 0 0 2 0V11a3 3 0 0 0-3-3ZM4 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2 4a4 4 0 0 1 4 4v4H2v-4a4 4 0 0 1 4-4Zm10 8v-5a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 1 1 1v5h-6Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Lifter.defaultProps = {
  fill: colors.secondary
}

export default Lifter
