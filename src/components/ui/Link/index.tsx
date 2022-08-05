import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import conditionalStyle from 'utils/conditionalStyle'

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
    <RouterLink
      to={to}
      // smooth
      className={`
        ${conditionalStyle(navItem, 'nav-item nav-link', 'pe-3 py-2')} 
        ${conditionalStyle(button, 'btn')} 
        text-decoration-none ${className}
      `}
    >
      {label}
    </RouterLink>
  )
}
