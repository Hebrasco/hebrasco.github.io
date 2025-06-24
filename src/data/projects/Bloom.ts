import { BloomAppIcons } from 'assets/images/appIcons'
import { BloomPreviews } from 'assets/images/previews'
import { BloomScreenshots } from 'assets/images/screenshots'
import { PROFILE } from 'data'
import { PLATFORM } from 'data/platform'
import { PROJECT_STATUS } from 'data/projectStatus'
import { Project } from 'types'

export const BLOOM: Project = {
  id: 'bloom',
  name: 'Bloom - Couples App',
  description:
    'This app is for calculating the past time since a specific day. The app also offers widgets. Furthermore, notifications are sent at certain time periods. In addition, in-app purchases are implemented to remove advertisements.',
  tasks: [
    'Conception and development',
    'User interface development',
    'Implementation of in-app purchases',
    'Implementation of local notifications',
    'Implementation of widgets',
  ],
  platforms: [PLATFORM.iPhone, PLATFORM.iPadOS],
  languages: [PROFILE.languages.swift],
  frameworks: [
    PROFILE.frameworks.apple.ios,
    PROFILE.frameworks.apple.swiftUI,
    PROFILE.frameworks.apple.widgetKit,
    PROFILE.frameworks.apple.storeKit,
    PROFILE.frameworks.apple.notifications,
  ],
  status: {
    type: PROJECT_STATUS.launched,
    date: new Date('2020-09-26'),
  },
  features: [
    {
      icon: 'bi bi-bell',
      title: 'Notifications',
      description:
        'The user will get a notification when a specific anniversary was met, like 1, 3 and 6 months and every year.',
    },
    {
      icon: 'bi bi-person',
      title: 'Photos',
      description:
        'One or Two photos can be imported from the users photo library to be shown on the home screen.',
    },
    {
      icon: 'bi bi-calendar-date',
      title: 'Important Dates',
      description:
        'The special dates of a relationship can be set and are shown on the home screen. These are couple, engaged and married.',
    },
    {
      icon: 'bi bi-cake2',
      title: 'Anniversaries',
      description:
        'On the how screen the remaining days of your next anniversary.',
    },
    {
      icon: 'bi bi-clock',
      title: 'Time',
      description:
        "On the how screen the years, months and days you've been together will be shown.",
    },
    {
      icon: 'bi bi-app',
      title: 'Widgets',
      description:
        'Various widgets of the core features are available, like next anniversary and time together.',
    },
    {
      icon: 'bi bi-badge-ad',
      title: 'Ads',
      description: 'A ad banner is shown on the home screen.',
    },
    {
      icon: 'bi bi-cash-coin',
      title: 'In-App Purchases',
      description: 'The ads can be removed through an in-app purchase.',
    },
  ],
  onlineURL: 'https://apps.apple.com/app/bloom-couples-app/id1533246365',
  sourceURL: undefined,
  appIcon: {
    light: BloomAppIcons.light,
    dark: BloomAppIcons.dark,
  },
  previewImageMain: {
    id: 'preview-bloom-iphone',
    sourceLight: BloomPreviews.iphoneImageLight,
    sourceDark: BloomPreviews.iphoneImageDark,
  },
  previewImages: [
    {
      id: 'preview-bloom-iphoneSE',
      sourceLight: BloomPreviews.iphoneSEImageLight,
      sourceDark: BloomPreviews.iphoneSEImageDark,
      style: {
        width: '25%',
        height: 'auto',
        left: '9%',
        bottom: 0,
        zIndex: 3,
      },
    },
    {
      id: 'preview-bloom-iphone',
      sourceLight: BloomPreviews.iphoneImageLight,
      sourceDark: BloomPreviews.iphoneImageDark,
      style: {
        width: '30%',
        height: 'auto',
        left: '5%',
        bottom: 0,
        zIndex: 2,
      },
    },
    {
      id: 'preview-bloom-ipad',
      sourceLight: BloomPreviews.ipadImageLight,
      sourceDark: BloomPreviews.ipadImageDark,
      style: {
        width: '54%',
        height: 'auto',
        right: 0,
        bottom: 0,
        zIndex: 1,
      },
    },
  ],
  screenshots: [
    BloomScreenshots.Bloom1,
    BloomScreenshots.Bloom2,
    BloomScreenshots.Bloom3,
    BloomScreenshots.Bloom4,
    BloomScreenshots.Bloom5,
  ],
} as const
