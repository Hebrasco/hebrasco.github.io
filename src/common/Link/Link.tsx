import React from 'react'
import { HashLink } from 'react-router-hash-link'

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
      className={`${navItem && 'nav-item nav-link'} ${
        button && 'btn mx-3'
      } text-decoration-none ${className && className}`}
    >
      {label}
    </HashLink>
  )
}
