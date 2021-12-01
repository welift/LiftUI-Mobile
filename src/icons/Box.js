import React from "react"
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg"
import colors from '@theme/color'

const Box = (props) => {
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
          d="M1.2 9.6H1a1 1 0 0 1-1-1V2.404C0 1.739.546 1.2 1.19 1.2h21.62A1.188 1.188 0 0 1 24 2.404V8.6a1 1 0 0 1-1 1h-.2v12.001a1.195 1.195 0 0 1-1.192 1.199H2.392A1.196 1.196 0 0 1 1.2 21.601V9.6Zm19.2 0H3.6v10.3a.5.5 0 0 0 .5.5h15.8a.5.5 0 0 0 .5-.5V9.6Zm-17.5-6a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5h18.2a.5.5 0 0 0 .5-.5V4.1a.5.5 0 0 0-.5-.5H2.9Zm5.5 8.9a.5.5 0 0 1 .5-.5h6.2a.5.5 0 0 1 .5.5v1.4a.5.5 0 0 1-.5.5H8.9a.5.5 0 0 1-.5-.5v-1.4Z"
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

Box.defaultProps = {
  fill: colors.secondary
}

export default Box
