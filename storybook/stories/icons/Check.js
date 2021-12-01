import React from "react"
import Svg, { Path } from "react-native-svg"

const Check = (props) => (
  <Svg
    width={10}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3.746 5.901a.5.5 0 0 1-.708 0L1.03 3.892a.603.603 0 0 0-.852.853l2.362 2.362c.112.112.245.242.392.303.146.06.303.09.461.09.159 0 .316-.03.462-.09.146-.06.28-.19.391-.303L9.823 1.53a.603.603 0 0 0-.852-.852L3.746 5.9Z"
      fill="#fff"
    />
  </Svg>
)

export default Check
