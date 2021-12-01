const fonts = {
  regular: {
    fontFamily: 'Inter',
    letterSpacing: .03,
    fontWeight: '300'
  },
  medium: {
    fontFamily: 'Inter',
    letterSpacing: .03,
    fontWeight: '400'

  },
  bold: {
    fontFamily: 'Inter',
    letterSpacing: .03,
    fontWeight: '500'
  }
}

const types = {
  smallBody: {
    ...fonts.regular,
    fontSize: 14,
    lineHeight: 20,
  },

  mediumBody: {
    ...fonts.regular,
    fontSize: 18,
    lineHeight: 24
  },
  largeBody: {
    ...fonts.regular,
    fontSize: 18,
    lineHeight: 24
  },

  label: {
    ...fonts.regular,
    fontSize: 12,
    lineHeight: 16,
  },

  headingOne: {
    ...fonts.bold,
    fontSize: 48,
    lineHeight: 48,
  },

  headingTwo: {
    ...fonts.bold,
    fontSize: 32,
    lineHeight: 36,
  },

  headingThree: {
    ...fonts.bold,
    fontSize: 24,
    lineHeight: 32,
  },

  headingFour: {
    ...fonts.bold,
    fontSize: 20,
    lineHeight: 24,
  },

  headingFive: {
    ...fonts.bold,
    fontSize: 16,
    lineHeight: 20,
  },

  headingSixBold: {
    ...fonts.bold,
    fontSize: 14,
    lineHeight: 20,
  },

  headingSixMedium: {
    ...fonts.medium,
    fontSize: 14,
    lineHeight: 20,
  },
}

export default types