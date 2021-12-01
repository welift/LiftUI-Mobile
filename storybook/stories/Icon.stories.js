import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from './components/CenterView';
import { Icon } from './components';
import { View } from 'react-native';

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
