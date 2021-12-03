import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, CenterView } from '../../components';

const PasswordInput = () => {
  const [isPassword, setIsPassword] = useState(true)

  return (
    <Input
      placeholder='Password'
      iconName={isPassword ? 'eyeClosed' : 'eyeOpen'}
      onIconPress={() => setIsPassword(!isPassword)}
      secureTextEntry={isPassword}
    />
  )
}

storiesOf('Input', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <View>
      <Input placeholder='Placeholder' />
      <Input />
    </View>
  ))

  .add('Default with label', () => (
    <Input label='test' />
  ))

  .add('Default with hint', () => (
    <Input hint='test' />
  ))

  .add('Default with error', () => (
    <Input error='test' touched />
  ))

  .add('With Hint and Label', () => (
    <Input label='label' hint='hint' placeholder='Placeholder' />
  ))

  .add('Disabled Input', () => (
    <Input disabled label='label' hint='hint' placeholder='Placeholder' />
  ))

  .add('All with Error', () => (
    <Input label='label' hint='hint' placeholder='Placeholder' error="error" touched />
  ))

  .add('Default with Icon / Password', () => (
    <PasswordInput />
  ))
