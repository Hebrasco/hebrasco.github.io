import React from 'react'
import Nav from 'react-bootstrap/esm/Nav'
import Navbar from 'react-bootstrap/esm/Navbar'
import { ROUTES } from 'src/constants/Routes'
import { HashLink as Link } from 'react-router-hash-link'

export default function NavBar(): JSX.Element {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href={ROUTES.home}>Daniel Bedrich</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to={ROUTES.aboutMe} smooth className="nav-link">
            About Me
          </Link>
          <Link to={ROUTES.projects} smooth className="nav-link">
            Projects
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
