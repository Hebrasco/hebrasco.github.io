import { AppStoreIcon, GitHubIcon } from 'assets/icons'
import { CONFIG } from 'data'
import React from 'react'
import { SocialLink } from './SocialLink'

interface Props {
  useIcons?: boolean
}

export function SocialLinks({ useIcons = false }: Props): JSX.Element {
  return (
    <>
      <SocialLink
        label="AppStore"
        src={AppStoreIcon}
        to={CONFIG.references.appStoreUrl}
        useIcon={useIcons}
        altText="AppStore Logo"
      />
      <SocialLink
        label="GitHub"
        src={GitHubIcon}
        to={CONFIG.references.gitHubUrl}
        useIcon={useIcons}
        invertImage
        altText="GitHub Logo"
      />
    </>
  )
}
