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
      <td>₹ {price}</td>
      <td>
        <Button variant="warning">
          <i class="fas fa-edit"></i>
        </Button>
        <br />
        <Button variant="danger">
          <i class="fas fa-trash"></i>
        </Button>
      </td>
    </tr>
  );
};
