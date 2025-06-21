import { ExternalLink, Link } from 'components/ui'
import React, { useMemo } from 'react'

import styles from './index.module.css'

interface Props {
  to?: string
  label: string
  className?: string
  filled?: boolean
  externalLink?: boolean
  colors?: {
    foreground: string
    background: string
  }
}

export function Action({
  to,
  label,
  filled = false,
  colors,
  className,
  externalLink = false,
}: Props): JSX.Element | null {
  const colorStyles = useMemo(() => {
    if (!colors) return

    if (filled)
      return {
        backgroundColor: colors.background,
        color: colors.foreground,
      }
    return {
      borderColor: colors.background,
      color: colors.background,
    }
  }, [filled, colors])

  const buttonClass = useMemo(
    () =>
      filled
        ? styles['project-action-button-primary']
        : styles['project-action-button-secondary'],
    [filled]
  )

  if (!to) return null

  if (externalLink) {
    return (
      <ExternalLink
        to={to}
        className={`${buttonClass} ${className}`}
        style={colorStyles}
      >
        {label}
      </ExternalLink>
    )
  }
  return (
    <Link
      to={to}
      className={`${buttonClass} ${className}`}
      style={colorStyles}
      label={label}
    />
  )
}
