import React from 'react'
import { ExternalLink } from 'components/ui'
import { Image } from 'react-bootstrap'
import conditionalStyle from 'utils/conditionalStyle'

interface Props {
  label: string
  to: string
  src: string
  navItem?: boolean
  useIcon?: boolean
  useMarginLeft?: boolean
  invertImage?: boolean
}

export default function SocialLink({
  label,
  to,
  src,
  navItem,
  useIcon,
  useMarginLeft = true,
  invertImage = false,
}: Props): JSX.Element {
  return (
    <ExternalLink
      to={to}
      className={`d-md-flex align-items-center 
        ${conditionalStyle(useMarginLeft, 'ml-md-2')}
        ${conditionalStyle(!navItem, 'py-2 pe-3')}
      `}
      fullWidth={!useIcon}
      navItem={navItem}
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
