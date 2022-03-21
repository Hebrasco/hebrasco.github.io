import { LANGUAGES } from './Languages'
import { FRAMEWORKS } from './Frameworks'
import { APPLICATIONS } from './Applications'
import BlankIcon from 'assets/icons/blank_icon.svg'
import TankVRLogo from 'assets/icons/app/tankvr.jpg'
import BertramArbeitsbuehnenLogo from 'assets/icons/app/bertram_arbeitsuehnen.png'
import RelictusIcon from 'assets/icons/app/relictus.png'
import MatchbusLogo from 'assets/icons/app/matchbus.png'
import BloomCouplesAppIcon from 'assets/icons/app/bloom_couples_app.png'
import Project from 'models/ProjectModel'

export const PROJECTS: Project[] = [
  new Project(
    true,
    'Soccer club app',
    'App for a soccer club of the 1st Bundesliga',
    BlankIcon,
    'This app displays news about the club and region. Of course, there is also a live ticker. Furthermore, there is a store where merchandise and tickets can be purchased.',
    ['User interface development', 'Communication with an existing API'],
    [LANGUAGES.javaScript, LANGUAGES.json, LANGUAGES.css],
    [FRAMEWORKS.web.react, FRAMEWORKS.web.reactRedux]
  ),
  new Project(
    true,
    'Soccer club admin',
    'Admin webapp for a soccer club of the 1st Bundesliga',
    BlankIcon,
    'This admin webapp can be used to manage tickets, contracts, purchases, users, surveys, messages.',
    [
      'Conception and development',
      'User interface development',
      'Communication with an existing API',
    ],
    [LANGUAGES.javaScript, LANGUAGES.json, LANGUAGES.css],
    [FRAMEWORKS.web.react, FRAMEWORKS.web.reactRedux, FRAMEWORKS.web.materialUI]
  ),
  new Project(
    false,
    'Corporate Communication',
    'Platform for corporate communication',
    BlankIcon,
    'A platform for internal corporate communication was developed. News can be published, events and user interactions can be created here.',
    [
      'Conception and development',
      'User interface development',
      'Communication with an existing API',
    ],
    [LANGUAGES.javaScript, LANGUAGES.html, LANGUAGES.css, LANGUAGES.cSharp],
    [FRAMEWORKS.web.dotNet, FRAMEWORKS.web.angular]
  ),
  new Project(
    true,
    'Bloom',
    'Bloom - Couples App',
    BloomCouplesAppIcon,
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
      FRAMEWORKS.ios.ios,
      FRAMEWORKS.ios.swiftUI,
      FRAMEWORKS.ios.widgetKit,
      FRAMEWORKS.ios.storeKit,
      FRAMEWORKS.ios.localNotifications,
    ],
    'https://apps.apple.com/app/bloom-couples-app/id1533246365'
  ),
  new Project(
    false,
    null,
    'Matchbus Platform',
    MatchbusLogo,
    'Matchbus is a platform where bus operators and advertisers can register. Schools, daycare centers, companies, etc. can submit a rental bus request and see the status of many buses (empty, emergency, empty run). With the help of Matchbus, these vacancies and empty runs are to be provided with passengers.',
    [
      'Development of the DSGVO Cookie Banner',
      'Implementation of Google Analytics',
      'Implementation of rich text editor',
    ],
    [LANGUAGES.typeScript, LANGUAGES.html, LANGUAGES.css],
    [FRAMEWORKS.web.react, FRAMEWORKS.web.reactRedux],
    'https://matchbus.tours'
  ),
  new Project(
    false,
    null,
    'Recipes app',
    BlankIcon,
    `With his recipe app, you're able to create meal plans. There's a huge selection of recipes build in to choose from. Further, the ingredients can be exactly calculated based on the amount of people and can be added to a shopping list.`,
    [
      'Conception and development',
      'User interface development',
      'Parsing a JSON file',
      'Persisting data with CoreData',
    ],
    [LANGUAGES.swift, LANGUAGES.json],
    [FRAMEWORKS.ios.ios, FRAMEWORKS.ios.swiftUI, FRAMEWORKS.ios.coreData],
    'https://github.com/Hebrasco/recipe_app'
  ),
  new Project(
    false,
    null,
    'Bertram Arbeitsbühnen',
    BertramArbeitsbuehnenLogo,
    'App for renting working platforms. Work platforms can be rented and also returned after the rental period. Another component of the app is the creation and management of construction sites. Here, working platforms are assigned and can all be rented and managed together.',
    [
      'New development of the app with React-Native',
      'Implementation of the user interface',
      'Loading machine data from an API',
      'Sending emails with images and PDFs attached',
    ],
    [LANGUAGES.javaScript, LANGUAGES.xml],
    [
      FRAMEWORKS.ios.ios,
      FRAMEWORKS.android.android,
      FRAMEWORKS.crossPlatform.reactNative,
      FRAMEWORKS.web.reactRedux,
    ],
    'https://apps.apple.com/app/bertram-arbeitsbühnen/id475344882'
  ),
]
