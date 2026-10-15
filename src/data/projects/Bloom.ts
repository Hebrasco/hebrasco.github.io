import { BloomAppIcons } from 'assets/images/appIcons'
import { BloomHeaders } from 'assets/images/headers'
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
    "Bloom is a quiet, private space for a couple. Both partners answer the same small question every day, then see what the other wrote. They keep their favourite photos as shared memories, see every place they've been together on a map, send quick love notes, write a journal together, plan a shared bucket list, and count down to the dates that matter. Everything syncs privately through the couple's own iCloud account, with no feed and no audience. Home and Lock Screen widgets, a monthly recap, relationship stats, nineteen colour themes, and a Premium subscription that covers both partners round it out.",
  features: [
    {
      description: 'One shared question a day. Both answer, then see what the other wrote.',
      icon: 'bi bi-patch-question',
      title: 'Daily Questions',
    },
    {
      description: 'Keep your favourite photos together and see what you did a year ago today.',
      icon: 'bi bi-images',
      title: 'Shared Memories',
    },
    {
      description: "Every place you've been together on one map, taken from your photos.",
      icon: 'bi bi-geo-alt',
      title: 'Places',
    },
    {
      description: "A look back at each month's photos, places and milestones.",
      icon: 'bi bi-calendar3',
      title: 'Monthly Recap',
    },
    {
      description: "Send a note, an emoji or a quick 'thinking of you' with a single tap.",
      icon: 'bi bi-envelope-heart',
      title: 'Love Notes',
    },
    {
      description: 'One journal for both of you, with your entries side by side.',
      icon: 'bi bi-journal-text',
      title: 'Shared Journal',
    },
    {
      description: 'Collect things to do together and check them off.',
      icon: 'bi bi-check2-square',
      title: 'Bucket List',
    },
    {
      description: 'Count down to anniversaries, birthdays and every milestone that matters.',
      icon: 'bi bi-calendar-heart',
      title: 'Anniversary Countdown',
    },
    {
      description: 'Your countdown, couple photo and memories on the Home and Lock Screen.',
      icon: 'bi bi-grid-1x2',
      title: 'Widgets',
    },
    {
      description:
        'Reminders for the daily question and your dates, and a ping for every love note.',
      icon: 'bi bi-bell',
      title: 'Notifications',
    },
    {
      description: 'Days together, questions answered, places visited and milestones reached.',
      icon: 'bi bi-graph-up',
      title: 'Relationship Stats',
    },
    {
      description: 'Nineteen colour themes to make the app your own.',
      icon: 'bi bi-palette',
      title: 'Themes',
    },
    {
      description: 'Syncs through your own iCloud account. No sign-in, no feed, no audience.',
      icon: 'bi bi-cloud-check',
      title: 'Private by Design',
    },
    {
      description: 'One subscription covers both partners and unlocks everything.',
      icon: 'bi bi-gem',
      title: 'Premium',
    },
  ],
  frameworks: [
    PROFILE.frameworks.apple.swiftUI,
    PROFILE.frameworks.apple.widgetKit,
    PROFILE.frameworks.apple.cloudKit,
    PROFILE.frameworks.apple.storeKit,
    PROFILE.frameworks.apple.mapKit,
    PROFILE.frameworks.apple.notifications,
  ],
  headerImage: {
    altText:
      'Bloom cards for anniversaries, bucket list and journal floating over a deep red background',
    image: BloomHeaders.header,
  },
  highlights: [
    {
      feature: 'Daily Questions',
      screenshot: {
        altText: "Home feed with the day's question",
        dark: ScreenshotsIphoneDark.Screenshot02,
        light: ScreenshotsIphoneLight.Screenshot02,
      },
    },
    {
      feature: 'Love Notes',
      screenshot: {
        altText: 'Writing a love note',
        dark: ScreenshotsIphoneDark.Screenshot05,
        light: ScreenshotsIphoneLight.Screenshot05,
      },
    },
    {
      feature: 'Shared Memories',
      screenshot: {
        altText: 'Shared memories gallery',
        dark: ScreenshotsIphoneDark.Screenshot06,
        light: ScreenshotsIphoneLight.Screenshot06,
      },
    },
  ],
  id: 'bloom',
  languages: [PROFILE.languages.swift],
  metaDescription:
    'Bloom is a private couples app for iPhone and iPad: answer a daily question together, share memories and a map of your places, love notes, a journal and a bucket list.',
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
        altText: 'Writing a love note',
        dark: ScreenshotsIpadDark.Screenshot05,
        light: ScreenshotsIpadLight.Screenshot05,
      },
      {
        altText: 'Shared memories gallery',
        dark: ScreenshotsIpadDark.Screenshot06,
        light: ScreenshotsIpadLight.Screenshot06,
      },
      {
        altText: 'A memory resurfaced from this day',
        dark: ScreenshotsIpadDark.Screenshot07,
        light: ScreenshotsIpadLight.Screenshot07,
      },
      {
        altText: 'Monthly recap',
        dark: ScreenshotsIpadDark.Screenshot08,
        light: ScreenshotsIpadLight.Screenshot08,
      },
      {
        altText: 'Memory detail',
        dark: ScreenshotsIpadDark.Screenshot09,
        light: ScreenshotsIpadLight.Screenshot09,
      },
      {
        altText: 'Where a memory was taken, on the map',
        dark: ScreenshotsIpadDark.Screenshot10,
        light: ScreenshotsIpadLight.Screenshot10,
      },
      {
        altText: 'Dates and milestones',
        dark: ScreenshotsIpadDark.Screenshot11,
        light: ScreenshotsIpadLight.Screenshot11,
      },
      {
        altText: 'Adding a custom date',
        dark: ScreenshotsIpadDark.Screenshot12,
        light: ScreenshotsIpadLight.Screenshot12,
      },
      {
        altText: 'Shared bucket list',
        dark: ScreenshotsIpadDark.Screenshot13,
        light: ScreenshotsIpadLight.Screenshot13,
      },
      {
        altText: 'Relationship stats',
        dark: ScreenshotsIpadDark.Screenshot14,
        light: ScreenshotsIpadLight.Screenshot14,
      },
      {
        altText: 'Shared journal',
        dark: ScreenshotsIpadDark.Screenshot15,
        light: ScreenshotsIpadLight.Screenshot15,
      },
      {
        altText: 'A journal entry',
        dark: ScreenshotsIpadDark.Screenshot16,
        light: ScreenshotsIpadLight.Screenshot16,
      },
      {
        altText: 'Places you have visited together',
        dark: ScreenshotsIpadDark.Screenshot17,
        light: ScreenshotsIpadLight.Screenshot17,
      },
      {
        altText: 'Colour themes',
        dark: ScreenshotsIpadDark.Screenshot18,
        light: ScreenshotsIpadLight.Screenshot18,
      },
      {
        altText: 'Widget gallery',
        dark: ScreenshotsIpadDark.Screenshot19,
        light: ScreenshotsIpadLight.Screenshot19,
      },
      {
        altText: 'Settings',
        dark: ScreenshotsIpadDark.Screenshot20,
        light: ScreenshotsIpadLight.Screenshot20,
      },
      {
        altText: 'Home screen in the free version',
        dark: ScreenshotsIpadDark.Screenshot21,
        light: ScreenshotsIpadLight.Screenshot21,
      },
      {
        altText: 'Bloom Premium',
        dark: ScreenshotsIpadDark.Screenshot22,
        light: ScreenshotsIpadLight.Screenshot22,
      },
      {
        altText: "What's new in Bloom",
        dark: ScreenshotsIpadDark.Screenshot23,
        light: ScreenshotsIpadLight.Screenshot23,
      },
      {
        altText: 'Onboarding: when your story began',
        dark: ScreenshotsIpadDark.Screenshot24,
        light: ScreenshotsIpadLight.Screenshot24,
      },
      {
        altText: 'Onboarding: naming yourselves',
        dark: ScreenshotsIpadDark.Screenshot25,
        light: ScreenshotsIpadLight.Screenshot25,
      },
      {
        altText: 'Onboarding: inviting your partner',
        dark: ScreenshotsIpadDark.Screenshot26,
        light: ScreenshotsIpadLight.Screenshot26,
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
        altText: "Home feed with the day's question",
        dark: ScreenshotsIphoneDark.Screenshot02,
        light: ScreenshotsIphoneLight.Screenshot02,
      },
      {
        altText: 'Daily question history',
        dark: ScreenshotsIphoneDark.Screenshot03,
        light: ScreenshotsIphoneLight.Screenshot03,
      },
      {
        altText: 'Love notes between partners',
        dark: ScreenshotsIphoneDark.Screenshot04,
        light: ScreenshotsIphoneLight.Screenshot04,
      },
      {
        altText: 'Writing a love note',
        dark: ScreenshotsIphoneDark.Screenshot05,
        light: ScreenshotsIphoneLight.Screenshot05,
      },
      {
        altText: 'Shared memories gallery',
        dark: ScreenshotsIphoneDark.Screenshot06,
        light: ScreenshotsIphoneLight.Screenshot06,
      },
      {
        altText: 'A memory resurfaced from this day',
        dark: ScreenshotsIphoneDark.Screenshot07,
        light: ScreenshotsIphoneLight.Screenshot07,
      },
      {
        altText: 'Monthly recap',
        dark: ScreenshotsIphoneDark.Screenshot08,
        light: ScreenshotsIphoneLight.Screenshot08,
      },
      {
        altText: 'Memory detail',
        dark: ScreenshotsIphoneDark.Screenshot09,
        light: ScreenshotsIphoneLight.Screenshot09,
      },
      {
        altText: 'Where a memory was taken, on the map',
        dark: ScreenshotsIphoneDark.Screenshot10,
        light: ScreenshotsIphoneLight.Screenshot10,
      },
      {
        altText: 'Dates and milestones',
        dark: ScreenshotsIphoneDark.Screenshot11,
        light: ScreenshotsIphoneLight.Screenshot11,
      },
      {
        altText: 'Adding a custom date',
        dark: ScreenshotsIphoneDark.Screenshot12,
        light: ScreenshotsIphoneLight.Screenshot12,
      },
      {
        altText: 'Shared bucket list',
        dark: ScreenshotsIphoneDark.Screenshot13,
        light: ScreenshotsIphoneLight.Screenshot13,
      },
      {
        altText: 'Relationship stats',
        dark: ScreenshotsIphoneDark.Screenshot14,
        light: ScreenshotsIphoneLight.Screenshot14,
      },
      {
        altText: 'Shared journal',
        dark: ScreenshotsIphoneDark.Screenshot15,
        light: ScreenshotsIphoneLight.Screenshot15,
      },
      {
        altText: 'A journal entry',
        dark: ScreenshotsIphoneDark.Screenshot16,
        light: ScreenshotsIphoneLight.Screenshot16,
      },
      {
        altText: 'Places you have visited together',
        dark: ScreenshotsIphoneDark.Screenshot17,
        light: ScreenshotsIphoneLight.Screenshot17,
      },
      {
        altText: 'Colour themes',
        dark: ScreenshotsIphoneDark.Screenshot18,
        light: ScreenshotsIphoneLight.Screenshot18,
      },
      {
        altText: 'Widget gallery',
        dark: ScreenshotsIphoneDark.Screenshot19,
        light: ScreenshotsIphoneLight.Screenshot19,
      },
      {
        altText: 'Settings',
        dark: ScreenshotsIphoneDark.Screenshot20,
        light: ScreenshotsIphoneLight.Screenshot20,
      },
      {
        altText: 'Home screen in the free version',
        dark: ScreenshotsIphoneDark.Screenshot21,
        light: ScreenshotsIphoneLight.Screenshot21,
      },
      {
        altText: 'Bloom Premium',
        dark: ScreenshotsIphoneDark.Screenshot22,
        light: ScreenshotsIphoneLight.Screenshot22,
      },
      {
        altText: "What's new in Bloom",
        dark: ScreenshotsIphoneDark.Screenshot23,
        light: ScreenshotsIphoneLight.Screenshot23,
      },
      {
        altText: 'Onboarding: when your story began',
        dark: ScreenshotsIphoneDark.Screenshot24,
        light: ScreenshotsIphoneLight.Screenshot24,
      },
      {
        altText: 'Onboarding: naming yourselves',
        dark: ScreenshotsIphoneDark.Screenshot25,
        light: ScreenshotsIphoneLight.Screenshot25,
      },
      {
        altText: 'Onboarding: inviting your partner',
        dark: ScreenshotsIphoneDark.Screenshot26,
        light: ScreenshotsIphoneLight.Screenshot26,
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
  theme: {
    accent: { dark: '#c44040', light: '#8b1a1a' },
    accentText: { dark: '#e58a80', light: '#8b1a1a' },
    background: { dark: '#251a13', light: '#f7f1e6' },
    backgroundSecondary: { dark: '#2a1e16', light: '#efe4d2' },
    onAccent: { dark: '#ffffff', light: '#fdfaf5' },
    text: { dark: '#ede5d8', light: '#221c16' },
    textSecondaryAlpha: { dark: '62%', light: '68%' },
  },
  titleImage: {
    altText: 'Preview collection of screenshots',
    dark: BloomPreviews.titleDark,
    light: BloomPreviews.titleLight,
  },
} as const

export { BLOOM }
