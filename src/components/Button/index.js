import React from 'react'

// import Spinner from '../Spinner'
// import Icon from '../Icon'

// import { icons } from '../../icons/icons'
import { View, Text, Pressable } from 'react-native'
import { buttonStyles } from './buttonStyles'

const Button = ({
  size,
  disabled,
  onPress,
  children,
  loading,
  iconName,
  buttonType
}) => {

  const style = buttonStyles(buttonType)

  const handleTextStyle = pressed => {
    if(pressed) return style.activeText
    if(disabled) return style.disabledText
    return style.text
  }

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
      onPress={onPress}
      loading={loading}
      data-loading={loading}
    // data-has-icon={!!icons?.[iconName]}
    >{({ pressed }) => (
      <View style={style.content}>
        <Text style={handleTextStyle(pressed)}>{children}</Text>
        {/* {loading && <Spinner />}
          {(!loading && iconName) && <Icon name={iconName} />} */}
      </View>
    )}
      
    </Pressable>
  )
}


Button.defaultProps = {
  // size: BUTTON_SIZE_LARGE,
  disabled: false,
  onPress: () => { },
  loading: null,
  iconName: null,
  buttonType: 'primaryDefault'
}

export default Button