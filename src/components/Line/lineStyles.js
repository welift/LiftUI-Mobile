import { StyleSheet } from "react-native"
import colors from '@theme/color'

const border = {
  borderWidth: 1,
  borderRadius: 1,
  width: '100%',
}

export const styles = StyleSheet.create({
  lineBreak: {
    ...border,
    backgroundColor: colors.secondaryLight,
    borderColor: colors.secondaryLight,
  },
  lineBold: {
    ...border,
    backgroundColor: colors.basicLight,
    borderColor: colors.basicLight,
  }
})