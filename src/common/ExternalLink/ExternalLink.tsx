import React, { ReactElement } from 'react'
import { renderChildren } from 'utils/helpers'

import './ExternalLink.css'

interface Props {
  children: ReactElement | ReactElement[]
  to: string
  className?: string
  fullWidth?: boolean
  navLink?: boolean
}

export default function ExternalLink({
  children,
  to,
  className = '',
  fullWidth = true,
  navLink = false,
}: Props) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-decoration-none 
      ${navLink && 'nav-item nav-link'} 
      ${!fullWidth && 'external-account-link'} ${className}`}
    >
      {renderChildren(children)}
    </a>
  )
}
