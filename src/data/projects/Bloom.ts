import { LANGUAGES, FRAMEWORKS } from 'data/profile'
import { BloomPreviews } from 'assets/images/previews'
import { Project } from 'types'

const Bloom: Project = {
  name: 'Bloom - Couples App',
  description:
    'This app is a privately developed app, for calculating the past time since a certain day. The app also offers some iOS 14 widgets that are updated daily. Furthermore, notifications are sent at certain time periods. In addition, in-app purchases are implemented to remove advertisements.',
  tasks: [
    'Conception and development',
    'User interface development',
    'Implementation of in-app purchases',
    'Implementation of local notifications',
    'Implementation of widgets (iOS 14+)',
  ],
  languages: [LANGUAGES.swift],
  frameworks: [
    FRAMEWORKS.apple.ios,
    FRAMEWORKS.apple.swiftUI,
    FRAMEWORKS.apple.widgetKit,
    FRAMEWORKS.apple.storeKit,
    FRAMEWORKS.apple.localNotifications,
  ],
  onlineURL: 'https://apps.apple.com/app/bloom-couples-app/id1533246365',
  sourceURL: undefined,
  previewImages: [
    {
      id: 'preview-bloom-iphoneSE',
      sourceLight: BloomPreviews.iphoneSEImageLight,
      sourceDark: BloomPreviews.iphoneSEImageDark,
    },
    {
      id: 'preview-bloom-iphone',
      sourceLight: BloomPreviews.iphoneImageDark,
      sourceDark: BloomPreviews.iphoneImageLight,
    },
    {
      id: 'preview-bloom-ipad',
      sourceLight: BloomPreviews.ipadImageLight,
      sourceDark: BloomPreviews.ipadImageDark,
    },
  ],
  isComingSoon: false,
} as const

export default Bloom
