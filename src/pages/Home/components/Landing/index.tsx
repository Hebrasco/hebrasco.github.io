import styles from './index.module.css'

import React from 'react'
import { useWindowSize } from 'utils/hooks'
import { Title, Image, ScrollDownIcon } from './components'

export default function Landing(): JSX.Element {
  const { isXs, isSm } = useWindowSize()

  return (
    <div className={styles.landingContainer}>
      <Title isXs={isXs} />
      <Image isXs={isXs} isSm={isSm} />
      <ScrollDownIcon />
    </div>
  )
}
