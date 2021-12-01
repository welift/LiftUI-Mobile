import React from "react"
import { View } from "react-native"
import PropTypes from 'prop-types'
import { styles } from './lineStyles'

const Line = ({ lineType }) => {
  let type = styles.lineBold

  if (lineType === 'break')
    type = styles.lineBreak

  return (
    <View style={type} />
  )
}

Line.defaultProps = {
  lineType: 'bold'
}

Line.propTypes = {
  lineType: PropTypes.string
}

export default Line

