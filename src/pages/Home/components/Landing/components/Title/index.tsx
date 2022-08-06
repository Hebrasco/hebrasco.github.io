import { CONFIG } from 'data'
import React from 'react'
import { conditionalStyle } from 'utils'

import styles from './index.module.css'

interface TitleProps {
  isXs: boolean
}

export default function Title({ isXs = false }: TitleProps) {
  const baseStyle = 'landing-title-container'
  const name = CONFIG.profile.name.split(' ')[0]

  return (
    <div
      className={`
        ${styles[baseStyle]}
        ${conditionalStyle(isXs, styles[`${baseStyle}-xs`])}
      `}
    >
      <div>
        <div className={styles['landing-title']}>
          <h1>Hi, I am</h1>
          <h1>{name}</h1>
          <p className="fw-light">{CONFIG.profile.jobTitle}</p>
        </div>
      </div>
    </div>
  )
}
