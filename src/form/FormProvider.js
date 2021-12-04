import React from 'react'

export const FormContext = React.createContext()

const FormProvider = ({ children, initialValues }) => {

  return (
    <FormContext.Provider
      value={initialValues}
    >
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider