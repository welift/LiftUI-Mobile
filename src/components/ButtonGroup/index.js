import React from 'react'
import Button from '../Button'
import { View } from 'react-native'

import { styles } from './buttonGroupStyles'

const ButtonGroup = ({
  direction,
  buttonOneProps,
  buttonTwoProps,
  buttonOneText,
  buttonTwoText
}) => {

  const buttonOneCustomStyle = direction === 'horizontal' ? styles.horizontalButtonOne : styles.verticalButtonOne
  const buttonTwoCustomStyle = direction === 'horizontal' ? styles.horizontalButtonTwo : styles.verticalButtonTwo

  return (
    <View style={styles[direction]}>
      <Button customStyle={buttonOneCustomStyle} {...buttonOneProps} >{buttonOneText}</Button>
      <Button customStyle={buttonTwoCustomStyle} {...buttonTwoProps} >{buttonTwoText}</Button>
    </View>
  )
}



export default ButtonGroup