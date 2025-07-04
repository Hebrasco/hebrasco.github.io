import { useColorScheme } from 'hooks'
import { Image } from 'react-bootstrap'
import styles from './ProjectPreviewImage.module.css'
import type { PreviewImage } from 'types/PreviewImage'

interface Props {
  image: PreviewImage
}

function ProjectPreviewImage({ image }: Props) {
  const { colorScheme } = useColorScheme()

  return (
    <div className={`d-flex justify-content-center ${styles['preview-image-container']}`}>
      <Image
        alt={image[colorScheme].altText}
        className={styles['preview-image']}
        loading="lazy"
        src={image[colorScheme].src}
      />
    </div>
  )
}

export { ProjectPreviewImage }
