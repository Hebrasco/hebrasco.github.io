import { UmbrellaPreviews } from 'assets/images/previews'
import {
  ScreenshotsIpadDark,
  ScreenshotsIpadLight,
  ScreenshotsIphoneDark,
  ScreenshotsIphoneLight,
  ScreenshotsMacDark,
  ScreenshotsMacLight,
} from 'assets/images/screenshots/umbrella'
import { PROFILE } from 'data'
import { PLATFORM } from 'data/platform'
import { PROJECT_STATUS } from 'data/projectStatus'
import type { Project } from 'types'

export const UMBRELLA: Project = {
  description:
    'This app is a task management tool. You can create and manage tasks of different projects. Tasks are managed in your self managed boards, sprints and milestones. A label, milestone, estimated and actual time, priority and more can be added to a task.',
  features: [
    {
      description:
        'Tasks can managed in a backlog. A task has various settings and attributes that can be set.',
      icon: 'bi bi-list-task',
      title: 'Tasks',
    },
    {
      description:
        'A project has a board with columns where the assigned tasks are moved through different stages.',
      icon: 'bi bi-kanban',
      title: 'Board',
    },
    {
      description: 'Sprints have their own boards and tasks.',
      icon: 'bi bi-bar-chart-steps',
      title: 'Sprints',
    },
    {
      description:
        'Milestones contain tasks for a specific goal and make it easier to see progress on that goal.',
      icon: 'bi bi-signpost',
      title: 'Milestones',
    },
    {
      description: 'All projects and tasks are synced with iCloud in realtime.',
      icon: 'bi bi-cloud',
      title: 'Cloud Sync',
    },
  ],
  frameworks: [
    PROFILE.frameworks.apple.swiftUI,
    PROFILE.frameworks.apple.coreData,
    PROFILE.frameworks.apple.cloudKit,
  ],
  id: 'umbrella',
  languages: [PROFILE.languages.swift],
  name: 'Umbrella',
  onlineURL: undefined,
  platforms: [PLATFORM.iPhone, PLATFORM.iPadOS, PLATFORM.macOS],
  previewImage: {
    dark: {
      altText: 'Preview screenshot of Umbrella in dark mode',
      src: ScreenshotsIphoneDark.Backlog,
    },
    light: {
      altText: 'Preview screenshot of Umbrella in light mode',
      src: ScreenshotsIphoneLight.Backlog,
    },
  },
  screenshots: {
    ipad: {
      dark: [
        {
          altText: 'Screenshot of ipad app in dark mode of the issue detail screen',
          src: ScreenshotsIpadDark.IssueDetails,
        },
      ],
      light: [
        {
          altText: 'Screenshot of ipad app in light mode of the issue detail screen',
          src: ScreenshotsIpadLight.IssueDetails,
        },
      ],
    },
    iphone: {
      dark: [
        {
          altText: 'Screenshot of iphone app in dark mode of the issue backlog screen',
          src: ScreenshotsIphoneDark.Backlog,
        },
        {
          altText: 'Screenshot of iphone app in dark mode of the issue detail screen',
          src: ScreenshotsIphoneDark.IssueDetails,
        },
      ],
      light: [
        {
          altText: 'Screenshot of iphone app in light mode of the issue backlog screen',
          src: ScreenshotsIphoneLight.Backlog,
        },
        {
          altText: 'Screenshot of iphone app in light mode of the issue detail screen',
          src: ScreenshotsIphoneLight.IssueDetails,
        },
      ],
    },
    mac: {
      dark: [
        {
          altText: 'Screenshot of iphone app in dark mode of the board screen',
          src: ScreenshotsMacDark.Board,
        },
        {
          altText: 'Screenshot of iphone app in dark mode of the issue detail screen',
          src: ScreenshotsMacDark.IssueDetails,
        },
      ],
      light: [
        {
          altText: 'Screenshot of iphone app in light mode of the board screen',
          src: ScreenshotsMacLight.Board,
        },
        {
          altText: 'Screenshot of iphone app in light mode of the issue detail screen',
          src: ScreenshotsMacLight.IssueDetails,
        },
      ],
    },
  },
  sourceURL: undefined,
  status: {
    type: PROJECT_STATUS.comingSoon,
  },
  tasks: [
    'Conception and development',
    'User interface development',
    'Persisting data with Core Data',
    'Synchronizing data with iCloud',
  ],
  titleImage: {
    dark: {
      altText: 'Title image in dark mode',
      src: UmbrellaPreviews.titleDark,
    },
    light: {
      altText: 'Title image in light mode',
      src: UmbrellaPreviews.titleLight,
    },
  },
} as const
