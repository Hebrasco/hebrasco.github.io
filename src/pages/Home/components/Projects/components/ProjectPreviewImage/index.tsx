import { MISC } from 'data'
import { useColorScheme } from 'hooks'
import React from 'react'
import { Image } from 'react-bootstrap'
import styles from './index.module.css'

import { PreviewImage } from 'types/PreviewImage'

interface Props {
  image: PreviewImage
}

export function ProjectPreviewImage({ image }: Props): JSX.Element {
  const colorScheme = useColorScheme()
  const isLightScheme = colorScheme === MISC.colorSchemes.light
  const { dark, light } = image

  return (
    <div
      className={`d-flex justify-content-center ${styles['preview-image-container']}`}
    >
      <Image
        src={isLightScheme ? light.src : dark.src}
        className={styles['preview-image']}
        alt={isLightScheme ? light.altText : dark.altText}
        loading="lazy"
      />
    </div>
  )
}
