import { Languages } from './Languages'
import { Frameworks } from './Frameworks'
import { Applications } from './Applications'

const BlankIcon = require('../assets/icons/blank_icon.svg') as string
const WordpressIcon = require('../assets/icons/wordpress.png') as string
const TankVR = require('../assets/icons/apps/tankvr.jpg') as string
const BlueToothLocatorLogo =
  require('../assets/icons/apps/bluetooth_locator.png') as string
const BertramArbeitsbuehnenLogo =
  require('../assets/icons/apps/bertram_arbeitsuehnen.png') as string
const RelictusIcon = require('../assets/icons/apps/relictus.png') as string
const WinzerliebeLogo =
  require('../assets/icons/apps/winzerliebe.png') as string
const MatchbusLogo = require('../assets/icons/apps/matchbus.png') as string
const BloomCouplesAppIcon =
  require('../assets/icons/apps/bloom_couples_app.png') as string
const NatriumWalletIcon =
  require('../assets/icons/apps/natrium_wallet.png') as string
const LennardsFutterAppLogo =
  require('../assets/icons/apps/lennards_futter_app.png') as string

export const Projects = [
  {
    pinned: true,
    name: 'Matchbus: App zum senden eines Status und verfolgen des Busses',
    image: MatchbusLogo,
    timePeriod: '02/2021 - 03/2021',
    description:
      'Entwickelt wurde eine App zum verbinden mit einem Bus. Der Standort des Handys wird als Standort des Busses verfolgt. Ebenfalls ist es möglich einen Notfall direkt an die Matchbus Plattform zu senden.',
    tasks: [
      'Konzeption und Entwicklung',
      'Entwicklung des Userinterface',
      'Kommunikation mit einer bestehenden API',
    ],
    languages: [Languages.dart, Languages.json],
    frameworks: [Frameworks.crossPlattform.flutter],
    onlineUrl: 'https://apps.apple.com/app/matchbus/id1351672034',
  },
  {
    pinned: false,
    name: 'Natrium Wallet',
    image: NatriumWalletIcon,
    timePeriod: '12/2020 - 01/2021',
    description:
      'Das Natrium Wallet ist ein Wallet für die Cryptowährung Nano. Es wurde der Preis Chart für die Wertentwicklung des Portfolios hinzugefügt. Dieses Feature wurde jedoch nicht in das Projekt übernommen.',
    tasks: [
      'Konzeption und Entwicklung des Preischarts',
      'Laden der Historischen Preise von einer API',
    ],
    languages: [Languages.dart, Languages.json],
    frameworks: [Frameworks.crossPlattform.flutter],
    sourceURL: 'https://github.com/daubit/natrium_wallet_flutter',
  },
  {
    pinned: false,
    name: 'Lennards Futter-App',
    image: LennardsFutterAppLogo,
    timePeriod: '12/2020 - 01/2020',
    description:
      'Mit dieser App können Silos verwaltet werden. Es können beliebig viele Silos erstellt werden. Diese haben einen Namen, Kapazität, Füllstand, Datum wann das Silo aufgebraucht ist und wann eine neue Bestellung aufgegeben wird. Über diese App kann das Futter für die Silo ebenfalls bestellt werden.',
    tasks: [
      'Anbindung der App an eine bestehende API zum erstellen und ändern eines Silos',
      'Behebung eines Fehler im Layouts einer CollectionView',
    ],
    languages: [Languages.swift, Languages.json],
    frameworks: [Frameworks.ios.ios, Frameworks.ios.uiKit],
    onlineUrl: 'https://apps.apple.com/app/lennards-futter-app/id1459806758',
  },
  {
    pinned: false,
    name: 'Golf Tracking App',
    image: BlankIcon,
    timePeriod: '07/2020 - 10/2020',
    description:
      'Mit dieser App können Golfspiele getrackt und analysiert werden. Mein Aufgabenbereich bestand darin, die App weiterzuentwickeln und die UI zu modernisieren. Dabei wurde unter anderem die unterstützung von Dynamic Type implementiert.',
    tasks: [
      'Umsetzung der Onboarding Bildschirme',
      'Implementierung eines neuen Designs für die Einstellungen',
      'Implementierung einer Benutzerdefinieren Schriftart',
      'Implementierung von Dynamic Type',
    ],
    languages: [Languages.swift],
    frameworks: [Frameworks.ios.ios, Frameworks.ios.uiKit],
  },
  {
    pinned: false,
    name: 'Weinshop',
    image: WinzerliebeLogo,
    timePeriod: '07/2020 - 10/2020',
    description:
      'Auf Winzerliebe können Weine, Weinpakete und Gutscheine gekauft werden. Desweiteren ist es möglich, Weine nach belieben zu Filtern um somit den besten Wein für sich selbst zu finden.',
    tasks: [
      'Entwicklung und Umsetzung',
      'Entwicklung der Homepage',
      'Aufsetzen von OpenCart',
      'Anpassen der OpenCart API',
      'Anpassen des Themes',
      'Laden und Anzeigen von Produkten aus OpenCart',
    ],
    languages: [
      Languages.typeScript,
      Languages.php,
      Languages.html,
      Languages.css,
      Languages.json,
    ],
    frameworks: [Frameworks.web.react, Frameworks.web.opencart],
    onlineUrl: 'https://winzerliebe.de',
  },
  {
    pinned: true,
    name: 'Bloom - Couples App',
    image: BloomCouplesAppIcon,
    timePeriod: '04/2020 - 09/2020',
    description:
      'Diese App ist eine privat entwickelte App, zur Berechnung der vergangenen Zeit seit einem bestimmten Tag. Die App bietet auch einige iOS 14 Widgets an, die täglich aktualisiert werden. Des weiteren werden an bestimmten Zeitspannen Benachrichtigungen verschickt. Zudem sind In-App Einkäufe implementiert, die Werbung entfernen.',
    tasks: [
      'Konzeption und Entwicklung',
      'Entwicklung der Userinterface',
      'Implementierung von In-App Käufen',
      'Implementierung von lokalen Benachrichtigungen',
      'Implementierung von Widgets (iOS 14+)',
    ],
    languages: [Languages.swift],
    frameworks: [
      Frameworks.ios.ios,
      Frameworks.ios.swiftUI,
      Frameworks.ios.widgetKit,
      Frameworks.ios.storeKit,
      Frameworks.ios.localNotifications,
    ],
    onlineUrl: 'https://apps.apple.com/app/bloom-couples-app/id1533246365',
  },
  {
    pinned: false,
    name: 'Sengrid Wordpress Plugin',
    image: WordpressIcon,
    timePeriod: '10/2020 - 10/2020',
    description:
      'Wenn ein Post veröffentlicht wird, sendet das Plugin automatisch eine E-Mail mit dem Inhalt des Posts über Sendgrid an eine Liste von Abonnenten.',
    tasks: [
      'Anbinden einer Wordpress Hook an das Plugin',
      'Senden von Requests an die Sendgrid API',
      'Hinzufügen des Post-Inhalts in ein Sendgrid Template',
    ],
    languages: [Languages.php, Languages.html, Languages.css, Languages.json],
    frameworks: [Frameworks.web.wordpress],
  },
  {
    pinned: false,
    name: 'Matchbus Blog',
    image: MatchbusLogo,
    timePeriod: '09/2020 - 10/2020',
    description:
      'Es wurde der Blog für Matchbus erstellt und ein Plugin zum automatischem senden von E-Mails mit Sendgrid, nachdem ein Post veröffentlicht wird.',
    tasks: ['Aufsetzen von Wordpress', 'Anpassen des Wordpress Themes'],
    languages: [Languages.php, Languages.html, Languages.css],
    frameworks: [Frameworks.web.wordpress],
    onlineUrl: 'https://blog.matchbus.tours',
  },
  {
    pinned: false,
    name: 'Matchbus Shop',
    image: MatchbusLogo,
    timePeriod: '08/2020 - 08/2020',
    description: 'Es wurde der Shop für Matchbus mit OpenCart erstellt.',
    tasks: ['Aufsetzen von OpenCart', 'Anpassen des Themes'],
    languages: [Languages.html, Languages.css],
    frameworks: [Frameworks.web.opencart],
    onlineUrl: 'https://shop.matchbus.tours',
  },
  {
    pinned: false,
    name: 'Matchbus',
    image: MatchbusLogo,
    timePeriod: '04/2020 - 08/2020',
    description:
      'Matchbus ist eine Plattform, bei der sich Busunternehmer und Werbetreibende registrieren können. Schulen, Kitas, Firmen etc. können eine Mietbusanfrage stellen und sehen den Status vieler Busse (Leerstand, Notfall, Leerfahrt). Mithilfe von Matchbus sollen diese Leerstände und Leerfahrten mit Passagieren versehen werden.',
    tasks: [
      'Entwicklung des DSGVO Cookie Banner',
      'Implementierung von Google Analytics',
      'Implementierung eines Rich-Texteditors',
    ],
    languages: [Languages.typeScript, Languages.html, Languages.css],
    frameworks: [Frameworks.web.react, Frameworks.web.reactRedux],
    onlineUrl: 'https://matchbus.tours',
  },
  {
    pinned: true,
    name: 'Rezepte App',
    image: BlankIcon,
    timePeriod: '03/2020 - 04/2020',
    description:
      'Mit der Rezepte App können spielend leicht Speisepläne erstellt werden. Hierfür stehen einige Rezepte in der App zur Auswahl. Gleichzeitig können die Zutaten auf die gewünschte Personenanzahl aufgerechnet und einer Einkaufsliste hinzugefügt werden.',
    tasks: [
      'Konzeption und Entwicklung',
      'Entwicklung des Userinterface',
      'Parsen einer JSON Datei',
      'Persistieren von Daten mit CoreData',
    ],
    languages: [Languages.swift, Languages.json],
    frameworks: [
      Frameworks.ios.ios,
      Frameworks.ios.swiftUI,
      Frameworks.ios.coreData,
    ],
    sourceURL: 'https://github.com/Hebrasco/recipe_app',
  },
  {
    pinned: true,
    name: 'Relictus',
    image: RelictusIcon,
    timePeriod: '01/2019 - 04/2019',
    description:
      "Ein Jump 'n Run Spiel für den PC. Es wurde im Rahmen einer Projektarbeit in der Ausbildung erstellt.",
    tasks: [
      'Konzeption und Entwicklung',
      'Erstellung 2D Grafiken',
      'Enwticklung Collision Detection',
      'Entwicklung Hauptmenü',
    ],
    languages: [Languages.java],
    frameworks: [Frameworks.other.javaFx, Frameworks.other.fxgl],
    sourceURL: 'https://github.com/Hebrasco/relictus',
  },
  {
    pinned: false,
    name: 'Bertram Arbeitsbühnen',
    image: BertramArbeitsbuehnenLogo,
    timePeriod: '04/2019 - 02/2020',
    description:
      'App zur Vermietung von Arbeitsbühnen. Es können Arbeitsbühnen gemietet und ebenfalls nach der mietzeit wieder abgegeben werden. Ein weiterer Bestandteil der App ist das anlegen und verwalten von Baustellen. Hier werden Arbeitsbühnen zugeordnet und können alle zusammen gemietet und verwaltet werden.',
    tasks: [
      'Neuentwicklung der App mit React-Native',
      'Implementation des Userinterface',
      'Laden der Maschinendaten von einer API',
      'Senden von E-Mails mit Bildern und PDFs im Anhang',
    ],
    languages: [Languages.javaScript, Languages.xml],
    frameworks: [
      Frameworks.ios.ios,
      Frameworks.android.android,
      Frameworks.crossPlattform.reactNative,
      Frameworks.web.reactRedux,
    ],
    onlineUrl: 'https://apps.apple.com/app/bertram-arbeitsbühnen/id475344882',
  },
  {
    pinned: false,
    name: 'Bluetooth Locator',
    image: BlueToothLocatorLogo,
    timePeriod: '03/2018 - 05/2018',
    description:
      'Mit dem Bluetooth Locator können Bluetooth Signale aufgespürt werden. Sollte ein Bluetooth Gerät verloren gehen, kann man sie mit Hilfe von dieser App wiederfinden.',
    tasks: [
      'Konzeption und Entwicklung',
      'Entwicklung des Userinterface',
      'Anzeigen des Gerätenamens und der Signalstärke',
    ],
    languages: [Languages.java],
    frameworks: [Frameworks.android.android],
    onlineUrl:
      'https://play.google.com/store/apps/details?id=org.daubit.blescanner',
  },
  {
    pinned: false,
    name: 'TankVR',
    image: TankVR,
    timePeriod: '08/2017 - 12/2018',
    description:
      'TankVR ist ein Virtual Reality Arcade Panzer Spiel für die HTC Vive. In dem Spiel geht es darum, gegnerische Panzer auszuschalten. Anhand von Treffergenauigkeit und Entfernung wird ein Highscore berechnet und in einem Leaderbord geführt.',
    tasks: [
      'Konzeption und Entwicklung',
      'Erstellung aufwendiger 3D-Modelle',
      'Bearbeiten existierender 3D-Modelle',
      'Implementierung des Steam und SteamVR Frameworks',
      'Implementierung eines Leaderboards',
    ],
    languages: [Languages.cSharp],
    frameworks: [
      Applications.unity,
      Applications.threeDsMax,
      Applications.maya,
      Frameworks.other.vr,
      Frameworks.other.steam,
      Frameworks.other.sqLite,
    ],
    onlineUrl: 'https://store.steampowered.com/app/712150/TankVR/',
  },
]
