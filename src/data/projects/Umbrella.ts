import { UmbrellaPreviews } from 'assets/images/previews'
import {
  ScreenshotsIpadDark,
  ScreenshotsIpadLight,
  ScreenshotsIphoneDark,
  ScreenshotsIphoneLight,
  ScreenshotsMacDark,
  ScreenshotsMacLight,
} from 'assets/images/screenshots/umbrella'
import { PLATFORM } from 'data/platform'
import * as PROFILE from 'data/profile'
import { PROJECT_STATUS } from 'data/projectStatus'
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
  highlights: [
    {
      feature: 'Tasks',
      screenshot: {
        altText: 'Task details with priority, labels and time tracking',
        dark: ScreenshotsIphoneDark.IssueDetails,
        light: ScreenshotsIphoneLight.IssueDetails,
      },
    },
  ],
  id: 'umbrella',
  languages: [PROFILE.languages.swift],
  metaDescription:
    'Umbrella is a task management app for iPhone, iPad and Mac with boards, sprints, milestones, labels, priorities and time tracking.',
  name: 'Umbrella',
  platforms: [PLATFORM.iphone, PLATFORM.ipad, PLATFORM.mac],
  previewImage: {
    altText: 'Preview screenshot of Umbrella',
    dark: ScreenshotsIphoneDark.Backlog,
    light: ScreenshotsIphoneLight.Backlog,
  },
  screenshots: {
    ipad: [
      {
        altText: 'Screenshot of ipad app of the issue detail screen',
        dark: ScreenshotsIpadDark.IssueDetails,
        light: ScreenshotsIpadLight.IssueDetails,
      },
    ],
    iphone: [
      {
        altText: 'Screenshot of iphone app of the issue backlog screen',
        dark: ScreenshotsIphoneDark.Backlog,
        light: ScreenshotsIphoneLight.Backlog,
      },
      {
        altText: 'Screenshot of iphone app of the issue detail screen',
        dark: ScreenshotsIphoneDark.IssueDetails,
        light: ScreenshotsIphoneLight.IssueDetails,
      },
    ],
    mac: [
      {
        altText: 'Screenshot of mac app of the board screen',
        dark: ScreenshotsMacDark.Board,
        light: ScreenshotsMacLight.Board,
      },
      {
        altText: 'Screenshot of mac app of the issue detail screen',
        dark: ScreenshotsMacDark.IssueDetails,
        light: ScreenshotsMacLight.IssueDetails,
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
    'Synchronizing data with iCloud',
  ],
  theme: {
    accent: { dark: '#838afb', light: '#5856d6' },
    accentText: { dark: '#919afb', light: '#5856d6' },
    background: { dark: '#1b1d2d', light: '#f9faff' },
    backgroundSecondary: { dark: '#1e2032', light: '#ecefff' },
    onAccent: { dark: '#0f101f', light: '#ffffff' },
    text: { dark: '#f0f1f9', light: '#1f212b' },
  },
  titleImage: {
    altText: 'Preview collection of screenshots',
    dark: UmbrellaPreviews.titleDark,
    light: UmbrellaPreviews.titleLight,
  },
} as const

export { UMBRELLA }
