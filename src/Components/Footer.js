import React from "react";
import { Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <Row className=" navbar navbar-expand-lg navbar-dark bg-primary text-warning ">
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
  );
};
