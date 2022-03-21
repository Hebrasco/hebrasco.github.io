import React, { ReactElement } from 'react'
import { conditionalStyle } from 'utils/helpers'

import './Section.css'

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
}: Props) {
  return (
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
      {anchor && <div id={anchor.replace('/#', '')} className="anchor"></div>}
      {title && <h1 className="mb-5 text-uppercase">{title}</h1>}
      {Array.isArray(children) ? children.map((child) => child) : children}
    </div>
  )
}
