import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Input from '.';
import CenterView from '../CenterView';

storiesOf('Input', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <Input />
  ))
