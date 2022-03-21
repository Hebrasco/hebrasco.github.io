import ISkill from 'interfaces/ISkill'

export default class FrameworkModel implements ISkill {
  name: string
  variant: string

  constructor(name: string, variant: string) {
    this.name = name
    this.variant = variant
  }
}
