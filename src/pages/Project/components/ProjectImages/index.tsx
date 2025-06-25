import { MISC } from 'data'
import { useColorScheme } from 'hooks'
import React from 'react'
import { Image } from 'react-bootstrap'
import { PreviewImage } from 'types'

import styles from './index.module.css'

interface Props {
  images: readonly PreviewImage[]
}

function ProjectImages({ images }: Props): JSX.Element {
  const colorScheme = useColorScheme()
  const isLightScheme = colorScheme === MISC.colorSchemes.light

  return (
    <div className="d-flex align-items-end justify-content-end">
      {images.map((image) => {
        const { id, sourceLight, sourceDark, style } = image

        return (
          <Image
            key={id}
            src={isLightScheme ? sourceLight : sourceDark}
            style={style}
            className={styles['project-image']}
            loading="lazy"
          />
        )
      })}
    </div>
  )
}

export default ProjectImages
