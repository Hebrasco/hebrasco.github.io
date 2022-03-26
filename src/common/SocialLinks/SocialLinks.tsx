import React from 'react'
import { APPSTORE_PROFILE_URL, GITHUB_PROFILE_URL } from 'constants/config'
import gitHubLogo from 'assets/icons/github.png'
import appStoreLogo from 'assets/icons/app_store.png'
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
        src={appStoreLogo}
        to={APPSTORE_PROFILE_URL}
        useIcon={useIcons}
        navItem={navItem}
      />
      <SocialLink
        label="GitHub"
        src={gitHubLogo}
        to={GITHUB_PROFILE_URL}
        useIcon={useIcons}
        navItem={navItem}
        invertImage
      />
    </>
  )
}
