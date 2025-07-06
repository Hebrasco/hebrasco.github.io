import { useColorScheme } from 'hooks'
import styles from './ProjectPreviewImage.module.css'
import type { PreviewImage } from 'types/PreviewImage'

interface Props {
  image: PreviewImage
}

function ProjectPreviewImage({ image }: Props) {
  const { colorScheme } = useColorScheme()

  return (
    <div className={`d-flex justify-content-center ${styles['preview-image-container']}`}>
      <img
        alt={image[colorScheme].altText}
        className={styles['preview-image']}
        height="100%"
        loading="lazy"
        src={image[colorScheme].src}
        width="100%"
      />
    </div>
  )
}

export { ProjectPreviewImage }
