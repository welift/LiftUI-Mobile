import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import Button from '.'
import CenterView from '../CenterView';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <View>
      <Button onPress={action('clicked-text')}>
        Label
      </Button>
      <Button onPress={action('clicked-text')} buttonType='secondaryDefault'>
        Label
      </Button>
    </View>
  ))
  .add('Outline', () => (
    <View>
      <Button onPress={action('clicked-text')} buttonType='primaryOutline'>
        Label
      </Button>
      <Button onPress={action('clicked-text')} buttonType='secondaryOutline'>
        Label
      </Button>
    </View>
  ))
  .add('Text', () => (
    <View>
      <Button onPress={action('clicked-text')} buttonType='primaryText'>
        Label
      </Button>
      <Button onPress={action('clicked-text')} buttonType='secondaryText'>
        Label
      </Button>
    </View>
  ))
  .add('Disabled', () => (
    <View>
      <Button onPress={action('clicked-text')} disabled>
        Label
      </Button>
      <Button onPress={action('clicked-text')} disabled buttonType='secondaryDefault'>
        Label
      </Button>
      <Button onPress={action('clicked-text')} disabled buttonType='primaryOutline'>
        Label
      </Button>
      <Button onPress={action('clicked-text')} disabled buttonType='secondaryOutline'>
        Label
      </Button>
      <Button onPress={action('clicked-text')} disabled buttonType='primaryText'>
        Label
      </Button>
      <Button onPress={action('clicked-text')} disabled buttonType='secondaryText'>
        Label
      </Button>
    </View>
  ))
