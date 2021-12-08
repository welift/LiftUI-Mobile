import React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import colors from '../theme/color'

const UpArrow = (props) => {
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
          d="M1.715 19.2A1.716 1.716 0 0 1 0 17.486c0-.454.18-.89.502-1.212l7.87-7.862c.477-.477.755-.74 1.228-1.212l.004-.004C10.203 6.597 10.8 6 12.01 6c1.19 0 1.79.6 2.39 1.2.478.478.773.735 1.251 1.212l7.867 7.862A1.713 1.713 0 0 1 22.3 19.18a1.717 1.717 0 0 1-1.207-.48l-7.869-7.863a1.752 1.752 0 0 0-2.426 0L2.93 18.698a1.716 1.716 0 0 1-1.214.502Z"
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

UpArrow.defaultProps = {
  fill: colors.secondary
}

export default UpArrow
