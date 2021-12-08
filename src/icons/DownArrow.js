import React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import colors from '../theme/color'

const DownArrow = (props) => {
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
          d="M22.285 6A1.717 1.717 0 0 1 24 7.714c0 .454-.18.89-.502 1.212l-7.87 7.862c-.477.477-.755.74-1.228 1.212l-.004.004c-.599.599-1.196 1.196-2.406 1.196-1.19 0-1.79-.6-2.39-1.2-.478-.478-.773-.735-1.251-1.212L.482 8.926A1.713 1.713 0 0 1 1.7 6.02c.45-.004.883.169 1.207.48l7.869 7.863a1.752 1.752 0 0 0 2.426 0l7.869-7.862A1.716 1.716 0 0 1 22.285 6Z"
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

DownArrow.defaultProps = {
  fill: colors.secondary
}

export default DownArrow
