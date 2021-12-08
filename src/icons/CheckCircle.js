import React from "react"
import Svg, { Path } from "react-native-svg"
import colors from '../theme/color'

const CheckCircle = (props) => {
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
        d="M10.038 15.133a.5.5 0 0 1-.707 0l-3.05-3.048a.868.868 0 0 0-1.227 1.227l3.403 3.403c.161.161.352.348.563.435.21.088.437.13.665.13.228 0 .454-.042.665-.13.21-.087.402-.274.563-.435l8.033-8.033a.868.868 0 0 0-1.228-1.228l-7.68 7.68Z"
        fill={fill}
      />
    </Svg>
  )
}

CheckCircle.defaultProps = {
  fill: colors.secondary
}

export default CheckCircle
