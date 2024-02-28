import React from "react";
import "./homePagefeaturecard.css";
import { AddShoppingCart, FavoriteBorder } from "@mui/icons-material";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { BE_URL } from "../../../../config";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { fetchCartData } from "../../../../redux/features/cart";
export default function HomePagefeatureCard({ ele, toggle }) {
  let token = useSelector((state) => state?.logRegSlice?.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let [productId, setproductId] = useSearchParams();
  function cartHandler(id) {
    axios({
      method: "post",
      url: `${BE_URL}/cart/create/${id}`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
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
  function wishListHandler(id) {
    axios({
      method: "post",
      url: `${BE_URL}/wish_list/create/${id}`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
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
      <div className="product-card">
        <div
          className="product-tumb"
          onClick={() => navigate(`/products/${ele?._id}`)}
          style={{ cursor: "pointer" }}
        >
          <img src={ele?.thumbnail} alt="" style={{ cursor: "pointer" }} />
        </div>
        <div className="product-details">
          <span className="product-catagory">{ele?.title}</span>
          <h4>
            <span href="">{ele?.description}</span>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
            possimus nostrum!
          </p>

          <div className="product-bottom-details">
            <div>
              <div style={{ color: "gray", fontSize: "15px" }}>
                Discount{" " + ele?.discountPercentage}%
              </div>
              <div className="product-price">₹{ele?.price}</div>
            </div>
            <div className="product-links">
              <div className="product-icon">
                <AddShoppingCart
                  style={{ cursor: "pointer" }}
                  onClick={() => (!token ? toggle() : cartHandler(ele?._id))}
                />
              </div>
              <div className="product-icon">
                <FavoriteBorder style={{ cursor: "pointer" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
