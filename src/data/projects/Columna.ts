import { ColumnaAppIcons } from 'assets/images/appIcons'
import { ColumnaHeaders } from 'assets/images/headers'
import { ColumnaPreviews } from 'assets/images/previews'
import {
  ScreenshotsIpadDark,
  ScreenshotsIpadLight,
  ScreenshotsIphoneDark,
  ScreenshotsIphoneLight,
  ScreenshotsMacDark,
  ScreenshotsMacLight,
} from 'assets/images/screenshots/columna'
import { PLATFORM } from 'data/platform'
import * as PROFILE from 'data/profile'
import { PROJECT_STATUS } from 'data/projectStatus'
import type { Project } from 'types'

const COLUMNA: Project = {
  appIcon: {
    dark: ColumnaAppIcons.dark,
    light: ColumnaAppIcons.light,
  },
  description:
    'An issue tracker for personal and small team projects on iPhone, iPad and Mac. Every project has numbered issues with a priority, labels, an assignee, estimated and spent hours and a Markdown description. Issues move across a board with custom columns, and the closing column closes them on the way in. Releases collect the issues for a version with a target date and progress, and features group related work across releases. The overview shows open, closed and high priority issues and what is coming next. Projects sync through iCloud and can be shared with others, with read-only or edit access. On the Mac, the app uses a native window with menus, keyboard shortcuts and an inspector.',
  features: [
    {
      description:
        'Numbered issues with priority, labels, assignee, estimated and spent hours and a Markdown description.',
      icon: 'bi bi-check2-square',
      title: 'Issues',
    },
    {
      description:
        'A board with custom columns. Issues move by drag and drop, and the closing column closes them.',
      icon: 'bi bi-kanban',
      title: 'Board',
    },
    {
      description: 'A version with a target date that shows how many of its issues are closed.',
      icon: 'bi bi-box-seam',
      title: 'Releases',
    },
    {
      description: 'Related issues grouped by topic, across releases, with their own progress.',
      icon: 'bi bi-stars',
      title: 'Features',
    },
    {
      description: 'Colored labels with a description, for areas like design, bugs or performance.',
      icon: 'bi bi-tags',
      title: 'Labels',
    },
    {
      description:
        'Open, closed, high priority and unassigned issues at a glance, with upcoming releases and open features.',
      icon: 'bi bi-grid',
      title: 'Overview',
    },
    {
      description:
        'Search by title, description or issue number, filter by status, label, release, feature or assignee, and sort by priority, number or date.',
      icon: 'bi bi-search',
      title: 'Search and Filters',
    },
    {
      description:
        'Projects can be shared through iCloud. Members get read-only or edit access and can be assigned to issues.',
      icon: 'bi bi-people',
      title: 'Sharing',
    },
    {
      description: 'All projects and issues are synced with iCloud.',
      icon: 'bi bi-cloud',
      title: 'Cloud Sync',
    },
    {
      description:
        'A native Mac app with menus, keyboard shortcuts, multiple windows and an inspector.',
      icon: 'bi bi-laptop',
      title: 'Mac App',
    },
    {
      description: 'No collection of any kind of data.',
      icon: 'bi bi-lock',
      title: 'Privacy first',
    },
  ],
  frameworks: [
    PROFILE.frameworks.apple.swiftUI,
    PROFILE.frameworks.apple.coreData,
    PROFILE.frameworks.apple.cloudKit,
  ],
  headerImage: {
    altText:
      'Columna cards for labels, an issue board, issue details and releases floating over a Pompeian red background',
    image: ColumnaHeaders.header,
  },
  highlights: [
    {
      feature: 'Board',
      screenshot: {
        altText: 'Board with Todo, In Progress and Done columns',
        dark: ScreenshotsIphoneDark.Board,
        light: ScreenshotsIphoneLight.Board,
      },
    },
    {
      feature: 'Issues',
      screenshot: {
        altText: 'Issue details with description, priority, release, feature, assignee and labels',
        dark: ScreenshotsIphoneDark.IssueDetails,
        light: ScreenshotsIphoneLight.IssueDetails,
      },
    },
    {
      feature: 'Releases',
      screenshot: {
        altText: 'Release with target date, progress and its issues',
        dark: ScreenshotsIphoneDark.Release,
        light: ScreenshotsIphoneLight.Release,
      },
    },
  ],
  id: 'columna',
  languages: [PROFILE.languages.swift],
  metaDescription:
    'Columna is an issue tracker for iPhone, iPad and Mac with boards, releases, features, labels, time estimates and iCloud sharing.',
  name: 'Columna',
  platforms: [PLATFORM.iphone, PLATFORM.ipad, PLATFORM.mac],
  previewImage: {
    altText: 'Preview screenshot of Columna',
    dark: ColumnaPreviews.titleDark,
    light: ColumnaPreviews.titleLight,
  },
  screenshots: {
    ipad: [
      {
        altText: 'Screenshot of ipad app of the board screen',
        dark: ScreenshotsIpadDark.Board,
        light: ScreenshotsIpadLight.Board,
      },
      {
        altText: 'Screenshot of ipad app of the board with the issue inspector',
        dark: ScreenshotsIpadDark.IssueDetails,
        light: ScreenshotsIpadLight.IssueDetails,
      },
      {
        altText: 'Screenshot of ipad app of the issue table',
        dark: ScreenshotsIpadDark.Issues,
        light: ScreenshotsIpadLight.Issues,
      },
      {
        altText: 'Screenshot of ipad app of the project overview',
        dark: ScreenshotsIpadDark.Overview,
        light: ScreenshotsIpadLight.Overview,
      },
      {
        altText: 'Screenshot of ipad app of a release with its issues',
        dark: ScreenshotsIpadDark.Release,
        light: ScreenshotsIpadLight.Release,
      },
      {
        altText: 'Screenshot of ipad app of a feature with its issues',
        dark: ScreenshotsIpadDark.Feature,
        light: ScreenshotsIpadLight.Feature,
      },
      {
        altText: 'Screenshot of ipad app of the labels screen',
        dark: ScreenshotsIpadDark.Labels,
        light: ScreenshotsIpadLight.Labels,
      },
    ],
    iphone: [
      {
        altText: 'Screenshot of iphone app of the board screen',
        dark: ScreenshotsIphoneDark.Board,
        light: ScreenshotsIphoneLight.Board,
      },
      {
        altText: 'Screenshot of iphone app of the issue detail screen',
        dark: ScreenshotsIphoneDark.IssueDetails,
        light: ScreenshotsIphoneLight.IssueDetails,
      },
      {
        altText: 'Screenshot of iphone app of the issue list',
        dark: ScreenshotsIphoneDark.Issues,
        light: ScreenshotsIphoneLight.Issues,
      },
      {
        altText: 'Screenshot of iphone app of the project overview',
        dark: ScreenshotsIphoneDark.Overview,
        light: ScreenshotsIphoneLight.Overview,
      },
      {
        altText: 'Screenshot of iphone app of a release with its issues',
        dark: ScreenshotsIphoneDark.Release,
        light: ScreenshotsIphoneLight.Release,
      },
      {
        altText: 'Screenshot of iphone app of a feature with its issues',
        dark: ScreenshotsIphoneDark.Feature,
        light: ScreenshotsIphoneLight.Feature,
      },
      {
        altText: 'Screenshot of iphone app of the labels screen',
        dark: ScreenshotsIphoneDark.Labels,
        light: ScreenshotsIphoneLight.Labels,
      },
    ],
    mac: [
      {
        altText: 'Screenshot of mac app of the board screen',
        dark: ScreenshotsMacDark.Board,
        light: ScreenshotsMacLight.Board,
      },
      {
        altText: 'Screenshot of mac app of the board with the issue inspector',
        dark: ScreenshotsMacDark.IssueDetails,
        light: ScreenshotsMacLight.IssueDetails,
      },
      {
        altText: 'Screenshot of mac app of the issue table',
        dark: ScreenshotsMacDark.Issues,
        light: ScreenshotsMacLight.Issues,
      },
      {
        altText: 'Screenshot of mac app of the project overview',
        dark: ScreenshotsMacDark.Overview,
        light: ScreenshotsMacLight.Overview,
      },
      {
        altText: 'Screenshot of mac app of a release with its issues',
        dark: ScreenshotsMacDark.Release,
        light: ScreenshotsMacLight.Release,
      },
      {
        altText: 'Screenshot of mac app of a feature with its issues',
        dark: ScreenshotsMacDark.Feature,
        light: ScreenshotsMacLight.Feature,
      },
      {
        altText: 'Screenshot of mac app of the labels screen',
        dark: ScreenshotsMacDark.Labels,
        light: ScreenshotsMacLight.Labels,
      },
    ],
  },
  status: {
    type: PROJECT_STATUS.comingSoon,
  },
  summaryHeading: 'Your projects, structured.',
  tasks: [
    'Conception and development',
    'User interface development',
    'Persisting data with Core Data',
    'Synchronizing and sharing data with iCloud',
  ],
  theme: {
    accent: { dark: '#e06a5e', light: '#a42a2e' },
    accentText: { dark: '#ec7d71', light: '#9e282c' },
    background: { dark: '#261716', light: '#fdf7f7' },
    backgroundSecondary: { dark: '#2e1c1b', light: '#f7e9e8' },
    onAccent: { dark: '#1c0a08', light: '#ffffff' },
    text: { dark: '#f6eeed', light: '#2a1c1a' },
  },
  titleImage: {
    altText: 'Columna on iMac, iPad and iPhone',
    dark: ColumnaPreviews.titleDark,
    light: ColumnaPreviews.titleLight,
  },
} as const

export { COLUMNA }
