import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <LinkContainer to="/invoice">
        <Navbar.Brand>Invoice</Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/">
            <Nav.Link>Sign Up</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link>LogIn</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
