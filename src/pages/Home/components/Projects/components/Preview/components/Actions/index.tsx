import React, { MouseEvent } from 'react'

import styles from './index.module.css'
import { conditionalStyle } from 'utils'

interface Props {
  onToggleDetails: (event: MouseEvent<HTMLElement>) => void
  isDetailShown: boolean
}

export function Actions({
  isDetailShown,
  onToggleDetails: handleToggleDetails,
}: Props): JSX.Element {
  return (
    <div
      className="mt-4 mt-md-5 d-flex justify-content-space-between"
      style={{ height: 38 }}
    >
      <i
        className={`bi bi-plus ${
          styles['preview-action-button-details']
        } ${conditionalStyle(
          isDetailShown,
          styles['preview-action-button-details-active']
        )}`}
        onClick={handleToggleDetails}
      />
    </div>
  )
}
