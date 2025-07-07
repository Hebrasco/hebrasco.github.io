import { Column } from 'components/layout/Column'
import { Link, SocialLinks } from 'components/ui'
import { ROUTES } from 'data'
import { useWindowSize } from 'hooks'
import { conditionalStyle } from 'utils'
import styles from './Links.module.css'

function Links() {
  const { isMobile } = useWindowSize()

  return (
    <Column className={conditionalStyle(!isMobile, styles['links-container'])} md={6} xs={12}>
      <div className="d-flex gap-4">
        <Link label="Imprint" navItem to={ROUTES.imprintHash} />
        <Link
          className={`${conditionalStyle(isMobile, 'me-auto')}`}
          label="Privacy Policy"
          navItem
          to={ROUTES.privacyPolicyHash}
        />
        <SocialLinks useIcons />
      </div>
    </Column>
  )
}

export { Links }
