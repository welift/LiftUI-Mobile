import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native'
import { Dropdown, CenterView } from '@src';

storiesOf('Dropdown', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <View>
      <Dropdown placeholder='Placeholder' width={300} label='test' style={{ zIndex: 6, elevation: 6 }} />
      <Dropdown placeholder='Placeholder' width={300} label='test' />
    </View>
  ))
