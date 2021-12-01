import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Check from '../../icons/Check'
import { styles } from './checkboxStyles'

const Checkbox = ({
  label,
  onChange,
  disabled
}) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = (e) => {
    setIsChecked(!isChecked)
    onChange(e)
  }

  const boxViewStyle = isChecked ? styles.boxViewChecked : styles.boxViewUnChecked

  return (
    <TouchableWithoutFeedback
      onPress={handleChange}
      underlayColor='transparent'
      disabled={disabled}
    >
      <View style={styles.outerContainer}>
        <View style={boxViewStyle(disabled)}>
          {
            (isChecked) ? (
              <View style={styles.selected}>
                <Check fill='#FFFFFF' width={10} height={7} />
              </View>
            ) : (
              <View />
            )
          }
        </View>
        <Text style={styles.checkboxLabel}>
          {label}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

Checkbox.defaultProps = {
  label: 'test',
  onChange: () => { },
  disabled: false,
}

Checkbox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}
export default Checkbox