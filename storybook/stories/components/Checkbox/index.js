import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import colors from '@theme/color';

const Checkbox = ({
  label,
  onChange,
  disabled
}) => {
  const [isChecked, setIsChecked] = useState(false)

  const boxViewStyle = isChecked ? styles.boxViewChecked : styles.boxViewUnChecked

  return (
    <TouchableHighlight
      onPress={() => setIsChecked(!isChecked)}
      underlayColor='transparent'
    >
      <View>
        <View style={boxViewStyle}>
          {
            (isChecked) ? (
              <View style={{}}>
                <Text>Checked</Text>
              </View>
            ) : (
              <View>
                <Text>UnChecked</Text>
              </View>
            )
          }
        </View>
        <Text>
          Test
        </Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  boxViewChecked: {
    width: 16,
    height: 16,
    backgroundColor: colors.primary,
    borderRadius: 2,
  },
  boxViewUnChecked: {
    width: 16,
    height: 16,
    backgroundColor: 'transparent',
    borderRadius: 2,
  },
})

export default Checkbox