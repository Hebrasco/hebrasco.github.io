import ISkill from 'interfaces/ISkill'

export default class FrameworkModel implements ISkill {
  name: string

  constructor(name: string) {
    this.name = name
  }
}
