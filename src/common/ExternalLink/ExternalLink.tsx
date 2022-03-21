import React, { ReactElement } from 'react'
import { renderChildren } from 'utils/helpers'

interface Props {
  children: ReactElement | ReactElement[]
  to: string
  className?: string
}

export default function ExternalLink({ children, to, className = '' }: Props) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {renderChildren(children)}
    </a>
  )
}
