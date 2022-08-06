import React from 'react'
import { CONFIG, ROUTES } from 'data'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, SocialLinks } from 'components/ui'
import { useWindowSize } from 'hooks'

export default function NavBar(): JSX.Element {
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
