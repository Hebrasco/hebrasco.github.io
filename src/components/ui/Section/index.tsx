import React, { ReactElement } from 'react'
import { conditionalStyle } from 'utils'

import styles from './index.module.css'

interface Props {
  children: ReactElement | ReactElement[]
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
  bottomPadding?: boolean
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
        {title && <h1 className="mb-5 text-uppercase">{title}</h1>}
        {Array.isArray(children) ? children.map((child) => child) : children}
      </div>
    </>
  )
}
