import React from 'react'
import PreviewImage from 'models/PreviewImageModel'
import IpadImageLight from 'assets/images/previews/insters/ipad_light.png'
import IphoneImageLight from 'assets/images/previews/insters/iphone_light.png'
import IpadImageDark from 'assets/images/previews/insters/ipad_dark.png'
import IphoneImageDark from 'assets/images/previews/insters/iphone_dark.png'
import IphoneSEImage from 'assets/images/previews/insters/iphoneSE_universal.png'
import { Image } from 'react-bootstrap'
import { useColorScheme } from 'utils/hooks'
import { COLOR_SCHEMES } from 'constants/constants'

import './InstersPreview.css'

export default function InstersPreview(): JSX.Element {
  const colorScheme = useColorScheme()
  const isLightScheme = colorScheme === COLOR_SCHEMES.light

  const images: PreviewImage[] = [
    new PreviewImage(
      'preview-insters-iphoneSE',
      IphoneSEImage,
      'preview-insters-iphoneSE'
    ),
    new PreviewImage(
      'preview-insters-iphone',
      isLightScheme ? IphoneImageDark : IphoneImageLight,
      'preview-insters-iphone'
    ),
    new PreviewImage(
      'preview-insters-ipad',
      isLightScheme ? IpadImageLight : IpadImageDark,
      'preview-insters-ipad'
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
