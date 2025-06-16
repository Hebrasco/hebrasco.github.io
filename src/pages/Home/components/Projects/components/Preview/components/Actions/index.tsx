import { Action } from 'pages/Home/components/Projects/components/ProjectAction'
import React, { MouseEvent } from 'react'

import styles from './index.module.css'
import { ROUTES } from 'data'
import { conditionalStyle } from 'utils'

interface Props {
  onToggleDetails: (event: MouseEvent<HTMLElement>) => void
  projectId: string
  isDetailShown: boolean
  colors: {
    foreground: string
    background: string
  }
}

export function Actions({
  projectId,
  colors,
  isDetailShown,
  onToggleDetails: handleToggleDetails,
}: Props): JSX.Element {
  const projectRoute = ROUTES.project.replace(':projectId', projectId)

  return (
    <div
      className="mt-4 mt-md-5 d-flex justify-content-space-between"
      style={{ height: 38 }}
    >
      <Action to={projectRoute} label="View" colors={colors} filled />
      <i
        className={`bi bi-plus ${
          styles['preview-action-button-details']
        } ${conditionalStyle(
          isDetailShown,
          styles['preview-action-button-details-active']
        )}`}
        onClick={handleToggleDetails}
        style={{
          backgroundColor: colors.background,
          color: colors.foreground,
        }}
      />
    </div>
  )
}
