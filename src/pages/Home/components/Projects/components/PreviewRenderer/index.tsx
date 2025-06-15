import { MISC } from 'data'
import { useColorScheme } from 'hooks'
import React from 'react'
import { Image } from 'react-bootstrap'
import { PreviewImage } from 'types'
import styles from './index.module.css'

interface Props {
  images: readonly PreviewImage[]
}

export function PreviewRenderer({ images }: Props): JSX.Element {
  const colorScheme = useColorScheme()
  const isLightScheme = colorScheme === MISC.colorSchemes.light
  const { id, sourceLight, sourceDark } = images[1]

  return (
    <div className="d-flex justify-content-center">
      <Image
        key={id}
        src={isLightScheme ? sourceLight : sourceDark}
        className={styles['preview-image']}
        loading="lazy"
      />
    </div>
  )
}
