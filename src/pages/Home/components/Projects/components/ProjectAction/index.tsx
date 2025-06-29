import { ExternalLink } from 'components/ui'

interface Props {
  to?: string
  label: string
  filled?: boolean
}

export function Action({ to, label, filled = false }: Props): JSX.Element | null {
  if (!to) return null

  return (
    <ExternalLink button className={filled ? 'btn-dark' : 'btn-outline-dark'} to={to}>
      {label}
    </ExternalLink>
  )
}
