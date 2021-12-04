import { useState, useContext } from 'react'
import validate from 'validate.js'
import { getConstraints } from '../../validation/constraints'
import dayjs from 'dayjs'

import { FormContext } from '../FormProvider'

export const useForm = ({ constraints }) => {
  const value = useContext(FormContext)

  const [formValues, setFormValues] = useState(value)

  const setFormValue = (e) => {
    const name = e?.target?.name
    const value = e?.target?.value

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

  validate.extend(validate.validators.datetime, {
    parse: function (value, options) {
      return dayjs(value)
    },

    format: function (value, options) {
      var format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss";
      return dayjs(value).format(format)
    }
  });

  const formConstraints = constraints ? getConstraints(constraints) : null

  const formErrors = formConstraints ? validate(formValues, formConstraints) : null

  const formIsValid = !formErrors

  return { setFormValue, getFormValue, formValues, errors: formErrors, formIsValid, getError }
}
