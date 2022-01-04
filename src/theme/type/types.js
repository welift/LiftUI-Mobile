import colors from "../color"

const fonts = {
  regular: {
    fontFamily: 'Inter-Light',
    letterSpacing: .3,
  },
  medium: {
    fontFamily: 'Inter-Medium',
    letterSpacing: .3,
  },
  bold: {
    fontFamily: 'Inter-Bold',
    letterSpacing: .3,
  }
}

const types = {
  smallBody: {
    ...fonts.regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.secondary

  },

  mediumBody: {
    ...fonts.regular,
    fontSize: 18,
    lineHeight: 24,
    color: colors.secondary
  },
  largeBody: {
    ...fonts.regular,
    fontSize: 18,
    lineHeight: 24,
    color: colors.secondary
  },

  label: {
    ...fonts.regular,
    fontSize: 12,
    lineHeight: 16,
    color: colors.secondary
  },

  headingOne: {
    ...fonts.bold,
    fontSize: 48,
    lineHeight: 48,
    color: colors.basic
  },

  headingTwo: {
    ...fonts.bold,
    fontSize: 32,
    lineHeight: 36,
    color: colors.basic
  },

  headingThree: {
    ...fonts.bold,
    fontSize: 24,
    lineHeight: 32,
    color: colors.basic
  },

  headingFour: {
    ...fonts.bold,
    fontSize: 20,
    lineHeight: 24,
    color: colors.basic
  },

  headingFive: {
    ...fonts.bold,
    fontSize: 16,
    lineHeight: 20,
    color: colors.basic
  },

  headingSixBold: {
    ...fonts.bold,
    fontSize: 14,
    lineHeight: 20,
    color: colors.basic
  },

  headingSixMedium: {
    ...fonts.medium,
    fontSize: 14,
    lineHeight: 20,
    color: colors.basic
  },
}

export default types