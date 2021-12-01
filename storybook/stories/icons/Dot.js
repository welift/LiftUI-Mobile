import React from "react"
import Svg, { Path } from "react-native-svg"
import colors from '@theme/color'

const Dot = (props) => {
  const { fill, ...rest } = props
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <Path
        d="M12 19.2A7.198 7.198 0 0 1 4.8 12c0-3.978 3.222-7.2 7.2-7.2s7.2 3.222 7.2 7.2-3.222 7.2-7.2 7.2Zm0-2.4c2.652 0 4.8-2.148 4.8-4.8 0-2.652-2.148-4.8-4.8-4.8A4.799 4.799 0 0 0 7.2 12c0 2.652 2.148 4.8 4.8 4.8Z"
        fill="#5C7184"
      />
    </Svg>
  )
}

Dot.defaultProps = {
  fill: colors.secondary
}

export default Dot
