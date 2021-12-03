import { storiesOf } from '@storybook/react-native';
import React, { useState } from 'react';
import { RadioGroup } from '../../components'
import CenterView from '../CenterView';
import { Text, View } from 'react-native'

const ConsoleRadioGroup = () => {
  const [selectedValue, setSelectedValue] = useState(2)
  const consoleLogEvent = (e, value) => {
    setSelectedValue(value)
  }

  const options = [
    {
      label: 'test',
      selected: false,
      value: 1
    },
    {
      label: 'test 2',
      selected: true,
      value: 2
    },
    {
      label: 'test 3',
      selected: false,
      value: 3
    },
  ]

  return (
    <View>
      <RadioGroup options={options} onChange={consoleLogEvent} />
      <Text>Selected Value: {selectedValue}</Text>
    </View>
  )
}

storiesOf('Radio Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('is enabled', () => (
    <ConsoleRadioGroup />
  ))
