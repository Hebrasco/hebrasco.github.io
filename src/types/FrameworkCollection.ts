import Skill from 'types/Skill'

type AppleFrameworkCollection = {
  ios: Skill
  uiKit: Skill
  swiftUI: Skill
  localNotifications: Skill
  widgetKit: Skill
  storeKit: Skill
  coreData: Skill
  metal: Skill
  coreImage: Skill
  macOS: Skill
  cloudKit: Skill
}

type CrossPlatformFrameworkCollection = {
  reactNative: Skill
}

type WebFrameworkCollection = {
  bootstrap: Skill
  react: Skill
  reactRedux: Skill
  dotNet: Skill
  angular: Skill
  materialUI: Skill
}

type FrameworkCollection = {
  apple: AppleFrameworkCollection
  crossPlatform: CrossPlatformFrameworkCollection
  web: WebFrameworkCollection
}

export default FrameworkCollection
