import React, { useRef, useState } from "react"
import { SafeAreaView, View, Text, TextInput, StyleSheet } from "react-native"
import colors from '@theme/color'
import { TouchableWithoutFeedback } from "react-native-gesture-handler"

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

  const handleChange = (e) => {
    e.preventDefault()
    setValue(e.target.value)
    onChange(e, value)
  }

  const handleInputClick = () => {
    if (inputRef) inputRef.current.focus()
  }

  const inputRef = useRef(null)

  const hasError = error?.length > 0 && touched

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback
        onPress={handleInputClick}
        onBlur={() => setTouched(true)}
        style={
          styles.border(
            inputRef.current.hasFocus,
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
            disabled={disabled}
            placeholder={placeholder}
            onChange={handleChange}
            maxLength={maxLength}
            autoComplete="nope"
            {...rest}
          />
        </View>
      </TouchableWithoutFeedback>

    </SafeAreaView>
  )
}

Input.defaultProps = {
  onChange: () => { },
  placeholder: 'test',
  disabled: false,
  label: 'test label'
}

const styles = StyleSheet.create({
  input: {
    maxWidth: '90%'
  },
  border: (hasFocus, disabled, value, hasError) => {
    let style = {
      borderWidth: 1,
      borderRadius: 10,
      borderColor: colors.secondaryLight,
      minHeight: 48,
      maxWidth: '90%',
      width: 200,
      paddingTop: 8,
      paddingLeft: 16
    }

    if (hasError) {
      style.borderColor = colors.primary
      return style
    }

    if (hasFocus) {
      style.borderColor = colors.accentSoft
      return style
    }

    if (disabled) {
      style.borderColor = colors.basicLight
      style.backgroundColor = colors.secondaryLight
      return style
    }

    return style
  }
})

export default Input