import MeImage from 'assets/images/me.webp'
import { useWindowSize } from 'hooks'
import { IMAGE_BASE_STYLE } from 'pages/Home/components/Landing/components/LandingImage/constants/baseStyle'
import { conditionalStyle } from 'utils'
import styles from './LandingImage.module.css'

function LandingImage() {
  const { isXs, isSm } = useWindowSize()

  return (
    <img
      alt="Owner of this portfolio"
      className={`
        ${styles[IMAGE_BASE_STYLE]}
        ${conditionalStyle(isXs, styles[`${IMAGE_BASE_STYLE}-xs`])}
        ${conditionalStyle(isSm, styles[`${IMAGE_BASE_STYLE}-sm`])}
      `}
      fetchPriority="high"
      height="100%"
      loading="lazy"
      src={MeImage}
      width="auto"
    />
  )
}

export { LandingImage }
