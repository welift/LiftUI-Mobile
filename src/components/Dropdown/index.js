import React, { useRef, useState } from "react"
import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native"
import { styles } from './dropdownStyles'
import PropTypes from 'prop-types'
import Icon from "../../components/Icon"

const Dropdown = ({
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
  options,
  ...rest
}) => {
  const [value, setValue] = useState(defaultValue)
  const [isTouched, setTouched] = useState(touched)
  const [isFocused, setIsFocused] = useState(false)
  const [open, setIsOpen] = useState(true)

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
    <View>
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
          <View style={styles.container}>
            <View>
              {
                (label) && (
                  <Text style={styles.label(hasError, disabled)}>{label}</Text>
                )
              }
              <TextInput
                ref={inputRef}
                style={styles.input(disabled, hasError, width)}
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
            <View style={styles.iconContainer}>
              <Icon name='downArrow' />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
      {
        (open) && (
          <View style={styles.optionsContainer(width)}>
            <Text>I'm an option</Text>
          </View>
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

Dropdown.defaultProps = {
  onChange: () => { },
  disabled: false,
  width: 200,
  touched: false,
}

Dropdown.propTypes = {
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

export default Dropdown