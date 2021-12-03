import React, { Children } from "react";
import { View, Text } from 'react-native'
import { styles } from './infoCardStyles'

import Tile from "../Tile";
import Line from "../Line";

const InfoCard = ({ children, headerLeft, headerRight }) => {
  const count = Children.count(children)

  const renderChildren = children.map((child, index) => (
    <View key={index}>
      <View style={styles.content}>
        {child} 
      </View>
      <View style={styles.line}>
      {index !== children.length - 1 && <Line lineType='bold' />}
      </View>
    </View>
  ))
  return (
    <Tile padding={0} style={{ marginBottom: 22 }}>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>{headerLeft}</Text>
        <Text style={styles.headerText}>{headerRight}</Text>
      </View>
      {renderChildren}
    </Tile>
  )
}

export default InfoCard