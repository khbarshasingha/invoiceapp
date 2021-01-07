import React from "react";
import { Table } from "react-bootstrap";
import { Data } from "../Data";
import { invoice, Invoice } from "../Components/Invoice";
import { auto } from "@popperjs/core";

export const HomeScreen = () => {
  return (
    <div>
      <Table
        striped
        hover
        className="tablecss text-info"
        variant="dark"
        width="50rem"
      >
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
    </div>
  );
};
