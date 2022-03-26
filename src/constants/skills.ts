import { LANGUAGES } from './languages'
import { FRAMEWORKS } from './frameworks'
import { APPLICATIONS } from './applications'
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
]

export const SKILLS_FRAMEWORKS: Framework[] = [
  FRAMEWORKS.apple.ios,
  FRAMEWORKS.apple.swiftUI,
  FRAMEWORKS.apple.uiKit,
  FRAMEWORKS.web.react,
  FRAMEWORKS.crossPlatform.reactNative,
  FRAMEWORKS.web.reactRedux,
  FRAMEWORKS.web.bootstrap,
]

export const SKILLS_APPLICATIONS: Application[] = [
  APPLICATIONS.xcode,
  APPLICATIONS.git,
  APPLICATIONS.gitTower,
  APPLICATIONS.gitHub,
  APPLICATIONS.vsCode,
  APPLICATIONS.jira,
]