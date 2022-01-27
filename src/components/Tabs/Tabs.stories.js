import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Tabs, CenterView } from '../../../src';

const StoryTabsThree = () => {
  const fakeTabs = [
    'One',
    'Two',
    'Three'
  ]

  return (
    <Tabs options={fakeTabs}>
      <ScrollView style={{ height: '100%', paddingTop: 24 }}>
        <Text>Tab One</Text>
      </ScrollView>
      <Text>Tab Two</Text>
      <Text>Tab Three</Text>
    </Tabs>
  )
}

const StoryTabsTwo = () => {
  const fakeTabs = [
    'One',
    'Two'
  ]

  return (
    <Tabs options={fakeTabs}>
      <ScrollView style={{ height: '100%', paddingTop: 24 }}>
        <Text>Tab One</Text>
      </ScrollView>
      <Text>Tab Two</Text>
    </Tabs>
  )
}

const StoryTabsOne = () => {
  const fakeTabs = [
    'One'
  ]

  return (
    <Tabs options={fakeTabs}>
      <ScrollView style={{ height: '100%', paddingTop: 24 }}>
        <Text>Tab One</Text>
      </ScrollView>
    </Tabs>
  )
}

storiesOf('Tabs', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('With One', () => (
    <StoryTabsOne />
  ))
  .add('With Two', () => (
    <StoryTabsTwo />
  ))
  .add('With Three', () => (
    <StoryTabsThree />
  ))
