import React from "react"
import Svg, { Path } from "react-native-svg"
import colors from '@theme/color'

const Home = (props) => {
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
        d="M13.278 21.438h7.166a.5.5 0 0 0 .5-.5V10.123a.5.5 0 0 0-.192-.394l-8.444-6.585a.5.5 0 0 0-.615 0L3.248 9.729a.5.5 0 0 0-.192.394v10.815a.5.5 0 0 0 .5.5h7.166V14.75a1 1 0 0 1 1-1h.556a1 1 0 0 1 1 1v6.687Zm10.222 1.28A1.283 1.283 0 0 1 22.222 24H1.778A1.276 1.276 0 0 1 .5 22.719V9.254A1.284 1.284 0 0 1 .993 8.24L11.215.27a1.276 1.276 0 0 1 1.57 0L23.007 8.24a1.28 1.28 0 0 1 .493 1.013v13.465Z"
        fill={fill}
      />
    </Svg>
  )
}

Home.defaultProps = {
  fill: colors.secondary
}

export default Home
