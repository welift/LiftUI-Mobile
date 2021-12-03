import React, { useRef, useState } from "react"
import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native"
import { styles } from './inputStyles'
import PropTypes from 'prop-types'

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
  ...rest
}) => {
  const [value, setValue] = useState(defaultValue)
  const [isTouched, setTouched] = useState(touched)
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (e) => {
    e.preventDefault()
    setValue(e.target.value)
    onChange(e, value)
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

  const inputRef = useRef(null)
  const hasError = error?.length > 0 && isTouched

  return (
    <View
      style={
        styles.border(
          isFocused,
          disabled,
          value,
          hasError,
          width)}
    >
      <TouchableWithoutFeedback
        onPressIn={handleInputClick}
        onBlur={handleInputClickOut}
      >
        <View>
          {
            (label) && (
              <Text style={styles.label(hasError, disabled)}>{label}</Text>
            )
          }
          <TextInput
            ref={inputRef}
            style={styles.input(disabled, hasError)}
            name={name}
            onPressIn={handleInputClick}
            editable={!disabled}
            placeholder={placeholder}
            onChange={handleChange}
            maxLength={maxLength}
            autoComplete="nope"
            value={value}
            placeholderTextColor={styles.input(disabled, hasError).color}
            {...rest}
          />
        </View>
      </TouchableWithoutFeedback>
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
  disabled: false,
  width: 200,
  touched: false,
}

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  width: PropTypes.number,
  maxLength: PropTypes.number,
  error: PropTypes.string,
  defaultValue: PropTypes.string,
  hint: PropTypes.string,
  touched: PropTypes.bool,
  name: PropTypes.string
}

export default Input