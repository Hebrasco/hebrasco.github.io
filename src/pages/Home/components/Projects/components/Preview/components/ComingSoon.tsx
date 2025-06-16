import React from 'react'

interface Props {
  isComingSoon: boolean
  color?: string
}

export function ComingSoon({ isComingSoon, color }: Props): JSX.Element | null {
  if (!isComingSoon) return null
  return <p style={{ color }}>Coming Soon</p>
}
