import { useState, useContext } from 'react'
import validate from 'validate.js'
import { getConstraints } from '../../validation/constraints'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

import { FormContext } from '../FormProvider'

export const useForm = ({ constraints }) => {
  const value = useContext(FormContext)

  const [formValues, setFormValues] = useState(value)

  const setFormValue = (e, value, name) => {
    setFormValues(currValues => ({
      ...currValues,
      [name]: value === '' ? undefined : value,
    }))
  }

  const getFormValue = name => {
    return formValues?.[name]
  }

  const getError = name => {
    return formErrors?.[name]
  }

  validate.validators.age = (value, options, key, attributes) => {
    const dateValue = dayjs(value)
    if (options?.requiredAge) {
      if (dateValue < dayjs().subtract(options.requiredAge, 'year')) {
        return
      }

      return 'You must be 17 or older to become a lifter'
    }
  }

  validate.extend(validate.validators.datetime, {
    parse: function (value, options) {
      return dayjs.utc(value)
    },

    format: function (value, options) {
      var format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss";
      return dayjs.utc(value).format(format)
    }
  });

  const formConstraints = constraints ? getConstraints(constraints) : null

  console.log('validating', validate({ dob17: '06/07/2003' }, getConstraints(['dob17'])))

  const formErrors = formConstraints ? validate(formValues, formConstraints) : null

  const formIsValid = !formErrors

  return { setFormValue, getFormValue, formValues, errors: formErrors, formIsValid, getError }
}
