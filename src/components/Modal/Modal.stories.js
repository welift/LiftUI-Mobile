import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import { View } from 'react-native';
import CenterView from '../CenterView';
import Modal from '.';
import Button from '../Button';

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
