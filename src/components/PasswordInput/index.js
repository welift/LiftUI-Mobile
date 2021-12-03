import React, { useState } from 'react'
import Input from '../../components/Input'

const PasswordInput = (props) => {
  const [isPassword, setIsPassword] = useState(true)

  return (
    <Input
      iconName={isPassword ? 'eyeClosed' : 'eyeOpen'}
      onIconPress={() => setIsPassword(!isPassword)}
      secureTextEntry={isPassword}
      {...props}
    />
  )
}

export default PasswordInput