import { conditionalStyle } from 'utils'
import styles from './index.module.css'
import type { CSSProperties, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  to: string
  className?: string
  fullWidth?: boolean

  button?: boolean
  style?: CSSProperties
}

export function ExternalLink({
  children,
  to,
  className = '',
  fullWidth = true,
  button = false,
  style,
}: Props) {
  return (
    <a
      className={`
        ${conditionalStyle(!fullWidth, styles['external-account-link'])}
        ${conditionalStyle(button, 'btn')}
        ${className}
      `}
      href={to}
      rel="noopener noreferrer"
      style={style}
      target="_blank"
    >
      {children}
    </a>
  )
}
