import { FrameworkCollection } from 'types'

export const FRAMEWORKS: FrameworkCollection = {
  apple: {
    uiKit: { name: 'UIKit' },
    swiftUI: { name: 'SwiftUI' },
    swiftCharts: { name: 'Swift Charts' },
    swiftData: { name: 'SwiftData' },
    notifications: { name: 'Notifications' },
    widgetKit: { name: 'WidgetKit' },
    storeKit: { name: 'StoreKit' },
    coreData: { name: 'Core Data' },
    metal: { name: 'Metal' },
    coreImage: { name: 'Core Image' },
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
  other: {
    ci: { name: 'CI/CD' },
  },
} as const
