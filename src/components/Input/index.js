import React, { useRef, useState } from "react"
import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native"
import { styles } from './inputStyles'
import Icon from '../Icon'
import PropTypes from 'prop-types'
import Pressable from "react-native/Libraries/Components/Pressable/Pressable"

const Input = ({
  label,
  hint,
  onChange,
  disabled,
  placeholder,
  maxLength,
  error,
  width,
  defaultValue,
  touched,
  name,
  iconName,
  onIconPress,
  formatter,
  marginBottom,
  textInputRef,
  ...rest
}) => {
  const [value, setValue] = useState(defaultValue)
  const [isTouched, setTouched] = useState(touched)
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (e) => {
    e.preventDefault()
    setValue(formatter(e.nativeEvent.text))
    onChange(e.nativeEvent, formatter(e.nativeEvent.text), name)
  }

  const handleInputClick = () => {
    if (inputRef) {
      inputRef.current.focus()
      setIsFocused(true)
    }
  }

  const handleInputClickOut = () => {
    setIsFocused(false)
    setTouched(true)
  }

  const inputRef = textInputRef ? textInputRef : useRef(null)
  const hasError = error?.length > 0 && isTouched

  return (
    <View style={{ width: width, marginBottom: (hasError || hint) ? 12 : marginBottom }}>
      <View
        style={
          styles.border(
            isFocused,
            disabled,
            value,
            hasError,
            width,
            label)}
      >
        <TouchableWithoutFeedback
          onPressIn={handleInputClick}
          onBlur={handleInputClickOut}
        >
          <View style={styles.container}>
            <View style={{ flex: 1 }}>
              {
                (label) && (
                  <Text style={styles.label(hasError, disabled)}>{label}</Text>
                )
              }
              <TextInput
                ref={inputRef}
                style={styles.input(disabled, hasError, width, iconName, label)}
                name={name}
                onPressIn={handleInputClick}
                onFocus={handleInputClick}
                editable={!disabled}
                placeholder={placeholder}
                onChange={handleChange}
                maxLength={maxLength}
                value={value}
                placeholderTextColor={styles.input(disabled, hasError, width, iconName, label).color}
                {...rest}
              />
            </View>
            {
              (iconName) && (
                <Pressable style={styles.iconContainer} onPress={onIconPress}>
                  <Icon name={iconName} width={16} height={16} />
                </Pressable>
              )
            }
          </View>
        </TouchableWithoutFeedback>
      </View>
      {
        (hint && !hasError) && (
          <Text style={styles.hintText}>{hint}</Text>
        )
      }
      {
        (hasError) && (
          <Text style={styles.errorText}>{error}</Text>
        )
      }
    </View>

  )
}

Input.defaultProps = {
  onChange: () => { },
  onIconPress: () => { },
  formatter: (value) => value,
  disabled: false,
  width: '100%',
  touched: false,
  marginBottom: 24
}

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxLength: PropTypes.number,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  defaultValue: PropTypes.string,
  hint: PropTypes.string,
  touched: PropTypes.bool,
  name: PropTypes.string
}

export default Input