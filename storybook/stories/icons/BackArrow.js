import React from "react"
import Svg, { Path } from "react-native-svg"
import colors from '@theme/color'

const BackArrow = (props) => {
  const { fill, ...rest } = props
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      viewBox='0 0 24 24'
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <Path
        d="M10.415 21.634a1.668 1.668 0 0 0 0-2.363L4.92 13.773l17.383-.011a1.67 1.67 0 1 0 0-3.34l-17.386.012 5.5-5.496a1.67 1.67 0 1 0-2.362-2.362L2.067 8.563C1.602 9.028.981 9.6.6 10.2c-.381.6-.6.9-.6 1.8s.219 1.2.6 1.8c.384.6 1.002 1.382 1.467 1.847l5.987 5.987a1.67 1.67 0 0 0 2.361 0Z"
        fill={fill}
      />
    </Svg>
  )
}

BackArrow.defaultProps = {
  fill: colors.secondary
}

export default BackArrow
