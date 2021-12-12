import ILanguage from 'interfaces/ILanguage'

export default class LanguageModel implements ILanguage {
  name: string
  variant: string

  constructor(name: string, variant: string) {
    this.name = name
    this.variant = variant
  }
}
