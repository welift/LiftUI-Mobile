import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import { Input, CenterView } from '../../components'

storiesOf('Input', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <View>
      <Input />
      <Input />
    </View>
  ))
