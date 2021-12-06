import { storiesOf } from '@storybook/react-native';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native'
import { Stepper, CenterView, Button } from '@src';

const StepperExample = () => {
  const pages = [
    (<Button iconName='rightArrow' onPress={() => changePage()}>Page 1</Button>),
    (<Button iconName='rightArrow' onPress={() => changePage()}>Page 2</Button>),
    (<Button iconName='rightArrow' onPress={() => changePage()}>Page 3</Button>),
    (<Button iconName='rightArrow' onPress={() => changePage()}>Page 4</Button>)
  ]

  const [currentPage, setCurrentPage] = useState(pages[0])
  const [currentPosition, setCurrentPosition] = useState(0)

  const changePage = (e) => {
    if (currentPosition === pages.length - 1) {
      setCurrentPosition(0)
    } else {
      setCurrentPosition(currentPosition + 1)
    }
  }

  const handleOnPress = (e) => {
    setCurrentPosition(e)
  }

  useEffect(() => {
    setCurrentPage(pages[currentPosition])
  }, [currentPosition])

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      {currentPage}
      <Stepper stepCount={pages.length} currentPosition={currentPosition} onPress={handleOnPress} />
    </View>

  )
}

storiesOf('Stepper', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <Stepper stepCount={4} />
  ))

  .add('with page content', () => (
    <StepperExample />
  ))
