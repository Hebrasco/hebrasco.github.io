import ISkill from 'components/interfaces/ISkill'

export default class FrameworkModel implements ISkill {
  name: string

  constructor(name: string) {
    this.name = name
  }
}
