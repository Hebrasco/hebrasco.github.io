import IProject from 'interfaces/IProject'
import ILanguage from 'interfaces/ILanguage'
import IFramework from 'interfaces/IFramework'

export default class ProjectModel implements IProject {
  pinned: boolean
  name: string
  image: string
  timePeriod: string
  description: string
  tasks: string[]
  languages: ILanguage[]
  frameworks: IFramework[]
  onlineUrl?: string
  sourceURL?: string

  constructor(
    pinned: boolean,
    name: string,
    image: string,
    timePeriod: string,
    description: string,
    tasks: string[],
    languages: ILanguage[],
    frameworks: IFramework[],
    onlineUrl?: string,
    sourceURL?: string
  ) {
    this.pinned = pinned
    this.name = name
    this.image = image
    this.timePeriod = timePeriod
    this.description = description
    this.tasks = tasks
    this.languages = languages
    this.frameworks = frameworks
    this.onlineUrl = onlineUrl
    this.sourceURL = sourceURL
  }
}
