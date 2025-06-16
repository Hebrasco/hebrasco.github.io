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
    <div className="mt-4 mt-md-5 d-flex gap-3" style={{ height: 38 }}>
      {isMobile ? (
        <i
          style={{
            backgroundColor: colors.background,
            color: colors.foreground,
          }}
          className={`bi bi-plus ${styles['preview-action-button-mobile']}`}
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
