import React from "react"
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg"
import colors from '@theme/color'

const User = (props) => {
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
          d="M4 24c-.631 0-1.15-.514-1.072-1.14a9.143 9.143 0 0 1 18.143 0c.08.626-.44 1.14-1.071 1.14s-1.133-.515-1.238-1.138a6.856 6.856 0 0 0-13.524 0C5.133 23.485 4.63 24 4 24Zm8-10.286a6.855 6.855 0 0 1-6.857-6.857A6.855 6.855 0 0 1 12 0a6.855 6.855 0 0 1 6.857 6.857A6.855 6.855 0 0 1 12 13.714Zm0-2.285a4.57 4.57 0 0 0 4.571-4.572A4.57 4.57 0 0 0 12 2.286a4.57 4.57 0 0 0-4.571 4.571A4.57 4.57 0 0 0 12 11.43Z"
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

User.defaultProps = {
  fill: colors.secondary
}

export default User
