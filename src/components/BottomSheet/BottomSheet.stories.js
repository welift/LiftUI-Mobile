import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CenterView, BottomSheet, Button } from '../../components';

const StoryBottomSheet = () => {
  const[showBottomSheet, setShowBottomSheet] = useState(false)
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

storiesOf('BottomSheet', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default botomSheet', () => (
    <StoryBottomSheet />
  ))
