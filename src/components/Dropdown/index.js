import React, { useRef, useState } from "react"
import { View, Text, TextInput, TouchableWithoutFeedback, Pressable, FlatList } from "react-native"
import { styles } from './dropdownStyles'
import PropTypes from 'prop-types'
import Icon from '../Icon'

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
  searchValue,
  selected,
  onClose,
  onOptionClick,
  zeroStateText,
  isDynamic,
  style,
  textInputRef,
  ...rest
}) => {
  const defaultSelectedValue = { key: null, label: null, value: null, selected: false }
  const [value, setValue] = useState(defaultValue)
  const [isTouched, setTouched] = useState(touched)
  const [isFocused, setIsFocused] = useState(false)
  const [filterdOptions, setFilteredOptions] = useState(options)
  const [selectedValue, setSelectedValue] = useState(selected)
  const [open, setIsOpen] = useState(false)

  const handleChange = (e) => {
    setValue(e.nativeEvent.text)

    // Search Functionality
    const regex = new RegExp(`^${e.nativeEvent.text}(.*)`, 'i')
    const filteredObject = options?.filter((val) => regex.test(val.label))
    setFilteredOptions(filteredObject)
    onChange(e, e.nativeEvent.text, name)
  }

  const handleInputClick = (e) => {
    e.preventDefault()
    if (inputRef) {
      inputRef.current.focus()
      setIsFocused(!isFocused)
      setIsOpen(!open)
    }
  }

  const handleInputClickOut = () => {
    setIsFocused(false)
    setTouched(true)
    setIsOpen(false)
  }

  const handleOptionClick = (item) => {
    if (selectedValue?.value === item.value) {
      setIsOpen(false)
      setIsFocused(false)
      setSelectedValue(defaultSelectedValue)
      onChange(null, null, name)
      setValue('')
    } else {
      setSelectedValue(item)
      setValue(item.label)
      setIsFocused(false)
      onChange({ target: { name: name, value: item.value } }, item.value, name)
    }
    inputRef.current.blur()
    setIsOpen(false)
    onOptionClick(item, item.value, name)
  }
  const createDynamicItems = () => {
    return (options?.length > 0) ? options.map((item, index) => (
      createDynamicDropdownItem(item, index)
    )) : createZeroStateText()
  }

  const createDynamicDropdownItem = (item, index) => (
    <DropdownItem
      key={item.value}
      item={item}
      index={index}
      handleOnClick={handleOptionClick}
      isLast={index === options.length - 1}
      selected={item.value === selectedValue.value}
    />
  )

  const createDropDownItems = () => {
    return (filterdOptions?.length > 0) ? filterdOptions.map((item, index) => (
      createDropdownItem(item, index)
    )) : createZeroStateText()
  }

  const createDropdownItem = (item, index) => (
    <DropdownItem
      key={item.value}
      item={item}
      index={index}
      handleOnClick={handleOptionClick}
      isLast={index === filterdOptions.length - 1}
      selected={item.value === selectedValue.value}
    />
  )

  const createZeroStateText = () => (
    <View style={styles.option(false, false, true)}>
      <Text style={styles.optionText}>{zeroStateText}</Text>
    </View>
  )

  const inputRef = textInputRef ? textInputRef : useRef(null)
  const hasError = error?.length > 0 && isTouched

  return (
    <View style={style}>
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
                style={styles.input(disabled, hasError, width)}
                name={name}
                onPressIn={handleInputClick}
                onFocus={handleInputClick}
                editable={!disabled}
                placeholder={placeholder}
                onChange={handleChange}
                maxLength={maxLength}
                value={value}
                placeholderTextColor={styles.input(disabled, hasError, width).color}
                {...rest}
              />
            </View>
            <View style={styles.iconContainer}>
              <Icon name='downArrow' width={12} height={12} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
      {
        (open) && (
          <View style={styles.optionsContainer(width, label)}>
            {(isDynamic) ? createDynamicItems() : createDropDownItems()}
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
  width: '100%',
  touched: false,
  selected: { key: null, label: null, value: null, selected: false },
  zeroStateText: 'No available options',
  isDynamic: false,
  onOptionClick: () => { },
  onClose: () => { },
}

Dropdown.propTypes = {
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

const DropdownItem = ({ item, selected, handleOnClick, isLast }) => {
  return (
    <Pressable
      style={({ pressed }) => styles.option(pressed, selected, isLast)}
      onPress={() => handleOnClick(item)}>
      <View style={styles.optionRow}>
        <Text style={styles.optionText}>{item.label}</Text>
        {selected && <Icon name='check' width={12} height={12} />}
      </View>
    </Pressable>
  )
}

export default Dropdown