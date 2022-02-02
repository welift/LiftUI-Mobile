import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CenterView, BottomSheet, Button } from '../../../src';

const StoryBottomSheet = () => {
  const [showBottomSheet, setShowBottomSheet] = useState(false)
  return (
    <View>
      {showBottomSheet && (<BottomSheet
        visible={showBottomSheet}
        onClose={() => setShowBottomSheet(false)}
        title='Accept Lift?'
        buttonOneText='Accept'
        buttonTwoText='Decline'
      >
        <View>
          <Text>This is the content of the bottom sheet</Text>
        </View>
      </BottomSheet>)}
      <Button onPress={() => setShowBottomSheet(true)}>Open BottomSheet</Button>
    </View>
  )
}

const SingleButtonBottomSheet = () => {
  const [showBottomSheet, setShowBottomSheet] = useState(false)
  return (
    <View>
      {showBottomSheet && (<BottomSheet
        visible={showBottomSheet}
        onClose={() => setShowBottomSheet(false)}
        title='Accept Lift?'
        buttonText='Close'
      >
        <View>
          <Text>This is the content of the bottom sheet</Text>
        </View>
      </BottomSheet>)}
      <Button onPress={() => setShowBottomSheet(true)}>Open BottomSheet</Button>
    </View>
  )
}

const DarkenedBottomSheet = () => {
  const [showBottomSheet, setShowBottomSheet] = useState(false)
  return (
    <View>
      {showBottomSheet && (<BottomSheet
        visible={showBottomSheet}
        onClose={() => setShowBottomSheet(false)}
        title='Accept Lift?'
        buttonOneText='Accept'
        buttonTwoText='Decline'
        buttonOneClose
        buttonTwoClose
        darkenBackground
      >
        <View>
          <Text>This is the content of the bottom sheet</Text>
        </View>
      </BottomSheet>)}
      <Button onPress={() => setShowBottomSheet(true)}>Open BottomSheet</Button>
    </View>
  )
}

storiesOf('BottomSheet', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default bottomSheet', () => (
    <StoryBottomSheet />
  ))

storiesOf('BottomSheet', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('single button bottomSheet', () => (
    <SingleButtonBottomSheet />
  ))

storiesOf('BottomSheet', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('darkened bottomSheet', () => (
    <DarkenedBottomSheet />
  ))


