import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { PasswordInput, CenterView } from '../../components';

storiesOf('Password Input', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <PasswordInput label='test' placeholder='Placeholder' hint='test hint' />
  ))