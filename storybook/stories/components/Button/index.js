import React from 'react'

// import {
//   BUTTON_SIZE_SMALL,
//   BUTTON_SIZE_LARGE
// } from './constants'

// import { buttonCss } from './buttonStyles'
// import Spinner from '../Spinner'
// import Icon from '../Icon'

// import { icons } from '../../icons/icons'
import { View, TouchableHighlight, Text } from 'react-native'

const Button = ({
  size,
  disabled,
  onClick,
  children,
  loading,
  iconName
}) => {

  // const buttonClassName = size === BUTTON_SIZE_SMALL ? 'small' : 'large'

  return (
    <View>
      <TouchableHighlight
        // className={`Button-${buttonClassName}`}
        disabled={disabled || loading}
        onClick={onClick}
        loading={loading}
        data-loading={loading}
        // data-has-icon={!!icons?.[iconName]}
      >
        <View className='children'>
            <Text className='text'>{children}</Text>
            {/* {loading && <Spinner />}
            {(!loading && iconName) && <Icon name={iconName} />} */}
          </View>
      </TouchableHighlight>
    </View>
  )
}


Button.defaultProps = {
  // size: BUTTON_SIZE_LARGE,
  disabled: false,
  onClick: () => { },
  loading: null,
  iconName: null
}

export default Button