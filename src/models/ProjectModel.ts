import IProject from 'interfaces/IProject'
import ISkill from 'interfaces/ISkill'

export default class ProjectModel implements IProject {
  name: string
  description: string
  tasks: string[]
  languages: ISkill[]
  frameworks: ISkill[]
  onlineURL?: string
  sourceURL?: string
  preview?: Function

  constructor(
    name: string,
    description: string,
    tasks: string[],
    languages: ISkill[],
    frameworks: ISkill[],
    onlineURL?: string,
    sourceURL?: string,
    preview?: Function
  ) {
    this.name = name
    this.description = description
    this.tasks = tasks
    this.languages = languages
    this.frameworks = frameworks
    this.onlineURL = onlineURL
    this.sourceURL = sourceURL
    this.preview = preview
  }
}
