import { ROUTES } from 'data'
import React from 'react'
import { Link } from 'react-router-dom'

import styles from './index.module.css'

export default function ScrollDownIcon() {
  return (
    <div className={styles['scroll-down-icon-container']}>
      <Link to={ROUTES.aboutMe}>
        <div className={styles['scroll-down-icon']}></div>
      </Link>
    </div>
  )
}
