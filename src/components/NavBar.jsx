import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';


const NavBar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
     <Navbar.Brand as={Link} to="/">
      <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="Film Library Logo"
      />
      Bool_Movies
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/films">Film</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;

