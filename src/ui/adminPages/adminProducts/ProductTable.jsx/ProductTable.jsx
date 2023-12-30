import axios from "axios";
import React, { useEffect } from "react";
import { Table } from "reactstrap";
import { BE_URL } from "../../../../config";

export default function ProductTable() {
  return (
    <div>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>thumbnail</th>
            <th>title</th>
            <th>price</th>
            <th>discountPercentage</th>
            <th>stock</th>
            <th>brand</th>
            <th>category</th>
            <th>size</th>
            <th>color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <th scope="row">{index + 1}</th>
            <td>{e?.title}</td>
            <td>{e?.price}</td>
            <td>{e?.discountPercentage}</td>
            <td>{e?.stock}</td>
            <td>{e?.brand}</td>
            <td>{e?.category?.e?.map((e) => e)}</td>
            <td>{e?.size?.e?.map((e) => e)}</td>
            <td>{e?.color?.map((e) => e)}</td> */}
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
