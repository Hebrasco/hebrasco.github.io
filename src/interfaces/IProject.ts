import ISkill from './ISkill'
import PreviewImage from 'models/PreviewImageModel'

export default interface IProject {
  name: string
  description: string
  tasks: readonly string[]
  languages: readonly ISkill[]
  frameworks: readonly ISkill[]
  onlineURL?: string
  sourceURL?: string
  previewImages?: readonly PreviewImage[]
  isComingSoon: boolean
}
