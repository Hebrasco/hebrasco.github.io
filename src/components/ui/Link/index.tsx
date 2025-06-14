import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { conditionalStyle } from 'utils'

interface Props {
  to: string
  label: string
  navItem?: boolean
  footerItem?: boolean
  button?: boolean
  className?: string
}

export function Link({
  to,
  label,
  navItem = false,
  footerItem = false,
  button = false,
  className = '',
}: Props) {
  return (
    <RouterLink
      to={to}
      className={`
        ${conditionalStyle(navItem, 'nav-item nav-link')}
        ${conditionalStyle(footerItem, 'pe-3 py-2')}
        ${conditionalStyle(button, 'btn')}
        text-decoration-none ${className}
      `}
    >
      {label}
    </RouterLink>
  )
}
