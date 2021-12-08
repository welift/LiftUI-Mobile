import React from "react"
import Svg, { Path } from "react-native-svg"
import colors from '../theme/color'

const Calendar = (props) => {
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
        d="M18 2.4h4.8A1.2 1.2 0 0 1 24 3.6v19.2a1.2 1.2 0 0 1-1.2 1.2H1.2A1.2 1.2 0 0 1 0 22.8V3.6a1.2 1.2 0 0 1 1.2-1.2H6V1.2a1.2 1.2 0 0 1 2.4 0v1.2h7.2V1.2a1.2 1.2 0 0 1 2.4 0v1.2Zm3.6 9.6H2.4v9.35c0 .138.112.25.25.25h18.7a.25.25 0 0 0 .25-.25V12Zm-6-7.2H8.4V6A1.2 1.2 0 0 1 6 6V4.8H2.65a.25.25 0 0 0-.25.25V9.6h19.2V5.05a.25.25 0 0 0-.25-.25H18V6a1.2 1.2 0 0 1-2.4 0V4.8ZM4.8 15.6a1.2 1.2 0 1 1 2.4 0 1.2 1.2 0 0 1-2.4 0Zm6 0a1.2 1.2 0 1 1 2.4 0 1.2 1.2 0 0 1-2.4 0Zm6 0a1.2 1.2 0 1 1 2.4 0 1.2 1.2 0 0 1-2.4 0Z"
        fill={fill}
      />
    </Svg>
  )
}

Calendar.defaultProps = {
  fill: colors.secondary
}

export default Calendar
