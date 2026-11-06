import { InstersAppIcons } from 'assets/images/appIcons'
import { InstersHeaders } from 'assets/images/headers'
import { InstersPreviews } from 'assets/images/previews'
import {
  ScreenshotsIpadDark,
  ScreenshotsIpadLight,
  ScreenshotsIphoneDark,
  ScreenshotsIphoneLight,
} from 'assets/images/screenshots/insters'
import { PLATFORM } from 'data/platform'
import * as PROFILE from 'data/profile'
import { PROJECT_STATUS } from 'data/projectStatus'
import type { Project } from 'types'

const INSTERS: Project = {
  appIcon: {
    dark: InstersAppIcons.dark,
    light: InstersAppIcons.light,
  },
  description:
    'A one-tap photo filter app for iPhone and iPad. Import a photo, tap through 29 looks and save the one you like to your photo library. Most looks are film recipes: a film-style base combined with white balance, highlight and shadow tone, color, clarity, dynamic range and grain, all rendered with Core Image. Every look is previewed live on a thumbnail of your own photo, so there are no sliders or adjustment panels. The original always stays one tap away, and saving writes a new full-resolution photo. Favorite looks move to the front of the strip. 13 looks are free; insters Pro unlocks 16 more and removes the ads.',
  features: [
    {
      description:
        '29 looks, from vibrant color and black and white to film recipes with white balance, tone, clarity and grain.',
      icon: 'bi bi-camera',
      title: 'Film Looks',
    },
    {
      description: 'Every look is previewed on a thumbnail of your own photo before you tap it.',
      icon: 'bi bi-images',
      title: 'Live Previews',
    },
    {
      description:
        'Long-press a look to add it to your favorites. Favorites move to the front of the strip.',
      icon: 'bi bi-star',
      title: 'Favorites',
    },
    {
      description:
        'The original is always one tap away. Saving writes a new full-resolution photo to the library.',
      icon: 'bi bi-arrow-counterclockwise',
      title: 'Original Kept',
    },
    {
      description: 'The editor background can be black, white or follow the system appearance.',
      icon: 'bi bi-circle-half',
      title: 'Editor Background',
    },
    {
      description:
        'One in-app purchase unlocks 16 Pro looks and removes the ads. Earlier Remove Ads purchases unlock Pro too.',
      icon: 'bi bi-unlock',
      title: 'insters Pro',
    },
    {
      description:
        'Locked Pro looks can be previewed but are hidden from screenshots, screen recordings and the app switcher.',
      icon: 'bi bi-shield-lock',
      title: 'Screenshot Protection',
    },
    {
      description: 'Looks are rendered on the device. Photos are never uploaded.',
      icon: 'bi bi-lock',
      title: 'Private Photos',
    },
    {
      description: 'The free version shows an ad before saving, with GDPR and tracking consent.',
      icon: 'bi bi-badge-ad',
      title: 'Ads with Consent',
    },
  ],
  frameworks: [
    PROFILE.frameworks.apple.swiftUI,
    PROFILE.frameworks.apple.coreImage,
    PROFILE.frameworks.apple.storeKit,
  ],
  headerImage: {
    altText: 'insters photo prints in different looks with the look strip floating over a yellow background',
    image: InstersHeaders.header,
  },
  highlights: [
    {
      feature: 'Film Looks',
      screenshot: {
        altText: 'Lake photo with the Seventies look selected in the look strip',
        dark: ScreenshotsIphoneDark.Seventies,
        light: ScreenshotsIphoneLight.Seventies,
      },
    },
    {
      feature: 'Favorites',
      screenshot: {
        altText: 'Look strip with favorite looks in front of the others',
        dark: ScreenshotsIphoneDark.Favorites,
        light: ScreenshotsIphoneLight.Favorites,
      },
    },
    {
      feature: 'insters Pro',
      screenshot: {
        altText: 'Look strip with locked Pro looks',
        dark: ScreenshotsIphoneDark.Free,
        light: ScreenshotsIphoneLight.Free,
      },
    },
  ],
  id: 'insters',
  languages: [PROFILE.languages.swift],
  metaDescription:
    'insters is a one-tap photo filter app for iPhone and iPad with 29 film looks, live previews on your own photo and favorites.',
  name: 'Insters',
  onlineURL: 'https://apps.apple.com/app/insters/id1561338805',
  platforms: [PLATFORM.iphone, PLATFORM.ipad],
  previewImage: {
    altText: 'Preview screenshot of Insters',
    dark: ScreenshotsIphoneDark.Vibrant,
    light: ScreenshotsIphoneLight.Vibrant,
  },
  screenshots: {
    ipad: [
      {
        altText: 'Start screen, iPad',
        dark: ScreenshotsIpadDark.Start,
        light: ScreenshotsIpadLight.Start,
      },
      {
        altText: 'Original photo, iPad',
        dark: ScreenshotsIpadDark.Original,
        light: ScreenshotsIpadLight.Original,
      },
      {
        altText: 'Vibrant look, iPad',
        dark: ScreenshotsIpadDark.Vibrant,
        light: ScreenshotsIpadLight.Vibrant,
      },
      {
        altText: 'Noir look, iPad',
        dark: ScreenshotsIpadDark.Noir,
        light: ScreenshotsIpadLight.Noir,
      },
      {
        altText: 'Nostalgia look, iPad',
        dark: ScreenshotsIpadDark.Nostalgia,
        light: ScreenshotsIpadLight.Nostalgia,
      },
      {
        altText: 'Seventies look, iPad',
        dark: ScreenshotsIpadDark.Seventies,
        light: ScreenshotsIpadLight.Seventies,
      },
      {
        altText: 'Retro look, iPad',
        dark: ScreenshotsIpadDark.Retro,
        light: ScreenshotsIpadLight.Retro,
      },
      {
        altText: 'Travel look, iPad',
        dark: ScreenshotsIpadDark.Travel,
        light: ScreenshotsIpadLight.Travel,
      },
      {
        altText: 'Grit look, iPad',
        dark: ScreenshotsIpadDark.Grit,
        light: ScreenshotsIpadLight.Grit,
      },
      {
        altText: 'Silver look, iPad',
        dark: ScreenshotsIpadDark.Silver,
        light: ScreenshotsIpadLight.Silver,
      },
      {
        altText: 'Tungsten look, iPad',
        dark: ScreenshotsIpadDark.Tungsten,
        light: ScreenshotsIpadLight.Tungsten,
      },
      {
        altText: 'Amber look, iPad',
        dark: ScreenshotsIpadDark.Amber,
        light: ScreenshotsIpadLight.Amber,
      },
      {
        altText: 'Snapshot look, iPad',
        dark: ScreenshotsIpadDark.Snapshot,
        light: ScreenshotsIpadLight.Snapshot,
      },
      {
        altText: 'Bleach look, iPad',
        dark: ScreenshotsIpadDark.Bleach,
        light: ScreenshotsIpadLight.Bleach,
      },
      {
        altText: 'Favorite looks, iPad',
        dark: ScreenshotsIpadDark.Favorites,
        light: ScreenshotsIpadLight.Favorites,
      },
      {
        altText: 'Locked Pro looks, iPad',
        dark: ScreenshotsIpadDark.Free,
        light: ScreenshotsIpadLight.Free,
      },
      {
        altText: 'insters Pro paywall, iPad',
        dark: ScreenshotsIpadDark.Paywall,
        light: ScreenshotsIpadLight.Paywall,
      },
      {
        altText: 'Settings, iPad',
        dark: ScreenshotsIpadDark.Settings,
        light: ScreenshotsIpadLight.Settings,
      },
    ],
    iphone: [
      {
        altText: 'Start screen, iPhone',
        dark: ScreenshotsIphoneDark.Start,
        light: ScreenshotsIphoneLight.Start,
      },
      {
        altText: 'Original photo, iPhone',
        dark: ScreenshotsIphoneDark.Original,
        light: ScreenshotsIphoneLight.Original,
      },
      {
        altText: 'Vibrant look, iPhone',
        dark: ScreenshotsIphoneDark.Vibrant,
        light: ScreenshotsIphoneLight.Vibrant,
      },
      {
        altText: 'Noir look, iPhone',
        dark: ScreenshotsIphoneDark.Noir,
        light: ScreenshotsIphoneLight.Noir,
      },
      {
        altText: 'Nostalgia look, iPhone',
        dark: ScreenshotsIphoneDark.Nostalgia,
        light: ScreenshotsIphoneLight.Nostalgia,
      },
      {
        altText: 'Seventies look, iPhone',
        dark: ScreenshotsIphoneDark.Seventies,
        light: ScreenshotsIphoneLight.Seventies,
      },
      {
        altText: 'Retro look, iPhone',
        dark: ScreenshotsIphoneDark.Retro,
        light: ScreenshotsIphoneLight.Retro,
      },
      {
        altText: 'Travel look, iPhone',
        dark: ScreenshotsIphoneDark.Travel,
        light: ScreenshotsIphoneLight.Travel,
      },
      {
        altText: 'Grit look, iPhone',
        dark: ScreenshotsIphoneDark.Grit,
        light: ScreenshotsIphoneLight.Grit,
      },
      {
        altText: 'Silver look, iPhone',
        dark: ScreenshotsIphoneDark.Silver,
        light: ScreenshotsIphoneLight.Silver,
      },
      {
        altText: 'Tungsten look, iPhone',
        dark: ScreenshotsIphoneDark.Tungsten,
        light: ScreenshotsIphoneLight.Tungsten,
      },
      {
        altText: 'Amber look, iPhone',
        dark: ScreenshotsIphoneDark.Amber,
        light: ScreenshotsIphoneLight.Amber,
      },
      {
        altText: 'Snapshot look, iPhone',
        dark: ScreenshotsIphoneDark.Snapshot,
        light: ScreenshotsIphoneLight.Snapshot,
      },
      {
        altText: 'Bleach look, iPhone',
        dark: ScreenshotsIphoneDark.Bleach,
        light: ScreenshotsIphoneLight.Bleach,
      },
      {
        altText: 'Favorite looks, iPhone',
        dark: ScreenshotsIphoneDark.Favorites,
        light: ScreenshotsIphoneLight.Favorites,
      },
      {
        altText: 'Locked Pro looks, iPhone',
        dark: ScreenshotsIphoneDark.Free,
        light: ScreenshotsIphoneLight.Free,
      },
      {
        altText: 'insters Pro paywall, iPhone',
        dark: ScreenshotsIphoneDark.Paywall,
        light: ScreenshotsIphoneLight.Paywall,
      },
      {
        altText: 'Settings, iPhone',
        dark: ScreenshotsIphoneDark.Settings,
        light: ScreenshotsIphoneLight.Settings,
      },
    ],
  },
  status: {
    date: new Date('2022-04-06'),
    type: PROJECT_STATUS.launched,
  },
  summaryHeading: 'One photo. One tap.',
  tasks: [
    'Conception and development',
    'User interface development',
    'Film look algorithms with Core Image',
    'Implementation of in-app purchases',
    'Ad integration with consent management',
    'Automated App Store and portfolio screenshots',
  ],
  theme: {
    accent: { dark: '#f4b400', light: '#f4b400' },
    accentText: { dark: '#f4b400', light: '#7a5400' },
    background: { dark: '#121210', light: '#fbf8ef' },
    backgroundSecondary: { dark: '#1b1a15', light: '#f4ecd6' },
    onAccent: { dark: '#0b0b0c', light: '#0b0b0c' },
    text: { dark: '#f5f1e6', light: '#0b0b0c' },
  },
  titleImage: {
    altText: 'insters on iPad and iPhone',
    dark: InstersPreviews.titleDark,
    light: InstersPreviews.titleLight,
  },
} as const

export { INSTERS }
