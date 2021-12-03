import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native'
import { Dropdown, CenterView } from '../../components';

storiesOf('Dropdown', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <View>
      <Dropdown placeholder='Placeholder' width={300} label='test' />
    </View>

  ))
