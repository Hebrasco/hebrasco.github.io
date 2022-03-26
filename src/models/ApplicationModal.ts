import ISkill from 'interfaces/ISkill'

export default class ApplicationModel implements ISkill {
  name: string

  constructor(name: string) {
    this.name = name
  }
}
