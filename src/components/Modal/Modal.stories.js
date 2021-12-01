import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Modal from '../components/Modal';
import Button from '../components/Button'

export default {
  title: 'Modal',
  component: Modal,
};

const Template = (args) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <View>
        <Modal visible={showModal} buttonText='Accept' title='Accept this lift?' onClose={() => setShowModal(false)}>
          <View>
            <Text>This is the children</Text>
          </View>
        </Modal>
        <Button onPress={() => setShowModal(true)}>Open Modal</Button>
      </View>
  )
}
export const Controls = Template.bind({})