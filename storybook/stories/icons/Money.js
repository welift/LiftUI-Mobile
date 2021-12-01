import React from "react"
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg"
import colors from '@theme/color'

const Money = (props) => {
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
          d="M20.53 17.07 8.383 21.377c-1.15.406-2.352.609-3.46.104-1.11-.505-2.035-1.675-2.455-2.796L.577 13.61a4.402 4.402 0 0 1 .157-3.44 4.579 4.579 0 0 1 2.604-2.326l12.145-4.305a4.73 4.73 0 0 1 3.528.153 4.55 4.55 0 0 1 2.387 2.538l1.892 5.075a4.402 4.402 0 0 1-.158 3.44 4.578 4.578 0 0 1-2.603 2.327ZM3.967 9.535a2.744 2.744 0 0 0-1.563 1.396 2.638 2.638 0 0 0-.093 2.064l1.892 5.075c.251.673.766 1.222 1.432 1.524a2.834 2.834 0 0 0 2.117.091l12.145-4.305a2.744 2.744 0 0 0 1.564-1.395c.31-.65.344-1.392.093-2.065l-1.892-5.075A2.727 2.727 0 0 0 18.23 5.32a2.834 2.834 0 0 0-2.117-.09L3.968 9.533Zm9.227 6.306a3.783 3.783 0 0 1-2.14.113 3.713 3.713 0 0 1-1.845-1.065 3.564 3.564 0 0 1-.926-1.885 3.52 3.52 0 0 1 .304-2.069 3.633 3.633 0 0 1 1.431-1.556 3.766 3.766 0 0 1 4.099.176 3.61 3.61 0 0 1 1.285 1.673c.335.897.29 1.887-.124 2.752a3.659 3.659 0 0 1-2.084 1.861Zm-1.892-5.075c-.344.122-.642.34-.858.627a1.765 1.765 0 0 0-.09 1.998c.19.304.467.547.798.698a1.889 1.889 0 0 0 2.027-.304c.27-.24.46-.553.546-.899a1.758 1.758 0 0 0-.058-1.043 1.818 1.818 0 0 0-.954-1.016 1.89 1.89 0 0 0-1.411-.06Zm-6.704.46a.921.921 0 0 0-.429.314.886.886 0 0 0 .354 1.348.944.944 0 0 0 1.014-.152.879.879 0 0 0 .244-.971.91.91 0 0 0-.477-.508.945.945 0 0 0-.706-.03Zm11.593-3.15a.903.903 0 0 0 .322.417.938.938 0 0 0 1.382-.345.88.88 0 0 0-.155-.988.945.945 0 0 0-.996-.238.915.915 0 0 0-.521.465.88.88 0 0 0-.032.688Zm-9.7 8.226a.922.922 0 0 0-.43.313.886.886 0 0 0 .354 1.348.943.943 0 0 0 1.014-.151.879.879 0 0 0 .244-.971.909.909 0 0 0-.477-.509.945.945 0 0 0-.705-.03Zm11.593-3.152a.903.903 0 0 0 .321.418.939.939 0 0 0 1.383-.345.88.88 0 0 0-.156-.988.945.945 0 0 0-.996-.238.915.915 0 0 0-.521.465.88.88 0 0 0-.031.688Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Money.defaultProps = {
  fill: colors.secondary
}

export default Money
