import './styles.css'

import React, { ReactElement } from 'react'
import { conditionalStyle } from 'utils/helpers'

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

export default function Section({
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
        ${conditionalStyle(xs, 'section-xs')}
        ${conditionalStyle(sm, 'section-sm')}
        ${conditionalStyle(md, 'section-md')}
        ${conditionalStyle(lg, 'section-lg')}
        ${conditionalStyle(xl, 'section-xl')}
        ${conditionalStyle(!bottomPadding, 'section-ignore-bottom')}
      `}
      >
        {title && <h1 className="mb-5 text-uppercase">{title}</h1>}
        {Array.isArray(children) ? children.map((child) => child) : children}
      </div>
    </>
  )
}
