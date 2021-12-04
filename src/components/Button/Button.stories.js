import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, CenterView } from '@src'

const ToLoadingButton = () => {
  const [loading, setLoading] = useState(false)

  const handlePress = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <Button loading={loading} onPress={handlePress}>Test Loading</Button>
  )
}

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

  .add('With Icon', () => (
    <View>
      <Button iconName='happy'>Label</Button>
    </View>

  ))

  .add('Loading', () => (
    <View style={{ width: 200 }}>
      <ToLoadingButton />
    </View>

  ))
