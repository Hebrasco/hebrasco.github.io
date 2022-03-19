import React from 'react'

import './Image.css'

interface ImageProps {
  isXs?: Boolean
  isSm?: boolean
}

export default function Image({ isXs = false, isSm = false }: ImageProps) {
  const baseStyle = 'landing-image'
  let styles = 'd-none d-md-block'

  if (isXs) styles = `${baseStyle}-xs d-block d-sm-none`
  if (isSm) styles = `${baseStyle}-sm d-none d-sm-block d-md-none`

  return <div className={`${baseStyle} ${styles}`} />
}
