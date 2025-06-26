import { BloomAppIcons } from 'assets/images/appIcons'
import { BloomPreviews } from 'assets/images/previews'
import {
  ScreenshotsDark,
  ScreenshotsLight,
} from 'assets/images/screenshots/bloom'
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
  previewImage: {
    light: {
      src: BloomPreviews.previewLight,
      altText: 'Preview screenshot of Bloom in light mode',
    },
    dark: {
      src: BloomPreviews.previewDark,
      altText: 'Preview screenshot of Bloom in dark mode',
    },
  },
  titleImage: {
    light: {
      src: BloomPreviews.titleLight,
      altText: 'Title image in light mode',
    },
    dark: {
      src: BloomPreviews.titleDark,
      altText: 'Title image in dark mode',
    },
  },
  screenshots: {
    light: [
      {
        src: ScreenshotsLight.DualImage,
        altText: 'Screenshot of app in light mode with dual image option',
      },
      {
        src: ScreenshotsLight.SingleImageCouple,
        altText:
          'Screenshot of app in light mode with single image option and relationship status couple',
      },
      {
        src: ScreenshotsLight.SingleImageEngaged,
        altText:
          'Screenshot of app in light mode with single image option and relationship status engaged',
      },
      {
        src: ScreenshotsLight.SingleImageMarried,
        altText:
          'Screenshot of app in light mode with single image option and relationship status married',
      },
      {
        src: ScreenshotsLight.Widgets,
        altText: 'Screenshot of app widgets in light mode',
      },
    ],
    dark: [
      {
        src: ScreenshotsDark.DualImage,
        altText: 'Screenshot of app in dark mode with dual image option',
      },
      {
        src: ScreenshotsDark.SingleImageCouple,
        altText:
          'Screenshot of app in dark mode with single image option and relationship status couple',
      },
      {
        src: ScreenshotsDark.SingleImageEngaged,
        altText:
          'Screenshot of app in dark mode with single image option and relationship status engaged',
      },
      {
        src: ScreenshotsDark.SingleImageMarried,
        altText:
          'Screenshot of app in dark mode with single image option and relationship status married',
      },
      {
        src: ScreenshotsDark.Widgets,
        altText: 'Screenshot of app widgets in dark mode',
      },
    ],
  },
} as const
