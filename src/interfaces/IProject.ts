import ILanguage from './ILanguage'
import IFramework from './IFramework'

export default interface IProject {
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
}
