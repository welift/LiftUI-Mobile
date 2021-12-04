import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { InfoCard, CenterView } from '@src';

storiesOf('InfoCard', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <View>
      <InfoCard headerLeft='Oct 28' headerRight='Thursday'>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
      </InfoCard>
      <InfoCard headerLeft='Oct 29' headerRight='Friday'>
        <Text>Test</Text>
        <Text>Test</Text>
        <Text>Test</Text>
      </InfoCard>
      <InfoCard headerLeft='Oct 29' headerRight='Friday'>
        <Text>Singular</Text>
      </InfoCard>
    </View>

  ))
