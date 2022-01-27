import React from "react"
import Svg, { Path } from "react-native-svg"
import colors from '../theme/color'

const WeliftBox = (props) => {
  const { fill, ...rest } = props
  return (
    <Svg 
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <Path 
        fill-rule="evenodd" 
        clip-rule="evenodd" 
        d="M12.1044 0.287296C11.421 -0.0957647 10.579 -0.0957657 9.89564 0.287295L1.10448 5.21504C0.421027 5.59813 0 6.30616 0 7.07239V16.9276C0 17.6938 0.421026 18.4019 1.10448 18.785L9.89564 23.7127C10.579 24.0958 11.421 24.0958 12.1044 23.7127L20.8955 18.785C21.579 18.4019 22 17.6938 22 16.9276V7.07239C22 6.30616 21.579 5.59813 20.8955 5.21504L12.1044 0.287296ZM19.1837 7.41969C19.5519 7.21332 20.012 7.47128 20.012 7.88402V16.747C20.012 16.9386 19.9068 17.1156 19.7359 17.2114L11.8283 21.6442C11.4602 21.8505 11 21.5926 11 21.1798V12.3168C11 12.1253 11.1053 11.9483 11.2761 11.8525L19.1837 7.41969Z" 
        fill={fill}
      />
    </Svg>
  )
}

WeliftBox.defaultProps = {
  fill: colors.secondary
}

export default WeliftBox