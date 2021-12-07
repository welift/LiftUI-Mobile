import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { CenterView, Spinner } from '@src'

storiesOf('Spinner', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('is enabled', () => (
    <Spinner />
  ))