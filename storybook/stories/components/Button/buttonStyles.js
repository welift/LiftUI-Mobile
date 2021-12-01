import { StyleSheet } from "react-native"

import colors from '@theme/color'

console.log(colors)

const defaultArea = { 
  minWidth: 93,
  height: 32,
  borderRadius: 40,
  alignItems: 'center',
  justifyContent: 'center'
}

const buttonFont = {
  fontSize: 16,
  lineHeight: 16,
  fontWeight: '700'
}


export const buttonStyles = (buttonType) => {
  if(buttonType === 'primaryDefault') {
    return primaryDefault
  }
  if(buttonType === 'secondaryDefault') {
    return secondaryDefault
  }
  // if(buttonType === 'primaryOutline') {
  //   return primaryOutline
  // }
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
    ...buttonFont,
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.neutral,
    paddingTop: 2,
  },
  content: {
    color: colors.neutral
  }
})

const secondaryDefault = StyleSheet.create({
  area: {
    ...defaultArea,
    backgroundColor: colors.secondary,
    borderStyle
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
    ...buttonFont,
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.neutral,
    paddingTop: 2,
  },
  content: {
    color: colors.neutral
  }
})

const secondaryDefault = StyleSheet.create({
  area: {
    ...defaultArea,
    backgroundColor: colors.neutral,
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
    ...buttonFont,
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.neutral,
    paddingTop: 2,
  },
  content: {
    color: colors.neutral
  }
})