import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <Row className="parentformstyle">
      <Col sm={3} md={4} lg={6}>
        <Form style={{ padding: "25px" }}>
          <Form.Group controlId="formGridName">
            <Form.Label>Full Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" />
          </Form.Group>

          <Form.Group controlId="formGridEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter your email id" />
          </Form.Group>

          <Form.Group controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>Assam</option>
                <option>Kerela</option>
                <option>UttarPradesh</option>
                <option>Maharashtra</option>
                <option>TamilNadu</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </Col>
      <Col>
        <div className="col2">
          Already Have an Account?
          <br />
          <hr />
          <Link to="/login">
            <button type="button" className="btn btn-primary btn-lg">
              Log In
            </button>
          </Link>
        </div>
      </Col>
    </Row>
  );
};
