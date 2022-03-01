import React from "react"
import Svg, { Path } from "react-native-svg"
import colors from '../theme/color'

const Lightbulb = (props) => {
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
        d="M10.0135 19.2793H11.0201V15.5368C11.0201 14.9965 11.4589 14.5586 12.0002 14.5586C12.5415 14.5586 12.9803 14.9965 12.9803 15.5368V19.2793H13.9869C14.1163 18.1444 14.7171 17.2078 15.6923 16.1853C15.803 16.0701 16.5077 15.3667 16.591 15.2667C17.2833 14.4336 17.7172 13.4291 17.8428 12.3689C17.9683 11.3087 17.7805 10.2358 17.3009 9.27393C16.8213 8.31204 16.0694 7.50021 15.1318 6.93192C14.1942 6.36364 13.109 6.06202 12.0013 6.06179C10.8935 6.06156 9.80821 6.36274 8.87036 6.93064C7.93251 7.49854 7.18025 8.31006 6.7002 9.27175C6.22015 10.2334 6.03184 11.3062 6.15695 12.3665C6.28206 13.4267 6.71551 14.4314 7.40739 15.2648C7.49168 15.3658 8.19834 16.0701 8.30713 16.1844C9.28332 17.2078 9.88413 18.1444 10.0135 19.2793ZM10.04 21.1676V22.1117H13.9604V21.1676H10.04ZM5.87841 16.4468C4.95533 15.3359 4.37682 13.9963 4.20954 12.5824C4.04225 11.1686 4.29298 9.73795 4.93285 8.45536C5.57272 7.17278 6.5757 6.0904 7.82624 5.33293C9.07679 4.57545 10.524 4.17369 12.0013 4.17391C13.4785 4.17414 14.9256 4.57635 16.1759 5.33422C17.4262 6.09208 18.4288 7.17476 19.0682 8.45755C19.7077 9.74033 19.9579 11.171 19.7902 12.5848C19.6224 13.9986 19.0435 15.338 18.12 16.4487C17.5124 17.1776 15.9206 18.3351 15.9206 19.7514V22.1117C15.9206 22.6125 15.7141 23.0928 15.3465 23.4469C14.9789 23.8011 14.4803 24 13.9604 24H10.04C9.52009 24 9.02149 23.8011 8.65388 23.4469C8.28627 23.0928 8.07974 22.6125 8.07974 22.1117V19.7514C8.07974 18.3351 6.48706 17.1776 5.87841 16.4468Z" 
        fill={fill}
      />
      <Path 
        d="M10.9545 1.04348C10.9545 0.467181 11.4226 0 12 0C12.5774 0 13.0455 0.467181 13.0455 1.04348V2.08696C13.0455 2.66325 12.5774 3.13044 12 3.13044C11.4226 3.13044 10.9545 2.66325 10.9545 2.08696V1.04348ZM3.86845 4.83757C3.46024 4.43012 3.46024 3.76953 3.86845 3.36209C4.27667 2.95465 4.93851 2.95465 5.34673 3.36209L6.08586 4.09983C6.49408 4.50727 6.49408 5.16786 6.08586 5.57531C5.67765 5.98275 5.0158 5.98275 4.60759 5.5753L3.86845 4.83757ZM18.6529 3.36177C19.0612 2.954 19.7236 2.9541 20.1319 3.36191C20.5399 3.76946 20.5399 4.43002 20.1317 4.83742L19.3925 5.57522C18.9842 5.98271 18.3223 5.98271 17.914 5.57522C17.5059 5.1678 17.5058 4.50726 17.9139 4.09974L18.6529 3.36177ZM22.4545 10.4348C23.0319 10.4348 23.5 10.902 23.5 11.4783C23.5 12.0546 23.0319 12.5217 22.4545 12.5217H21.4091C20.8317 12.5217 20.3636 12.0546 20.3636 11.4783C20.3636 10.902 20.8317 10.4348 21.4091 10.4348H22.4545ZM2.59091 10.4348C3.1683 10.4348 3.63636 10.902 3.63636 11.4783C3.63636 12.0546 3.1683 12.5217 2.59091 12.5217H1.54545C0.968066 12.5217 0.5 12.0546 0.5 11.4783C0.5 10.902 0.968066 10.4348 1.54545 10.4348H2.59091Z" 
        fill={fill}
      />
    </Svg>
  )
}

Lightbulb.defaultProps = {
  fill: colors.secondary
}

export default Lightbulb