import { InstersPreviews } from 'assets/images/previews'
import { PROFILE } from 'data'
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
  languages: [PROFILE.languages.swift, PROFILE.languages.metal],
  frameworks: [
    PROFILE.frameworks.apple.ios,
    PROFILE.frameworks.apple.swiftUI,
    PROFILE.frameworks.apple.storeKit,
    PROFILE.frameworks.apple.coreImage,
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
