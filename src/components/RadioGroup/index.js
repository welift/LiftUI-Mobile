import React, { useState } from 'react'
import { Text, View } from 'react-native'
import RadioButton from '../RadioButton'
import { styles } from '../Tile/tileStyles'

const RadioGroup = ({
  options,
  onChange,
  direction,
  buttonPadding,
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
    <View style={{ flexDirection: direction }}>
      {buttons && buttons.map((option) => (
        <RadioButton style={{ paddingLeft: buttonPadding, paddingRight: buttonPadding }} onPress={handleOnChange} label={option.label} selected={option.selected} value={option.value} />
      ))
      }
    </View>
  )
}

RadioGroup.defaultProps = {
  onChange: () => { },
  direction: 'column',
  buttonPadding: 10,
}

export default RadioGroup