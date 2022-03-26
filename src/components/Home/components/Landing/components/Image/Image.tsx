import React from 'react'
import { conditionalStyle } from 'utils/helpers'

import './Image.css'

interface ImageProps {
  isXs: boolean
  isSm: boolean
}

export default function Image({ isXs = false, isSm = false }: ImageProps) {
  const baseStyle = 'landing-image'

  return (
    <div
      className={`${baseStyle}
        ${conditionalStyle(isXs, `${baseStyle}-xs`)}
        ${conditionalStyle(isSm, `${baseStyle}-sm`)}
        `}
    />
  )
}
