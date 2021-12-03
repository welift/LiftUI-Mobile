import { StyleSheet } from "react-native"
import colors from '@theme/color'
import types from '@theme/type'

export const styles = StyleSheet.create({
  link: {
    ...types.label,
    lineHeight: 16,
    color: colors.primary,
  },
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  }
})