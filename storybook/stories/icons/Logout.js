import React from "react"
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg"
import colors from '@theme/color'

const Logout = (props) => {
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
          d="M2.173 24c-.322 0-.63-.126-.858-.352A1.193 1.193 0 0 1 .96 22.8V1.2c0-.318.128-.623.355-.849A1.22 1.22 0 0 1 2.173 0h16.976c.322 0 .63.126.858.351.227.226.355.53.355.849v3.6h-2.425V2.4H3.385v19.2h14.552v-2.4h2.425v3.6c0 .318-.128.623-.355.848a1.22 1.22 0 0 1-.858.352H2.174Zm15.764-7.2v-3.6H9.448v-2.4h8.489V7.2L24 12l-6.063 4.8Z"
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

Logout.defaultProps = {
  fill: colors.secondary
}

export default Logout
