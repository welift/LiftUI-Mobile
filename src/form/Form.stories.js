import { storiesOf } from '@storybook/react-native';
import dayjs from 'dayjs';
import React from 'react';
import { View } from 'react-native'
import { Input, Dropdown, CenterView, FormProvider, useForm, formatPhoneNumber, formatDate } from '../../src'

const UsingForm = () => {
  const { setFormValue, formValues, getError, formIsValid, errors } = useForm({ constraints: ['email', 'firstName', 'lastName', 'lifterCount', 'phoneNumber', 'dob17'] })
  const options = [
    {
      label: '1',
      value: 1
    },
    {
      label: '2',
      value: 2
    },
    {
      label: '3',
      value: 3
    },
  ]

  console.log(formValues, formIsValid)


  return (
    <View style={{ width: '90%' }}>

      <FormProvider>
        <Input
          placeholder='email'
          name='email'
          onChange={setFormValue}
          value={formValues?.['email']}
          hint='Email'
          error={getError('email')}
        />
        <Input
          placeholder='first name'
          name='firstName'
          onChange={setFormValue}
          value={formValues?.['firstName']}
          hint='First Name'
          error={getError('firstName')}
        />
        <Input
          placeholder='phone number'
          name='phoneNumber'
          onChange={setFormValue}
          value={formValues?.['phoneNumber']}
          hint='Phone Number'
          formatter={formatPhoneNumber}
          keyboardType='phone-pad'
          error={getError('phoneNumber')}
        />
        <Input
          placeholder='last name'
          name='lastName'
          onChange={setFormValue}
          value={formValues?.['lastName']}
          error={getError('lastName')}
        />
        <Input
          placeholder='Birthday'
          name='dob17'
          onChange={setFormValue}
          formatter={formatDate}
          value={formValues?.['dob17']}
          error={getError('dob17')}
        />
        <Dropdown
          placeholder='lifterCount'
          name='lifterCount'
          options={options}
          onOptionClick={setFormValue}
          error={getError('lifterCount')}
        />
      </FormProvider>
    </View>
  )
}

storiesOf('Form', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Form Inputs', () => (
    <UsingForm />
  ))
