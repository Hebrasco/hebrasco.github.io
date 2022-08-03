import IProject from 'components/interfaces/IProject'
import ISkill from 'components/interfaces/ISkill'
import PreviewImage from './PreviewImageModel'

export default class ProjectModel implements IProject {
  name: string
  description: string
  tasks: readonly string[]
  languages: readonly ISkill[]
  frameworks: readonly ISkill[]
  onlineURL?: string
  sourceURL?: string
  previewImages?: readonly PreviewImage[]
  isComingSoon: boolean

  constructor(
    name: string,
    description: string,
    tasks: string[],
    languages: ISkill[],
    frameworks: ISkill[],
    onlineURL?: string,
    sourceURL?: string,
    previewImages?: PreviewImage[],
    isComingSoon: boolean = false
  ) {
    this.name = name
    this.description = description
    this.tasks = tasks
    this.languages = languages
    this.frameworks = frameworks
    this.onlineURL = onlineURL
    this.sourceURL = sourceURL
    this.previewImages = previewImages
    this.isComingSoon = isComingSoon
  }
}
