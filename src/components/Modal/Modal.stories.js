import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { CenterView, Modal, Button } from '@src';

const StoryModal = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <View>
      {showModal && <Modal visible={showModal} onClose={() => setShowModal(false)} title='Accept Lift?' buttonText='Accept' />}
      <Button onPress={() => setShowModal(true)}>Open Modal</Button>
    </View>
  )
}

storiesOf('Modal', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default Modal', () => (
    <StoryModal />
  ))
