import React, { CSSProperties, PropsWithChildren } from 'react'
import { conditionalStyle } from 'utils'

import styles from './index.module.css'

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
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        ${conditionalStyle(!fullWidth, styles['external-account-link'])}
        ${conditionalStyle(button, 'btn')}
        ${className}
      `}
      style={style}
    >
      {children}
    </a>
  )
}
