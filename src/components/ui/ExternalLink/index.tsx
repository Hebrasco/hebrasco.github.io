import styles from './index.module.css'

import React, { ReactElement } from 'react'
import { conditionalStyle, renderChildren } from 'utils'

interface Props {
  children: ReactElement | ReactElement[] | string
  to: string
  className?: string
  fullWidth?: boolean
  navItem?: boolean
  button?: boolean
}

export default function ExternalLink({
  children,
  to,
  className = '',
  fullWidth = true,
  navItem = false,
  button = false,
}: Props) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-decoration-none 
        ${conditionalStyle(navItem, 'nav-item nav-link')} 
        ${conditionalStyle(!fullWidth, styles['external-account-link'])}
        ${conditionalStyle(button, 'btn')}
        ${className}
      `}
    >
      {renderChildren(children)}
    </a>
  )
}
