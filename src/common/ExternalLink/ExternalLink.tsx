import React, { ReactElement } from 'react'
import { renderChildren } from 'utils/helpers'

import './ExternalLink.css'

interface Props {
  children: ReactElement | ReactElement[]
  to: string
  className?: string
}

export default function ExternalLink({ children, to, className = '' }: Props) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={`nav-item nav-link text-muted external-account-link ${className}`}
    >
      {renderChildren(children)}
    </a>
  )
}
