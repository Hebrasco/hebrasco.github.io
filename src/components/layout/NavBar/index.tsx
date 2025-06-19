import { Link, SocialLinks } from 'components/ui'
import { CONFIG, ROUTES } from 'data'
import { useWindowSize } from 'hooks'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

import styles from './index.module.css'
import { conditionalStyle } from 'utils'

export function NavBar(): JSX.Element {
  const { isXs, isSm } = useWindowSize()

  return (
    <Navbar expand="md" className={`${styles['navbar-glass']} shadow`}>
      <Container fluid className={conditionalStyle(isXs || isSm, 'd-block')}>
        <Navbar.Brand
          href={ROUTES.home}
          className={conditionalStyle(!isXs && !isSm, 'pe-4', 'pe-0')}
        >
          {CONFIG.profile.name}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-2">
            <Link to={ROUTES.aboutMe} label="About Me" navItem />
            <Link to={ROUTES.projects} label="Projects" navItem />
            <Link to={ROUTES.contact} label="Contact" navItem />
            <SocialLinks navItem useIcons={!(isXs || isSm)} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
