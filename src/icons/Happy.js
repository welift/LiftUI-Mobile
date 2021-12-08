import React from "react"
import Svg, { Path } from "react-native-svg"
import colors from '../theme/color'

const Happy = (props) => {
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
        d="M7.8 9.6a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6Zm8.4 0a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6Z"
        fill={fill}
      />
      <Path
        d="M12 24C5.372 24 0 18.628 0 12S5.372 0 12 0s12 5.372 12 12-5.372 12-12 12Zm0-2.4a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Z"
        fill={fill}
      />
      <Path
        d="M7.62 16.536a5.985 5.985 0 0 0 4.44 1.964 5.983 5.983 0 0 0 4.44-1.963l-1.134-1.032c-.948.375-2.084.595-3.306.595s-2.358-.218-3.306-.596L7.62 16.536Z"
        fill={fill}
      />
    </Svg>
  )
}

Happy.defaultProps = {
  fill: colors.secondary
}

export default Happy
