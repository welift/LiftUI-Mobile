import React from 'react'
import { View } from 'react-native'

import { styles } from './tileStyles'

const Tile = ({ children, width, height, padding }) => {
  return (
    <View style={styles.tile(width, height, padding)}>
      {children}
    </View>
  )
}

export default Tile