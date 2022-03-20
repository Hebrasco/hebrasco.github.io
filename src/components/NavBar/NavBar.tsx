import React from 'react'
import { ROUTES } from 'constants/Routes'
import { HashLink as Link } from 'react-router-hash-link'
import { APPSTORE_PROFILE_URL, GITHUB_PROFILE_URL } from 'constants/Config'
import gitHubLogo from 'assets/icons/github.png'
import appStoreLogo from 'assets/icons/app_store.png'
import { Container, Image, Nav, Navbar } from 'react-bootstrap'

import './NavBar.css'

export default function NavBar(): JSX.Element {
  return (
    <Navbar bg="light" expand="md" fixed="top">
      <Container fluid>
        <Navbar.Brand href={ROUTES.home}>Daniel Bedrich</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Link to={ROUTES.aboutMe} smooth className="nav-link">
              About Me
            </Link>
            <Link to={ROUTES.projects} smooth className="nav-link">
              Projects
            </Link>
            <a
              href={APPSTORE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link d-md-flex align-items-center external-account-link d-block"
            >
              <Image src={appStoreLogo} />
            </a>
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link d-md-flex align-items-center external-account-link d-block ml-md-2"
            >
              <Image src={gitHubLogo} className="invertDark" />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
