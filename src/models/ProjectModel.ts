import IProject from 'interfaces/IProject'
import ILanguage from 'interfaces/ILanguage'
import IFramework from 'interfaces/IFramework'

export default class ProjectModel implements IProject {
  highlighted: boolean
  name: string
  image: string
  timePeriod: string
  description: string
  tasks: string[]
  languages: ILanguage[]
  frameworks: IFramework[]
  onlineURL?: string
  sourceURL?: string

  constructor(
    highlighted: boolean,
    name: string,
    image: string,
    timePeriod: string,
    description: string,
    tasks: string[],
    languages: ILanguage[],
    frameworks: IFramework[],
    onlineURL?: string,
    sourceURL?: string
  ) {
    this.highlighted = highlighted
    this.name = name
    this.image = image
    this.timePeriod = timePeriod
    this.description = description
    this.tasks = tasks
    this.languages = languages
    this.frameworks = frameworks
    this.onlineURL = onlineURL
    this.sourceURL = sourceURL
  }
}
