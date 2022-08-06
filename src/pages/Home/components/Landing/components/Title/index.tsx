import styles from './index.module.css'

import React from 'react'
import { conditionalStyle } from 'utils'
import { JOB_NAME, PORTFOLIO_NAME } from 'data/config'

interface TitleProps {
  isXs: boolean
}

export default function Title({ isXs = false }: TitleProps) {
  const baseStyle = 'landing-title-container'
  const name = PORTFOLIO_NAME.split(' ')[0]

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
          <p className="fw-light">{JOB_NAME}</p>
        </div>
      </div>
    </div>
  )
}
