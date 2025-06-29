import { InstersAppIcons } from 'assets/images/appIcons'
import { InstersPreviews } from 'assets/images/previews'
import { ScreenshotsDark, ScreenshotsLight } from 'assets/images/screenshots/insters'
import { PROFILE } from 'data'
import { PLATFORM } from 'data/platform'
import { PROJECT_STATUS } from 'data/projectStatus'
import type { Project } from 'types'

export const INSTERS: Project = {
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
      description: 'A ad banner is shown while the user is editing an photo.',
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
  platforms: [PLATFORM.iPhone, PLATFORM.iPadOS],
  previewImage: {
    dark: {
      altText: 'Preview screenshot of Insters in dark mode',
      src: ScreenshotsDark.EditImage,
    },
    light: {
      altText: 'Preview screenshot of Insters in light mode',
      src: ScreenshotsLight.EditImage,
    },
  },
  screenshots: {
    iphone: {
      dark: [
        {
          altText: 'Screenshot of app in light mode of the edit image screen',
          src: ScreenshotsDark.EditImage,
        },
      ],
      light: [
        {
          altText: 'Screenshot of app in light mode of the edit image screen',
          src: ScreenshotsLight.EditImage,
        },
      ],
    },
  },
  sourceURL: undefined,
  status: {
    date: new Date('2022-04-06'),
    type: PROJECT_STATUS.launched,
  },
  tasks: [
    'Conception and development',
    'User interface development',
    'Implementation of in-app purchases',
    'Color adjustment algorithms',
  ],
  titleImage: {
    dark: {
      altText: 'Title image in dark mode',
      src: InstersPreviews.titleDark,
    },
    light: {
      altText: 'Title image in light mode',
      src: InstersPreviews.titleLight,
    },
  },
} as const
