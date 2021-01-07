import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {
  return (
    <Navbar
      className="navbar navbar-expand-lg navbar-dark bg-primary "
      collapseOnSelect
    >
      <Container>
        <LinkContainer to="/invoice">
          <Navbar.Brand>Invoice</Navbar.Brand>
        </LinkContainer>

        <Nav className="ml-auto">
          <LinkContainer to="/signup">
            <Nav.Link>Sign Up</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link>Sign In</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};
