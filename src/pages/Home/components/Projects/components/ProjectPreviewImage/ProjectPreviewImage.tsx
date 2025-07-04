import { MISC } from 'data'
import { useColorScheme } from 'hooks'
import { Image } from 'react-bootstrap'
import styles from './ProjectPreviewImage.module.css'
import type { PreviewImage } from 'types/PreviewImage'

interface Props {
  image: PreviewImage
}

function ProjectPreviewImage({ image }: Props) {
  const colorScheme = useColorScheme()
  const isLightScheme = colorScheme === MISC.colorSchemes.light
  const { dark, light } = image

  return (
    <div className={`d-flex justify-content-center ${styles['preview-image-container']}`}>
      <Image
        alt={isLightScheme ? light.altText : dark.altText}
        className={styles['preview-image']}
        loading="lazy"
        src={isLightScheme ? light.src : dark.src}
      />
    </div>
  )
}

export { ProjectPreviewImage }
