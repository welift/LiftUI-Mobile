import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Check from '../../icons/Check'
import colors from '@theme/color';
import types from '@theme/type'

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
      <View style={styles.outerContainer}>
        <View style={boxViewStyle}>
          {
            (isChecked) ? (
              <View style={styles.selected}>
                <Check />
              </View>
            ) : (
              <View />
            )
          }
        </View>
        <Text style={styles.checkboxLabel}>
          Test
        </Text>
      </View>
    </TouchableHighlight>
  )
}

const baseBoxView = {
  width: 16,
  height: 16,
  borderRadius: 2,
  borderWidth: 1,
  marginRight: 16
}

const styles = StyleSheet.create({
  boxViewChecked: {
    ...baseBoxView,
    backgroundColor: colors.primary,
    borderColor: colors.primary
  },
  boxViewUnChecked: {
    ...baseBoxView,
    backgroundColor: 'transparent',
    borderColor: colors.basicDull
  },
  checkChecked: {
    color: colors.neutral
  },
  checkUnChecked: {
    color: colors.basic
  },
  selected: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  outerContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkboxLabel: {
    ...types.smallBody
  }
})

export default Checkbox