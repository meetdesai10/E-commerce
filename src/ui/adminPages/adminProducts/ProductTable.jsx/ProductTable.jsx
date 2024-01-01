import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Table } from "reactstrap";
import { BE_URL } from "../../../../config";
import { fetchProductData } from "../../../../redux/features/Products";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function ProductTable({ pageNumber, tableDivRef }) {
  let [allProductData, setAllProductData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductData({ page: pageNumber, limit: 10 }));
  }, [pageNumber]);

  const data = useSelector((state) => state.ProductsSlice);
  useEffect(() => {
    if (data?.error?.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data?.error.message,
        showConfirmButton: true,
        timer: 800,
      });
    } else {
      setAllProductData(data?.productData);
    }
  }, [data]);
  return (
    <div ref={tableDivRef}>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>thumbnail</th>
            <th>price</th>
            <th>discount</th>
            <th>brand</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {allProductData?.map((e, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <th>
                  <img
                    src={e?.thumbnail}
                    style={{ height: "80px", width: "80px" }}
                    alt=""
                  />
                </th>
                <td>{e?.price}</td>
                <td>{e?.discountPercentage}%</td>
                <td>{e?.brand}</td>
                <td>{e?.category?.map((e) => e)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
