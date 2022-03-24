import ISkill from './ISkill'

export default interface IProject {
  name: string
  description: string
  tasks: string[]
  languages: ISkill[]
  frameworks: ISkill[]
  onlineURL?: string
  sourceURL?: string
  preview?: Function
}
