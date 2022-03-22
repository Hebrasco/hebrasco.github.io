import React from 'react'
import ExternalLink from 'common/ExternalLink/ExternalLink'
import { APPSTORE_PROFILE_URL, GITHUB_PROFILE_URL } from 'constants/Config'
import gitHubLogo from 'assets/icons/github.png'
import appStoreLogo from 'assets/icons/app_store.png'
import { Image } from 'react-bootstrap'
import { conditionalStyle } from 'utils/helpers'

interface Props {
  navItem?: boolean
}

export default function SocialLinks({ navItem = false }: Props): JSX.Element {
  return (
    <>
      <ExternalLink
        to={APPSTORE_PROFILE_URL}
        className={`d-md-flex align-items-center ${conditionalStyle(
          !navItem,
          'p-2'
        )}`}
        fullWidth={false}
        navItem={navItem}
      >
        <Image src={appStoreLogo} fluid />
      </ExternalLink>
      <ExternalLink
        to={GITHUB_PROFILE_URL}
        className={`d-md-flex align-items-center ml-md-2 ${conditionalStyle(
          !navItem,
          'p-2'
        )}`}
        fullWidth={false}
        navItem={navItem}
      >
        <Image src={gitHubLogo} fluid className="invertedColor" />
      </ExternalLink>
    </>
  )
}
