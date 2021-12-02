import React, { useEffect, useRef, useState } from "react"
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback } from "react-native"
import colors from '@theme/color'

const Input = ({
  label,
  hint,
  onChange,
  disabled,
  placeholder,
  maxLength,
  name,
  error,
  ...rest
}) => {
  const [value, setValue] = useState('')
  const [touched, setTouched] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (e) => {
    e.preventDefault()
    setValue(e.target.value)
    onChange(e, value)
  }

  const handleInputClick = () => {
    if (inputRef) {
      inputRef.current.focus()
      console.log('focusing!')
      setIsFocused(true)
    }

    console.log('outside of if')
  }

  console.log("is focused", inputRef?.current?.isFocused())
  const inputRef = useRef(null)

  const hasError = error?.length > 0 && touched

  return (
    <TouchableWithoutFeedback
      onPressIn={handleInputClick}
      onBlur={() => setTouched(true)}
      style={
        styles.border(
          isFocused,
          disabled,
          value,
          hasError)}
      data-hint={hint?.length > 0}
      data-error={hasError}
      data-filled={value?.length > 0}
      data-disabled={disabled}
    >
      <View>
        <Text>{label}</Text>
        <TextInput
          ref={inputRef}
          style={styles.input}
          name={name}
          onPressIn={handleInputClick}
          editable={!disabled}
          placeholder={placeholder}
          onChange={handleChange}
          maxLength={maxLength}
          autoComplete="nope"
          {...rest}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

Input.defaultProps = {
  onChange: () => { },
  placeholder: 'test',
  disabled: false,
  label: 'test label',
  hasError: false
}

const baseBorder = {
  borderWidth: 1,
  borderRadius: 10,
  minHeight: 48,
  maxWidth: '90%',
  width: 200,
  paddingTop: 8,
  paddingLeft: 16
}

const styles = StyleSheet.create({
  input: {
    maxWidth: '90%'
  },
  border: (hasFocus, disabled, value, hasError) => {
    if (hasError) {
      return {
        ...baseBorder,
        borderColor: colors.primary
      }
    }

    if (hasFocus) {
      return {
        ...baseBorder,
        borderColor: colors.accentSoft
      }
    }

    if (disabled) {
      return {
        ...baseBorder,
        borderColor: colors.basicLight,
        backgroundColor: colors.secondaryLight
      }
    }

    return baseBorder
  }
})

export default Input