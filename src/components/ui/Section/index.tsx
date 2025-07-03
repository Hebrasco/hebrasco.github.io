import { createElement, type PropsWithChildren, type ReactNode, useMemo } from 'react'
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
  Action?: () => ReactNode
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
  Action,
}: Props) {
  const TitleComponent = useMemo(() => {
    let element = 'h1'

    if (xl) element = 'h1'
    if (lg) element = 'h2'
    if (md) element = 'h3'
    if (sm) element = 'h4'
    if (xs) element = 'h5'

    return createElement(
      element,
      {
        className: `fw-bold text-uppercase`,
      },
      title
    )
  }, [sm, md, lg, xl, xs, title])

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
        <div
          className={`d-flex justify-content-between ${conditionalStyle(fluidContainer, styles['section-fluid'])} mb-3`}
        >
          {title && TitleComponent}
          {Action && <Action />}
        </div>
        {Array.isArray(children) ? children.map((child) => child) : children}
      </div>
    </>
  )
}
