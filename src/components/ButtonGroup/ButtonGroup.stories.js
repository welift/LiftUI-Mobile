import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native'
import { ButtonGroup, CenterView } from '../../../src'

storiesOf('ButtonGroup', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Vertical', () => (
    <View style={{ width: 200 }}>
      <ButtonGroup
        direction='vertical'
        buttonOneText='Cancel'
        buttonTwoText='Confirm'
        buttonOneProps={{
          buttonType: 'primaryOutline'
        }}
      />
    </View>

  ))
  .add('Horizontal', () => (
    <View style={{ width: 350 }}>
      <ButtonGroup
        direction='horizontal'
        buttonOneText='Cancel'
        buttonTwoText='Confirm'
        buttonOneProps={{
          buttonType: 'primaryOutline'
        }}
      />
    </View>
    
  ))
