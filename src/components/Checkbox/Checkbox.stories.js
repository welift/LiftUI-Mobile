import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Checkbox, CenterView } from '@src';

storiesOf('Checkbox', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('is enabled', () => (
    <Checkbox label='testLabel' />
  ))

  .add('is disabled', () => (
    <Checkbox disabled />
  ));
