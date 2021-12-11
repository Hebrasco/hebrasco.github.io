import { LANGUAGES } from './Languages'
import { FRAMEWORKS } from './Frameworks'
import { APPLICATIONS } from './Applications'
import BlankIcon from '../assets/icons/blank_icon.svg'
import WordpressIcon from '../assets/icons/wordpress.png'
import TankVR from '../assets/icons/app/tankvr.jpg'
import BlueToothLocatorLogo from '../assets/icons/app/bluetooth_locator.png'
import BertramArbeitsbuehnenLogo from '../assets/icons/app/bertram_arbeitsuehnen.png'
import RelictusIcon from '../assets/icons/app/relictus.png'
import WinzerliebeLogo from '../assets/icons/app/winzerliebe.png'
import MatchbusLogo from '../assets/icons/app/matchbus.png'
import BloomCouplesAppIcon from '../assets/icons/app/bloom_couples_app.png'
import NatriumWalletIcon from '../assets/icons/app/natrium_wallet.png'
import LennardsFutterAppLogo from '../assets/icons/app/lennards_futter_app.png'

export const PROJECTS = [
  {
    pinned: true,
    name: 'App for a soccer club of the 1st Bundesliga',
    image: BlankIcon,
    timePeriod: 'April 2021 – now',
    description:
      'This app displays news about the club and region. Of course, there is also a live ticker. Furthermore, there is a store where merchandise and tickets can be purchased.',
    tasks: ['User interface development', 'Communication with an existing API'],
    languages: [LANGUAGES.javaScript, LANGUAGES.json, LANGUAGES.css],
    frameworks: [FRAMEWORKS.web.react, FRAMEWORKS.web.reactRedux],
  },
  {
    pinned: true,
    name: 'Admin webapp for a soccer club of the 1st Bundesliga',
    image: BlankIcon,
    timePeriod: 'April 2021 – now',
    description:
      'This admin webapp can be used to manage tickets, contracts, purchases, users, surveys, messages.',
    tasks: [
      'Conception and development',
      'User interface development',
      'Communication with an existing API',
    ],
    languages: [LANGUAGES.javaScript, LANGUAGES.json, LANGUAGES.css],
    frameworks: [
      FRAMEWORKS.web.react,
      FRAMEWORKS.web.reactRedux,
      FRAMEWORKS.web.materialUI,
    ],
  },
  {
    pinned: false,
    name: 'Platform for corporate communication',
    image: BlankIcon,
    timePeriod: 'April 2021 – now',
    description:
      'A platform for internal corporate communication was developed. News can be published, events and user interactions can be created here.',
    tasks: [
      'Conception and development',
      'User interface development',
      'Communication with an existing API',
    ],
    languages: [
      LANGUAGES.javaScript,
      LANGUAGES.html,
      LANGUAGES.css,
      LANGUAGES.cSharp,
    ],
    frameworks: [FRAMEWORKS.web.dotNet, FRAMEWORKS.web.angular],
  },
  {
    pinned: true,
    name: 'Matchbus: App to send a status and track the bus',
    image: MatchbusLogo,
    timePeriod: 'February 2021 – March 2021',
    description:
      'Developed an app to connect with a bus. The location of the cell phone is tracked as the location of the bus. It is also possible to send an emergency directly to the Matchbus platform.',
    tasks: [
      'Conception and development',
      'User interface development',
      'Communication with an existing API',
    ],
    languages: [LANGUAGES.dart, LANGUAGES.json],
    frameworks: [FRAMEWORKS.crossPlatform.flutter],
    onlineUrl: 'https://apps.apple.com/app/matchbus/id1351672034',
  },
  {
    pinned: false,
    name: 'Natrium Wallet',
    image: NatriumWalletIcon,
    timePeriod: 'Dezember 2020 – January  2021',
    description:
      'The Sodium Wallet is a wallet for the cryptocurrency Nano. The price chart for the portfolio performance was added. However, this feature was not included in the project.',
    tasks: [
      'Design and development of the price chart',
      'Loading Historical Prices from an API',
    ],
    languages: [LANGUAGES.dart, LANGUAGES.json],
    frameworks: [FRAMEWORKS.crossPlatform.flutter],
    sourceURL: 'https://github.com/daubit/natrium_wallet_flutter',
  },
  {
    pinned: false,
    name: 'Lennards Futter-App',
    image: LennardsFutterAppLogo,
    timePeriod: 'Dezember 2020 – January  2020',
    description:
      'Silos can be managed with this app. Any number of silos can be created. These have a name, capacity, fill level, date when the silo is used up and when a new order is placed. Through this app, the feed for the silo can also be ordered.',
    tasks: [
      'Connecting the app to an existing API to create and modify a silo',
      'Fixing a bug in the layout of a CollectionView',
    ],
    languages: [LANGUAGES.swift, LANGUAGES.json],
    frameworks: [FRAMEWORKS.ios.ios, FRAMEWORKS.ios.uiKit],
    onlineUrl: 'https://apps.apple.com/app/lennards-futter-app/id1459806758',
  },
  {
    pinned: false,
    name: 'Golf Tracking App',
    image: BlankIcon,
    timePeriod: 'July 2020 – October 2020',
    description:
      'With this app golf games can be tracked and analyzed. My task was to further develop the app and modernize the UI. Among other things, the support of dynamic type was implemented.',
    tasks: [
      'Implementation of onboarding screens',
      'Implementation of a new design for the settings',
      'Implementation of a custom font',
      'Implementation of Dynamic Type',
    ],
    languages: [LANGUAGES.swift],
    frameworks: [FRAMEWORKS.ios.ios, FRAMEWORKS.ios.uiKit],
  },
  {
    pinned: false,
    name: 'Winzerliebe',
    image: WinzerliebeLogo,
    timePeriod: 'July 2020 – October 2020',
    description:
      'On Winzerliebe wines, wine packages and vouchers can be purchased. Furthermore, it is possible to filter wines by preference to find the best wine for yourself.',
    tasks: [
      'Development and implementation',
      'Development of the homepage',
      'Setting up OpenCart',
      'Customizing the OpenCart API',
      'Customizing the Theme',
      'Loading and displaying products from OpenCart',
    ],
    languages: [
      LANGUAGES.typeScript,
      LANGUAGES.php,
      LANGUAGES.html,
      LANGUAGES.css,
      LANGUAGES.json,
    ],
    frameworks: [FRAMEWORKS.web.react, FRAMEWORKS.web.opencart],
    onlineUrl: 'https://winzerliebe.de',
  },
  {
    pinned: true,
    name: 'Bloom – Couples App',
    image: BloomCouplesAppIcon,
    timePeriod: 'April 2020 – September 2020',
    description:
      'This app is a privately developed app, for calculating the past time since a certain day. The app also offers some iOS 14 widgets that are updated daily. Furthermore, notifications are sent at certain time periods. In addition, in-app purchases are implemented to remove advertisements.',
    tasks: [
      'Conception and development',
      'User interface development',
      'Implementation of in-app purchases',
      'Implementation of local notifications',
      'Implementation of widgets (iOS 14+)',
    ],
    languages: [LANGUAGES.swift],
    frameworks: [
      FRAMEWORKS.ios.ios,
      FRAMEWORKS.ios.swiftUI,
      FRAMEWORKS.ios.widgetKit,
      FRAMEWORKS.ios.storeKit,
      FRAMEWORKS.ios.localNotifications,
    ],
    onlineUrl: 'https://apps.apple.com/app/bloom-couples-app/id1533246365',
  },
  {
    pinned: false,
    name: 'Sengrid Wordpress Plugin',
    image: WordpressIcon,
    timePeriod: 'October 2020 – October 2020',
    description:
      'When a post is published, the plugin automatically sends an email with the post content to a list of subscribers via Sendgrid.',
    tasks: [
      'Connecting a wordpress hook to the plugin',
      'Sending requests to the Sendgrid API',
      'Adding post content to a Sendgrid template',
    ],
    languages: [LANGUAGES.php, LANGUAGES.html, LANGUAGES.css, LANGUAGES.json],
    frameworks: [FRAMEWORKS.web.wordpress],
  },
  {
    pinned: false,
    name: 'Matchbus Blog',
    image: MatchbusLogo,
    timePeriod: 'September 2020 – October 2020',
    description:
      'Created the blog for Matchbus and a plugin to automatically send emails with Sendgrid after a post is published.',
    tasks: ['Set up wordpress', 'Customize wordpress theme'],
    languages: [LANGUAGES.php, LANGUAGES.html, LANGUAGES.css],
    frameworks: [FRAMEWORKS.web.wordpress],
    onlineUrl: 'https://blog.matchbus.tours',
  },
  {
    pinned: false,
    name: 'Matchbus Shop',
    image: MatchbusLogo,
    timePeriod: 'August 2020 – August 2020',
    description: 'The store for Matchbus was created with OpenCart.',
    tasks: ['Setting up OpenCart', 'Customizing the theme'],
    languages: [LANGUAGES.html, LANGUAGES.css],
    frameworks: [FRAMEWORKS.web.opencart],
    onlineUrl: 'https://shop.matchbus.tours',
  },
  {
    pinned: false,
    name: 'Matchbus',
    image: MatchbusLogo,
    timePeriod: 'April 2020 – August 2020',
    description:
      'Matchbus is a platform where bus operators and advertisers can register. Schools, daycare centers, companies, etc. can submit a rental bus request and see the status of many buses (empty, emergency, empty run). With the help of Matchbus, these vacancies and empty runs are to be provided with passengers.',
    tasks: [
      'Development of the DSGVO Cookie Banner',
      'Implementation of Google Analytics',
      'Implementation of rich text editor',
    ],
    languages: [LANGUAGES.typeScript, LANGUAGES.html, LANGUAGES.css],
    frameworks: [FRAMEWORKS.web.react, FRAMEWORKS.web.reactRedux],
    onlineUrl: 'https://matchbus.tours',
  },
  {
    pinned: false,
    name: 'Recipes app',
    image: BlankIcon,
    timePeriod: 'March 2020 – April 2020',
    description:
      'Mit der Rezepte App können spielend leicht Speisepläne erstellt werden. Hierfür stehen einige Rezepte in der App zur Auswahl. Gleichzeitig können die Zutaten auf die gewünschte Personenanzahl aufgerechnet und einer Einkaufsliste hinzugefügt werden.',
    tasks: [
      'Conception and development',
      'User interface development',
      'Parsing a JSON file',
      'Persisting data with CoreData',
    ],
    languages: [LANGUAGES.swift, LANGUAGES.json],
    frameworks: [
      FRAMEWORKS.ios.ios,
      FRAMEWORKS.ios.swiftUI,
      FRAMEWORKS.ios.coreData,
    ],
    sourceURL: 'https://github.com/Hebrasco/recipe_app',
  },
  {
    pinned: false,
    name: 'Relictus',
    image: RelictusIcon,
    timePeriod: 'January  2019 – April 2019',
    description:
      "A Jump 'n Run game for the PC. It was created as part of a project work in the training.",
    tasks: [
      'Conception and development',
      '2D graphics creation',
      'Collision Detection Development',
      'Development Main Menu',
    ],
    languages: [LANGUAGES.java],
    frameworks: [FRAMEWORKS.other.javaFx, FRAMEWORKS.other.fxgl],
    sourceURL: 'https://github.com/Hebrasco/relictus',
  },
  {
    pinned: false,
    name: 'Bertram Arbeitsbühnen',
    image: BertramArbeitsbuehnenLogo,
    timePeriod: 'April 2019 – February 2020',
    description:
      'App for renting working platforms. Work platforms can be rented and also returned after the rental period. Another component of the app is the creation and management of construction sites. Here, working platforms are assigned and can all be rented and managed together.',
    tasks: [
      'New development of the app with React-Native',
      'Implementation of the user interface',
      'Loading machine data from an API',
      'Sending emails with images and PDFs attached',
    ],
    languages: [LANGUAGES.javaScript, LANGUAGES.xml],
    frameworks: [
      FRAMEWORKS.ios.ios,
      FRAMEWORKS.android.android,
      FRAMEWORKS.crossPlatform.reactNative,
      FRAMEWORKS.web.reactRedux,
    ],
    onlineUrl: 'https://apps.apple.com/app/bertram-arbeitsbühnen/id475344882',
  },
  {
    pinned: false,
    name: 'Bluetooth Locator',
    image: BlueToothLocatorLogo,
    timePeriod: 'March 2018 – May 2018',
    description:
      'Bluetooth Locator can be used to track down Bluetooth signals. If a Bluetooth device is lost, you can find it again with the help of this app.',
    tasks: [
      'Conception and development',
      'User interface development',
      'Displaying the device name and signal strength',
    ],
    languages: [LANGUAGES.java],
    frameworks: [FRAMEWORKS.android.android],
    onlineUrl:
      'https://play.google.com/store/app/details?id=org.daubit.blescanner',
  },
  {
    pinned: false,
    name: 'TankVR',
    image: TankVR,
    timePeriod: 'August 2017 – Dezember 2018',
    description:
      'TankVR is a virtual reality arcade tank game for the HTC Vive. The object of the game is to take out enemy tanks. Based on hit accuracy and distance, a high score is calculated and kept in a leaderboard.',
    tasks: [
      'Design and development',
      'Creation of elaborate 3D models',
      'Editing existing 3D models',
      'Implementation of Steam and SteamVR frameworks',
      'Implementation of a leaderboard',
    ],
    languages: [LANGUAGES.cSharp],
    frameworks: [
      APPLICATIONS.unity,
      APPLICATIONS.threeDsMax,
      APPLICATIONS.maya,
      FRAMEWORKS.other.vr,
      FRAMEWORKS.other.steam,
      FRAMEWORKS.other.sqLite,
    ],
    onlineUrl: 'https://store.steampowered.com/app/712150/TankVR/',
  },
]
