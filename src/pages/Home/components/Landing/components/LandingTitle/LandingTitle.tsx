import { CONFIG } from 'data'
import { useWindowSize } from 'hooks'
import { TITLE_BASE_STYLE } from 'pages/Home/components/Landing/components/LandingTitle/constants/baseStyle'
import { conditionalStyle } from 'utils'
import styles from './LandingTitle.module.css'

function LandingTitle() {
  const { isXs } = useWindowSize()
  const name = CONFIG.profile.name.split(' ')[0]

  return (
    <div
      className={`
        ${styles[TITLE_BASE_STYLE]}
        ${conditionalStyle(isXs, styles[`${TITLE_BASE_STYLE}-xs`])}
      `}
    >
      <div>
        <div className={styles['landing-title']}>
          <h1>Hi, I am</h1>
          <h1>{name}</h1>
          <p>{CONFIG.profile.jobTitle}</p>
        </div>
      </div>
    </div>
  )
}

export { LandingTitle }
