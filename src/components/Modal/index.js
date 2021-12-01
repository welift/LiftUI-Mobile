import React from "react";

import { Modal as NativeModal, Text, View } from "react-native";

import Tile from '../Tile'
import Icon from "../Icon";

import { styles } from './modalStyles'
import { Button } from "..";

const Modal = ({ animationType, visible, onClose }) => {
  return (
    <View style={styles.centerView}>
      <NativeModal 
        animationType='none'
        transparent
        visible={visible}
        onRequestClose={onClose}
      >
        <View style={styles.centerView}>
        <Tile padding={20}>
          <Icon name='closeX' width={16} height={16} />
          <View style={styles.innerTile}>
            <Text>title</Text>
            <Text>Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum interdum nisi. </Text>
            <Button>Button</Button>
          </View>
        </Tile>
        </View>
      </NativeModal>
    </View>
  )
}

export default Modal