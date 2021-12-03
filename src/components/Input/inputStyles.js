import { StyleSheet } from 'react-native'
import colors from '@theme/color'
import types from '@theme/type'

const baseBorder = {
  borderWidth: 1,
  borderRadius: 10,
  borderColor: colors.secondaryLight,
  height: 60,
  maxWidth: '90%',
  minWidth: 200,
  width: 200,
  paddingTop: 12,
  paddingLeft: 16,
  paddingRight: 16,
  paddingBottom: 8,
  marginBottom: 14,
  justifyContent: 'center',
}

export const styles = StyleSheet.create({
  errorText: {
    ...types.label,
    fontSize: 10,
    lineHeight: 10,
    marginTop: 6,
    color: colors.primary,
  },
  hintText: {
    ...types.label,
    fontSize: 10,
    lineHeight: 10,
    marginTop: 6,
  },
  input: (disabled, hasError) => {
    let textColor = colors.secondary

    if (disabled)
      textColor = colors.basicLight

    if (hasError)
      textColor = colors.primary

    return {
      ...types.label,
      fontSize: 16,
      height: 24,
      marginTop: 4,
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
  border: (hasFocus, disabled, value, hasError, width) => {
    if (hasError) {
      return {
        ...baseBorder,
        borderColor: colors.primary,
        width: width
      }
    }

    if (disabled) {
      return {
        ...baseBorder,
        borderColor: colors.basicLight,
        backgroundColor: colors.secondaryLight,
        width: width
      }
    }

    if (hasFocus) {
      return {
        ...baseBorder,
        borderColor: colors.accentSoft,
        width: width
      }
    }

    return {
      ...baseBorder,
      width: width
    }
  }
})