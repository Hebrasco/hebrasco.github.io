import React from 'react'
import ExternalLink from 'common/ExternalLink/ExternalLink'
import { APPSTORE_PROFILE_URL, GITHUB_PROFILE_URL } from 'constants/Config'
import gitHubLogo from 'assets/icons/github.png'
import appStoreLogo from 'assets/icons/app_store.png'
import { Image } from 'react-bootstrap'
import { conditionalStyle } from 'utils/helpers'

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
      <ExternalLink
        to={APPSTORE_PROFILE_URL}
        className={`d-md-flex align-items-center ${conditionalStyle(
          !navItem,
          'py-2 pe-3'
        )}`}
        fullWidth={!useIcons}
        navItem={navItem}
      >
        {useIcons ? <Image src={appStoreLogo} fluid /> : 'AppStore'}
      </ExternalLink>
      <ExternalLink
        to={GITHUB_PROFILE_URL}
        className={`d-md-flex align-items-center ml-md-2 ${conditionalStyle(
          !navItem,
          'py-2 pe-3'
        )}`}
        fullWidth={!useIcons}
        navItem={navItem}
      >
        {useIcons ? (
          <Image src={gitHubLogo} fluid className="invertedColor" />
        ) : (
          'GitHub'
        )}
      </ExternalLink>
    </>
  )
}
