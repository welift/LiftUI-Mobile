import React from "react"
import Svg, { Path } from "react-native-svg"
import colors from '@theme/color'

const RightArrow = (props) => {
  const { fill, ...rest } = props
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <Path
        d="M5.4 2.315A1.717 1.717 0 0 1 7.114.6c.454 0 .89.18 1.212.502l7.862 7.87c.477.477.74.755 1.212 1.228l.004.004c.599.599 1.196 1.196 1.196 2.406 0 1.19-.6 1.79-1.2 2.39-.478.478-.735.773-1.212 1.251l-7.862 7.867A1.713 1.713 0 0 1 5.42 22.9c-.004-.45.169-.883.48-1.207l7.863-7.869a1.752 1.752 0 0 0 0-2.426L5.902 3.53A1.717 1.717 0 0 1 5.4 2.315Z"
        fill={fill}
      />
    </Svg>
  )
}

RightArrow.defaultProps = {
  fill: colors.secondary
}

export default RightArrow
