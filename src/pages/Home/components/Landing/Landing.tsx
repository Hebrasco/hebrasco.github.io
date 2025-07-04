import { LandingImage, LandingTitle, ScrollDownIcon } from './components'
import styles from './Landing.module.css'

function Landing() {
  return (
    <div className={styles.landingContainer}>
      <LandingTitle />
      <LandingImage />
      <ScrollDownIcon />
    </div>
  )
}

export { Landing }
