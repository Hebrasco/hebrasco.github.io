import { MISC } from 'data'
import { useColorScheme } from 'hooks'
import React from 'react'
import { Image } from 'react-bootstrap'
import { PreviewImage } from 'types'

import styles from './index.module.css'

interface Props {
  image: PreviewImage
}

function ProjectImages({ image }: Props): JSX.Element {
  const colorScheme = useColorScheme()
  const isLightScheme = colorScheme === MISC.colorSchemes.light

  return (
    <div className="d-flex align-items-end justify-content-end">
      <Image
        src={isLightScheme ? image.light.src : image.dark.src}
        alt={isLightScheme ? image.light.altText : image.dark.altText}
        className={styles['project-image']}
        loading="lazy"
      />
    </div>
  )
}

export default ProjectImages
