import React from 'react'
import { ROUTES } from 'constants/routes'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Link from 'common/Link/Link'
import SocialLinks from 'common/SocialLinks/SocialLinks'
import { useWindowSize } from 'utils/hooks'
import { PORTFOLIO_NAME } from 'constants/config'

export default function NavBar(): JSX.Element {
  const { isXs, isSm } = useWindowSize()

  return (
    <Navbar bg="light" expand="md" fixed="top">
      <Container fluid>
        <Navbar.Brand href={ROUTES.home}>{PORTFOLIO_NAME}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto ">
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
