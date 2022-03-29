import { LANGUAGES } from '../languages'
import { FRAMEWORKS } from '../frameworks'
import Project from 'models/ProjectModel'
import PreviewImage from 'models/PreviewImageModel'
import IpadImageLight from 'assets/images/previews/umbrella/ipad_light.png'
import IphoneImageLight from 'assets/images/previews/umbrella/iphone_light.png'
import MacbookImageLight from 'assets/images/previews/umbrella/macbook_light.png'
import IpadImageDark from 'assets/images/previews/umbrella/ipad_dark.png'
import IphoneImageDark from 'assets/images/previews/umbrella/iphone_dark.png'
import MacbookImageDark from 'assets/images/previews/umbrella/macbook_dark.png'

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
      IphoneImageDark,
      IphoneImageLight
    ),
    new PreviewImage(
      'preview-umbrella-macbook',
      MacbookImageLight,
      MacbookImageDark
    ),
    new PreviewImage('preview-umbrella-ipad', IpadImageLight, IpadImageDark),
  ],
  true
)
