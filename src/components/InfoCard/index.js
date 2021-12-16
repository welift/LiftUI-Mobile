import React from "react";
import { View, Text } from 'react-native'
import { styles } from './infoCardStyles'
import Tile from '../Tile'
import Line from '../Line'

const InfoCard = ({ children, headerLeft, headerRight, style, headerRightStyle, headerLeftStyle }) => {
  const spreadChildren = children?.length > 0 ? children : [children]

  const renderChild = (child, index) => (
    <View key={index}>
      <View style={styles.content}>
        {child}
      </View>
      <View style={styles.line}>
        {index !== spreadChildren.length - 1 && <Line lineType='bold' />}
      </View>
    </View>
  )

  const renderChildren = spreadChildren?.map((child, index) => renderChild(child, index))

  return (
    <Tile padding={0} style={style}>
      <View style={styles.headerRow}>
        <Text style={[styles.headerText, headerLeftStyle]}>{headerLeft}</Text>
        <Text style={[styles.headerText, headerRightStyle]}>{headerRight}</Text>
      </View>
      {renderChildren}
    </Tile>
  )
}

export default InfoCard