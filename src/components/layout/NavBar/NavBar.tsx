import { Container } from 'components/layout/Container'
import { animationWorkaround } from 'components/layout/NavBar/utils/animationWorkaround'
import { executeAfterTransition } from 'components/layout/NavBar/utils/executeAfterTransition'
import { Link, SocialLinks } from 'components/ui'
import { CONFIG, ROUTES } from 'data'
import { useWindowSize } from 'hooks'
import { useRef, useState } from 'react'
import { conditionalStyle } from 'utils'
import styles from './NavBar.module.css'

function NavBar() {
  const navItemsContainerRef = useRef<HTMLDivElement | null>(null)
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const { isMobile } = useWindowSize()

  function showCollapsable() {
    const element = navItemsContainerRef.current
    if (!element) return

    element.classList.remove(styles['navbar-items-collapse'])
    element.classList.add(styles['navbar-items-collapsing'])

    executeAfterTransition(element, () => {
      element.classList.remove(styles['navbar-items-collapsing'])
      element.classList.add(styles['navbar-items-collapse'])

      element.classList.add(styles.expanded)
    })

    element.style.height = `${element.scrollHeight}px`
  }

  function hideCollapsable() {
    const element = navItemsContainerRef.current
    if (!element) return

    element.style.height = `${element.scrollHeight}px`
    animationWorkaround(element)

    element.classList.remove(styles['navbar-items-collapse'])
    element.classList.remove(styles.expanded)

    element.classList.add(styles['navbar-items-collapsing'])

    element.style.height = ''

    executeAfterTransition(element, () => {
      element.classList.remove(styles['navbar-items-collapsing'])
      element.classList.add(styles['navbar-items-collapse'])

      element.classList.remove(styles.expanded)
    })
  }

  function toggleIsExpanded() {
    const element = navItemsContainerRef.current
    if (!element) return

    isExpanded ? hideCollapsable() : showCollapsable()

    setIsExpanded((prevState) => !prevState)
  }

  return (
    <nav
      className={`${styles['navbar-glass']} ${conditionalStyle(
        isMobile,
        styles['navbar-glass-mobile']
      )} shadow`}
    >
      <Container
        className={`${conditionalStyle(isMobile, 'd-block')} ${styles['navbar-container']} ${conditionalStyle(isMobile, styles['navbar-container-mobile'])}`}
        fluid
      >
        <div className={styles['navbar-brand-container']}>
          <a className="me-5 nav-item" href={ROUTES.home}>
            {CONFIG.profile.name}
          </a>
          {isMobile && (
            <button
              className={`${styles['menu-icon']} ${conditionalStyle(isExpanded, styles.open)}`}
              onClick={toggleIsExpanded}
              type="button"
            >
              <span></span>
              <span></span>
              <p className="sr-only">{isExpanded ? 'open' : 'close'} navbar</p>
            </button>
          )}
        </div>

        <div
          className={conditionalStyle(isMobile, styles['navbar-items-collapse'])}
          ref={navItemsContainerRef}
        >
          <div
            className={`gap-4 ${conditionalStyle(isMobile, styles['navbar-items-container-mobile'])} ${conditionalStyle(isMobile, 'pt-3', 'align-items-center')} ${styles['navbar-items-container']} `}
          >
            <Link label="About Me" navItem to={ROUTES.aboutMe} />
            <Link label="Projects" navItem to={ROUTES.projects} />
            <Link label="Contact" navItem to={ROUTES.contact} />
            <SocialLinks useIcons={!isMobile} />
          </div>
        </div>
      </Container>
    </nav>
  )
}

export { NavBar }
