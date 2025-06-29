import type { FrameworkCollection } from 'types'

export const FRAMEWORKS: FrameworkCollection = {
  apple: {
    cloudKit: { name: 'CloudKit' },
    coreData: { name: 'Core Data' },
    coreImage: { name: 'Core Image' },
    metal: { name: 'Metal' },
    notifications: { name: 'Notifications' },
    storeKit: { name: 'StoreKit' },
    swiftCharts: { name: 'Swift Charts' },
    swiftData: { name: 'SwiftData' },
    swiftUI: { name: 'SwiftUI' },
    uiKit: { name: 'UIKit' },
    widgetKit: { name: 'WidgetKit' },
  },
  crossPlatform: {
    reactNative: { name: 'React Native' },
  },
  other: {
    ci: { name: 'CI/CD' },
  },
  web: {
    angular: { name: 'Angular' },
    bootstrap: { name: 'Bootstrap' },
    dotNet: { name: '.Net' },
    materialUI: { name: 'MaterialUI' },
    react: { name: 'React' },
    reactRedux: { name: 'React Redux' },
  },
} as const
