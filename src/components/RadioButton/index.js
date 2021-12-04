import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from '../Icon'
import { styles } from './radioButtonStyles'

const RadioButton = ({
  label,
  value,
  onPress,
  disabled,
  selected,
  style
}) => {
  const [isChecked, setIsChecked] = useState(selected)
  const boxViewStyle = isChecked ? styles.boxViewChecked : styles.boxViewUnChecked

  const handleChange = (e) => {
    onPress(e, value)
  }

  useEffect(() => {
    setIsChecked(selected)
  }, [selected])

  return (
    <TouchableWithoutFeedback
      onPress={handleChange}
      underlayColor='transparent'
      disabled={disabled}
      style={style}
    >
      <View style={styles.outerContainer}>
        <View style={boxViewStyle(disabled)}>
          {
            (isChecked) ? (
              <View style={styles.selected}>
                <Icon name='check' fill={styles.check.color} width={10} height={7} />
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

RadioButton.defaultProps = {
  label: 'test',
  onPress: () => { },
  disabled: false,
}

RadioButton.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}
export default RadioButton