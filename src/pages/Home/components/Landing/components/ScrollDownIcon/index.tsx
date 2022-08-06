import styles from './index.module.css'

import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from 'data'

export default function ScrollDownIcon() {
  return (
    <div className={styles['scroll-down-icon-container']}>
      <Link to={ROUTES.aboutMe}>
        <div className={styles['scroll-down-icon']}></div>
      </Link>
    </div>
  )
}
