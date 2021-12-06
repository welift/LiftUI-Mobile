import React, { useEffect, useState } from 'react'
import { Animated, TouchableWithoutFeedback, View } from 'react-native'
import { stepStyles } from './stepperStyles'
import PropTypes from 'prop-types'

const Stepper = ({
  stepCount,
  currentPosition,
  onPress
}) => {
  const [position, setPosition] = useState(currentPosition)

  const handleOnPress = (e) => {
    onPress(e)
  }

  useEffect(() => {
    setPosition(currentPosition)
  }, [currentPosition])

  return (
    <View style={{ width: stepCount * 24 }}>
      <StepContainer
        currentPosition={position}
        stepCount={stepCount}
        onPress={handleOnPress}
      />
    </View>
  )
}

const StepContainer = ({
  stepCount,
  currentPosition,
  onPress
}) => {

  const handleStepPress = (position) => {
    onPress(position)
  }

  const generateStep = (position) => {
    const isCurrent = (position === currentPosition)
    let stepStyle
    if (isCurrent) {
      // Attach width and height to animation
      stepStyle = {
        alignItems: 'center',
        justifyContent: 'center',
        height: sizeAnimation,
        width: sizeAnimation,
        borderRadius: borderRadiusAnimation
      }
    } else {
      // No animation needed if not current
      stepStyle = {
        alignItems: 'center',
        justifyContent: 'center',
        height: 12,
        width: 12,
        borderRadius: 6
      }
    }

    return (
      <Animated.View
        key={'step-indicator'}
        style={[stepStyle, (isCurrent) ? stepStyles.currentStep : stepStyles.defaultStep]}
      />
    )
  }

  // Create all the dots inside a container
  const generateAllSteps = () => {
    let steps = []
    for (let position = 0; position < stepCount; position++) {
      steps.push(
        <TouchableWithoutFeedback
          key={position}
          onPress={() => handleStepPress(position)}
        >
          <View style={{ flexDirection: 'row' }}>
            {generateStep(position)}
          </View>
        </TouchableWithoutFeedback>
      )
    }

    return (
      <View style={[stepStyles.indicatorContainer, { height: 16 }]}>
        {steps}
      </View>
    )
  }

  // Setup Animation
  const sizeAnimation = React.useRef(new Animated.Value(12)).current
  const borderRadiusAnimation = React.useRef(new Animated.Value(6)).current

  useEffect(() => {
    // Animate on currentPosition change
    sizeAnimation.setValue(12)
    borderRadiusAnimation.setValue(6)
    Animated.sequence([
      Animated.parallel([
        Animated.timing(sizeAnimation, {
          toValue: 14,
          duration: 200,
          useNativeDriver: false
        }),
        Animated.timing(borderRadiusAnimation, {
          toValue: 7,
          duration: 200,
          useNativeDriver: false
        })
      ]),
    ]).start()
  }, [currentPosition])

  return (
    <View style={{ flexDirection: 'column' }}>
      {generateAllSteps()}
    </View>
  )
}

Stepper.defaultProps = {
  stepCount: 0,
  currentPosition: 0,
  onPress: () => { }
}

Stepper.propTypes = {
  stepCount: PropTypes.number,
  currentPosition: PropTypes.number,
  onPress: PropTypes.func
}

export default Stepper