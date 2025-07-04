import { ExternalLink } from 'components/ui'

interface Props {
  to?: string
  label: string
  filled?: boolean
}

function ProjectAction({ to, label, filled = false }: Props) {
  if (!to) return null

  return (
    <ExternalLink button className={filled ? 'btn-dark' : 'btn-outline-dark'} to={to}>
      {label}
    </ExternalLink>
  )
}

export { ProjectAction }
