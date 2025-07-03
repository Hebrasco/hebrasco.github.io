import { useWindowSize } from 'hooks'
import { Image, ScrollDownIcon, Title } from './components'
import styles from './index.module.css'

export function Landing() {
  const { isXs, isSm } = useWindowSize()

  return (
    <div className={styles.landingContainer}>
      <Title isXs={isXs} />
      <Image isSm={isSm} isXs={isXs} />
      <ScrollDownIcon />
    </div>
  )
}
