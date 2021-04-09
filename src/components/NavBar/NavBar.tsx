import React from "react";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import { Routes } from "../../Constants/Routes";
import { HashLink as Link } from "react-router-hash-link";

export default function NavBar(): JSX.Element {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href={Routes.home}>Daniel Bedrich</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to={Routes.aboutMe} smooth className="nav-link">
            Über mich
          </Link>
          <Link
            to={Routes.projects}
            smooth
            className="nav-link"
          >
            Projekte
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
