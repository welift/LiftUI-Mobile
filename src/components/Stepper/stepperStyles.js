import colors from '../../theme/color'
import { StyleSheet } from 'react-native'

export const stepStyles = StyleSheet.create({
  defaultStep: {
    backgroundColor: colors.secondaryLight,
  },
  currentStep: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})