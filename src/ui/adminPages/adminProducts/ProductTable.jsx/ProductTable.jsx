import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Table } from "reactstrap";
import { BE_URL } from "../../../../config";
import { fetchProductData } from "../../../../redux/features/Products";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Delete, LocalDining, Visibility } from "@mui/icons-material";

export default function ProductTable({
  pageNumber,
  tableDivRef,
  toggle,
  setPageNumber,
  setUpdateFlag,
}) {
  let [allProductData, setAllProductData] = useState([]);
  let [updateId, setUpdateId] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductData({ page: pageNumber, limit: 10 }));
  }, [pageNumber]);
  const navigate = useNavigate();
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
  }, [data?.productData]);
  const productDetailPage = (id) => {
    navigate(`/adminproducts/${id}`);
  };
  function deleteHandler(id, index) {
    axios({
      method: "delete",
      url: `${BE_URL}/product/delete/${id}`,
    }).then((res) => {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(fetchProductData({ page: pageNumber, limit: 10 }));
          if (data?.productData?.length == 1) {
            setPageNumber(pageNumber - 1);
          }
        }
      });
    });
  }
  function updateHandler(id) {
    toggle();
    setUpdateId({ id: id });
    setUpdateFlag(true);
  }

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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allProductData?.map((e, index) => {
            return (
              <tr key={index} style={{ verticalAlign: "middle" }}>
                <th scope="row">{(pageNumber - 1) * 10 + index + 1}</th>
                <th>
                  <img
                    onClick={() => productDetailPage(e?._id)}
                    src={e?.thumbnail}
                    style={{
                      cursor: "pointer",
                      height: "80px",
                      width: "80px",
                    }}
                    alt=""
                  />
                </th>
                <td>{e?.price}</td>
                <td>{e?.discountPercentage}%</td>
                <td>{e?.brand}</td>
                <td>{e?.category?.map((e) => e)}</td>
                <td>
                  <Visibility
                    style={{ fontSize: "30px", cursor: "pointer" }}
                    onClick={() => updateHandler(e?._id)}
                  />
                  <Delete
                    onClick={() => deleteHandler(e?._id, index)}
                    style={{ fontSize: "30px", cursor: "pointer" }}
                    className="ms-4"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
