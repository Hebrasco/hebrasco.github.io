import { useScrollSnapAlign } from 'hooks'
import { conditionalStyle } from 'utils'
import styles from './ListContainer.module.css'
import type { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  className?: string
  enableScaling?: boolean
}

function ListContainer({ children, className, enableScaling = false }: Props) {
  const scrollSnapAlign = useScrollSnapAlign()

  return (
    <li
      className={`${className} ${styles['list-item-container']} ${conditionalStyle(enableScaling, styles.scaling)}`}
      style={{ scrollSnapAlign }}
    >
      {children}
    </li>
  )
}

export { ListContainer }
