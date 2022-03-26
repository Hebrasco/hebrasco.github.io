import { LANGUAGES } from '../languages'
import { FRAMEWORKS } from '../frameworks'
import Project from 'models/ProjectModel'
import PreviewImage from 'models/PreviewImageModel'
import IpadImageLight from 'assets/images/previews/bloom/ipad_light.png'
import IphoneImageLight from 'assets/images/previews/bloom/iphone_light.png'
import IphoneSEImageLight from 'assets/images/previews/bloom/iphoneSE_widgets_light.png'
import IpadImageDark from 'assets/images/previews/bloom/ipad_dark.png'
import IphoneImageDark from 'assets/images/previews/bloom/iphone_dark.png'
import IphoneSEImageDark from 'assets/images/previews/bloom/iphoneSE_widgets_dark.png'

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
      IphoneSEImageLight,
      IphoneSEImageDark
    ),
    new PreviewImage('preview-bloom-iphone', IphoneImageDark, IphoneImageLight),
    new PreviewImage('preview-bloom-ipad', IpadImageLight, IpadImageDark),
  ]
)
