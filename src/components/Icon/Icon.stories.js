import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import Icon from '.';
import { View } from 'react-native';
import colors from '@theme/color'

storiesOf('Icon', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('is enabled', () => (
    <View>
      <Icon name='backArrow' />
      <Icon name='box' />
      <Icon name='calendar' />
      <Icon name='check' />
      <Icon name='checkCircle' />
      <Icon name='closeX' />
      <Icon name='crossCircle' />
      <Icon name='dot' />
      <Icon name='downArrow' />
      <Icon name='eyeClosed' />
      <Icon name='eyeOpen' />
      <Icon name='hamburger' />
      <Icon name='happy' />
      <Icon name='home' />
      <Icon name='leftArrow' />
      <Icon name='lifter' />
      <Icon name='loading' />
      <Icon name='location' />
      <Icon name='logout' />
      <Icon name='money' />
      <Icon name='phone' />
      <Icon name='rightArrow' />
      <Icon name='sad' />
      <Icon name='settings' />
      <Icon name='time' />
      <Icon name='truck' />
      <Icon name='upArrow' />
      <Icon name='user' />
    </View>
  ))

  .add('can change color', () => (
    <View>
      <Icon name='backArrow' fill={colors.primary} />
      <Icon name='box' fill={colors.primary} />
      <Icon name='calendar' fill={colors.primary} />
      <Icon name='check' fill={colors.primary} />
      <Icon name='checkCircle' fill={colors.primary} />
      <Icon name='closeX' fill={colors.primary} />
      <Icon name='crossCircle' fill={colors.primary} />
      <Icon name='dot' fill={colors.primary} />
      <Icon name='downArrow' fill={colors.primary} />
      <Icon name='eyeClosed' fill={colors.primary} />
      <Icon name='eyeOpen' fill={colors.primary} />
      <Icon name='hamburger' fill={colors.primary} />
      <Icon name='happy' fill={colors.primary} />
      <Icon name='home' fill={colors.primary} />
      <Icon name='leftArrow' fill={colors.primary} />
      <Icon name='lifter' fill={colors.primary} />
      <Icon name='loading' fill={colors.primary} />
      <Icon name='location' fill={colors.primary} />
      <Icon name='logout' fill={colors.primary} />
      <Icon name='money' fill={colors.primary} />
      <Icon name='phone' fill={colors.primary} />
      <Icon name='rightArrow' fill={colors.primary} />
      <Icon name='sad' fill={colors.primary} />
      <Icon name='settings' fill={colors.primary} />
      <Icon name='time' fill={colors.primary} />
      <Icon name='truck' fill={colors.primary} />
      <Icon name='upArrow' fill={colors.primary} />
      <Icon name='user' fill={colors.primary} />
    </View>

  ))
