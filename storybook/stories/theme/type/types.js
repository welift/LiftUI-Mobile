import { StyleSheet } from 'react-native'

const fonts = {
  regular: {
    fontFamily: 'Inter',
    letterSpacing: '0.03em',
    fontWeight: 300
  },
  medium: {
    fontFamily: 'Inter',
    letterSpacing: '0.03em',
    fontWeight: 400

  },
  bold: {
    fontFamily: 'Inter',
    letterSpacing: '0.03em',
    fontWeight: 500
  }
}

const types = StyleSheet.create({
  smallBody: {
    ...fonts.regular,
    fontSize: '14px',
    lineHeight: '20px',
  },

  mediumBody: {
    ...fonts.regular,
    fontSize: '18px',
    lineHeight: '24px'
  },
  largeBody: {
    ...fonts.regular,
    fontSize: '18px',
    lineHeight: '24px'
  },

  label: {
    ...fonts.regular,
    fontSize: '12px',
    lineHeight: '16px',
  },

  headingOne: {
    ...fonts.bold,
    fontSize: '48px',
    lineHeight: '48px',
  },

  headingTwo: {
    ...fonts.bold,
    fontSize: '32px',
    lineHeight: '36px',
  },

  headingThree: {
    ...fonts.bold,
    fontSize: '24px',
    lineHeight: '32px',
  },

  headingFour: {
    ...fonts.bold,
    fontSize: '20px',
    lineHeight: '24px',
  },

  headingFive: {
    ...fonts.bold,
    fontSize: '16px',
    lineHeight: '20px',
  },

  headingSixBold: {
    ...fonts.bold,
    fontSize: '14px',
    lineHeight: '20px',
  },

  headingSixMedium: {
    ...fonts.medium,
    fontSize: '14px',
    lineHeight: '20px',
  },
})

export default types