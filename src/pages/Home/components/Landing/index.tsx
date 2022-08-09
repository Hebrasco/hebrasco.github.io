import { useWindowSize } from 'hooks'
import React from 'react'
import { Image, ScrollDownIcon, Title } from './components'

import styles from './index.module.css'

export function Landing(): JSX.Element {
  const { isXs, isSm } = useWindowSize()

  return (
    <div className={styles.landingContainer}>
      <Title isXs={isXs} />
      <Image isXs={isXs} isSm={isSm} />
      <ScrollDownIcon />
    </div>
  )
}
