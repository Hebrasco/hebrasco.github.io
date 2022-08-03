import { LANGUAGES } from 'data/profile/languages'
import { FRAMEWORKS } from 'data/profile/frameworks'
import Project from 'components/models/ProjectModel'
import PreviewImage from 'components/models/PreviewImageModel'
import { BloomPreviews } from 'assets/images/previews'

export default new Project(
  'Bloom - Couples App',
  'This app is a privately developed app, for calculating the past time since a certain day. The app also offers some iOS 14 widgets that are updated daily. Furthermore, notifications are sent at certain time periods. In addition, in-app purchases are implemented to remove advertisements.',
  [
    'Conception and development',
    'User interface development',
    'Implementation of in-app purchases',
    'Implementation of local notifications',
    'Implementation of widgets (iOS 14+)',
  ],
  [LANGUAGES.swift],
  [
    FRAMEWORKS.apple.ios,
    FRAMEWORKS.apple.swiftUI,
    FRAMEWORKS.apple.widgetKit,
    FRAMEWORKS.apple.storeKit,
    FRAMEWORKS.apple.localNotifications,
  ],
  'https://apps.apple.com/app/bloom-couples-app/id1533246365',
  undefined,
  [
    new PreviewImage(
      'preview-bloom-iphoneSE',
      BloomPreviews.iphoneSEImageLight,
      BloomPreviews.iphoneSEImageDark
    ),
    new PreviewImage(
      'preview-bloom-iphone',
      BloomPreviews.iphoneImageDark,
      BloomPreviews.iphoneImageLight
    ),
    new PreviewImage(
      'preview-bloom-ipad',
      BloomPreviews.ipadImageLight,
      BloomPreviews.ipadImageDark
    ),
  ]
)
