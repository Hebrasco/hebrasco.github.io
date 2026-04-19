import { UmbrellaPreviews } from 'assets/images/previews'
import {
  ScreenshotsIpadDark,
  ScreenshotsIpadLight,
  ScreenshotsIphoneDark,
  ScreenshotsIphoneLight,
  ScreenshotsMacDark,
  ScreenshotsMacLight,
} from 'assets/images/screenshots/umbrella'
import { PROFILE, PROJECT_STATUS } from 'data'
import { PLATFORM } from 'data/platform'
import type { Project } from 'types'

const UMBRELLA: Project = {
  description:
    'This app is a task management tool. You can create and manage tasks of different projects. Tasks are managed in your self managed boards, sprints and milestones. A label, milestone, estimated and actual time, priority and more can be added to a task.',
  features: [
    {
      description:
        'Tasks can be managed in a backlog. A task has various settings and attributes that can be set.',
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
  platforms: [PLATFORM.iphone, PLATFORM.ipad, PLATFORM.mac],
  previewImage: {
      altText: 'Preview screenshot of Umbrella',
      light: ScreenshotsIphoneLight.Backlog,
      dark: ScreenshotsIphoneDark.Backlog,
  },
  screenshots: {
    ipad: [
        {
          altText: 'Screenshot of ipad app of the issue detail screen',
          light: ScreenshotsIpadLight.IssueDetails,
          dark: ScreenshotsIpadDark.IssueDetails,
        },
      ],
    iphone: [
        {
          altText: 'Screenshot of iphone app of the issue backlog screen',
          light: ScreenshotsIphoneLight.Backlog,
          dark: ScreenshotsIphoneDark.Backlog,
        },
        {
          altText: 'Screenshot of iphone app of the issue detail screen',
          light: ScreenshotsIphoneLight.IssueDetails,
          dark: ScreenshotsIphoneDark.IssueDetails,
        },
      ],
    mac: [
        {
          altText: 'Screenshot of mac app of the board screen',
          light: ScreenshotsMacLight.Board,
          dark: ScreenshotsMacDark.Board,
        },
        {
          altText: 'Screenshot of mac app of the issue detail screen',
          light: ScreenshotsMacLight.IssueDetails,
          dark: ScreenshotsMacDark.IssueDetails,
        },
      ],
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
      altText: 'Title image',
      light: UmbrellaPreviews.titleLight,
      dark: UmbrellaPreviews.titleDark,
  },
} as const

export { UMBRELLA }
