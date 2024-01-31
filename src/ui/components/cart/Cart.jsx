import "./cart.css";
import { AddShoppingCart, Cancel } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { fetchCartData } from "../../../redux/features/cart";
import CartCard from "../cards/cartCard/CartCard";

export default function Cart() {
  const [openSideCloseBar, setOpenCloseSideBar] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (openSideCloseBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openSideCloseBar]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, []);
  let cartCount = useSelector((state) => state?.cartSlice?.data);
  return (
    <div className="cartContainer mt-3">
      <div className="cartIcon">
        <AddShoppingCart
          onClick={() => setOpenCloseSideBar(true)}
          style={{
            fontSize: "30px",
            cursor: "pointer",
            color: "black",
          }}
        />
        <div className="cartCount">{cartCount?.length || 0}</div>
      </div>

      <div className="d-flex">
        <div
          className={
            openSideCloseBar
              ? "sideBarContentCart"
              : "sideBarContentCart sideBarContentCloseCart"
          }
        >
          <div className="p-4 d-flex align-items-center justify-content-between bg-black">
            <Cancel
              className="text-white"
              onClick={() => setOpenCloseSideBar(false)}
              style={{ fontSize: "30px", cursor: "pointer" }}
            />
            <div
              style={{ fontSize: "20px" }}
              className="d-flex align-items-center text-white gap-2"
            >
              <AddShoppingCart />
              Cart
            </div>
          </div>
          {/*Filter content*/}

          <div className="cartContent">
            <CartCard
              ele={cartCount}
              setOpenCloseSideBar={setOpenCloseSideBar}
            />
          </div>

          {/*buttons*/}
          {cartCount ? (
            <div className="d-flex gap-2 m-4">
              <Button className="bg-gradient fs-5 pt-2 pb-2 ps-5 pe-5 w-100 bg-black">
                CheckOut Now
              </Button>
            </div>
          ) : null}
        </div>
        <div
          className={
            openSideCloseBar
              ? "emptySideBarCart "
              : "emptySideBarCart emptySideBarNoneCart"
          }
          onClick={() => setOpenCloseSideBar(false)}
        ></div>
      </div>
    </div>
  );
}
