import { ApplicationCollection } from 'types'

const APPLICATIONS: ApplicationCollection = {
  xcode: { name: 'Xcode' },
  git: { name: 'Git' },
  gitTower: { name: 'GitTower' },
  gitHub: { name: 'GitHub' },
  vsCode: { name: 'VS Code' },
  vs: { name: 'Visual Studio' },
  jira: { name: 'Jira' },
} as const

export default APPLICATIONS
