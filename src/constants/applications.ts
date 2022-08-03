import Application from 'models/ApplicationModal'

export const APPLICATIONS = {
  xcode: new Application('Xcode'),
  git: new Application('Git'),
  gitTower: new Application('GitTower'),
  gitHub: new Application('GitHub'),
  vsCode: new Application('VS Code'),
  vs: new Application('Visual Studio'),
  jira: new Application('Jira'),
} as const
