import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Tile, CenterView } from '../../../src'
import { Text } from 'react-native';

storiesOf('Tile', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('tile', () => (
    <Tile>
      <Text>Hello</Text>
    </Tile>
  ))
