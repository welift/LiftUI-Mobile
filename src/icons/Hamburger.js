import React from "react"
import Svg, { Path } from "react-native-svg"
import colors from '@theme/color'

const Hamburger = (props) => {
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
        d="M0 20.16c0-.702.388-1.27.866-1.27h22.268c.478 0 .866.568.866 1.27v1.37c0 .701-.388 1.27-.866 1.27H.866C.388 22.8 0 22.231 0 21.53v-1.37ZM23.134 10.045H.866c-.478 0-.866.569-.866 1.27v1.37c0 .701.388 1.27.866 1.27h22.268c.478 0 .866-.569.866-1.27v-1.37c0-.701-.388-1.27-.866-1.27ZM23.134 1.2H.866C.388 1.2 0 1.769 0 2.47v1.37c0 .702.388 1.27.866 1.27h22.268c.478 0 .866-.568.866-1.27V2.47c0-.701-.388-1.27-.866-1.27Z"
        fill={fill}
      />
    </Svg>
  )
}

Hamburger.defaultProps = {
  fill: colors.secondary
}

export default Hamburger
