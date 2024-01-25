import axios from "axios";
import React, { useEffect, useState } from "react";
import { BE_URL } from "../../../../config";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../../../../redux/features/cart";
import { Delete } from "@mui/icons-material";
import emptyCart from "../../../../../public/cart/emptyCart.png";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default function CartCard({ ele, setOpenCloseSideBar }) {
  let [productCartData, setProductCartData] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    setProductCartData(ele);
  }, [ele]);
  const dispatch = useDispatch();
  function plusAddToCart(id) {
    axios({
      method: "post",
      url: `${BE_URL}/cart/create/${id}`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => {
        dispatch(fetchCartData());
      })
      .catch((err) => {
        console.log(err?.message);
      });
  }
  let cardId = useSelector((state) => state?.cartSlice?.cartId);

  function minusAddToCart(pId, count) {
    axios({
      method: "put",
      url: `${BE_URL}/cart/update`,
      data: {
        _id: cardId,
        productId: pId,
        isRemove: count == 1 ? true : false,
      },
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => {
        dispatch(fetchCartData());
      })
      .catch((err) => {
        console.log(err?.message);
      });
  }
  function deleteProductCart(pId) {
    axios({
      method: "put",
      url: `${BE_URL}/cart/update`,
      data: {
        _id: cardId,
        productId: pId,
        isRemove: true,
      },
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => {
        dispatch(fetchCartData());
      })
      .catch((err) => {
        console.log(err?.message);
      });
  }
  return (
    <>
      {!productCartData ? (
        <div className="emptyCart w-100 h-100 d-flex flex-column justify-content-center align-items-center">
          <img src={emptyCart} alt="" />
          <h4>Your cart is feeling lonely</h4>
          <Button
            onClick={() => {
              navigate("/products");
              setOpenCloseSideBar(false);
            }}
            className="bg-gradient fs-5 pt-2 pb-2 ps-4 pe-4 mt-2 bg-black"
          >
            Start Shopping
          </Button>
        </div>
      ) : (
        productCartData?.map((ele) => {
          return (
            <div
              key={ele?.productId?._id}
              className="filledCart d-flex mt-3 mb-3 me-4 ms-4 rounded"
              style={{ border: "1px solid #b2afaf" }}
            >
              <div
                className="p-2"
                style={{
                  height: "150px",
                  width: "150px",
                  borderRight: "1px solid #b2afaf",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate(`/adminproducts/${ele?.productId?._id}`);
                  setOpenCloseSideBar(false);
                }}
              >
                <img
                  style={{ objectFit: "cover" }}
                  className="h-100 w-100"
                  src={ele?.productId?.thumbnail}
                  alt=""
                />
              </div>
              <div className="d-flex flex-column justify-content-between p-3">
                <div className="name fw-bold">
                  {ele?.productId?.description}
                </div>
                <div className="price">₹ {ele?.productId?.price}</div>
                <div className="d-flex justify-content-between">
                  <div className=" d-flex Qauntity">
                    <span
                      className="count d-flex rounded text-white justify-content-center align-items-center bg-black"
                      style={{
                        height: "35px",
                        width: "35px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        minusAddToCart(ele?.productId?._id, ele?.count)
                      }
                    >
                      -
                    </span>
                    <span
                      className="count d-flex rounded  justify-content-center align-items-center"
                      style={{ height: "35px", width: "35px" }}
                    >
                      {ele?.count}
                    </span>
                    <span
                      className="count d-flex rounded text-white bg-black justify-content-center align-items-center"
                      style={{
                        height: "35px",
                        width: "35px",
                        cursor: "pointer",
                      }}
                      onClick={() => plusAddToCart(ele?.productId?._id)}
                    >
                      +
                    </span>
                  </div>
                  <div
                    className="rounded d-flex justify-content-center align-items-center"
                    style={{
                      height: "35px",
                      width: "35px",
                      cursor: "pointer",
                      border: "0.2px solid #b2afaf",
                    }}
                    onClick={() => deleteProductCart(ele?.productId?._id)}
                  >
                    <Delete />
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}
