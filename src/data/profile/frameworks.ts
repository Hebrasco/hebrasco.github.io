import { FrameworkCollection } from 'types'

const FRAMEWORKS: FrameworkCollection = {
  apple: {
    ios: { name: 'iOS' },
    uiKit: { name: 'UIKit' },
    swiftUI: { name: 'SwiftUI' },
    localNotifications: { name: 'Local Notifications' },
    widgetKit: { name: 'WidgetKit' },
    storeKit: { name: 'StoreKit' },
    coreData: { name: 'Core Data' },
    metal: { name: 'Metal' },
    coreImage: { name: 'Core Image' },
    macOS: { name: 'macOS' },
    cloudKit: { name: 'CloudKit' },
  },

  crossPlatform: {
    reactNative: { name: 'React Native' },
  },

  web: {
    bootstrap: { name: 'Bootstrap' },
    react: { name: 'React' },
    reactRedux: { name: 'React Redux' },
    dotNet: { name: '.Net' },
    angular: { name: 'Angular' },
    materialUI: { name: 'MaterialUI' },
  },
} as const

export default FRAMEWORKS
