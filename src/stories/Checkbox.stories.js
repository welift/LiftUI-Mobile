import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Checkbox from '../components/Checkbox';
import CenterView from '../components/CenterView';

storiesOf('Checkbox', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('is enabled', () => (
    <Checkbox label='testLabel' />
  ))

  .add('is disabled', () => (
    <Checkbox disabled />
  ));
