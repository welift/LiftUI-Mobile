import React, { useState } from 'react'
import { Text, View } from 'react-native'
import RadioButton from '../RadioButton'

const RadioGroup = ({
  options,
  onChange
}) => {
  const [buttons, setButtons] = useState(options)
  const handleOnChange = (e, value) => {
    let newOptions = options.map(item => {
      if (item.value === value) {
        item.selected = true
      } else {
        item.selected = false
      }

      return item
    })

    setButtons(newOptions)
    onChange(e, value)
  }

  return (
    <View>
      {buttons && buttons.map((option) => (
        <RadioButton onPress={handleOnChange} label={option.label} selected={option.selected} value={option.value} />
      ))
      }
    </View>
  )
}

RadioGroup.defaultProps = {
  onChange: () => { },
}

export default RadioGroup