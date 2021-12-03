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
  optionsContainer: (width) => {
    return {
      position: 'absolute',
      top: 60,
      minHeight: 16,
      backgroundColor: colors.neutral,
      zIndex: 5,
      elevation: 5,
      width: width - 30,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      shadowColor: '#997659',
      shadowOpacity: .15,
      shadowRadius: 10,
    }
  },
  option: (pressed, selected, last) => {
    let background = colors.neutral

    if (selected)
      background = colors.secondaryLight

    if (pressed)
      background = colors.neutralDull
    return {
      paddingRight: 16,
      height: 28,
      minHeight: 28,
      justifyContent: 'center',
      backgroundColor: background,
      borderBottomLeftRadius: last ? 10 : 0,
      borderBottomRightRadius: last ? 10 : 0,
    }
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  optionText: {
    ...types.label,
    lineHeight: 12,
    paddingLeft: 16
  },
  errorText: {
    ...types.label,
    fontSize: 10,
    lineHeight: 10,
    marginTop: 4,
    marginBottom: 2,
    color: colors.primary,
  },
  hintText: {
    ...types.label,
    fontSize: 10,
    lineHeight: 10,
    marginTop: 4,
    marginBottom: 2,
    paddingLeft: 16,
  },
  input: (disabled, hasError, width) => {
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
      maxWidth: width - 100,
      minWidth: width - 100
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
        width: width,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        zIndex: 6
      }
    }

    return {
      ...baseBorder,
      width: width
    }
  }
})