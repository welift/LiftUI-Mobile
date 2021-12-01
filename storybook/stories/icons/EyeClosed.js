import React from "react"
import Svg, { Path } from "react-native-svg"
import colors from '@theme/color'

const EyeClosed = (props) => {
  const { fill, ...rest } = props
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <Path
        d="M9.383 18.345a1.09 1.09 0 0 1-2.107-.565l.576-2.153a11.987 11.987 0 0 1-3.53-2.042l-1.578 1.578a1.091 1.091 0 1 1-1.543-1.543l1.578-1.577a11.953 11.953 0 0 1-2.344-4.47c-.161-.58.237-1.149.829-1.257.593-.108 1.156.289 1.329.867C3.804 11.23 7.557 14.182 12 14.182c4.442 0 8.196-2.951 9.407-7 .173-.578.735-.974 1.329-.867.592.108.99.677.83 1.258a11.953 11.953 0 0 1-2.343 4.47l1.576 1.577a1.091 1.091 0 1 1-1.543 1.543l-1.577-1.578a11.987 11.987 0 0 1-3.531 2.042l.576 2.154a1.09 1.09 0 0 1-2.107.565l-.577-2.155c-1.35.232-2.73.232-4.08 0l-.577 2.154Z"
        fill={fill}
      />
    </Svg>
  )
}

EyeClosed.defaultProps = {
  fill: colors.secondary
}

export default EyeClosed
