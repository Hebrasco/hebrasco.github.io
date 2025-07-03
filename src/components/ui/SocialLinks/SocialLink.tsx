import { ExternalLink } from 'components/ui'
import { Image } from 'react-bootstrap'
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
      className={`d-md-flex align-items-center`}
      fullWidth={!useIcon}
      style={{ width: useIcon ? '1.5rem' : undefined }}
      to={to}
    >
      {useIcon ? (
        <Image
          alt={altText}
          className={`${conditionalStyle(invertImage, 'invertedColor')}`}
          fluid
          src={src}
        />
      ) : (
        label
      )}
    </ExternalLink>
  )
}
