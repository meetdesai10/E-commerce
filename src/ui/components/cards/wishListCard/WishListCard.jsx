import axios from "axios";
import React, { useEffect, useState } from "react";
import { BE_URL } from "../../../../config";
import { useDispatch } from "react-redux";
import { fetchCartData } from "../../../../redux/features/cart";
import { Delete } from "@mui/icons-material";
import emptyCart from "../../../../../public/cart/emptyCart.png";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import Swal from "sweetalert2";
export default function CartCard({ ele, setOpenCloseSideBar }) {
  // let [productWishlist, setProductWishlist] = useState([]);
  // console.log(productWishlist);
  // let navigate = useNavigate();
  // useEffect(() => {
  //   setProductWishlist(ele);
  // }, [ele]);
  const dispatch = useDispatch();
  let flag = true;
  function cartHandler(id) {
    axios({
      method: "post",
      url: `${BE_URL}/cart/create/${id}`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "product Added succesfully",
          showConfirmButton: true,
          timer: 800,
        });
        dispatch(fetchCartData());
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.message,
          showConfirmButton: true,
        });
      });
  }
  return (
    <>
      {flag ? (
        <div className="emptyCart w-100 h-100 d-flex flex-column justify-content-center align-items-center">
          <img src={emptyCart} alt="" />
          <h4>Your wishList is feeling lonely</h4>
        </div>
      ) : (
        <div
          className=" d-flex mt-3 mb-3 me-4 ms-4 rounded"
          style={{ border: "1px solid #b2afaf" }}
        >
          <div
            className="p-2"
            style={{
              height: "150px",
              width: "150px",
              borderRight: "1px solid #b2afaf",
            }}
          >
            <img
              style={{ objectFit: "cover" }}
              className="h-100 w-100"
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTmGjETgJpDjRzww9Xck8fnh4ymelpT0JPBKynr-DVaXZ8L49xXg3CuIUsGYJrqTXKkjbkWTl2UjyZ7P1aXZbzb2STRs3z0ptx3SRoREAO61D4QBgFmNP8T_w&usqp=CAE"
              alt=""
            />
          </div>
          <div className="d-flex flex-column justify-content-between p-3">
            <div className="name fw-bold">titan women watch</div>
            <div className="price">₹ 5000</div>
            <Button>add to cart</Button>
          </div>
        </div>
      )}
    </>
  );
}
