import { Action } from 'pages/Home/components/Projects/components/ProjectAction'
import React from 'react'

import { useWindowSize } from 'hooks'

import styles from './index.module.css'

interface Props {
  onlineURL?: string
  sourceURL?: string
  colors: {
    foreground: string
    background: string
  }
}

export function Actions({ onlineURL, sourceURL, colors }: Props): JSX.Element {
  const { isXs, isSm } = useWindowSize()
  const isMobile = isXs || isSm

  return (
    <div className="mt-5 d-flex gap-3">
      {isMobile ? (
        <i
          className={`bi bi-plus-circle-fill ${styles['preview-action-button-mobile']}`}
          onClick={() => console.log('aa')}
        />
      ) : (
        <>
          <Action to={onlineURL} label="View" colors={colors} filled />
          <Action to={sourceURL} label="Source Code" colors={colors} />
        </>
      )}
    </div>
  )
}
