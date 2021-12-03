import { StyleSheet } from "react-native"

import colors from '@theme/color';
import types from '@theme/type'

const baseBoxView = {
  width: 14,
  height: 14,
  borderRadius: 100,
  borderWidth: 1,
  marginRight: 16
}

export const styles = StyleSheet.create({
  check: {
    color: colors.neutral
  },
  boxViewChecked: (disabled) => ({
    ...baseBoxView,
    backgroundColor: (disabled ? colors.primaryLight : colors.primary),
    borderColor: (disabled ? colors.primaryLight : colors.primary)
  }),
  boxViewUnChecked: (disabled) => ({
    ...baseBoxView,
    backgroundColor: 'transparent',
    borderColor: (disabled ? colors.basicLight : colors.basicDull)
  }),
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
    ...types.smallBody,
    color: colors.secondary
  }
})