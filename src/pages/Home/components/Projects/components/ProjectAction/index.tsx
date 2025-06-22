import { ExternalLink } from 'components/ui'
import React from 'react'

interface Props {
  to?: string
  label: string
  filled?: boolean
}

export function Action({
  to,
  label,
  filled = false,
}: Props): JSX.Element | null {
  if (!to) return null

  return (
    <ExternalLink
      button
      to={to}
      className={filled ? 'btn-dark' : 'btn-outline-dark'}
    >
      {label}
    </ExternalLink>
  )
}
