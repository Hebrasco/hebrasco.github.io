import { Skill } from 'types'

type AppleFrameworkCollection = {
  uiKit: Skill
  swiftUI: Skill
  swiftCharts: Skill
  swiftData: Skill
  notifications: Skill
  widgetKit: Skill
  storeKit: Skill
  coreData: Skill
  metal: Skill
  coreImage: Skill
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

export type FrameworkCollection = {
  apple: AppleFrameworkCollection
  crossPlatform: CrossPlatformFrameworkCollection
  web: WebFrameworkCollection
}
