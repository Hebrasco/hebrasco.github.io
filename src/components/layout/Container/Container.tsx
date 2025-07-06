import { conditionalStyle } from 'utils'
import styles from './Container.module.css'
import type { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  className?: string
  fluid?: boolean
}

function Container({ children, className, fluid = false }: Props) {
  return (
    <div className={`${className ?? ''} ${conditionalStyle(!fluid, styles.container)}`}>
      {children}
    </div>
  )
}

export { Container }
