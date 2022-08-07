import React from 'react'
import { conditionalStyle } from 'utils'

import styles from './index.module.css'

interface ImageProps {
  isXs: boolean
  isSm: boolean
}

export function Image({ isXs = false, isSm = false }: ImageProps) {
  const baseStyle = 'landing-image'

  return (
    <div
      className={`
        ${styles[baseStyle]}
        ${conditionalStyle(isXs, styles[`${baseStyle}-xs`])}
        ${conditionalStyle(isSm, styles[`${baseStyle}-sm`])}
      `}
    />
  )
}
