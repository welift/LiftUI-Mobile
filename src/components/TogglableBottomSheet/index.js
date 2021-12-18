import React, { useState, useRef } from "react";

import { Text, View, Pressable, TouchableWithoutFeedback, Animated } from "react-native";
import AnimatedTile from '../Tile/AnimatedTile'
import Icon from '../Icon'
import Button from '../Button'

import types from '../../theme/type'

import { styles } from './togglableBottomSheetStyles'

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
      toValue: 242,
      duration: 200,
      useNativeDriver: false
    }).start()
  }


  const bottomSheet = (
    <View style={{ justifyContent: 'space-between', height: '100%'}}>
      <Pressable onPress={onClose}>
        <View style={styles.topRow}>
          <Icon name='downArrow' />
        </View>
      </Pressable>
      {title ? (
        <View style={[styles.topRow, { paddingTop: 36, paddingBottom: 18 }]}>
          <Text style={types.headingThree}>{title}</Text>
        </View>
      ) : null}
      <View style={styles.content}>
        {children}
      </View>
      <View style={{ width: 'auto' }}>
        <Button {...buttonProps} onPress={onButtonPress}>{buttonText}</Button>
      </View>
    </View>
  )

  const bottomTab = (
    <>
      <View style={styles.topRow}>
        <Icon name='upArrow' />
      </View>
      <View style={styles.toggleContent}>
        {contentLeft}
        {contentRight}
      </View>
    </>
  )

  const currentStyles = showFullSheet ? [styles.tile, { maxHeight: animatedHeight }] : [styles.toggleTile, { maxHeight: animatedHeight }]

  return (
    <>
      <TouchableWithoutFeedback onPress={showFullSheet ? onClose : () => { }}>
        <View style={styles.innerCenter}>
          <Pressable onPress={!showFullSheet ? onOpen : () => { }}>
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
  onButtonPress: () => { },
}

export default TogglableBottomSheet