import IProject from 'interfaces/IProject'
import ISkill from 'interfaces/ISkill'

export default class ProjectModel implements IProject {
  highlighted: boolean
  shortName: string
  name: string
  image: string
  description: string
  tasks: string[]
  languages: ISkill[]
  frameworks: ISkill[]
  onlineURL?: string
  sourceURL?: string

  constructor(
    highlighted: boolean,
    shortName: string | null,
    name: string,
    image: string,
    description: string,
    tasks: string[],
    languages: ISkill[],
    frameworks: ISkill[],
    onlineURL?: string,
    sourceURL?: string
  ) {
    this.highlighted = highlighted
    this.shortName = shortName ?? name
    this.name = name
    this.image = image
    this.description = description
    this.tasks = tasks
    this.languages = languages
    this.frameworks = frameworks
    this.onlineURL = onlineURL
    this.sourceURL = sourceURL
  }
}
