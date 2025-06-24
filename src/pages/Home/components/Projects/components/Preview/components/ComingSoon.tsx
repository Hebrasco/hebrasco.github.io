import React from 'react'

interface Props {
  isComingSoon: boolean
}

export function ComingSoon({ isComingSoon }: Props): JSX.Element | null {
  if (!isComingSoon) return null
  return <p className="m-0">Coming Soon</p>
}
