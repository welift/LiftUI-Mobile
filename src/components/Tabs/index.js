import React, { useState, useRef } from 'react'
import { arrayOf, string, node } from 'prop-types'

import { Animated, Dimensions, View, Text, Pressable } from 'react-native'

import { styles } from './tabsStyles'

const Tabs = ({ options, children }) => {
  const [selection, setSelection] = useState(options?.[0])
  const [selectionIndex, setSelectionIndex] = useState(0)

  const windowWidth = Dimensions.get('window').width;

  const minTabWidth = windowWidth / options?.length

  const animatedMargin = useRef(new Animated.Value(0)).current

  const handleSetSelected = (tab, index) => {
    setSelection(tab)
    setSelectionIndex(index)
    const marginCalc = minTabWidth * index

    Animated.timing(animatedMargin, {
      toValue: marginCalc,
      duration: 300,
      useNativeDriver: false
    }).start()   
  }


  const renderTab = (tab, index) => (
    <Pressable key={tab} onPress={() => handleSetSelected(tab, index)}>
      <View style={styles.tab(minTabWidth)}>
        <Text style={styles.tabText(selection === tab)}>{tab}</Text>
      </View>
    </Pressable> 
  )

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <View style={styles.tabs}>
          {options.map((tab, index) => renderTab(tab, index))}
        </View>
        <Animated.View style={styles.selected(minTabWidth, animatedMargin)} />
      </View>
      <View style={{ height: '100%', zIndex: -1 }}>
        {children?.[selectionIndex]}
      </View>
    </View>
  )
}

Tabs.defaultProps = {
  options: arrayOf(string).isRequired,
  children: node.isRequired
}

export default Tabs