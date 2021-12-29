import React, { useRef, useEffect } from "react"
import { Modal as NativeModal, Animated, Text, View, TouchableWithoutFeedback } from "react-native"
import Tile from '../Tile'
import ButtonGroup from "../ButtonGroup"

import types from '../../theme/type'

import { styles } from './bottomSheetStyles'

const BottomSheet = ({
  visible,
  onClose,
  title,
  children,
  onButtonPress,
  buttonText,
  buttonOneProps,
  buttonTwoProps,
  buttonOneText,
  buttonTwoText,
  darkenBackground,
  ...rest
}) => {
  const animatedBackgroundOpacity = useRef(new Animated.Value(0)).current

  const backgroundColor = animatedBackgroundOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, .25)']
  })

  useEffect(() => {
    if(visible) {
      Animated.timing(animatedBackgroundOpacity, {
        toValue: 1,
        duration: 850,
        useNativeDriver: false
      }).start()
    }
  }, [])

  const handleClose = () => {
    Animated.timing(animatedBackgroundOpacity, {
      toValue: 0,
      duration: 49,
      useNativeDriver: false
    }).start()
    setTimeout(() => onClose(), 50)
  }

  const usableBackground = (visible && darkenBackground) ? backgroundColor : ''
  
  return (
    <NativeModal
      animationType='slide'
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}
      {...rest}
    >
      <TouchableWithoutFeedback onPress={handleClose}>
        <Animated.View style={styles.innerCenter(usableBackground)}>
          <Tile style={styles.tile}>
            <Text style={types.headingFour}>{title}</Text>
            <View style={styles.content}>
              {children}
            </View>
            <View style={{ width: 'auto' }}>
              <ButtonGroup
                direction='vertical'
                buttonOneProps={{
                  buttonType: 'primaryDefault',
                  ...buttonOneProps
                }}
                buttonTwoProps={{
                  buttonType: 'primaryOutline',
                  ...buttonTwoProps
                }}
                buttonOneText={buttonOneText}
                buttonTwoText={buttonTwoText}
              />
            </View>
          </Tile>
        </Animated.View>
      </TouchableWithoutFeedback>
    </NativeModal>
  )
}

BottomSheet.defaultProps = {
  onButtonPress: () => { },
  darkenBackground: false,
}

export default BottomSheet