import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Line, CenterView } from '@src'

storiesOf('Line', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('is bold', () => (
    <Line lineType='bold' />
  ))

  .add('is break', () => (
    <Line lineType='break' />
  ));
