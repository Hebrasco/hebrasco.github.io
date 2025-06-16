import { UmbrellaPreviews } from 'assets/images/previews'
import { PROFILE } from 'data'
import { Project } from 'types'

export const UMBRELLA: Project = {
  id: 'umbrella',
  name: 'Umbrella',
  description:
    'This app is an task management tool. You can create and manage tasks of different projects. Tasks are managed in your self managed boards, sprints and milestones. A label, due date, milestone, estimated and actual time, priority and more can be added to a task.',
  tasks: [
    'Conception and development',
    'User interface development',
    'Persisting data with Core Data',
    'Synchronizing data with iCloud',
  ],
  languages: [PROFILE.languages.swift],
  frameworks: [
    PROFILE.frameworks.apple.macOS,
    PROFILE.frameworks.apple.ios,
    PROFILE.frameworks.apple.swiftUI,
    PROFILE.frameworks.apple.coreData,
    PROFILE.frameworks.apple.cloudKit,
  ],
  onlineURL: undefined,
  sourceURL: undefined,
  previewImageMain: {
    id: 'preview-umbrella-iphone',
    sourceLight: UmbrellaPreviews.iphoneImageDark,
    sourceDark: UmbrellaPreviews.iphoneImageLight,
  },
  previewImages: [
    {
      id: 'preview-umbrella-iphone',
      sourceLight: UmbrellaPreviews.iphoneImageDark,
      sourceDark: UmbrellaPreviews.iphoneImageLight,
      style: {
        width: '20%',
        height: 'auto',
        left: '43%',
        bottom: 0,
        zIndex: 3,
      },
    },
    {
      id: 'preview-umbrella-macbook',
      sourceLight: UmbrellaPreviews.macbookImageLight,
      sourceDark: UmbrellaPreviews.macbookImageDark,
      style: {
        width: '83%',
        height: 'auto',
        left: '27%',
        bottom: 0,
        zIndex: 2,
      },
    },
    {
      id: 'preview-umbrella-ipad',
      sourceLight: UmbrellaPreviews.ipadImageLight,
      sourceDark: UmbrellaPreviews.ipadImageDark,
      style: {
        width: '40%',
        height: 'auto',
        right: 0,
        bottom: '1px',
        zIndex: 1,
      },
    },
  ],
  isComingSoon: true,
  previewColors: {
    backgroundGradient: {
      start: '#6495ED',
      end: '#4169E1',
    },
    title: '#FFFFFF',
    subtitle: '#fafafc',
    actions: {
      foreground: '#000000',
      background: '#FFFFFF',
    },
  },
} as const
