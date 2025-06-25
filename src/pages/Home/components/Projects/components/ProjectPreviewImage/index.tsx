import { MISC } from 'data'
import { useColorScheme } from 'hooks'
import React from 'react'
import { Image } from 'react-bootstrap'
import { PreviewImage } from 'types'
import styles from './index.module.css'

interface Props {
  image: PreviewImage
}

export function ProjectPreviewImage({ image }: Props): JSX.Element {
  const colorScheme = useColorScheme()
  const isLightScheme = colorScheme === MISC.colorSchemes.light
  const { id, sourceLight, sourceDark, style } = image

  return (
    <div
      className={`d-flex justify-content-center ${styles['preview-image-container']}`}
    >
      <Image
        key={id}
        src={isLightScheme ? sourceLight : sourceDark}
        className={styles['preview-image']}
        style={style}
        loading="lazy"
      />
    </div>
  )
}
