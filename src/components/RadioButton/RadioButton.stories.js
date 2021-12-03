import { storiesOf } from '@storybook/react-native';
import React from 'react';
import RadioButton from '../RadioButton'
import CenterView from '../CenterView';

storiesOf('Radio Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('is enabled', () => (
    <RadioButton label='testLabel' />
  ))
