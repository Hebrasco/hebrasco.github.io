import React from 'react'
import IphoneFrame from 'assets/images/device_frames/ios/iphone.png'
import IphoneSEFrame from 'assets/images/device_frames/ios/iphoneSE.png'
import IpadFrame from 'assets/images/device_frames/ios/ipad.png'
import { Image } from 'react-bootstrap'

interface Props {
  image: string
  type: string
}

export default function DeviceFrame({ image, type }: Props) {
  const frameImage = getFrameImage(type)

  function getFrameImage(type: string): string | null {
    switch (type) {
      case DEVICE_TYPES.ipad:
        return IpadFrame
      case DEVICE_TYPES.iphone:
        return IphoneFrame
      case DEVICE_TYPES.iphoneSE:
        return IphoneSEFrame
      case DEVICE_TYPES.web:
        return null
      default:
        return null
    }
  }

  if (!frameImage) return null

  return (
    <div className="position-relative" style={{ height: '100%' }}>
      <Image
        src={frameImage}
        className="position-absolute top-50 start-50 translate-middle"
        style={{ height: '100%' }}
      />
      <Image
        src={image}
        className="position-absolute top-50 start-50 translate-middle"
        style={{ height: '67%' }}
      />
    </div>
  )
}

export const DEVICE_TYPES = {
  ipad: 'IPAD',
  iphone: 'IPHONE',
  iphoneSE: 'IPHONE_SE',
  web: 'WEB',
}
