import { Link, SocialLinks } from 'components/ui'
import { CONFIG, ROUTES } from 'data'
import { useWindowSize } from 'hooks'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export function NavBar(): JSX.Element {
  const { isXs, isSm } = useWindowSize()

  return (
    <Navbar bg="light" expand="md" fixed="top">
      <Container fluid>
        <Navbar.Brand href={ROUTES.home}>{CONFIG.profile.name}</Navbar.Brand>
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
