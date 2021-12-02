import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import Input from '.';
import CenterView from '../CenterView';

storiesOf('Input', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('is enabled', () => (
    <View>
      <Input placeholder='test' />
      <Input placeholder='test2' />
    </View>

  ))
