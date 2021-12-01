import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Checkbox from '.';
import CenterView from '../CenterView';

storiesOf('Checkbox', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('is enabled', () => (
    <Checkbox label='testLabel' />
  ))

  .add('is disabled', () => (
    <Checkbox disabled />
  ));