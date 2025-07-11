import { APPLICATIONS } from './applications'
import { FRAMEWORKS } from './frameworks'
import { LANGUAGES } from './languages'
import type { Skill, SkillCollection } from 'types'

const SKILLS_LANGUAGES: readonly Skill[] = [
  LANGUAGES.swift,
  LANGUAGES.json,
  LANGUAGES.html,
  LANGUAGES.css,
  LANGUAGES.javaScript,
  LANGUAGES.typeScript,
] as const

const SKILLS_FRAMEWORKS: readonly Skill[] = [
  FRAMEWORKS.apple.swiftUI,
  FRAMEWORKS.web.react,
  FRAMEWORKS.crossPlatform.reactNative,
  FRAMEWORKS.web.reactRedux,
  FRAMEWORKS.other.ci,
] as const

const SKILLS_APPLICATIONS: readonly Skill[] = [
  APPLICATIONS.xcode,
  APPLICATIONS.git,
  APPLICATIONS.gitTower,
  APPLICATIONS.gitHub,
  APPLICATIONS.vsCode,
  APPLICATIONS.jira,
] as const

const SKILLS: SkillCollection = {
  applications: SKILLS_APPLICATIONS,
  frameworks: SKILLS_FRAMEWORKS,
  languages: SKILLS_LANGUAGES,
} as const

export { SKILLS }
