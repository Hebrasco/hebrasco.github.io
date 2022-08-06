import { LANGUAGES } from './languages'
import { FRAMEWORKS } from './frameworks'
import { APPLICATIONS } from './applications'
import { Skill } from 'types'

export const SKILLS_LANGUAGES: readonly Skill[] = [
  LANGUAGES.swift,
  LANGUAGES.json,
  LANGUAGES.html,
  LANGUAGES.css,
  LANGUAGES.javaScript,
  LANGUAGES.typeScript,
] as const

export const SKILLS_FRAMEWORKS: readonly Skill[] = [
  FRAMEWORKS.apple.ios,
  FRAMEWORKS.apple.swiftUI,
  FRAMEWORKS.apple.uiKit,
  FRAMEWORKS.web.react,
  FRAMEWORKS.crossPlatform.reactNative,
  FRAMEWORKS.web.reactRedux,
  FRAMEWORKS.web.bootstrap,
] as const

export const SKILLS_APPLICATIONS: readonly Skill[] = [
  APPLICATIONS.xcode,
  APPLICATIONS.git,
  APPLICATIONS.gitTower,
  APPLICATIONS.gitHub,
  APPLICATIONS.vsCode,
  APPLICATIONS.jira,
] as const
