import React from 'react'
import { CONFIG } from 'data'
import { AppStoreIcon, GitHubIcon } from 'assets/icons'
import SocialLink from './SocialLink'

interface Props {
  navItem?: boolean
  useIcons?: boolean
}

export default function SocialLinks({
  navItem = false,
  useIcons = false,
}: Props): JSX.Element {
  return (
    <>
      <SocialLink
        label="AppStore"
        src={AppStoreIcon}
        to={CONFIG.references.appStoreUrl}
        useIcon={useIcons}
        navItem={navItem}
      />
      <SocialLink
        label="GitHub"
        src={GitHubIcon}
        to={CONFIG.references.gitHubUrl}
        useIcon={useIcons}
        navItem={navItem}
        invertImage
      />
    </>
  )
}
