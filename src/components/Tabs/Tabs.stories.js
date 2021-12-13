import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { Tabs, CenterView } from '../../../src';

const StoryTabs = () => {
  const fakeTabs = [
    'One',
    'Two',
    'Three'
  ]

  return (
    <Tabs options={fakeTabs}>
      <View style={{ backgroundColor: 'red', height: '100%'}}>
        <Text>Tab One</Text>
      </View>
      <Text>Tab Two</Text>
      <Text>Tab Three</Text>
    </Tabs>
  )
}

storiesOf('Tabs', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('With Three', () => (
    <StoryTabs />
  ))
