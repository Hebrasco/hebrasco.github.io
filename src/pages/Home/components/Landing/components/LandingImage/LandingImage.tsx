import { useWindowSize } from 'hooks'
import { IMAGE_BASE_STYLE } from 'pages/Home/components/Landing/components/LandingImage/constants/baseStyle'
import { conditionalStyle } from 'utils'
import styles from './LandingImage.module.css'

function LandingImage() {
  const { isXs, isSm } = useWindowSize()

  return (
    <div
      className={`
        ${styles[IMAGE_BASE_STYLE]}
        ${conditionalStyle(isXs, styles[`${IMAGE_BASE_STYLE}-xs`])}
        ${conditionalStyle(isSm, styles[`${IMAGE_BASE_STYLE}-sm`])}
      `}
    />
  )
}

export { LandingImage }
