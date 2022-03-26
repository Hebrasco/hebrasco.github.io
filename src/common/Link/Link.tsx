import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { conditionalStyle } from 'utils/helpers'

interface Props {
  to: string
  label: string
  navItem?: boolean
  button?: boolean
  className?: string
}

export default function Link({
  to,
  label,
  navItem = false,
  button = false,
  className = '',
}: Props) {
  return (
    <HashLink
      to={to}
      smooth
      className={`
        ${conditionalStyle(navItem, 'nav-item nav-link', 'pe-3 py-2')} 
        ${conditionalStyle(button, 'btn')} 
        text-decoration-none ${className}
      `}
    >
      {label}
    </HashLink>
  )
}
