import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Input, Dropdown, CenterView, FormProvider, useForm, formatPhoneNumber } from '@src'

const UsingForm = () => {
  const { setFormValue, formValues, getError, formIsValid } = useForm({ constraints: ['email', 'firstName', 'lastName', 'lifterCount', 'phoneNumber'] })
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
        error={getError('phoneNumber')}
      />
      <Input
        placeholder='last name'
        name='lastName'
        onChange={setFormValue}
        value={formValues?.['lastName']}
        error={getError('lastName')}
      />
      <Dropdown
        placeholder='lifterCount'
        name='lifterCount'
        options={options}
        onOptionClick={setFormValue}
        error={getError('lifterCount')}
        searchValue='1'
        selected={{ label: '1', value: 1, selected: true }}
      />
    </FormProvider>
  )
}

storiesOf('Form', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Form Inputs', () => (
    <UsingForm />
  ))
