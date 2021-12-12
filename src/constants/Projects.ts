import { LANGUAGES } from './Languages'
import { FRAMEWORKS } from './Frameworks'
import { APPLICATIONS } from './Applications'
import BlankIcon from 'assets/icons/blank_icon.svg'
import WordpressIcon from 'assets/icons/wordpress.png'
import TankVRLogo from 'assets/icons/app/tankvr.jpg'
import BlueToothLocatorLogo from 'assets/icons/app/bluetooth_locator.png'
import BertramArbeitsbuehnenLogo from 'assets/icons/app/bertram_arbeitsuehnen.png'
import RelictusIcon from 'assets/icons/app/relictus.png'
import WinzerliebeLogo from 'assets/icons/app/winzerliebe.png'
import MatchbusLogo from 'assets/icons/app/matchbus.png'
import BloomCouplesAppIcon from 'assets/icons/app/bloom_couples_app.png'
import NatriumWalletIcon from 'assets/icons/app/natrium_wallet.png'
import LennardsFutterAppLogo from 'assets/icons/app/lennards_futter_app.png'
import Project from 'models/ProjectModel'

export const PROJECTS: Project[] = [
  new Project(
    true,
    'App for a soccer club of the 1st Bundesliga',
    BlankIcon,
    'April 2021 – now',

    'This app displays news about the club and region. Of course, there is also a live ticker. Furthermore, there is a store where merchandise and tickets can be purchased.',
    ['User interface development', 'Communication with an existing API'],
    [LANGUAGES.javaScript, LANGUAGES.json, LANGUAGES.css],
    [FRAMEWORKS.web.react, FRAMEWORKS.web.reactRedux]
  ),
  new Project(
    true,
    'Admin webapp for a soccer club of the 1st Bundesliga',
    BlankIcon,
    'April 2021 – now',

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
    'Platform for corporate communication',
    BlankIcon,
    'April 2021 – now',

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
    'Matchbus: App to send a status and track the bus',
    MatchbusLogo,
    'February 2021 – March 2021',

    'Developed an app to connect with a bus. The location of the cell phone is tracked as the location of the bus. It is also possible to send an emergency directly to the Matchbus platform.',
    [
      'Conception and development',
      'User interface development',
      'Communication with an existing API',
    ],
    [LANGUAGES.dart, LANGUAGES.json],
    [FRAMEWORKS.crossPlatform.flutter],
    'https://apps.apple.com/app/matchbus/id1351672034'
  ),
  new Project(
    false,
    'Natrium Wallet',
    NatriumWalletIcon,
    'Dezember 2020 – January  2021',

    'The Sodium Wallet is a wallet for the cryptocurrency Nano. The price chart for the portfolio performance was added. However, this feature was not included in the project.',
    [
      'Design and development of the price chart',
      'Loading Historical Prices from an API',
    ],
    [LANGUAGES.dart, LANGUAGES.json],
    [FRAMEWORKS.crossPlatform.flutter],
    'https://github.com/daubit/natrium_wallet_flutter'
  ),
  new Project(
    false,
    'Lennards Futter-App',
    LennardsFutterAppLogo,
    'Dezember 2020 – January  2020',

    'Silos can be managed with this app. Any number of silos can be created. These have a name, capacity, fill level, date when the silo is used up and when a new order is placed. Through this app, the feed for the silo can also be ordered.',
    [
      'Connecting the app to an existing API to create and modify a silo',
      'Fixing a bug in the layout of a CollectionView',
    ],
    [LANGUAGES.swift, LANGUAGES.json],
    [FRAMEWORKS.ios.ios, FRAMEWORKS.ios.uiKit],
    'https://apps.apple.com/app/lennards-futter-app/id1459806758'
  ),
  new Project(
    false,
    'Golf Tracking App',
    BlankIcon,
    'July 2020 – October 2020',

    'With this app golf games can be tracked and analyzed. My task was to further develop the app and modernize the UI. Among other things, the support of dynamic type was implemented.',
    [
      'Implementation of onboarding screens',
      'Implementation of a new design for the settings',
      'Implementation of a custom font',
      'Implementation of Dynamic Type',
    ],
    [LANGUAGES.swift],
    [FRAMEWORKS.ios.ios, FRAMEWORKS.ios.uiKit]
  ),
  new Project(
    false,
    'Winzerliebe',
    WinzerliebeLogo,
    'July 2020 – October 2020',

    'On Winzerliebe wines, wine packages and vouchers can be purchased. Furthermore, it is possible to filter wines by preference to find the best wine for yourself.',
    [
      'Development and implementation',
      'Development of the homepage',
      'Setting up OpenCart',
      'Customizing the OpenCart API',
      'Customizing the Theme',
      'Loading and displaying products from OpenCart',
    ],
    [
      LANGUAGES.typeScript,
      LANGUAGES.php,
      LANGUAGES.html,
      LANGUAGES.css,
      LANGUAGES.json,
    ],
    [FRAMEWORKS.web.react, FRAMEWORKS.web.opencart],
    'https://winzerliebe.de'
  ),
  new Project(
    true,
    'Bloom – Couples App',
    BloomCouplesAppIcon,
    'April 2020 – September 2020',

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
    'Sengrid Wordpress Plugin',
    WordpressIcon,
    'October 2020 – October 2020',

    'When a post is published, the plugin automatically sends an email with the post content to a list of subscribers via Sendgrid.',
    [
      'Connecting a wordpress hook to the plugin',
      'Sending requests to the Sendgrid API',
      'Adding post content to a Sendgrid template',
    ],
    [LANGUAGES.php, LANGUAGES.html, LANGUAGES.css, LANGUAGES.json],
    [FRAMEWORKS.web.wordpress]
  ),
  new Project(
    false,
    'Matchbus Blog',
    MatchbusLogo,
    'September 2020 – October 2020',

    'Created the blog for Matchbus and a plugin to automatically send emails with Sendgrid after a post is published.',
    ['Set up wordpress', 'Customize wordpress theme'],
    [LANGUAGES.php, LANGUAGES.html, LANGUAGES.css],
    [FRAMEWORKS.web.wordpress],
    'https://blog.matchbus.tours'
  ),
  new Project(
    false,
    'Matchbus Shop',
    MatchbusLogo,
    'August 2020 – August 2020',
    'The store for Matchbus was created with OpenCart.',
    ['Setting up OpenCart', 'Customizing the theme'],
    [LANGUAGES.html, LANGUAGES.css],
    [FRAMEWORKS.web.opencart],
    'https://shop.matchbus.tours'
  ),
  new Project(
    false,
    'Matchbus',
    MatchbusLogo,
    'April 2020 – August 2020',

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
    'Recipes app',
    BlankIcon,
    'March 2020 – April 2020',

    'Mit der Rezepte App können spielend leicht Speisepläne erstellt werden. Hierfür stehen einige Rezepte in der App zur Auswahl. Gleichzeitig können die Zutaten auf die gewünschte Personenanzahl aufgerechnet und einer Einkaufsliste hinzugefügt werden.',
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
    'Relictus',
    RelictusIcon,
    'January  2019 – April 2019',

    "A Jump 'n Run game for the PC. It was created as part of a project work in the training.",
    [
      'Conception and development',
      '2D graphics creation',
      'Collision Detection Development',
      'Development Main Menu',
    ],
    [LANGUAGES.java],
    [FRAMEWORKS.other.javaFx, FRAMEWORKS.other.fxgl],
    'https://github.com/Hebrasco/relictus'
  ),
  new Project(
    false,
    'Bertram Arbeitsbühnen',
    BertramArbeitsbuehnenLogo,
    'April 2019 – February 2020',

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
  new Project(
    false,
    'Bluetooth Locator',
    BlueToothLocatorLogo,
    'March 2018 – May 2018',

    'Bluetooth Locator can be used to track down Bluetooth signals. If a Bluetooth device is lost, you can find it again with the help of this app.',
    [
      'Conception and development',
      'User interface development',
      'Displaying the device name and signal strength',
    ],
    [LANGUAGES.java],
    [FRAMEWORKS.android.android],
    'https://play.google.com/store/app/details?id=org.daubit.blescanner'
  ),
  new Project(
    false,
    'TankVR',
    TankVRLogo,
    'August 2017 – Dezember 2018',

    'TankVR is a virtual reality arcade tank game for the HTC Vive. The object of the game is to take out enemy tanks. Based on hit accuracy and distance, a high score is calculated and kept in a leaderboard.',
    [
      'Design and development',
      'Creation of elaborate 3D models',
      'Editing existing 3D models',
      'Implementation of Steam and SteamVR frameworks',
      'Implementation of a leaderboard',
    ],
    [LANGUAGES.cSharp],
    [
      APPLICATIONS.unity,
      APPLICATIONS.threeDsMax,
      APPLICATIONS.maya,
      FRAMEWORKS.other.vr,
      FRAMEWORKS.other.steam,
      FRAMEWORKS.other.sqLite,
    ],
    'https://store.steampowered.com/app/712150/TankVR/'
  ),
]
