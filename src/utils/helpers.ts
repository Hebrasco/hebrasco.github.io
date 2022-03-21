import { ReactElement } from 'react'
export function conditionalStyle(show: boolean, value: string): string {
  return show ? value : ''
}

export function renderChildren(
  children: ReactElement | ReactElement[]
): ReactElement | ReactElement[] {
  return Array.isArray(children) ? children.map((child) => child) : children
}
