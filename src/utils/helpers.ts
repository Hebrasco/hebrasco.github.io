import { ReactElement } from 'react'

export function conditionalStyle(
  show: boolean,
  value: string,
  elseValue: string = ''
): string {
  return show ? value : elseValue
}

export function renderChildren(
  children: ReactElement | ReactElement[] | string
): ReactElement | ReactElement[] | string {
  return Array.isArray(children) ? children.map((child) => child) : children
}
