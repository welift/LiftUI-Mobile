import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ButtonGroup, CenterView } from '../../components'

storiesOf('ButtonGroup', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Vertical', () => (
    <ButtonGroup 
      buttonOneText='Cancel'
      buttonTwoText='Confirm'
      buttonOneProps={{
        buttonType: 'primaryOutline'
      }}
    />
  ))
  .add('Horizontal', () => (
    <ButtonGroup 
      direction='horizontal'
      buttonOneText='Cancel'
      buttonTwoText='Confirm'
      buttonOneProps={{
        buttonType: 'primaryOutline'
      }}
    />
  ))
