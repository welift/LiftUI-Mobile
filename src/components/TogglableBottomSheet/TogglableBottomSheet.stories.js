import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import { CenterView, TogglableBottomSheet } from '@src';
import types from '../../theme/type'

storiesOf('TogglableBottomSheet', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default botomSheet', () => (
    <TogglableBottomSheet
      contentRight={
        <Text style={types.smallBody}>Hi</Text>
      }
      contentLeft={
        <Text style={types.smallBody}>Hello</Text>
      }
      buttonText='Button'
      title='Heyo'
    ><Text>content</Text></TogglableBottomSheet>
  ))
