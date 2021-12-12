import { LANGUAGES } from './Languages'
import { FRAMEWORKS } from './Frameworks'
import { APPLICATIONS } from './Applications'
import Language from 'models/LanguageModel'
import Framework from 'models/FrameworkModel'
import Application from 'models/ApplicationModal'

export const SKILLS_LANGUAGES: Language[] = [
  LANGUAGES.swift,
  LANGUAGES.json,
  LANGUAGES.html,
  LANGUAGES.css,
  LANGUAGES.javaScript,
  LANGUAGES.typeScript,
  LANGUAGES.cSharp,
]

export const SKILLS_FRAMEWORKS: Framework[] = [
  FRAMEWORKS.ios.swiftUI,
  FRAMEWORKS.ios.uiKit,
  FRAMEWORKS.ios.widgetKit,
  FRAMEWORKS.ios.storeKit,
  FRAMEWORKS.web.react,
  FRAMEWORKS.crossPlatform.reactNative,
  FRAMEWORKS.web.reactRedux,
]

export const SKILLS_APPLICATIONS: Application[] = [
  APPLICATIONS.xcode,
  APPLICATIONS.gitTower,
  APPLICATIONS.gitHub,
  APPLICATIONS.vsCode,
]
