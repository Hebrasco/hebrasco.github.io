import { Link as RouterLink } from 'react-router-dom'
import { conditionalStyle } from 'utils'
import type { CSSProperties, MouseEvent } from 'react'

interface Props {
  to: string
  label: string
  navItem?: boolean
  className?: string
  style?: CSSProperties
}

function Link({ to, label, navItem = false, className = '', style }: Props) {
  function handleClick(event: MouseEvent<HTMLElement>) {
    event.stopPropagation()
  }

  return (
    <RouterLink
      className={`${conditionalStyle(navItem, 'text-decoration-none')} ${className}`}
      onClick={handleClick}
      style={style}
      to={to}
    >
      {label}
    </RouterLink>
  )
}

export { Link }
