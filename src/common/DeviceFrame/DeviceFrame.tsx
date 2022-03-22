import React from 'react'
import IphoneFrame from 'assets/images/device_frames/ios/iphone.png'
import IphoneSEFrame from 'assets/images/device_frames/ios/iphoneSE.png'
import IpadFrame from 'assets/images/device_frames/ios/ipad.png'
import macbookFrame from 'assets/images/device_frames/web/macbook.png'
import browserDarkFrame from 'assets/images/device_frames/web/browser_dark.png'
import browserLightFrame from 'assets/images/device_frames/web/browser_light.png'
import { Image } from 'react-bootstrap'

import './DeviceFrame.css'

interface Props {
  image: string
  type: string
}

export default function DeviceFrame({ image, type }: Props) {
  const frameImage = getFrameImage(type)
  const className = getClassName(type)

  function getFrameImage(type: string): string | null {
    switch (type) {
      case DEVICE_TYPES.ipad:
        return IpadFrame
      case DEVICE_TYPES.iphone:
        return IphoneFrame
      case DEVICE_TYPES.iphoneSE:
        return IphoneSEFrame
      case DEVICE_TYPES.web:
        return browserLightFrame
      case DEVICE_TYPES.macbook:
        return macbookFrame
      default:
        return null
    }
  }

  function getClassName(type: string): string {
    switch (type) {
      case DEVICE_TYPES.ipad:
        return 'device-frame-ipad'
      case DEVICE_TYPES.iphone:
        return 'device-frame-iphone'
      case DEVICE_TYPES.iphoneSE:
        return 'device-frame-iphoneSE'
      case DEVICE_TYPES.web:
        return 'device-frame-web'
      case DEVICE_TYPES.macbook:
        return 'device-frame-macbook'
      default:
        return 'device-frame-default'
    }
  }

  if (!frameImage) return null

  return (
    <div className="position-relative" style={{ height: '100%' }}>
      <Image
        src={image}
        className={`position-absolute top-50 start-50 translate-middle ${className}`}
      />
      <Image
        src={frameImage}
        className="position-absolute top-50 start-50 translate-middle"
        style={{ height: '100%' }}
      />
    </div>
  )
}

export const DEVICE_TYPES = {
  ipad: 'IPAD',
  iphone: 'IPHONE',
  iphoneSE: 'IPHONE_SE',
  web: 'WEB',
  macbook: 'MACBOOK',
}
