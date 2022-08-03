import React from 'react'

interface Props {
  show: boolean
}

export default function LoadingSpinner({ show }: Props): JSX.Element | null {
  if (!show) return null

  return (
    <div className="ms-auto">
      <div className="spinner-border" role="status"></div>
    </div>
  )
}
