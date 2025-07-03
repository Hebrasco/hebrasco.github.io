import { AppStoreIcon, GitHubIcon } from 'assets/icons'
import { CONFIG } from 'data'
import { SocialLink } from './SocialLink'

interface Props {
  useIcons?: boolean
}

export function SocialLinks({ useIcons = false }: Props) {
  return (
    <>
      <SocialLink
        altText="AppStore Logo"
        label="AppStore"
        src={AppStoreIcon}
        to={CONFIG.references.appStoreUrl}
        useIcon={useIcons}
      />
      <SocialLink
        altText="GitHub Logo"
        invertImage
        label="GitHub"
        src={GitHubIcon}
        to={CONFIG.references.gitHubUrl}
        useIcon={useIcons}
      />
    </>
  )
}
