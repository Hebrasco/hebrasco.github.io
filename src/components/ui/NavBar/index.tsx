import React from 'react'
import { ROUTES } from 'data/routes'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, SocialLinks } from 'components/ui'
import { useWindowSize } from 'utils/hooks'
import { PORTFOLIO_NAME } from 'data/config'

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
