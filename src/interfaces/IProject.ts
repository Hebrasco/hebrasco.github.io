import ILanguage from './ILanguage'
import IFramework from './IFramework'

export default interface IProject {
  highlighted: boolean
  shortName: string
  name: string
  image: string
  timePeriod: string
  description: string
  tasks: string[]
  languages: ILanguage[]
  frameworks: IFramework[]
  onlineURL?: string
  sourceURL?: string
}
