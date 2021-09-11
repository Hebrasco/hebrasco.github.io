import { BadgeVariants } from './BadgeVariants'

export const Frameworks = {
  // iOS
  ios: {
    ios: { name: 'iOS', variant: BadgeVariants.primary },
    uiKit: { name: 'UIKit', variant: BadgeVariants.primary },
    swiftUI: { name: 'SwiftUI', variant: BadgeVariants.primary },
    localNotifications: {
      name: 'Local Notifications',
      variant: BadgeVariants.primary,
    },
    widgetKit: { name: 'WidgetKit', variant: BadgeVariants.primary },
    storeKit: { name: 'StoreKit', variant: BadgeVariants.primary },
    coreData: { name: 'Core Data', variant: BadgeVariants.primary },
  },

  // Android
  android: { android: { name: 'Android', variant: BadgeVariants.secondary } },

  // Cross-Plattform (Hybrid)
  crossPlattform: {
    reactNative: { name: 'React Native', variant: BadgeVariants.success },
    flutter: { name: 'Flutter', variant: BadgeVariants.success },
  },

  // Web
  web: {
    react: { name: 'React', variant: BadgeVariants.success },
    reactRedux: { name: 'React Redux', variant: BadgeVariants.success },
    wordpress: { name: 'Wordpress', variant: BadgeVariants.success },
    opencart: { name: 'OpenCart', variant: BadgeVariants.success },
  },

  // Other
  other: {
    vr: { name: 'VR', variant: BadgeVariants.dark },
    javaFx: { name: 'Java FX', variant: BadgeVariants.secondary },
    fxgl: { name: 'FXGL', variant: BadgeVariants.secondary },
    steam: { name: 'Steam', variant: BadgeVariants.dark },
    sqLite: { name: 'SQLite', variant: BadgeVariants.warning },
  },
}
