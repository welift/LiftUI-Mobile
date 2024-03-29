import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import { Input, CenterView } from '../../../src';
import { formatCurrency } from '../../validation/currencyFormatter';

storiesOf('Input', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <View style={{ width: 300 }}>
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

  .add('Default with currency formatter', () => (
    <Input formatter={formatCurrency} label='test' />
  ))
