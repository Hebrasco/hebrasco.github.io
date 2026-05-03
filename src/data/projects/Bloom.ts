import { BloomAppIcons } from 'assets/images/appIcons'
import { BloomPreviews } from 'assets/images/previews'
import {
  ScreenshotsIpadDark,
  ScreenshotsIpadLight,
  ScreenshotsIphoneDark,
  ScreenshotsIphoneLight,
} from 'assets/images/screenshots/bloom'
import { PLATFORM } from 'data/platform'
import * as PROFILE from 'data/profile'
import { PROJECT_STATUS } from 'data/projectStatus'
import type { Project } from 'types'

const BLOOM: Project = {
  appIcon: {
    dark: BloomAppIcons.dark,
    light: BloomAppIcons.light,
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
    dark: ScreenshotsIphoneDark.SingleImageMarried,
    light: ScreenshotsIphoneLight.SingleImageMarried,
  },
  screenshots: {
    ipad: [
      {
        altText: 'Screenshot of ipad app with dual image option',
        dark: ScreenshotsIpadDark.DualImage,
        light: ScreenshotsIpadLight.DualImage,
      },
      {
        altText: 'Screenshot of ipad app with single image option and relationship status couple',
        dark: ScreenshotsIpadDark.SingleImageCouple,
        light: ScreenshotsIpadLight.SingleImageCouple,
      },
      {
        altText: 'Screenshot of ipad app with single image option and relationship status engaged',
        dark: ScreenshotsIpadDark.SingleImageEngaged,
        light: ScreenshotsIpadLight.SingleImageEngaged,
      },
      {
        altText: 'Screenshot of ipad app with single image option and relationship status married',
        dark: ScreenshotsIpadDark.SingleImageMarried,
        light: ScreenshotsIpadLight.SingleImageMarried,
      },
      {
        altText: 'Screenshot of ipad app widgets',
        dark: ScreenshotsIpadDark.Widgets,
        light: ScreenshotsIpadLight.Widgets,
      },
    ],
    iphone: [
      {
        altText: 'Screenshot of iphone app with dual image option',
        dark: ScreenshotsIphoneDark.DualImage,
        light: ScreenshotsIphoneLight.DualImage,
      },
      {
        altText: 'Screenshot of iphone app with single image option and relationship status couple',
        dark: ScreenshotsIphoneDark.SingleImageCouple,
        light: ScreenshotsIphoneLight.SingleImageCouple,
      },
      {
        altText:
          'Screenshot of iphone app with single image option and relationship status engaged',
        dark: ScreenshotsIphoneDark.SingleImageEngaged,
        light: ScreenshotsIphoneLight.SingleImageEngaged,
      },
      {
        altText:
          'Screenshot of iphone app with single image option and relationship status married',
        dark: ScreenshotsIphoneDark.SingleImageMarried,
        light: ScreenshotsIphoneLight.SingleImageMarried,
      },
      {
        altText: 'Screenshot of iphone app widgets',
        dark: ScreenshotsIphoneDark.Widgets,
        light: ScreenshotsIphoneLight.Widgets,
      },
    ],
  },
  status: {
    date: new Date('2020-09-26'),
    type: PROJECT_STATUS.launched,
  },
  summaryHeading: 'Count every moment together.',
  tasks: [
    'Conception and development',
    'User interface development',
    'Implementation of in-app purchases',
    'Implementation of local notifications',
    'Implementation of widgets',
  ],
  titleImage: {
    altText: 'Preview collection of screenshots',
    dark: BloomPreviews.titleDark,
    light: BloomPreviews.titleLight,
  },
} as const

export { BLOOM }
