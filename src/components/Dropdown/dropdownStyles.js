import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../theme/color'
import types from '../../theme/type'

const baseBorder = (label) => ({
  borderWidth: 1,
  borderRadius: 10,
  borderColor: colors.secondaryLight,
  height: (label) ? 60 : 48,
  minWidth: 200,
  width: '100%',
  paddingTop: 12,
  paddingLeft: 16,
  paddingBottom: 8,
  paddingRight: 8,
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
    width: 36,
    justifyContent: 'center',
    paddingLeft: 14
  },
  optionsContainer: (width, label) => {
    return {
      position: 'absolute',
      top: label ? 60 : 48,
      minHeight: 16,
      backgroundColor: colors.neutral,
      zIndex: 5,
      elevation: 5,
      width: width,
      minWidth: 200,
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
    marginStart: 16,
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
      marginTop: Dimensions.get('screen').height < 840 ? 0 : 4,
      color: textColor,
      padding: 0,
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
        width: width,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        zIndex: 6
      }
    }

    return {
      ...baseBorder(label),
      width: width
    }
  }
})