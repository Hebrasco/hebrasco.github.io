import { BloomAppIcons } from 'assets/images/appIcons'
import { BloomPreviews } from 'assets/images/previews'
import { ScreenshotsDark, ScreenshotsLight } from 'assets/images/screenshots/bloom'
import { PROFILE } from 'data'
import { PLATFORM } from 'data/platform'
import { PROJECT_STATUS } from 'data/projectStatus'
import type { Project } from 'types'

export const BLOOM: Project = {
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
      description: 'On the how screen the remaining days of your next anniversary.',
      icon: 'bi bi-cake2',
      title: 'Anniversaries',
    },
    {
      description:
        "On the how screen the years, months and days you've been together will be shown.",
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
      description: 'A ad banner is shown on the home screen.',
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
  platforms: [PLATFORM.iPhone, PLATFORM.iPadOS],
  previewImage: {
    dark: {
      altText: 'Preview screenshot of Bloom in dark mode',
      src: ScreenshotsDark.SingleImageMarried,
    },
    light: {
      altText: 'Preview screenshot of Bloom in light mode',
      src: ScreenshotsLight.SingleImageMarried,
    },
  },
  screenshots: {
    dark: [
      {
        altText: 'Screenshot of app in dark mode with dual image option',
        src: ScreenshotsDark.DualImage,
      },
      {
        altText:
          'Screenshot of app in dark mode with single image option and relationship status couple',
        src: ScreenshotsDark.SingleImageCouple,
      },
      {
        altText:
          'Screenshot of app in dark mode with single image option and relationship status engaged',
        src: ScreenshotsDark.SingleImageEngaged,
      },
      {
        altText:
          'Screenshot of app in dark mode with single image option and relationship status married',
        src: ScreenshotsDark.SingleImageMarried,
      },
      {
        altText: 'Screenshot of app widgets in dark mode',
        src: ScreenshotsDark.Widgets,
      },
    ],
    light: [
      {
        altText: 'Screenshot of app in light mode with dual image option',
        src: ScreenshotsLight.DualImage,
      },
      {
        altText:
          'Screenshot of app in light mode with single image option and relationship status couple',
        src: ScreenshotsLight.SingleImageCouple,
      },
      {
        altText:
          'Screenshot of app in light mode with single image option and relationship status engaged',
        src: ScreenshotsLight.SingleImageEngaged,
      },
      {
        altText:
          'Screenshot of app in light mode with single image option and relationship status married',
        src: ScreenshotsLight.SingleImageMarried,
      },
      {
        altText: 'Screenshot of app widgets in light mode',
        src: ScreenshotsLight.Widgets,
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
    dark: {
      altText: 'Title image in dark mode',
      src: BloomPreviews.titleDark,
    },
    light: {
      altText: 'Title image in light mode',
      src: BloomPreviews.titleLight,
    },
  },
} as const
