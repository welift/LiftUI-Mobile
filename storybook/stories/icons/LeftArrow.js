import React from "react"
import Svg, { Path } from "react-native-svg"
import colors from '@theme/color'

const LeftArrow = (props) => {
  const { fill, ...rest } = props
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <Path
        d="M18.6 22.285A1.716 1.716 0 0 1 16.886 24c-.454 0-.89-.18-1.212-.502l-7.862-7.87c-.477-.477-.74-.755-1.212-1.228l-.004-.004C5.997 13.797 5.4 13.2 5.4 11.99c0-1.19.6-1.79 1.2-2.39.478-.478.735-.773 1.212-1.251L15.674.482A1.713 1.713 0 0 1 18.58 1.7c.004.45-.169.883-.48 1.207l-7.863 7.869a1.752 1.752 0 0 0 0 2.426l7.862 7.869c.322.321.502.758.502 1.213Z"
        fill={fill}
      />
    </Svg>
  )
}

LeftArrow.defaultProps = {
  fill: colors.secondary
}

export default LeftArrow
