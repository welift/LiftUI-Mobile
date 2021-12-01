import React from "react"
import icons from '@icons'

const Icon = (props) => {
  const { name, ...rest } = props

  return icons(rest)?.[name]
}

export default Icon