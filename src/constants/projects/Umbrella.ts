import { LANGUAGES } from 'constants/profile/languages'
import { FRAMEWORKS } from 'constants/profile/frameworks'
import Project from 'models/ProjectModel'
import PreviewImage from 'models/PreviewImageModel'
import { UmbrellaPreviews } from 'assets/images/previews'

export default new Project(
  'Umbrella',
  'This app is an task management tool. You can create and manage tasks of different projects. Tasks are managed in your self managed boards, sprints and milestones. A label, due date, milestone, estimated and actual time, priority and more can be added to a task.',
  [
    'Conception and development',
    'User interface development',
    'Persisting data with Core Data',
    'Synchronizing data with iCloud',
  ],
  [LANGUAGES.swift],
  [
    FRAMEWORKS.apple.macOS,
    FRAMEWORKS.apple.ios,
    FRAMEWORKS.apple.swiftUI,
    FRAMEWORKS.apple.coreData,
    FRAMEWORKS.apple.cloudKit,
  ],
  undefined,
  undefined,
  [
    new PreviewImage(
      'preview-umbrella-iphone',
      UmbrellaPreviews.iphoneImageDark,
      UmbrellaPreviews.iphoneImageLight
    ),
    new PreviewImage(
      'preview-umbrella-macbook',
      UmbrellaPreviews.macbookImageLight,
      UmbrellaPreviews.macbookImageDark
    ),
    new PreviewImage(
      'preview-umbrella-ipad',
      UmbrellaPreviews.ipadImageLight,
      UmbrellaPreviews.ipadImageDark
    ),
  ],
  true
)
