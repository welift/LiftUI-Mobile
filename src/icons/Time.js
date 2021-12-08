import React from "react"
import Svg, { Path } from "react-native-svg"
import colors from '../theme/color'

const Time = (props) => {
  const { fill, ...rest } = props
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <Path
        d="M12 24C5.372 24 0 18.628 0 12S5.372 0 12 0s12 5.372 12 12-5.372 12-12 12Zm0-2.4a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Zm1.2-9.85c0 .138.112.25.25.25h3.35a1.2 1.2 0 0 1 0 2.4h-5a1 1 0 0 1-1-1V7.2a1.2 1.2 0 0 1 2.4 0v4.55Z"
        fill={fill}
      />
    </Svg>
  )
}

Time.defaultProps = {
  fill: colors.secondary
}

export default Time
