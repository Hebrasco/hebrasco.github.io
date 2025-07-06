import { ExternalLink } from 'components/ui'
import { conditionalStyle } from 'utils'

interface Props {
  label: string
  to: string
  src: string
  altText: string
  useIcon?: boolean
  invertImage?: boolean
}

export function SocialLink({ label, to, src, altText, useIcon, invertImage = false }: Props) {
  return (
    <ExternalLink
      className="align-content-center"
      fullWidth={!useIcon}
      style={{ width: useIcon ? '1.5rem' : undefined }}
      to={to}
    >
      {useIcon ? (
        <img
          alt={altText}
          className={`${conditionalStyle(invertImage, 'invertedColor')}`}
          height="100%"
          src={src}
          style={{ objectFit: 'contain' }}
          width="100%"
        />
      ) : (
        label
      )}
    </ExternalLink>
  )
}
