import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native'
import { Dropdown, CenterView } from '../../../src';

storiesOf('Dropdown', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <View style={{ width: 283 }}>
      <Dropdown options={[{ label: 'test', value: 'test' }, { label: 'test2', value: 'test2' }]} placeholder='Placeholder' label='test' style={{ zIndex: 6, elevation: 6 }} />
    </View>

  ))
