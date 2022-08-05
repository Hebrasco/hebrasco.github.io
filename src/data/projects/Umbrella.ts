import { LANGUAGES } from 'data/profile/languages'
import { FRAMEWORKS } from 'data/profile/frameworks'
import { UmbrellaPreviews } from 'assets/images/previews'
import Project from 'types/Project'

const Umbrella: Project = {
  name: 'Umbrella',
  description:
    'This app is an task management tool. You can create and manage tasks of different projects. Tasks are managed in your self managed boards, sprints and milestones. A label, due date, milestone, estimated and actual time, priority and more can be added to a task.',
  tasks: [
    'Conception and development',
    'User interface development',
    'Persisting data with Core Data',
    'Synchronizing data with iCloud',
  ],
  languages: [LANGUAGES.swift],
  frameworks: [
    FRAMEWORKS.apple.macOS,
    FRAMEWORKS.apple.ios,
    FRAMEWORKS.apple.swiftUI,
    FRAMEWORKS.apple.coreData,
    FRAMEWORKS.apple.cloudKit,
  ],
  onlineURL: undefined,
  sourceURL: undefined,
  previewImages: [
    {
      id: 'preview-umbrella-iphone',
      sourceLight: UmbrellaPreviews.iphoneImageDark,
      sourceDark: UmbrellaPreviews.iphoneImageLight,
    },
    {
      id: 'preview-umbrella-macbook',
      sourceLight: UmbrellaPreviews.macbookImageLight,
      sourceDark: UmbrellaPreviews.macbookImageDark,
    },
    {
      id: 'preview-umbrella-ipad',
      sourceLight: UmbrellaPreviews.ipadImageLight,
      sourceDark: UmbrellaPreviews.ipadImageDark,
    },
  ],
  isComingSoon: true,
} as const

export default Umbrella
