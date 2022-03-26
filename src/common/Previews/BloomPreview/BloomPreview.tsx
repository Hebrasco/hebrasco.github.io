import React from 'react'
import PreviewImage from 'models/PreviewImageModel'
import IpadImageLight from 'assets/images/previews/bloom/ipad_light.png'
import IphoneImageLight from 'assets/images/previews/bloom/iphone_light.png'
import IphoneSEImageLight from 'assets/images/previews/bloom/iphoneSE_widgets_light.png'
import IpadImageDark from 'assets/images/previews/bloom/ipad_dark.png'
import IphoneImageDark from 'assets/images/previews/bloom/iphone_dark.png'
import IphoneSEImageDark from 'assets/images/previews/bloom/iphoneSE_widgets_dark.png'
import { Image } from 'react-bootstrap'
import { useColorScheme } from 'utils/hooks'
import { COLOR_SCHEMES } from 'constants/constants'

import './BloomPreview.css'

export default function BloomPreview(): JSX.Element {
  const colorScheme = useColorScheme()
  const isLightScheme = colorScheme === COLOR_SCHEMES.light

  const images: PreviewImage[] = [
    new PreviewImage(
      'preview-bloom-iphoneSE',
      isLightScheme ? IphoneSEImageLight : IphoneSEImageDark,
      'preview-bloom-iphoneSE'
    ),
    new PreviewImage(
      'preview-bloom-iphone',
      isLightScheme ? IphoneImageDark : IphoneImageLight,
      'preview-bloom-iphone'
    ),
    new PreviewImage(
      'preview-bloom-ipad',
      isLightScheme ? IpadImageLight : IpadImageDark,
      'preview-bloom-ipad'
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
