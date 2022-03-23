import ISkill from './ISkill'

export default interface IProject {
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
  preview?: Function
}
