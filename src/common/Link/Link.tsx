import React from 'react'
import { HashLink } from 'react-router-hash-link'

interface Props {
  to: string
  label: string
}

export default function Link({ to, label }: Props) {
  return (
    <HashLink to={to} smooth className="nav-item nav-link text-muted">
      {label}
    </HashLink>
  )
}
