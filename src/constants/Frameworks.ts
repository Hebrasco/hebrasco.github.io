import Framework from 'models/FrameworkModel'

export const FRAMEWORKS = {
  ios: {
    ios: new Framework('iOS'),
    uiKit: new Framework('UIKit'),
    swiftUI: new Framework('SwiftUI'),
    localNotifications: new Framework('Local Notifications'),
    widgetKit: new Framework('WidgetKit'),
    storeKit: new Framework('StoreKit'),
    coreData: new Framework('Core Data'),
  },

  crossPlatform: {
    reactNative: new Framework('React Native'),
  },

  web: {
    bootstrap: new Framework('Bootstrap'),
    react: new Framework('React'),
    reactRedux: new Framework('React Redux'),
    dotNet: new Framework('.Net'),
    angular: new Framework('Angular'),
    materialUI: new Framework('MaterialUI'),
  },
}
