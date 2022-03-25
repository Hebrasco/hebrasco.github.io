import React from 'react'
import PreviewImage from 'models/PreviewImageModel'
import IpadImageLight from 'assets/images/previews/umbrella/ipad_light.png'
import IphoneImageLight from 'assets/images/previews/umbrella/iphone_light.png'
import MacbookImageLight from 'assets/images/previews/umbrella/macbook_light.png'
import IpadImageDark from 'assets/images/previews/umbrella/ipad_dark.png'
import IphoneImageDark from 'assets/images/previews/umbrella/iphone_dark.png'
import MacbookImageDark from 'assets/images/previews/umbrella/macbook_dark.png'
import { Image } from 'react-bootstrap'
import { useColorScheme } from 'utils/hooks'
import { COLOR_SCHEMES } from 'constants/constants'

import './UmbrellaPreview.css'

export default function UmbrellaPreview(): JSX.Element {
  const colorScheme = useColorScheme()
  const isLightScheme = colorScheme === COLOR_SCHEMES.light

  const images: PreviewImage[] = [
    new PreviewImage(
      'preview-umbrella-iphone',
      isLightScheme ? IphoneImageDark : IphoneImageLight,
      'preview-umbrella-iphone'
    ),
    new PreviewImage(
      'preview-umbrella-macbook',
      isLightScheme ? MacbookImageLight : MacbookImageDark,
      'preview-umbrella-macbook'
    ),
    new PreviewImage(
      'preview-umbrella-ipad',
      isLightScheme ? IpadImageLight : IpadImageDark,
      'preview-umbrella-ipad'
    ),
  ]

  return (
    <div className="d-flex align-items-end justify-content-end">
      {images.map(({ id, source, className }) => (
        <Image
          key={id}
          src={source}
          className={`position-relative ${className}`}
        />
      ))}
    </div>
  )
}
