import { BADGE_VARIANTS } from './BadgeVariants'

export const FRAMEWORKS = {
  // iOS
  ios: {
    ios: { name: 'iOS', variant: BADGE_VARIANTS.primary },
    uiKit: { name: 'UIKit', variant: BADGE_VARIANTS.primary },
    swiftUI: { name: 'SwiftUI', variant: BADGE_VARIANTS.primary },
    localNotifications: {
      name: 'Local Notifications',
      variant: BADGE_VARIANTS.primary,
    },
    widgetKit: { name: 'WidgetKit', variant: BADGE_VARIANTS.primary },
    storeKit: { name: 'StoreKit', variant: BADGE_VARIANTS.primary },
    coreData: { name: 'Core Data', variant: BADGE_VARIANTS.primary },
  },

  // Android
  android: { android: { name: 'Android', variant: BADGE_VARIANTS.secondary } },

  // Cross-Platform (Hybrid)
  crossPlatform: {
    reactNative: { name: 'React Native', variant: BADGE_VARIANTS.success },
    flutter: { name: 'Flutter', variant: BADGE_VARIANTS.success },
  },

  // Web
  web: {
    react: { name: 'React', variant: BADGE_VARIANTS.success },
    reactRedux: { name: 'React Redux', variant: BADGE_VARIANTS.success },
    wordpress: { name: 'Wordpress', variant: BADGE_VARIANTS.success },
    opencart: { name: 'OpenCart', variant: BADGE_VARIANTS.success },
    dotNet: { name: '.Net', variant: BADGE_VARIANTS.dark },
    angular: { name: 'Angular', variant: BADGE_VARIANTS.dark },
    materialUI: { name: 'MaterialUI', variant: BADGE_VARIANTS.success },
  },

  // Other
  other: {
    vr: { name: 'VR', variant: BADGE_VARIANTS.dark },
    javaFx: { name: 'Java FX', variant: BADGE_VARIANTS.secondary },
    fxgl: { name: 'FXGL', variant: BADGE_VARIANTS.secondary },
    steam: { name: 'Steam', variant: BADGE_VARIANTS.dark },
    sqLite: { name: 'SQLite', variant: BADGE_VARIANTS.warning },
  },
}
