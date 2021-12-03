import React, { useRef, useState } from "react"
import { View, Text, TextInput, TouchableWithoutFeedback, Pressable, FlatList } from "react-native"
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
  searchValue,
  selected,
  onClose,
  onOptionClick,
  zeroStateText,
  isDynamic,
  style,
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
    setValue(e)

    // Search Functionality
    const regex = new RegExp(`^${e}(.*)`, 'i')
    const filteredObject = options.filter((val) => regex.test(val.label))
    setFilteredOptions(filteredObject)
    onChange(e, value)
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
      setValue('')
    } else {
      setSelectedValue(item)
      setValue(item.label)
      setIsFocused(false)
      onChange({ target: { name: name, value: item.value } })
    }
    inputRef.current.blur()
    setIsOpen(false)
    onOptionClick(item)
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

  const inputRef = useRef(null)
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
                onChangeText={handleChange}
                maxLength={maxLength}
                autoComplete="nope"
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
          <FlatList
            style={styles.optionsContainer(width)}
            data={isDynamic ? options : filterdOptions}
            renderItem={({ item, index }) => isDynamic ? createDynamicDropdownItem(item, index) : createDropdownItem(item, index)}
            ListEmptyComponent={createZeroStateText}
          />
        )
      }
      {/* {
        (hasError) && (
          <Text style={styles.errorText}>{error}</Text>
        )
      } */}
    </View>
  )
}

Dropdown.defaultProps = {
  onChange: () => { },
  disabled: false,
  width: 200,
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
  width: PropTypes.number,
  maxLength: PropTypes.number,
  error: PropTypes.string,
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