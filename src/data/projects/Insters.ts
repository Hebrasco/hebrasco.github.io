import { InstersAppIcons } from 'assets/images/appIcons'
import { InstersPreviews } from 'assets/images/previews'
import { PROFILE } from 'data'
import { Platform } from 'data/platform'
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
  platforms: [Platform.iPhone, Platform.iPadOS],
  languages: [PROFILE.languages.swift, PROFILE.languages.metal],
  frameworks: [
    PROFILE.frameworks.apple.ios,
    PROFILE.frameworks.apple.swiftUI,
    PROFILE.frameworks.apple.storeKit,
    PROFILE.frameworks.apple.coreImage,
  ],
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
  previewImageMain: {
    id: 'preview-insters-iphone',
    sourceLight: InstersPreviews.iphoneImageLight,
    sourceDark: InstersPreviews.iphoneImageDark,
  },
  previewImages: [
    {
      id: 'preview-insters-iphoneSE',
      sourceLight: InstersPreviews.iphoneSEImage,
      sourceDark: InstersPreviews.iphoneSEImage,
      style: {
        width: '25%',
        height: 'auto',
        left: '9%',
        bottom: 0,
        zIndex: 3,
      },
    },
    {
      id: 'preview-insters-iphone',
      sourceLight: InstersPreviews.iphoneImageLight,
      sourceDark: InstersPreviews.iphoneImageDark,
      style: {
        width: '30%',
        height: 'auto',
        left: '5%',
        bottom: 0,
        zIndex: 2,
      },
    },
    {
      id: 'preview-insters-ipad',
      sourceLight: InstersPreviews.ipadImageLight,
      sourceDark: InstersPreviews.ipadImageDark,
      style: {
        width: '54%',
        height: 'auto',
        right: 0,
        bottom: 0,
        zIndex: 1,
      },
    },
  ],
  isComingSoon: false,
} as const
