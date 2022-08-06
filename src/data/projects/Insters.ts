import { LANGUAGES, FRAMEWORKS } from 'data/profile'
import { InstersPreviews } from 'assets/images/previews'
import { Project } from 'types'

const Insters: Project = {
  name: 'Insters',
  description:
    'Insters is a photo filter app. You can import photos from your photo library and choose from a variety of color filters to apply to your photo. If one of the filters is applied, you can export the photo back to your library.',
  tasks: [
    'Conception and development',
    'User interface development',
    'Implementation of in-app purchases',
    'Color adjustment algorithms',
  ],
  languages: [LANGUAGES.swift, LANGUAGES.metal],
  frameworks: [
    FRAMEWORKS.apple.ios,
    FRAMEWORKS.apple.swiftUI,
    FRAMEWORKS.apple.storeKit,
    FRAMEWORKS.apple.coreImage,
  ],
  onlineURL: 'https://apps.apple.com/app/insters/id1561338805',
  sourceURL: undefined,
  previewImages: [
    {
      id: 'preview-insters-iphoneSE',
      sourceLight: InstersPreviews.iphoneSEImage,
      sourceDark: InstersPreviews.iphoneSEImage,
    },
    {
      id: 'preview-insters-iphone',
      sourceLight: InstersPreviews.iphoneImageDark,
      sourceDark: InstersPreviews.iphoneImageLight,
    },
    {
      id: 'preview-insters-ipad',
      sourceLight: InstersPreviews.ipadImageLight,
      sourceDark: InstersPreviews.ipadImageDark,
    },
  ],
  isComingSoon: false,
} as const

export default Insters
