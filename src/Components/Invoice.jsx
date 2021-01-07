import React from "react";
import { Link } from "react-router-dom";
import { Table, Container, Button } from "react-bootstrap";

export const Invoice = ({ id, name, desc, unit, quan, dis, tax, price }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{desc}</td>
      <td>{dis}</td>
      <td>{quan}</td>
      <td>{unit}</td>
      <td>{tax}</td>
      <td>₹{price}</td>
      <td>
        <Button type="button" className="btn btn-warning">
          <i className="fas fa-edit"> </i>
        </Button>
        <br />
        <Button type="button" className="btn btn-danger">
          <i className="fas fa-trash"></i>
        </Button>
      </td>
    </tr>
  );
};
