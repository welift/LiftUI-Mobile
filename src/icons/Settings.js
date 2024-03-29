import React from "react"
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg"
import colors from '../theme/color'

const Settings = (props) => {
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
          d="M1.608 18c-.37-.64-.68-1.314-.927-2.01-.159-.45.07-.926.435-1.232a3.6 3.6 0 0 0 0-5.516c-.364-.305-.592-.78-.435-1.229.492-1.4 1.24-2.696 2.204-3.822.31-.362.836-.401 1.283-.239a3.6 3.6 0 0 0 4.778-2.758c.082-.469.38-.905.847-.992a11.988 11.988 0 0 1 4.414.002c.467.087.764.523.846.991a3.598 3.598 0 0 0 4.778 2.758c.448-.163.974-.124 1.284.238.472.553.9 1.156 1.277 1.809.377.653.686 1.326.928 2.011.158.449-.07.925-.435 1.23a3.6 3.6 0 0 0-.001 5.517c.364.305.593.78.435 1.229a11.987 11.987 0 0 1-2.204 3.822c-.31.362-.836.401-1.283.239a3.6 3.6 0 0 0-4.778 2.758c-.082.469-.38.905-.847.992a11.987 11.987 0 0 1-4.414-.002c-.467-.087-.764-.523-.846-.991a3.6 3.6 0 0 0-4.778-2.758c-.447.163-.974.123-1.284-.239A12.022 12.022 0 0 1 1.608 18Zm6.792.235a5.992 5.992 0 0 1 2.59 3.016.51.51 0 0 0 .437.333c.381.024.764.024 1.145.001a.51.51 0 0 0 .437-.333 5.992 5.992 0 0 1 2.591-3.016 5.991 5.991 0 0 1 3.908-.736.51.51 0 0 0 .507-.212c.21-.319.401-.65.572-.992a.51.51 0 0 0-.07-.545A5.991 5.991 0 0 1 19.2 12c0-1.397.482-2.71 1.316-3.75a.51.51 0 0 0 .07-.547 9.735 9.735 0 0 0-.573-.99.51.51 0 0 0-.508-.213 5.992 5.992 0 0 1-3.905-.735 5.991 5.991 0 0 1-2.59-3.016.51.51 0 0 0-.437-.333 9.577 9.577 0 0 0-1.145-.001.51.51 0 0 0-.437.333A5.991 5.991 0 0 1 8.4 5.764a5.992 5.992 0 0 1-3.907.736.51.51 0 0 0-.508.212c-.21.32-.4.65-.571.992a.51.51 0 0 0 .07.545A5.992 5.992 0 0 1 4.8 12c0 1.397-.482 2.71-1.315 3.75a.51.51 0 0 0-.07.547c.171.34.362.672.572.99a.51.51 0 0 0 .508.213 5.992 5.992 0 0 1 3.905.735ZM12 15.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2Zm0-2.4a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z"
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

Settings.defaultProps = {
  fill: colors.secondary
}

export default Settings
