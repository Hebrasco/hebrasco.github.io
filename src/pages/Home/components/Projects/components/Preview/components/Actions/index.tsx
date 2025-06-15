import { Action } from 'pages/Home/components/Projects/components/ProjectAction'
import React from 'react'

import { conditionalStyle } from 'utils'
import { useWindowSize } from 'hooks'

import styles from './index.module.css'
import { Button } from 'react-bootstrap'

interface Props {
  onlineURL?: string
  sourceURL?: string
}

export function Actions({ onlineURL, sourceURL }: Props): JSX.Element {
  const { isXs, isSm } = useWindowSize()
  const isMobile = isXs || isSm

  return (
    <div className="mt-5 d-flex">
      {isMobile ? (
        <i
          className={`bi bi-plus-circle-fill ${styles['preview-action-button-mobile']}`}
          onClick={() => console.log('aa')}
        />
      ) : (
        <>
          <Action to={onlineURL} label="View" className={'m-0'} filled />
          <Action to={sourceURL} label="Source Code" className={'ms-3'} />
        </>
      )}
    </div>
  )
}
