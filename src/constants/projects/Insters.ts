import { LANGUAGES } from 'constants/profile/languages'
import { FRAMEWORKS } from 'constants/profile/frameworks'
import Project from 'models/ProjectModel'
import PreviewImage from 'models/PreviewImageModel'
import { InstersPreviews } from 'assets/images/previews'

export default new Project(
  'Insters',
  'Insters is a photo filter app. You can import photos from your photo library and choose from a variety of color filters to apply to your photo. If one of the filters is applied, you can export the photo back to your library.',
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
  'https://apps.apple.com/app/insters/id1561338805',
  undefined,
  [
    new PreviewImage(
      'preview-insters-iphoneSE',
      InstersPreviews.iphoneSEImage,
      InstersPreviews.iphoneSEImage
    ),
    new PreviewImage(
      'preview-insters-iphone',
      InstersPreviews.iphoneImageDark,
      InstersPreviews.iphoneImageLight
    ),
    new PreviewImage(
      'preview-insters-ipad',
      InstersPreviews.ipadImageLight,
      InstersPreviews.ipadImageDark
    ),
  ]
)
