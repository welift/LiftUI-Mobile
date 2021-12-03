import React, { useState, useRef } from "react";

import { Modal as NativeModal, Text, View, Pressable, TouchableWithoutFeedback, Animated } from "react-native";

import Tile from '../Tile'
import AnimatedTile from '../Tile/AnimatedTile'
import Icon from "../Icon";

import types from '@theme/type'

import { styles } from './togglableBottomSheetStyles'
import Button from "../Button";

import * as Animatable from 'react-native-animatable'

const TogglableBottomSheet = ({ 
  title,
  children,
  onButtonPress,
  buttonProps,
  buttonText,
  contentRight,
  contentLeft,
  ...rest
}) => {
  const [showFullSheet, setShowFullSheet] = useState(false)

  const animatedHeight = useRef(new Animated.Value(76)).current
  
  const onClose = () => {
    setShowFullSheet(false)
    Animated.timing(animatedHeight, {
      toValue: 76,
      duration: 100,
      useNativeDriver: false
    }).start()
  }
  const onOpen = () => {
    setShowFullSheet(true)
    Animated.timing(animatedHeight, {
      toValue: 288,
      duration: 200,
      useNativeDriver: false
    }).start()
  }


  const bottomSheet = (
    <>
      <Pressable onPress={onClose}>
        <View style={styles.topRow}>
          <Icon name='downArrow' />
        </View>
      </Pressable>
      <View style={[styles.topRow, { paddingTop: 36, paddingBottom: 18 }]}>
        <Text style={types.headingThree}>{title}</Text>
      </View>
      <View style={styles.content}>
        {children}
      </View>
      <Button {...buttonProps} onPress={onButtonPress}>{buttonText}</Button>
    </>
  )

  const bottomTab = (
    <>
      <View style={styles.topRow}>
        <Icon name='upArrow' />
      </View>
      <View style={styles.toggleContent}>
        {contentRight}
        {contentLeft}
      </View>
    </>
  )

  const currentStyles = showFullSheet ? [styles.tile, { maxHeight: animatedHeight }] : [styles.toggleTile, { maxHeight: animatedHeight }]

  return (
    <>
      <TouchableWithoutFeedback onPress={showFullSheet ? onClose : () => {}}>
        <View style={styles.innerCenter}>
        <Pressable onPress={!showFullSheet ? onOpen : () => {}}>
          <AnimatedTile height={animatedHeight} width='100%' style={currentStyles}>
              <>
              {!showFullSheet && bottomTab}
              {showFullSheet && bottomSheet}
              </>
          </AnimatedTile>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </>
  )
}

TogglableBottomSheet.defaultProps = {
  onButtonPress: () => {},
}

export default TogglableBottomSheet