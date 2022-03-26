import IPreviewImage from 'interfaces/IPreviewImage'

export default class PreviewImageModel implements IPreviewImage {
  id: string
  source: string
  className: string

  constructor(id: string, source: string, className: string) {
    this.id = id
    this.source = source
    this.className = className
  }
}
