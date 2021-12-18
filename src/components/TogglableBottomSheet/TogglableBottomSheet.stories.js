import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import { CenterView, TogglableBottomSheet } from '../../../src';
import types from '../../theme/type'

storiesOf('TogglableBottomSheet', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default bottomSheet', () => (
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

  storiesOf('TogglableBottomSheet', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Bottom sheet no title ', () => (
    <TogglableBottomSheet
      contentRight={
        <Text style={types.smallBody}>Hi</Text>
      }
      contentLeft={
        <Text style={types.smallBody}>Hello</Text>
      }
      buttonText='Button'
    >
      <Text>content</Text>
    </TogglableBottomSheet>
  ))
