import React from 'react'
import { APPSTORE_PROFILE_URL, GITHUB_PROFILE_URL } from 'constants/config'
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
        to={APPSTORE_PROFILE_URL}
        useIcon={useIcons}
        navItem={navItem}
      />
      <SocialLink
        label="GitHub"
        src={GitHubIcon}
        to={GITHUB_PROFILE_URL}
        useIcon={useIcons}
        navItem={navItem}
        invertImage
      />
    </>
  )
}
