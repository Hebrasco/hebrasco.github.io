import { BloomPreviews } from 'assets/images/previews'
import { PROFILE } from 'data'
import { Project } from 'types'

export const BLOOM: Project = {
  id: 'bloom',
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
  languages: [PROFILE.languages.swift],
  frameworks: [
    PROFILE.frameworks.apple.ios,
    PROFILE.frameworks.apple.swiftUI,
    PROFILE.frameworks.apple.widgetKit,
    PROFILE.frameworks.apple.storeKit,
    PROFILE.frameworks.apple.localNotifications,
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
  previewColors: {
    backgroundGradient: {
      start: '#DC143C',
      end: '#C40233',
    },
    title: '#FFFFFF',
    subtitle: '#fafafc',
    actions: {
      foreground: '#000000',
      background: '#FFFFFF',
    },
  },
} as const
