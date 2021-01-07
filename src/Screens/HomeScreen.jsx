import React from "react";
import { Table, Container } from "react-bootstrap";
import { Data } from "../Data";
import { Invoice } from "../Components/Invoice";

export const HomeScreen = () => {
  return (
    <Container className="tablecss">
      {" "}
      <Table striped hover className="text-info" variant="dark" width="50rem">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Discount</th>
            <th>Quantity</th>
            <th>Units</th>
            <th>Tax</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Data.map(data => {
            return (
              <Invoice
                key={data.id}
                name={data.name}
                id={data.id}
                dis={data.discount}
                desc={data.desc}
                quan={data.quantity}
                price={data.price}
                tax={data.tax}
              />
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
