import { InstersAppIcons } from 'assets/images/appIcons'
import { InstersPreviews } from 'assets/images/previews'
import {
  ScreenshotsDark,
  ScreenshotsLight,
} from 'assets/images/screenshots/insters'
import { PROFILE } from 'data'
import { PLATFORM } from 'data/platform'
import { PROJECT_STATUS } from 'data/projectStatus'
import { Project } from 'types'

export const INSTERS: Project = {
  id: 'insters',
  name: 'Insters',
  description:
    'Insters is a photo filter app. You can import photos from your photo library and choose from a variety of color filters to apply to your photo. If one of the filters is applied, you can export the photo back to your library.',
  tasks: [
    'Conception and development',
    'User interface development',
    'Implementation of in-app purchases',
    'Color adjustment algorithms',
  ],
  platforms: [PLATFORM.iPhone, PLATFORM.iPadOS],
  languages: [PROFILE.languages.swift, PROFILE.languages.metal],
  frameworks: [
    PROFILE.frameworks.apple.swiftUI,
    PROFILE.frameworks.apple.storeKit,
    PROFILE.frameworks.apple.coreImage,
  ],
  status: {
    type: PROJECT_STATUS.launched,
    date: new Date('2022-04-06'),
  },
  features: [
    {
      icon: 'bi bi-image',
      title: 'Image Filters',
      description: 'Various color filters can be applied to a photo.',
    },
    {
      icon: 'bi bi-badge-ad',
      title: 'Ads',
      description: 'A ad banner is shown while the user is editing an photo.',
    },
    {
      icon: 'bi bi-cash-coin',
      title: 'In-App Purchases',
      description: 'The ads can be removed through an in-app purchase.',
    },
  ],
  onlineURL: 'https://apps.apple.com/app/insters/id1561338805',
  sourceURL: undefined,
  appIcon: {
    light: InstersAppIcons.light,
    dark: InstersAppIcons.light,
  },
  previewImage: {
    light: {
      src: ScreenshotsLight.EditImage,
      altText: 'Preview screenshot of Insters in light mode',
    },
    dark: {
      src: ScreenshotsDark.EditImage,
      altText: 'Preview screenshot of Insters in dark mode',
    },
  },
  titleImage: {
    light: {
      src: InstersPreviews.titleLight,
      altText: 'Title image in light mode',
    },
    dark: {
      src: InstersPreviews.titleDark,
      altText: 'Title image in dark mode',
    },
  },
  screenshots: {
    light: [
      {
        src: ScreenshotsLight.EditImage,
        altText: 'Screenshot of app in light mode of the edit image screen',
      },
    ],
    dark: [
      {
        src: ScreenshotsDark.EditImage,
        altText: 'Screenshot of app in light mode of the edit image screen',
      },
    ],
  },
} as const
