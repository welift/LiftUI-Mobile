import React from 'react'

// import {
//   BUTTON_SIZE_SMALL,
//   BUTTON_SIZE_LARGE
// } from './constants'

// import { buttonCss } from './buttonStyles'
// import Spinner from '../Spinner'
// import Icon from '../Icon'

// import { icons } from '../../icons/icons'
import { View, TouchableHighlight, Text, Pressable } from 'react-native'
import { buttonStyles } from './buttonStyles'

const Button = ({
  size,
  disabled,
  onClick,
  children,
  loading,
  iconName,
  buttonType
}) => {

  // const buttonClassName = size === BUTTON_SIZE_SMALL ? 'small' : 'large'

  const style = buttonStyles(buttonType)

  return (
    <Pressable
      style={({ pressed }) => {
        if(pressed) {
          return style.areaActive
        } else if(disabled) {
          return style.areaDisabled
        }
        return style.area
      }}
      // className={`Button-${buttonClassName}`}
      disabled={disabled || loading}
      onClick={onClick}
      loading={loading}
      data-loading={loading}
    // data-has-icon={!!icons?.[iconName]}
    >
      <View style={style.content}>
        <Text style={style.text}>{children}</Text>
        {/* {loading && <Spinner />}
          {(!loading && iconName) && <Icon name={iconName} />} */}
      </View>
    </Pressable>
  )
}


Button.defaultProps = {
  // size: BUTTON_SIZE_LARGE,
  disabled: false,
  onClick: () => { },
  loading: null,
  iconName: null,
  buttonType: 'primaryDefault'
}

export default Button