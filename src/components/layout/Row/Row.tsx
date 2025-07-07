import styles from './Row.module.css'
import type { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  className?: string
  gap?: number
}

function Row({ children, className, gap = 1 }: Props) {
  return (
    <div className={`${className ?? ''} ${styles.row}`} style={{ gap: `${gap}rem` }}>
      {children}
    </div>
  )
}

export { Row }
