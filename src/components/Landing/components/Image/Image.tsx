import React from 'react'

import './Image.css'

interface ImageProps {
  isXs?: Boolean
  isSm?: boolean
}

export default function Image({ isXs = false, isSm = false }: ImageProps) {
  const baseStyle = 'landing-image'

  return (
    <div
      className={`${baseStyle}
        ${isXs && `${baseStyle}-xs`}
        ${isSm && `${baseStyle}-sm`}
        `}
    />
  )
}
