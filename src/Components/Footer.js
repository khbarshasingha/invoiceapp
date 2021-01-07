import React from "react";
import { Row, Container, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="text-warning footer">
      <Row className="footer navbar navbar-expand-lg navbar-dark bg-primary">
        <Col className="text-center py-3 ">Copyright &copy; Invoice</Col>
        <Col className="text-center py-3 ">
          Contact us: <br />
          North America <br />
          Toll-Free: 1-877-930-7483 <br />
          International: 1-604-637-0780
        </Col>
        <Col>
          Connect us:
          <br />
          <i className="fab fa-facebook"></i>{" "}
          <i className="fab fa-instagram-square"></i>{" "}
          <i className="fab fa-twitter-square"></i>
        </Col>
      </Row>
    </footer>
  );
};
