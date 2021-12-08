import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import { PasswordInput, CenterView } from '../../../src'

storiesOf('Password Input', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <View style={{ width: 300 }}>
      <PasswordInput label='test' placeholder='Placeholder' hint='test hint' />
    </View>
  ))