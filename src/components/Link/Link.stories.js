import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Link, CenterView } from '../../../src'

storiesOf('Link', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <Link label='Label' href='https://google.com' />
  ))
  .add('onPress', () => (
    <Link label='Label' onPress={() => console.log('pressed')} />
  ))