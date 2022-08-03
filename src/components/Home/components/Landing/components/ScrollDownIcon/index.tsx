import styles from './index.module.css'

import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { ROUTES } from 'constants/routes'

export default function ScrollDownIcon() {
  return (
    <div className={styles['scroll-down-icon-container']}>
      <HashLink to={ROUTES.aboutMe}>
        <div className={styles['scroll-down-icon']}></div>
      </HashLink>
    </div>
  )
}
