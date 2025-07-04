import type { ApplicationCollection } from 'types'

const APPLICATIONS: ApplicationCollection = {
  git: { name: 'Git' },
  gitHub: { name: 'GitHub' },
  gitTower: { name: 'GitTower' },
  jira: { name: 'Jira' },
  vs: { name: 'Visual Studio' },
  vsCode: { name: 'VS Code' },
  xcode: { name: 'Xcode' },
} as const

export { APPLICATIONS }
