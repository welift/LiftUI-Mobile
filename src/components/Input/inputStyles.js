import { StyleSheet, Platform, Dimensions } from 'react-native'
import colors from '../../theme/color'
import types from '../../theme/type'

const baseBorder = (label) => ({
  borderWidth: 1,
  borderRadius: 10,
  borderColor: colors.secondaryLight,
  height: label ? 60 : 48,
  minWidth: 200,
  width: '100%',
  paddingTop: Platform.OS === 'android' ? 8 : 12,
  paddingLeft: 16,
  paddingRight: 16,
  paddingBottom: 8,
  justifyContent: 'center',
  backgroundColor: colors.neutral
})

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  iconContainer: {
    width: 30,
    justifyContent: 'center',
    paddingLeft: 14
  },
  errorText: {
    ...types.label,
    fontSize: 10,
    lineHeight: 10,
    marginTop: 4,
    color: colors.primary,
    paddingLeft: 16
  },
  hintText: {
    ...types.label,
    fontSize: 10,
    lineHeight: 10,
    marginTop: 4,
    paddingLeft: 16,
  },
  input: (disabled, hasError, width, iconName, label) => {
    let textColor = colors.secondary
    let topMargin

    if (disabled)
      textColor = colors.basicLight

    if (hasError)
      textColor = colors.primary

    if (label) {
      topMargin = 4
    } else {
      topMargin = (Dimensions.get('screen') < 840) ? 0 : 4
    }

    return {
      ...types.label,
      fontSize: 16,
      height: 24,
      padding: 0,
      marginTop: topMargin,
      color: textColor,
    }
  },
  label: (hasError, disabled) => {
    if (hasError)
      return {
        ...types.headingSixMedium,
        color: colors.primary,
      }

    if (disabled)
      return {
        ...types.headingSixMedium,
        color: colors.secondaryDull,
      }

    return {
      ...types.headingSixMedium,
      color: colors.secondary,
    }
  },
  border: (hasFocus, disabled, value, hasError, width, label) => {
    if (hasError) {
      return {
        ...baseBorder(label),
        borderColor: colors.primary,
        width: width
      }
    }

    if (disabled) {
      return {
        ...baseBorder(label),
        borderColor: colors.basicLight,
        backgroundColor: colors.secondaryLight,
        width: width
      }
    }

    if (hasFocus) {
      return {
        ...baseBorder(label),
        borderColor: colors.accentSoft,
        width: width
      }
    }

    return {
      ...baseBorder(label),
      width: width
    }
  }
})