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
  buttonType,
  customStyle
}) => {
  const style = buttonStyles(buttonType)

  const handleTextStyle = pressed => {
    if(pressed) return style.activeText
    if(disabled) return style.disabledText
    return style.text
  }

  const handleButtonStyle = (pressed, customStyle = null) => {
    if(pressed) return [style.areaActive, customStyle]
    if(disabled) return [style.areaDisabled, customStyle]
    return [style.area, customStyle]
  }

  return (
    <Pressable
      style={({ pressed }) => handleButtonStyle(pressed, customStyle)}
      // className={`Button-${buttonClassName}`}
      disabled={disabled || loading}
      onPress={onPress}
      loading={loading}
      data-loading={loading}
    // data-has-icon={!!icons?.[iconName]}
    >{({ pressed }) => (
      <View style={[style.content, customStyle?.buttonContent]}>
        <Text style={[handleTextStyle(pressed), customStyle?.buttonText]}>{children}</Text>
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