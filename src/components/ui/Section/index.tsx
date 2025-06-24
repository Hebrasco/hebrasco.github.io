import React, { PropsWithChildren, ReactElement } from 'react'
import { conditionalStyle } from 'utils'

import styles from './index.module.css'

interface Props extends PropsWithChildren {
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
  bottomPadding?: boolean
  fluidContainer?: boolean
  title?: string
  anchor?: string
  anchorReplace?: string
}

export function Section({
  children,
  xs = false,
  sm = false,
  md = false,
  lg = false,
  xl = false,
  bottomPadding = false,
  fluidContainer = false,
  title,
  anchor,
  anchorReplace = '/#',
}: Props) {
  return (
    <>
      {anchor && <div id={anchor.replace(anchorReplace, '')}></div>}
      <div
        className={`section
        ${conditionalStyle(xs, styles['section-xs'])}
        ${conditionalStyle(sm, styles['section-sm'])}
        ${conditionalStyle(md, styles['section-md'])}
        ${conditionalStyle(lg, styles['section-lg'])}
        ${conditionalStyle(xl, styles['section-xl'])}
        ${conditionalStyle(!bottomPadding, styles['section-ignore-bottom'])}
      `}
      >
        {title && (
          <h2
            className={`mb-3 fw-bold text-uppercase
        ${conditionalStyle(fluidContainer, styles['section-fluid'])}`}
          >
            {title}
          </h2>
        )}
        {Array.isArray(children) ? children.map((child) => child) : children}
      </div>
    </>
  )
}
