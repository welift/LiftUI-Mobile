import React from "react";

import { Modal as NativeModal, Text, View, TouchableWithoutFeedback } from "react-native";
import Tile from '../Tile'
import ButtonGroup from "../ButtonGroup";

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
  ...rest
}) => {
  return (
    <NativeModal
      animationType='slide'
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      {...rest}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.innerCenter}>
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
        </View>
      </TouchableWithoutFeedback>
    </NativeModal>
  )
}

BottomSheet.defaultProps = {
  onButtonPress: () => { },
}

export default BottomSheet