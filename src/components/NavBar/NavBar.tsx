import React from 'react'
import { ROUTES } from 'constants/Routes'
import { APPSTORE_PROFILE_URL, GITHUB_PROFILE_URL } from 'constants/Config'
import gitHubLogo from 'assets/icons/github.png'
import appStoreLogo from 'assets/icons/app_store.png'
import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import Link from 'common/Link/Link'
import ExternalLink from 'common/ExternalLink/ExternalLink'

export default function NavBar(): JSX.Element {
  return (
    <Navbar bg="light" expand="md" fixed="top">
      <Container fluid>
        <Navbar.Brand href={ROUTES.home} className="text-muted">
          Daniel Bedrich
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto ">
            <Link to={ROUTES.aboutMe} label="About Me" />
            <Link to={ROUTES.projects} label="Projects" />
            <Link to={ROUTES.contact} label="Contact" />
            <ExternalLink
              to={APPSTORE_PROFILE_URL}
              className="d-md-flex align-items-center"
            >
              <Image src={appStoreLogo} />
            </ExternalLink>
            <ExternalLink
              to={GITHUB_PROFILE_URL}
              className="d-md-flex align-items-center ml-md-2"
            >
              <Image src={gitHubLogo} className="invertDark" />
            </ExternalLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
