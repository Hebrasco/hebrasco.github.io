import { Link, SocialLinks } from 'components/ui'
import { CONFIG, ROUTES } from 'data'
import { useWindowSize } from 'hooks'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { conditionalStyle } from 'utils'
import styles from './NavBar.module.css'

function NavBar() {
  const { isMobile } = useWindowSize()

  return (
    <Navbar
      className={`${styles['navbar-glass']} ${conditionalStyle(
        isMobile,
        styles['navbar-glass-mobile']
      )} shadow p-0`}
      expand="md"
    >
      <Container
        className={conditionalStyle(isMobile, 'd-block')}
        fluid
        style={{ padding: '0.5rem 1rem' }}
      >
        <Navbar.Brand className="me-5 text-decoration-none" href={ROUTES.home}>
          {CONFIG.profile.name}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className={`gap-4 ${conditionalStyle(isMobile, 'mt-3', 'align-items-center')}`}>
            <Link label="About Me" navItem to={ROUTES.aboutMe} />
            <Link label="Projects" navItem to={ROUTES.projects} />
            <Link label="Contact" navItem to={ROUTES.contact} />
            <SocialLinks useIcons={!isMobile} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export { NavBar }
