import { ExternalLink } from 'components/ui'
import { conditionalStyle } from 'utils'

interface Props {
  to?: string
  label: string
  filled?: boolean
}

function ProjectAction({ to, label, filled = false }: Props) {
  if (!to) return null

  return (
    <ExternalLink button className={conditionalStyle(!filled, 'button-outline')} to={to}>
      {label}
    </ExternalLink>
  )
}

export { ProjectAction }
