import { ReactElement } from 'react'

export function renderChildren(
  children: ReactElement | ReactElement[] | string
): ReactElement | ReactElement[] | string {
  return Array.isArray(children) ? children.map((child) => child) : children
}
