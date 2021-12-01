import React from "react"
import Svg, { Path } from "react-native-svg"
import colors from '@theme/color'

const CrossCircle = (props) => {
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
      <Path
        d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Z"
        fill={fill}
      />
      <Path
        d="M16.577 7.423a.763.763 0 0 0-1.079 0L12 10.921 8.502 7.423a.763.763 0 0 0-1.079 1.079L10.921 12l-3.498 3.498a.763.763 0 0 0 1.079 1.079L12 13.079l3.498 3.498a.763.763 0 0 0 1.079-1.079L13.079 12l3.498-3.498a.763.763 0 0 0 0-1.079Z"
        fill={fill}
      />
    </Svg>
  )
}

CrossCircle.defaultProps = {
  fill: colors.secondary
}

export default CrossCircle
