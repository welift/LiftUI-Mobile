import { StyleSheet } from "react-native"

import colors from '@theme/color'

const defaultArea = { 
  minWidth: 64,
  height: 32,
  borderRadius: 40,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 32,
  marginBottom: 32
}

const buttonFont = {
  fontSize: 16,
  lineHeight: 16,
  fontWeight: '700'
}

const defaultText = {
  ...buttonFont,
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: 2,
  color: colors.neutral
}

const defaultContent = {
  marginStart: 24,
  marginEnd: 24
}


export const buttonStyles = (buttonType) => {
  if(buttonType === 'primaryDefault') {
    return primaryDefault
  }
  if(buttonType === 'secondaryDefault') {
    return secondaryDefault
  }
  if(buttonType === 'primaryOutline') {
    return primaryOutline
  }
  if(buttonType === 'secondaryOutline') {
    return secondaryOutline
  }
  if(buttonType === 'primaryText') {
    return primaryText
  }
  if(buttonType === 'secondaryText') {
    return secondaryText
  }
}

const primaryDefault = StyleSheet.create({
  area: {
    ...defaultArea,
    backgroundColor: colors.primary,
  },
  areaActive: {
    ...defaultArea,
    backgroundColor: colors.accent,
  },
  areaDisabled: {
    ...defaultArea,
    backgroundColor: colors.primaryDull,
  },
  text: {
    ...defaultText,
  },
  activeText: {
    ...defaultText,
  },
  disabledText: {
    ...defaultText,
  },
  content: {
    ...defaultContent
  }
})

const secondaryDefault = StyleSheet.create({
  area: {
    ...defaultArea,
    backgroundColor: colors.secondary,
  },
  areaActive: {
    ...defaultArea,
    backgroundColor: colors.basic,
  },
  areaDisabled: {
    ...defaultArea,
    backgroundColor: colors.secondaryDull,
  },
  text: {
    ...defaultText
  },
  activeText: {
    ...defaultText
  },
  disabledText: {
    ...defaultText
  },
  content: {
    ...defaultContent
  }
})

const primaryOutline = StyleSheet.create({
  area: {
    ...defaultArea,
    backgroundColor: colors.neutral,
    borderColor: colors.primary,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  areaActive: {
    ...defaultArea,
    backgroundColor: colors.accent,
  },
  areaDisabled: {
    ...defaultArea,
    backgroundColor: colors.neutral,
    borderColor: colors.primaryDull,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  text: {
    ...defaultText,
    color: colors.primary
  },
  activeText: {
    ...defaultText
  },
  disabledText: {
    ...defaultText,
    color: colors.primaryDull
  },
  content: {
    ...defaultContent
  }
})

const secondaryOutline = StyleSheet.create({
  area: {
    ...defaultArea,
    backgroundColor: colors.neutral,
    borderColor: colors.secondary,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  areaActive: {
    ...defaultArea,
    backgroundColor: colors.basic,
  },
  areaDisabled: {
    ...defaultArea,
    backgroundColor: colors.neutral,
    borderColor: colors.secondaryDull,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  text: {
    ...defaultText,
    color: colors.secondary
  },
  activeText: {
    ...defaultText
  },
  disabledText: {
    ...defaultText,
    color: colors.secondaryDull
  },
  content: {
    ...defaultContent
  }
})

const primaryText = StyleSheet.create({
  area: {
    ...defaultArea,
  },
  areaActive: {
    ...defaultArea,
    backgroundColor: colors.accent,
  },
  areaDisabled: {
    ...defaultArea,
  },
  text: {
    ...defaultText,
    color: colors.primary
  },
  activeText: {
    ...defaultText
  },
  disabledText: {
    ...defaultText,
    color: colors.primaryDull
  },
  content: {
    ...defaultContent
  }
})

const secondaryText = StyleSheet.create({
  area: {
    ...defaultArea,
  },
  areaActive: {
    ...defaultArea,
    backgroundColor: colors.basic,
  },
  areaDisabled: {
    ...defaultArea,
  },
  text: {
    ...defaultText,
    color: colors.secondary
  },
  activeText: {
    ...defaultText
  },
  disabledText: {
    ...defaultText,
    color: colors.secondaryDull
  },
  content: {
    ...defaultContent
  }
})