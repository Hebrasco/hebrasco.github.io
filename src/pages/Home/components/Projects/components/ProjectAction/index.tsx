import { ExternalLink } from 'components/ui'
import React, { useMemo } from 'react'

import styles from './index.module.css'

interface Props {
  to?: string
  label: string
  filled?: boolean
  colors: {
    foreground: string
    background: string
  }
}

export function Action({
  to,
  label,
  filled = false,
  colors,
}: Props): JSX.Element | null {
  const colorStyles = useMemo(
    () =>
      filled
        ? {
            backgroundColor: colors.background,
            color: colors.foreground,
          }
        : {
            borderColor: colors.background,
            color: colors.background,
          },
    [filled, colors]
  )

  const buttonClass = useMemo(
    () =>
      filled
        ? styles['project-action-button-primary']
        : styles['project-action-button-secondary'],
    [filled]
  )

  if (!to) return null

  return (
    <ExternalLink to={to} className={buttonClass} style={colorStyles}>
      {label}
    </ExternalLink>
  )
}
