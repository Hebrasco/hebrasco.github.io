import { UmbrellaPreviews } from 'assets/images/previews'
import { PROFILE } from 'data'
import { PLATFORM } from 'data/platform'
import { PROJECT_STATUS } from 'data/projectStatus'
import { Project } from 'types'

export const UMBRELLA: Project = {
  id: 'umbrella',
  name: 'Umbrella',
  description:
    'This app is a task management tool. You can create and manage tasks of different projects. Tasks are managed in your self managed boards, sprints and milestones. A label, milestone, estimated and actual time, priority and more can be added to a task.',
  tasks: [
    'Conception and development',
    'User interface development',
    'Persisting data with Core Data',
    'Synchronizing data with iCloud',
  ],
  platforms: [PLATFORM.iPhone, PLATFORM.iPadOS, PLATFORM.macOS],
  languages: [PROFILE.languages.swift],
  frameworks: [
    PROFILE.frameworks.apple.swiftUI,
    PROFILE.frameworks.apple.coreData,
    PROFILE.frameworks.apple.cloudKit,
  ],
  status: {
    type: PROJECT_STATUS.comingSoon,
  },
  features: [
    {
      icon: 'bi bi-list-task',
      title: 'Tasks',
      description:
        'Tasks can managed in a backlog. A task has various settings and attributes that can be set.',
    },
    {
      icon: 'bi bi-kanban',
      title: 'Board',
      description:
        'A project has a board with columns where the assigned tasks are moved through different stages.',
    },
    {
      icon: 'bi bi-bar-chart-steps',
      title: 'Sprints',
      description: 'Sprints have their own boards and tasks.',
    },
    {
      icon: 'bi bi-signpost',
      title: 'Milestones',
      description:
        'Milestones contain tasks for a specific goal and make it easier to see progress on that goal.',
    },
    {
      icon: 'bi bi-cloud',
      title: 'Cloud Sync',
      description: 'All projects and tasks are synced with iCloud in realtime.',
    },
  ],
  onlineURL: undefined,
  sourceURL: undefined,
  previewImage: {
    light: {
      src: UmbrellaPreviews.previewLight,
      altText: 'Preview screenshot of Umbrella in light mode',
    },
    dark: {
      src: UmbrellaPreviews.previewDark,
      altText: 'Preview screenshot of Umbrella in dark mode',
    },
  },
  titleImage: {
    light: {
      src: UmbrellaPreviews.titleLight,
      altText: 'Title image in light mode',
    },
    dark: {
      src: UmbrellaPreviews.titleDark,
      altText: 'Title image in dark mode',
    },
  },
} as const
