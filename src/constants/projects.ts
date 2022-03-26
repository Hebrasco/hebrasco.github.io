import { LANGUAGES } from './languages'
import { FRAMEWORKS } from './frameworks'
import Project from 'models/ProjectModel'
import RecipesPreview from 'common/Previews/RecipesPreview/RecipesPreview'
import BloomPreview from 'common/Previews/BloomPreview/BloomPreview'
import UmbrellaPreview from 'common/Previews/UmbrellaPreview/UmbrellaPreview'
import InstersPreview from 'common/Previews/InstersPreview/InstersPreview'

export const PROJECTS: Project[] = [
  new Project(
    'Umbrella',
    'This app is an task management tool. You can create and manage tasks of different projects. Tasks are managed in you self managed boards, sprints and milestones. A label, due date, milestone, estimated and actual time, priority and more can be added to a task.',
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
    UmbrellaPreview,
    true
  ),
  new Project(
    'Insters',
    'Insters is a photo filer app. You can import images from you photo library and choose from a variety of color filters to apply to you image. If applied one of the filters, you can export the photo back to your library.',
    [
      'Conception and development',
      'User interface development',
      'Implementation of in-app purchases',
      'Color adjustment algorithms',
    ],
    [LANGUAGES.swift, LANGUAGES.metal],
    [
      FRAMEWORKS.apple.ios,
      FRAMEWORKS.apple.swiftUI,
      FRAMEWORKS.apple.storeKit,
      FRAMEWORKS.apple.coreImage,
    ],
    undefined,
    undefined,
    InstersPreview,
    true
  ),
  new Project(
    'Bloom - Couples App',
    'This app is a privately developed app, for calculating the past time since a certain day. The app also offers some iOS 14 widgets that are updated daily. Furthermore, notifications are sent at certain time periods. In addition, in-app purchases are implemented to remove advertisements.',
    [
      'Conception and development',
      'User interface development',
      'Implementation of in-app purchases',
      'Implementation of local notifications',
      'Implementation of widgets (iOS 14+)',
    ],
    [LANGUAGES.swift],
    [
      FRAMEWORKS.apple.ios,
      FRAMEWORKS.apple.swiftUI,
      FRAMEWORKS.apple.widgetKit,
      FRAMEWORKS.apple.storeKit,
      FRAMEWORKS.apple.localNotifications,
    ],
    'https://apps.apple.com/app/bloom-couples-app/id1533246365',
    undefined,
    BloomPreview
  ),
  new Project(
    'Recipes app',
    `With his recipe app, you're able to create meal plans. There's a huge selection of recipes build in to choose from. Further, the ingredients can be exactly calculated based on the amount of people and can be added to a shopping list.`,
    [
      'Conception and development',
      'User interface development',
      'Parsing a JSON file',
      'Persisting data with Core Data',
    ],
    [LANGUAGES.swift, LANGUAGES.json],
    [FRAMEWORKS.apple.ios, FRAMEWORKS.apple.swiftUI, FRAMEWORKS.apple.coreData],
    undefined,
    'https://github.com/Hebrasco/recipe_app',
    RecipesPreview
  ),
]
