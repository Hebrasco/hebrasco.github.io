import IFramework from 'interfaces/IFramework'

export default class FrameworkModel implements IFramework {
  name: string
  variant: string

  constructor(name: string, variant: string) {
    this.name = name
    this.variant = variant
  }
}
