import React, { CSSProperties, MouseEvent } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { conditionalStyle } from 'utils'

interface Props {
  to: string
  label: string
  button?: boolean
  className?: string
  style?: CSSProperties
}

export function Link({
  to,
  label,
  button = false,
  className = '',
  style,
}: Props) {
  function handleClick(event: MouseEvent<HTMLElement>) {
    event.stopPropagation()
  }

  return (
    <RouterLink
      to={to}
      className={`
        ${conditionalStyle(button, 'btn')}
        text-decoration-none ${className}
      `}
      style={style}
      onClick={handleClick}
    >
      {label}
    </RouterLink>
  )
}
