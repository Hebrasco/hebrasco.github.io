import { BADGE_VARIANTS } from './BadgeVariants'
import Framework from 'models/FrameworkModel'

export const FRAMEWORKS = {
  ios: {
    ios: new Framework('iOS', BADGE_VARIANTS.primary),
    uiKit: new Framework('UIKit', BADGE_VARIANTS.primary),
    swiftUI: new Framework('SwiftUI', BADGE_VARIANTS.primary),
    localNotifications: new Framework(
      'Local Notifications',
      BADGE_VARIANTS.primary
    ),
    widgetKit: new Framework('WidgetKit', BADGE_VARIANTS.primary),
    storeKit: new Framework('StoreKit', BADGE_VARIANTS.primary),
    coreData: new Framework('Core Data', BADGE_VARIANTS.primary),
  },

  android: { android: new Framework('Android', BADGE_VARIANTS.secondary) },

  crossPlatform: {
    reactNative: new Framework('React Native', BADGE_VARIANTS.success),
  },

  web: {
    react: new Framework('React', BADGE_VARIANTS.success),
    reactRedux: new Framework('React Redux', BADGE_VARIANTS.success),
    dotNet: new Framework('.Net', BADGE_VARIANTS.dark),
    angular: new Framework('Angular', BADGE_VARIANTS.dark),
    materialUI: new Framework('MaterialUI', BADGE_VARIANTS.success),
  },
}
