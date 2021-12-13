import { useState, useContext } from 'react'
import validate from 'validate.js'
import { getConstraints } from '../../validation/constraints'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(utc)
dayjs.extend(customParseFormat)
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
    const dateValue = dayjs(value, 'MM/DD/YYYY', true)

    if (!dateValue.isValid())
      return '^Please enter a valid date'

    if (options?.presence) {
      if (!value)
        return '^Birthday is required'
    }

    if (options?.requiredAge) {
      if (dateValue < dayjs().subtract(options.requiredAge, 'year')) {
        return
      }

      return '^You must be 17 or older to become a lifter'
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

  const formErrors = formConstraints ? validate(formValues, formConstraints) : null

  const formIsValid = !formErrors

  return { setFormValue, getFormValue, formValues, errors: formErrors, formIsValid, getError }
}
