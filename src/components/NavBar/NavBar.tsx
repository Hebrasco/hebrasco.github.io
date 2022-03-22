import React from 'react'
import { ROUTES } from 'constants/Routes'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Link from 'common/Link/Link'
import SocialLinks from 'common/SocialLinks/SocialLinks'

export default function NavBar(): JSX.Element {
  return (
    <Navbar bg="light" expand="md" fixed="top">
      <Container fluid>
        <Navbar.Brand href={ROUTES.home}>Daniel Bedrich</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto ">
            <Link to={ROUTES.aboutMe} label="About Me" navItem />
            <Link to={ROUTES.projects} label="Projects" navItem />
            <Link to={ROUTES.contact} label="Contact" navItem />
            <SocialLinks navItem />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
