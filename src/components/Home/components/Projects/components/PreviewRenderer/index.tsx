import './styles/BloomStyles.css'
import './styles/RecipesStyles.css'
import './styles/InstersStyles.css'
import './styles/UmbrellaStyles.css'

import React from 'react'
import PreviewImage from 'models/PreviewImageModel'
import { Image } from 'react-bootstrap'
import { useColorScheme } from 'utils/hooks'
import { COLOR_SCHEMES } from 'constants/misc/colorSchemes'

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
          className={`position-relative ${id}`}
          loading="lazy"
        />
      ))}
    </div>
  )
}
