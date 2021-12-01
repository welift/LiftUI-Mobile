import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import CenterView from '../components/CenterView';
import Modal from '../components/Modal';

storiesOf('Modal', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Opened', () => (
      <Modal visible/>
  ))
