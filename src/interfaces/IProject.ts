import ISkill from './ISkill'
import PreviewImage from 'models/PreviewImageModel'

export default interface IProject {
  name: string
  description: string
  tasks: string[]
  languages: ISkill[]
  frameworks: ISkill[]
  onlineURL?: string
  sourceURL?: string
  previewImages?: PreviewImage[]
  isComingSoon: boolean
}
