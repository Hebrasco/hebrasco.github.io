import { BloomAppIcons } from 'assets/images/appIcons'
import { BloomPreviews } from 'assets/images/previews'
import {
  ScreenshotsIpadDark,
  ScreenshotsIpadLight,
  ScreenshotsIphoneDark,
  ScreenshotsIphoneLight,
} from 'assets/images/screenshots/bloom'
import { PROFILE, PROJECT_STATUS } from 'data'
import { PLATFORM } from 'data/platform'
import type { Project } from 'types'

const BLOOM: Project = {
  appIcon: {
    light: BloomAppIcons.light,
    dark: BloomAppIcons.dark,
  },
  description:
    'This app is for calculating the past time since a specific day. The app also offers widgets. Furthermore, notifications are sent at certain time periods. In addition, in-app purchases are implemented to remove advertisements.',
  features: [
    {
      description:
        'The user will get a notification when a specific anniversary was met, like 1, 3 and 6 months and every year.',
      icon: 'bi bi-bell',
      title: 'Notifications',
    },
    {
      description:
        'One or Two photos can be imported from the users photo library to be shown on the home screen.',
      icon: 'bi bi-person',
      title: 'Photos',
    },
    {
      description:
        'The special dates of a relationship can be set and are shown on the home screen. These are couple, engaged and married.',
      icon: 'bi bi-calendar-date',
      title: 'Important Dates',
    },
    {
      description: 'On the home screen the remaining days of your next anniversary.',
      icon: 'bi bi-cake2',
      title: 'Anniversaries',
    },
    {
      description:
        "On the home screen the years, months and days you've been together will be shown.",
      icon: 'bi bi-clock',
      title: 'Time',
    },
    {
      description:
        'Various widgets of the core features are available, like next anniversary and time together.',
      icon: 'bi bi-app',
      title: 'Widgets',
    },
    {
      description: 'An ad banner is shown on the home screen.',
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
    PROFILE.frameworks.apple.widgetKit,
    PROFILE.frameworks.apple.storeKit,
    PROFILE.frameworks.apple.notifications,
  ],
  id: 'bloom',
  languages: [PROFILE.languages.swift],
  name: 'Bloom - Couples App',
  onlineURL: 'https://apps.apple.com/app/bloom-couples-app/id1533246365',
  platforms: [PLATFORM.iphone, PLATFORM.ipad],
  previewImage: {
      altText: 'Preview screenshot of Bloom',
        light: ScreenshotsIphoneLight.SingleImageMarried,
        dark: ScreenshotsIphoneDark.SingleImageMarried,
  },
  screenshots: {
    ipad: [
        {
          altText: 'Screenshot of ipad app with dual image option',
            light: ScreenshotsIpadLight.DualImage,
            dark: ScreenshotsIpadDark.DualImage,
        },
        {
          altText:
            'Screenshot of ipad app with single image option and relationship status couple',
            light: ScreenshotsIpadLight.SingleImageCouple,
            dark: ScreenshotsIpadDark.SingleImageCouple,
        },
        {
          altText:
            'Screenshot of ipad app with single image option and relationship status engaged',
            light: ScreenshotsIpadLight.SingleImageEngaged,
            dark: ScreenshotsIpadDark.SingleImageEngaged,
        },
        {
          altText:
            'Screenshot of ipad app with single image option and relationship status married',
            light: ScreenshotsIpadLight.SingleImageMarried,
            dark: ScreenshotsIpadDark.SingleImageMarried,
        },
        {
          altText: 'Screenshot of ipad app widgets',
            light: ScreenshotsIpadLight.Widgets,
            dark: ScreenshotsIpadDark.Widgets,
        },
      ],
    iphone: [
        {
          altText: 'Screenshot of iphone app with dual image option',
            light: ScreenshotsIphoneLight.DualImage,
            dark: ScreenshotsIphoneDark.DualImage
        },
        {
          altText:
            'Screenshot of iphone app with single image option and relationship status couple',
            light: ScreenshotsIphoneLight.SingleImageCouple,
            dark: ScreenshotsIphoneDark.SingleImageCouple,
        },
        {
          altText:
            'Screenshot of iphone app with single image option and relationship status engaged',
            light: ScreenshotsIphoneLight.SingleImageEngaged,
            dark: ScreenshotsIphoneDark.SingleImageEngaged,
        },
        {
          altText:
            'Screenshot of iphone app with single image option and relationship status married',
            light: ScreenshotsIphoneLight.SingleImageMarried,
            dark: ScreenshotsIphoneDark.SingleImageMarried,
        },
        {
          altText: 'Screenshot of iphone app widgets',
            light: ScreenshotsIphoneLight.Widgets,
            dark: ScreenshotsIphoneDark.Widgets,
        },
      ],
  },
  sourceURL: undefined,
  status: {
    date: new Date('2020-09-26'),
    type: PROJECT_STATUS.launched,
  },
  tasks: [
    'Conception and development',
    'User interface development',
    'Implementation of in-app purchases',
    'Implementation of local notifications',
    'Implementation of widgets',
  ],
  titleImage: {
      altText: 'Title image',
        light: BloomPreviews.titleLight,
        dark: BloomPreviews.titleDark,
  },
} as const

export { BLOOM }
