import React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
import colors from '@theme/color'

const Sad = (props) => {
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
      <G clipPath="url(#a)">
        <Path
          d="M12 0c6.628 0 12 5.372 12 12 0 .714-.062 1.412-.182 2.092a.242.242 0 0 1-.412.125l-1.504-1.505c-.198-.197-.301-.469-.302-.749a9.6 9.6 0 1 0-5.67 8.796.563.563 0 0 1 .672.177c.339.438.75.814 1.218 1.112.165.105.172.352 0 .448A11.948 11.948 0 0 1 12 24C5.372 24 0 18.628 0 12S5.372 0 12 0Zm8.046 14.96a.5.5 0 0 1 .708 0l1.343 1.343a2.4 2.4 0 1 1-3.516.132l.122-.132 1.343-1.343ZM12 15.6c1.67 0 3.18.682 4.268 1.783a.242.242 0 0 1-.013.35l-.718.653a.521.521 0 0 1-.524.1A9.174 9.174 0 0 0 12 18a9.216 9.216 0 0 0-3.014.486.521.521 0 0 1-.523-.1l-.718-.655a.242.242 0 0 1-.013-.35A5.982 5.982 0 0 1 12 15.6Zm-4.2-6a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6Zm8.4 0a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6Z"
          fill={fill}
        />
      </G>
      <Defs>
        <clipPath id="a">
          <Path fill='#fff' d="M0 0h24v24H0z" />
        </clipPath>
      </Defs>
    </Svg>
  )
}

Sad.defaultProps = {
  fill: colors.secondary
}

export default Sad
