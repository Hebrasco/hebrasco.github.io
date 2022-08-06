import styles from './styles'

import React from 'react'
import { Image } from 'react-bootstrap'
import { useColorScheme } from 'hooks'
import { COLOR_SCHEMES } from 'data/misc'
import { PreviewImage } from 'types'

interface Props {
  images: readonly PreviewImage[]
}

export default function PreviewRenderer({ images }: Props): JSX.Element {
  const colorScheme = useColorScheme()
  const isLightScheme = colorScheme === COLOR_SCHEMES.light

  return (
    <div className="d-flex align-items-end justify-content-end">
      {images.map(({ id, sourceLight, sourceDark }) => (
        <Image
          key={id}
          src={isLightScheme ? sourceLight : sourceDark}
          className={`position-relative ${styles[id]}`}
          loading="lazy"
        />
      ))}
    </div>
  )
}
