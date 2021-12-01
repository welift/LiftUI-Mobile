import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Button from './components/Button';
import CenterView from './components/CenterView';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      Label
    </Button>
  ))
  .add('Secondary', () => (
    <Button onPress={action('clicked-text')} buttonType='secondaryDefault'>
      Label
    </Button>
  ))
  .add('Disabled', () => (
    <Button onPress={action('clicked-text')} disabled>
      Label
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
