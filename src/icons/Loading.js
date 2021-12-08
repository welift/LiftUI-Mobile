import React from "react"
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg"
import colors from '../theme/color'

const Loading = (props) => {
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
      <G clipPath="url(#a)" fill={fill}>
        <Path
          d="M15.094 8.906a1.444 1.444 0 0 0 2.041 0l3.06-3.06a1.444 1.444 0 0 0-2.04-2.043l-3.06 3.062a1.443 1.443 0 0 0 0 2.04Z"
          fillOpacity={0.3}
        />
        <Path d="M10.98.508a1.443 1.443 0 0 1 2.463 1.02v4.33a1.444 1.444 0 0 1-2.886 0v-4.33c0-.383.152-.75.422-1.02Z" />
        <Path
          d="M9.328 7.885a1.443 1.443 0 0 1-2.463 1.02l-3.062-3.06a1.444 1.444 0 0 1 2.043-2.042l3.06 3.062c.27.27.422.637.422 1.02Z"
          fillOpacity={0.9}
        />
        <Path
          d="M.593 13.19a1.443 1.443 0 0 1 1.02-2.464h4.33a1.443 1.443 0 0 1 0 2.887h-4.33c-.383 0-.75-.152-1.02-.423Z"
          fillOpacity={0.8}
        />
        <Path
          d="M4.824 20.62a1.444 1.444 0 0 1-1.02-2.466l3.06-3.06a1.443 1.443 0 0 1 2.042 2.041l-3.062 3.062c-.27.27-.638.422-1.02.422Z"
          fillOpacity={0.7}
        />
        <Path
          d="M10.98 17.12a1.443 1.443 0 0 1 2.463 1.021v4.33a1.443 1.443 0 0 1-2.886 0v-4.33c0-.382.152-.75.422-1.02Z"
          fillOpacity={0.6}
        />
        <Path
          d="M20.618 19.176a1.444 1.444 0 0 1-2.465 1.02l-3.06-3.06a1.444 1.444 0 1 1 2.04-2.041l3.062 3.06c.27.272.423.639.423 1.021Z"
          fillOpacity={0.5}
        />
        <Path
          d="M17.12 13.02a1.443 1.443 0 0 1 1.021-2.463h4.33a1.444 1.444 0 0 1 0 2.886h-4.33c-.382 0-.75-.152-1.02-.422Z"
          fillOpacity={0.4}
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" transform="matrix(-1 0 0 1 24 0)" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Loading.defaultProps = {
  fill: colors.secondary
}

export default Loading
