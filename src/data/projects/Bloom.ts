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
    "Bloom is a quiet, private space for a couple. Both partners answer the same small question every day, then see what the other wrote. They keep their favourite photos as shared memories, send quick love notes, write a journal together, plan a shared bucket list, and count down to the dates that matter. Everything syncs privately through the couple's own iCloud account, with no feed and no audience. Home and Lock Screen widgets, relationship stats, ten colour themes, and a Premium subscription that covers both partners round it out.",
  features: [
    {
      description:
        "Each day brings one shared question. Both partners answer on their own, then see each other's response, building an archive of honest answers over time.",
      icon: 'bi bi-patch-question',
      title: 'Daily Questions',
    },
    {
      description:
        'Keep your favourite photos together in one place, and revisit a photo from this same day a year ago.',
      icon: 'bi bi-images',
      title: 'Shared Memories',
    },
    {
      description:
        "Send a note, an emoji or a quick 'thinking of you' with a single tap. Your partner receives it instantly.",
      icon: 'bi bi-envelope-heart',
      title: 'Love Notes',
    },
    {
      description:
        "Write in one journal together. Both partners' entries sit side by side in the same place.",
      icon: 'bi bi-journal-text',
      title: 'Shared Journal',
    },
    {
      description:
        "Add things you want to do together and check them off, building a record of everything you've done.",
      icon: 'bi bi-check2-square',
      title: 'Bucket List',
    },
    {
      description:
        'Count down to your anniversary, birthdays and every milestone that matters, always kept in view.',
      icon: 'bi bi-calendar-heart',
      title: 'Anniversary Countdown',
    },
    {
      description:
        'Put your countdown, couple photo and memories right on the Home Screen and Lock Screen.',
      icon: 'bi bi-grid-1x2',
      title: 'Widgets',
    },
    {
      description:
        'A single page that sums it all up: days together, questions answered and milestones reached.',
      icon: 'bi bi-graph-up',
      title: 'Relationship Stats',
    },
    {
      description: 'Ten warm colour themes to make the app your own.',
      icon: 'bi bi-palette',
      title: 'Themes',
    },
    {
      description:
        "Syncs through the couple's own iCloud account, so there is no extra sign-in, no email or password to remember, no feed and no audience.",
      icon: 'bi bi-cloud-check',
      title: 'Private by Design',
    },
    {
      description:
        'One subscription covers both partners, unlocking unlimited memories, the full question history, the journal, custom milestones, stats, all widgets and every theme.',
      icon: 'bi bi-gem',
      title: 'Premium',
    },
  ],
  frameworks: [
    PROFILE.frameworks.apple.swiftUI,
    PROFILE.frameworks.apple.widgetKit,
    PROFILE.frameworks.apple.cloudKit,
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
    dark: ScreenshotsIphoneDark.Screenshot01,
    light: ScreenshotsIphoneLight.Screenshot01,
  },
  screenshots: {
    ipad: [
      {
        altText: "Home screen showing the couple's relationship overview",
        dark: ScreenshotsIpadDark.Screenshot01,
        light: ScreenshotsIpadLight.Screenshot01,
      },
      {
        altText: "Home feed with the day's question",
        dark: ScreenshotsIpadDark.Screenshot02,
        light: ScreenshotsIpadLight.Screenshot02,
      },
      {
        altText: 'Daily question history',
        dark: ScreenshotsIpadDark.Screenshot03,
        light: ScreenshotsIpadLight.Screenshot03,
      },
      {
        altText: 'Love notes between partners',
        dark: ScreenshotsIpadDark.Screenshot04,
        light: ScreenshotsIpadLight.Screenshot04,
      },
      {
        altText: 'Shared memories gallery',
        dark: ScreenshotsIpadDark.Screenshot05,
        light: ScreenshotsIpadLight.Screenshot05,
      },
      {
        altText: 'A memory resurfaced from this day',
        dark: ScreenshotsIpadDark.Screenshot06,
        light: ScreenshotsIpadLight.Screenshot06,
      },
      {
        altText: 'Monthly recap',
        dark: ScreenshotsIpadDark.Screenshot07,
        light: ScreenshotsIpadLight.Screenshot07,
      },
      {
        altText: 'Dates and milestones',
        dark: ScreenshotsIpadDark.Screenshot08,
        light: ScreenshotsIpadLight.Screenshot08,
      },
      {
        altText: 'Shared journal',
        dark: ScreenshotsIpadDark.Screenshot09,
        light: ScreenshotsIpadLight.Screenshot09,
      },
      {
        altText: 'Relationship stats and bucket list',
        dark: ScreenshotsIpadDark.Screenshot10,
        light: ScreenshotsIpadLight.Screenshot10,
      },
      {
        altText: 'Settings',
        dark: ScreenshotsIpadDark.Screenshot11,
        light: ScreenshotsIpadLight.Screenshot11,
      },
      {
        altText: 'Colour themes',
        dark: ScreenshotsIpadDark.Screenshot12,
        light: ScreenshotsIpadLight.Screenshot12,
      },
      {
        altText: 'Widget gallery',
        dark: ScreenshotsIpadDark.Screenshot13,
        light: ScreenshotsIpadLight.Screenshot13,
      },
      {
        altText: 'Home Screen widgets',
        dark: ScreenshotsIpadDark.Widgets,
        light: ScreenshotsIpadLight.Widgets,
      },
    ],
    iphone: [
      {
        altText: "Home screen showing the couple's relationship overview",
        dark: ScreenshotsIphoneDark.Screenshot01,
        light: ScreenshotsIphoneLight.Screenshot01,
      },
      {
        altText: 'Daily question history',
        dark: ScreenshotsIphoneDark.Screenshot02,
        light: ScreenshotsIphoneLight.Screenshot02,
      },
      {
        altText: "Home feed with the day's question and a love note",
        dark: ScreenshotsIphoneDark.Screenshot03,
        light: ScreenshotsIphoneLight.Screenshot03,
      },
      {
        altText: 'Love notes between partners',
        dark: ScreenshotsIphoneDark.Screenshot04,
        light: ScreenshotsIphoneLight.Screenshot04,
      },
      {
        altText: 'Shared memories gallery',
        dark: ScreenshotsIphoneDark.Screenshot05,
        light: ScreenshotsIphoneLight.Screenshot05,
      },
      {
        altText: 'A memory resurfaced from this day',
        dark: ScreenshotsIphoneDark.Screenshot06,
        light: ScreenshotsIphoneLight.Screenshot06,
      },
      {
        altText: 'Monthly recap',
        dark: ScreenshotsIphoneDark.Screenshot07,
        light: ScreenshotsIphoneLight.Screenshot07,
      },
      {
        altText: 'Dates and milestones',
        dark: ScreenshotsIphoneDark.Screenshot08,
        light: ScreenshotsIphoneLight.Screenshot08,
      },
      {
        altText: 'Shared bucket list',
        dark: ScreenshotsIphoneDark.Screenshot09,
        light: ScreenshotsIphoneLight.Screenshot09,
      },
      {
        altText: 'Shared journal',
        dark: ScreenshotsIphoneDark.Screenshot10,
        light: ScreenshotsIphoneLight.Screenshot10,
      },
      {
        altText: 'Relationship stats',
        dark: ScreenshotsIphoneDark.Screenshot11,
        light: ScreenshotsIphoneLight.Screenshot11,
      },
      {
        altText: 'Settings',
        dark: ScreenshotsIphoneDark.Screenshot12,
        light: ScreenshotsIphoneLight.Screenshot12,
      },
      {
        altText: 'Settings, appearance and partner',
        dark: ScreenshotsIphoneDark.Screenshot13,
        light: ScreenshotsIphoneLight.Screenshot13,
      },
      {
        altText: 'Colour themes',
        dark: ScreenshotsIphoneDark.Screenshot14,
        light: ScreenshotsIphoneLight.Screenshot14,
      },
      {
        altText: 'Widget gallery',
        dark: ScreenshotsIphoneDark.Screenshot15,
        light: ScreenshotsIphoneLight.Screenshot15,
      },
      {
        altText: 'Home Screen widgets',
        dark: ScreenshotsIphoneDark.Widgets,
        light: ScreenshotsIphoneLight.Widgets,
      },
    ],
  },
  status: {
    date: new Date('2020-09-26'),
    type: PROJECT_STATUS.launched,
  },
  summaryHeading: 'A quiet little space for two.',
  tasks: [
    'Conception, design and development',
    'SwiftUI user interface and design system',
    'CloudKit-based private partner sync',
    'Home and Lock Screen widgets',
    'StoreKit subscription (Premium)',
    'Local notifications',
    'Localization into 19 languages',
  ],
  titleImage: {
    altText: 'Preview collection of screenshots',
    dark: BloomPreviews.titleDark,
    light: BloomPreviews.titleLight,
  },
} as const

export { BLOOM }
