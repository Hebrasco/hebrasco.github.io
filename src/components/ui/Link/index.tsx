import React, { CSSProperties, MouseEvent } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { conditionalStyle } from 'utils'

interface Props {
  to: string
  label: string
  navItem?: boolean
  className?: string
  style?: CSSProperties
}

export function Link({
  to,
  label,
  navItem = false,
  className = '',
  style,
}: Props) {
  function handleClick(event: MouseEvent<HTMLElement>) {
    event.stopPropagation()
  }

  return (
    <RouterLink
      to={to}
      className={`${conditionalStyle(
        navItem,
        'text-decoration-none'
      )} ${className}`}
      style={style}
      onClick={handleClick}
    >
      {label}
    </RouterLink>
  )
}
