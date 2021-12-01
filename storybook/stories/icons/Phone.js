import React from "react"
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg"
import colors from '@theme/color'

const Phone = (props) => {
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
          d="M8.488 10.243a14.075 14.075 0 0 0 5.27 5.269l1.178-1.65a1.334 1.334 0 0 1 1.725-.395 15.23 15.23 0 0 0 6.111 1.818A1.333 1.333 0 0 1 24 16.615v5.949a1.333 1.333 0 0 1-1.197 1.327 20.69 20.69 0 0 1-2.136.109C9.253 24 0 14.747 0 3.333c0-.717.036-1.429.11-2.136A1.333 1.333 0 0 1 1.435 0h5.95a1.333 1.333 0 0 1 1.329 1.228 15.23 15.23 0 0 0 1.818 6.11 1.333 1.333 0 0 1-.394 1.726l-1.651 1.179Zm-3.363-.876 2.534-1.81a17.88 17.88 0 0 1-1.463-4.89H2.68c-.008.221-.012.444-.012.666-.001 9.942 8.057 18 17.999 18 .222 0 .445-.004.666-.013v-3.516a17.876 17.876 0 0 1-4.89-1.463l-1.81 2.534a16.596 16.596 0 0 1-2.117-1l-.077-.044a16.741 16.741 0 0 1-6.27-6.27l-.044-.077a16.589 16.589 0 0 1-1-2.117Z"
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

Phone.defaultProps = {
  fill: colors.secondary
}

export default Phone
