import { StyleSheet, Platform } from 'react-native'
import colors from '../../theme/color'
import types from '../../theme/type'

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
  justifyContent: 'center',
  backgroundColor: colors.neutral
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  iconContainer: {
    justifyContent: 'center'
  },
  errorText: {
    ...types.label,
    fontSize: 10,
    lineHeight: 10,
    marginTop: 4,
    marginBottom: 2,
    color: colors.primary,
    paddingLeft: 16
  },
  hintText: {
    ...types.label,
    fontSize: 10,
    lineHeight: 10,
    marginTop: 4,
    marginBottom: 2,
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
      topMargin = (Platform.OS === 'ios') ? 4 : 0
    }

    return {
      ...types.label,
      fontSize: 16,
      height: 24,
      marginTop: topMargin,
      color: textColor,
      maxWidth: iconName ? width - 60 : '100%',
      minWidth: iconName ? width - 60 : '100%'
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