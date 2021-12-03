import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Link, CenterView } from '../../components'
import { Text } from 'react-native';

storiesOf('Link', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <Link label='Label' href='https://google.com' />
  ))