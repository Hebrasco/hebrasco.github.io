import { LANGUAGES } from '../languages'
import { FRAMEWORKS } from '../frameworks'
import Project from 'models/ProjectModel'
import PreviewImage from 'models/PreviewImageModel'
import IpadImageLight from 'assets/images/previews/insters/ipad_light.png'
import IphoneImageLight from 'assets/images/previews/insters/iphone_light.png'
import IpadImageDark from 'assets/images/previews/insters/ipad_dark.png'
import IphoneImageDark from 'assets/images/previews/insters/iphone_dark.png'
import IphoneSEImage from 'assets/images/previews/insters/iphoneSE_universal.png'

export default new Project(
  'Insters',
  'Insters is a photo filer app. You can import images from you photo library and choose from a variety of color filters to apply to you image. If applied one of the filters, you can export the photo back to your library.',
  [
    'Conception and development',
    'User interface development',
    'Implementation of in-app purchases',
    'Color adjustment algorithms',
  ],
  [LANGUAGES.swift, LANGUAGES.metal],
  [
    FRAMEWORKS.apple.ios,
    FRAMEWORKS.apple.swiftUI,
    FRAMEWORKS.apple.storeKit,
    FRAMEWORKS.apple.coreImage,
  ],
  undefined,
  undefined,
  [
    new PreviewImage('preview-insters-iphoneSE', IphoneSEImage, IphoneSEImage),
    new PreviewImage(
      'preview-insters-iphone',
      IphoneImageDark,
      IphoneImageLight
    ),
    new PreviewImage('preview-insters-ipad', IpadImageLight, IpadImageDark),
  ],
  true
)
