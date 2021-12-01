import { StyleSheet } from "react-native"
import colors from '@theme/color'

const border = {
  borderWidth: 2,
  borderRadius: 2,
  width: '100%',
}

const styles = StyleSheet.create({
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