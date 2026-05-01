import { InstersAppIcons } from 'assets/images/appIcons'
import { InstersPreviews } from 'assets/images/previews'
import {
  ScreenshotsIpadDark,
  ScreenshotsIpadLight,
  ScreenshotsIphoneDark,
  ScreenshotsIphoneLight,
} from 'assets/images/screenshots/insters'
import { PROFILE, PROJECT_STATUS } from 'data'
import { PLATFORM } from 'data/platform'
import type { Project } from 'types'

const INSTERS: Project = {
  appIcon: {
    dark: InstersAppIcons.light,
    light: InstersAppIcons.light,
  },
  description:
    'Insters is a photo filter app. You can import photos from your photo library and choose from a variety of color filters to apply to your photo. If one of the filters is applied, you can export the photo back to your library.',
  features: [
    {
      description: 'Various color filters can be applied to a photo.',
      icon: 'bi bi-image',
      title: 'Image Filters',
    },
    {
      description: 'An ad banner is shown while the user is editing a photo.',
      icon: 'bi bi-badge-ad',
      title: 'Ads',
    },
    {
      description: 'The ads can be removed through an in-app purchase.',
      icon: 'bi bi-cash-coin',
      title: 'In-App Purchases',
    },
  ],
  frameworks: [
    PROFILE.frameworks.apple.swiftUI,
    PROFILE.frameworks.apple.storeKit,
    PROFILE.frameworks.apple.coreImage,
  ],
  id: 'insters',
  languages: [PROFILE.languages.swift, PROFILE.languages.metal],
  name: 'Insters',
  onlineURL: 'https://apps.apple.com/app/insters/id1561338805',
  platforms: [PLATFORM.iphone, PLATFORM.ipad],
  previewImage: {
    altText: 'Preview screenshot of Insters',
    dark: ScreenshotsIphoneDark.EditImage,
    light: ScreenshotsIphoneLight.EditImage,
  },
  screenshots: {
    ipad: [
      {
        altText: 'Screenshot of ipad app of the edit image screen',
        dark: ScreenshotsIpadDark.EditImage,
        light: ScreenshotsIpadLight.EditImage,
      },
    ],
    iphone: [
      {
        altText: 'Screenshot of iphone app of the edit image screen',
        dark: ScreenshotsIphoneDark.EditImage,
        light: ScreenshotsIphoneLight.EditImage,
      },
    ],
  },
  status: {
    date: new Date('2022-04-06'),
    type: PROJECT_STATUS.launched,
  },
  summaryHeading: 'Color your memories.',
  tasks: [
    'Conception and development',
    'User interface development',
    'Implementation of in-app purchases',
    'Color adjustment algorithms',
  ],
  titleImage: {
    altText: 'Title image',
    dark: InstersPreviews.titleDark,
    light: InstersPreviews.titleLight,
  },
} as const

export { INSTERS }
