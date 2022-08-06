import { ExternalLink } from 'components/ui'
import React from 'react'
import { Button } from 'react-bootstrap'

interface Props {
  to: string | undefined
  label: string
  className?: string
  filled?: boolean
}

export default function Action({
  to,
  label,
  className = '',
  filled = false,
}: Props): JSX.Element {
  if (to) {
    return (
      <ExternalLink
        button
        to={to}
        className={`${filled ? 'btn-dark' : 'btn-outline-dark'} ${className}`}
      >
        {label}
      </ExternalLink>
    )
  }

  return (
    <Button
      variant={`${filled ? 'dark' : 'outline-dark'}`}
      disabled
      className={className}
    >
      {label}
    </Button>
  )
}
