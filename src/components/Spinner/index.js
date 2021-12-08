import React from 'react'
import { Animated } from 'react-native'
import Icon from '../Icon'
import colors from '../../theme/color'

const Spinner = ({
  size,
  color
}) => {
  const spinValue = new Animated.Value(0)

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    })
  ).start()

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  return (
    <Animated.View
      style={{ transform: [{ rotate: spin }] }}
    >
      <Icon name='loading' fill={color} width={size} height={size} />
    </Animated.View>
  )
}

Spinner.defaultProps = {
  size: 24,
  color: colors.primary
}

export default Spinner