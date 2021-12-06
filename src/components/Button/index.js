import React from 'react'
import { View, Text, Pressable } from 'react-native'
import Icon from '../Icon'
import Spinner from '../Spinner'
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
    if (pressed) return style.activeText
    if (disabled) return style.disabledText
    return style.text
  }

  const handleButtonStyle = (pressed, customStyle = null) => {
    if (pressed || loading) return [style.areaActive, customStyle]
    if (disabled) return [style.areaDisabled, customStyle]
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
      <View style={style.outerContainer}>
        <View style={[iconName ? style.iconContent : style.content, customStyle?.buttonContent]}>
          {!loading && <Text style={[handleTextStyle(pressed), customStyle?.buttonText]}>{children}</Text>}
          {loading && <View style={{ marginStart: 16, marginEnd: 16 }}><Spinner size={16} color={style.iconColor.color} /></View>}
        </View>
        {
          (iconName && (!loading)) && (
            <View style={{ marginEnd: 16 }} >
              <Icon name={iconName} width={16} height={16} fill='#FFFFFF' />
            </View>
          )
        }
      </View>
    )}
    </Pressable>
  )
}


Button.defaultProps = {
  // size: BUTTON_SIZE_LARGE,
  disabled: false,
  onPress: () => { },
  loading: false,
  iconName: null,
  buttonType: 'primaryDefault'
}

export default Button