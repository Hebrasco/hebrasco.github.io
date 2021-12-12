import IApplication from 'interfaces/IApplication'

export default class ApplicationModel implements IApplication {
  name: string
  variant: string

  constructor(name: string, variant: string) {
    this.name = name
    this.variant = variant
  }
}
