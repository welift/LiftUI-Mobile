import React from 'react'
import { Animated } from 'react-native'
import { styles } from './tileStyles'

const AnimatedTile = ({ children, width, height, padding, style }) => {
  return (
    <Animated.View style={[styles.tile(width, height, padding), style]}>
      {children}
    </Animated.View>
  )
}

export default AnimatedTile