import IPreviewImage from 'components/interfaces/IPreviewImage'

export default class PreviewImageModel implements IPreviewImage {
  id: string
  sourceLight: string
  sourceDark: string

  constructor(id: string, sourceLight: string, sourceDark: string) {
    this.id = id
    this.sourceLight = sourceLight
    this.sourceDark = sourceDark
  }
}
