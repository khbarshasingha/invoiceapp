import React from "react";
import { Form, Button, Container, Col } from "react-bootstrap";

export const Login = () => {
  return (
    <Container>
      <Col sm={3} md={4} lg={6} className="login">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="outline-success" size="lg">
            Log In
          </Button>
        </Form>
      </Col>
    </Container>
  );
};
