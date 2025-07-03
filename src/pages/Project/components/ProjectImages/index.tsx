import { MISC } from 'data'
import { useColorScheme } from 'hooks'
import { Image } from 'react-bootstrap'
import styles from './index.module.css'
import type { PreviewImage } from 'types'

interface Props {
  image: PreviewImage
}

function ProjectImages({ image }: Props) {
  const colorScheme = useColorScheme()
  const isLightScheme = colorScheme === MISC.colorSchemes.light

  return (
    <div className="d-flex align-items-end justify-content-end">
      <Image
        alt={isLightScheme ? image.light.altText : image.dark.altText}
        className={styles['project-image']}
        loading="lazy"
        src={isLightScheme ? image.light.src : image.dark.src}
      />
    </div>
  )
}

export default ProjectImages
