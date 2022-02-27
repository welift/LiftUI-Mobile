import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { CenterView, Modal, Button } from '../../../src';

const StoryModal = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <View>
      {showModal && <Modal visible={showModal} onClose={() => setShowModal(false)} title='Accept Lift?' buttonText='Accept' />}
      <Button onPress={() => setShowModal(true)}>Open Modal</Button>
    </View>
  )
}

const StoryModalNoButton = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <View>
      {showModal && <Modal visible={showModal} showButton={false} onClose={() => setShowModal(false)} title='Accept Lift?' buttonText='Accept' />}
      <Button onPress={() => setShowModal(true)}>Open Modal</Button>
    </View>
  )
}

const StoryButtonGroupModal = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <View>
      {showModal && <Modal visible={showModal} onClose={() => setShowModal(false)} title='Accept Lift?' multiButton direction='horizontal' buttonText='Accept' />}
      <Button onPress={() => setShowModal(true)}>Open Modal</Button>
    </View>
  )
}

const StoryButtonGroupModalVert = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <View>
      {showModal && <Modal visible={showModal} onClose={() => setShowModal(false)} title='Accept Lift?' multiButton direction='vertical' buttonText='Accept' />}
      <Button onPress={() => setShowModal(true)}>Open Modal</Button>
    </View>
  )
}

storiesOf('Modal', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default Modal', () => (
    <StoryModal />
  ))

storiesOf('Modal', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Modal no button', () => (
    <StoryModalNoButton />
  ))

storiesOf('Modal', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('ButtonGroup Modal', () => (
    <StoryButtonGroupModal />
  ))

storiesOf('Modal', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('ButtonGroup Modal Vertical', () => (
    <StoryButtonGroupModalVert />
  ))
