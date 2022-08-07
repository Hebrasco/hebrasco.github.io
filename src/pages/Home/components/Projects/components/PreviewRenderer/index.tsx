import { MISC } from 'data'
import { useColorScheme } from 'hooks'
import React from 'react'
import { Image } from 'react-bootstrap'
import { PreviewImage } from 'types'
import { styles } from './styles'

interface Props {
  images: readonly PreviewImage[]
}

export function PreviewRenderer({ images }: Props): JSX.Element {
  const colorScheme = useColorScheme()
  const isLightScheme = colorScheme === MISC.colorSchemes.light

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
