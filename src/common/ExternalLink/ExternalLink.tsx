import React, { ReactElement } from 'react'
import { conditionalStyle, renderChildren } from 'utils/helpers'

import './ExternalLink.css'

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
      ${conditionalStyle(!fullWidth, 'external-account-link')}
      ${conditionalStyle(button, 'btn')}
      ${className}`}
    >
      {renderChildren(children)}
    </a>
  )
}
