import { ExternalLink } from 'components/ui'
import React from 'react'
import { Image } from 'react-bootstrap'
import { conditionalStyle } from 'utils'

interface Props {
  label: string
  to: string
  src: string
  useIcon?: boolean
  invertImage?: boolean
}

export function SocialLink({
  label,
  to,
  src,
  useIcon,
  invertImage = false,
}: Props): JSX.Element {
  return (
    <ExternalLink
      to={to}
      className={`d-md-flex align-items-center`}
      fullWidth={!useIcon}
      style={{ width: useIcon ? '1.5rem' : undefined }}
    >
      {useIcon ? (
        <Image
          src={src}
          fluid
          className={`${conditionalStyle(invertImage, 'invertedColor')}`}
        />
      ) : (
        label
      )}
    </ExternalLink>
  )
}
