import React from "react"
import Svg, { Path } from "react-native-svg"
import colors from '@theme/color'

const EyeOpen = (props) => {
  const { fill, ...rest } = props
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <Path
        d="M12 2.182c5.563 0 10.242 3.786 11.602 8.922a3.507 3.507 0 0 1 0 1.792c-1.359 5.136-6.039 8.922-11.602 8.922-5.563 0-10.242-3.786-11.602-8.922a3.506 3.506 0 0 1 0-1.792C1.757 5.968 6.437 2.182 12 2.182Zm0 17.454a9.823 9.823 0 0 0 9.399-6.972c.13-.433.13-.895 0-1.327a9.824 9.824 0 0 0-18.797 0 2.283 2.283 0 0 0 0 1.327A9.824 9.824 0 0 0 12 19.636Zm0-2.727a4.91 4.91 0 1 1 0-9.818 4.91 4.91 0 0 1 0 9.818Zm0-2.182a2.728 2.728 0 1 0 0-5.455 2.728 2.728 0 0 0 0 5.455Z"
        fill={fill}
      />
    </Svg>
  )
}

EyeOpen.defaultProps = {
  fill: colors.secondary
}

export default EyeOpen
