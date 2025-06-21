import { Link, SocialLinks } from 'components/ui'
import { CONFIG, ROUTES } from 'data'
import { useWindowSize } from 'hooks'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

import styles from './index.module.css'
import { conditionalStyle } from 'utils'

export function NavBar(): JSX.Element {
  const { isXs, isSm } = useWindowSize()
  const isMobile = isXs || isSm

  return (
    <Navbar
      expand="md"
      className={`${styles['navbar-glass']} ${conditionalStyle(
        isMobile,
        styles['navbar-glass-mobile']
      )} shadow p-0`}
    >
      <Container
        fluid
        className={conditionalStyle(isMobile, 'd-block')}
        style={{ padding: '0.5rem 1rem' }}
      >
        <Navbar.Brand href={ROUTES.home} className={'pe-4'}>
          {CONFIG.profile.name}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav
            className={`gap-4 ${conditionalStyle(
              isMobile,
              'mt-3',
              'align-items-center'
            )}`}
          >
            <Link to={ROUTES.aboutMe} label="About Me" />
            <Link to={ROUTES.projects} label="Projects" />
            <Link to={ROUTES.contact} label="Contact" />
            <SocialLinks useIcons={!isMobile} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
