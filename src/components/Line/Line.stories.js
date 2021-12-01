import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Line from '.';
import CenterView from '../CenterView';

storiesOf('Line', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('is bold', () => (
    <Line lineType='bold' />
  ))

  .add('is break', () => (
    <Line lineType='break' />
  ));
