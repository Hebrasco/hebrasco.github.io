import ISkill from 'interfaces/ISkill'

export default class LanguageModel implements ISkill {
  name: string

  constructor(name: string) {
    this.name = name
  }
}
