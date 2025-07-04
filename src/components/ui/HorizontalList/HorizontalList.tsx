import styles from './HorizontalList.module.css'
import type { PropsWithChildren } from 'react'

function HorizontalList({ children }: PropsWithChildren) {
  return (
    <div className={styles['horizontal-list-scroll-container']}>
      <div className={styles['horizontal-list-container']}>
        <ul className={styles['horizontal-list-container-card-set']}>{children}</ul>
      </div>
    </div>
  )
}

export { HorizontalList }
