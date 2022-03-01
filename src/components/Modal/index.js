import React from "react";

import { Modal as NativeModal, Text, View, Pressable } from "react-native";
import Tile from '../Tile'
import Icon from '../Icon'
import Button from '../Button'
import ButtonGroup from "../ButtonGroup";

import types from '../../theme/type'

import { styles } from './modalStyles'

const Modal = ({
  visible,
  onClose,
  title,
  children,
  onButtonPress,
  buttonText,
  multiButton,
  buttonOneText,
  buttonTwoText,
  buttonOneProps,
  buttonTwoProps,
  buttonGroupProps,
  direction,
  showButton,
  ...rest
}) => {
  return (
    <NativeModal
      animationType='fade'
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      {...rest}
    >
      <View style={styles.innerCenter(visible)}>
        <Tile padding={20} style={styles.tile}>
          <Pressable onPress={onClose}><Icon name='closeX' width={16} height={16} /></Pressable>
          <Text style={[types.headingThree, styles.title]}>{title}</Text>
          {children}
          <View style={{ width: 'auto', marginHorizontal: 16 }}>
            {showButton && multiButton ? (
              <View style={direction === 'horizontal' ? { width: 256, alignSelf: 'center' } : {}}>
                <ButtonGroup
                  direction={direction}
                  buttonOneText={buttonOneText}
                  buttonTwoText={buttonTwoText}
                  buttonOneProps={buttonOneProps}
                  buttonTwoProps={buttonTwoProps}
                  {...buttonGroupProps}
                />
              </View>
            ) : showButton ? <Button onPress={onButtonPress}>{buttonText}</Button> : null}
          </View>
        </Tile>
      </View>
    </NativeModal>
  )
}

Modal.defaultProps = {
  onButtonPress: () => { },
  multiButton: false,
  showButton: true
}

export default Modal