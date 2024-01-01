import React, { useEffect, useState } from "react";
import "../Header/Header.css";
import { AccountBox, AddShoppingCart } from "@mui/icons-material";
import logo from "../../../../public/logoHeader.jpg";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import Login from "../modals/Login";
import Register from "../modals/Register";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/features/logReg";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Header() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [modal, setModal] = useState(false);
  let [isLogin, setIsLogin] = useState(false);
  let [logReg, setLogReg] = useState(true);
  let toggle = () => {
    setModal(!modal);
    setLogReg(true);
  };
  const userData = useSelector((state) => state.logRegSlice);

  // functions

  function logOutUser() {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logout successfull",
          icon: "success",
          timer: 800,
        });
        dispatch(logOut());
        navigate("/");
      }
    });
  }
  return (
    <>
      <div className="headerContainer d-flex pe-5 ps-5 pt-1 pb-1 justify-content-between align-items-center ">
        <div className="headerPages d-flex gap-5 fs-5 align-items-center">
          {userData?.user?.userType === "admin" ? (
            <>
              <NavLink
                style={{ color: "black", textDecoration: "none" }}
                to={"/"}
              >
                <img
                  src={logo}
                  style={{ height: "80px" }}
                  className=""
                  alt=""
                />
              </NavLink>
              <NavLink
                style={{ color: "black", textDecoration: "none" }}
                to={"/"}
              >
                Dashboard
              </NavLink>
              <NavLink
                style={{ color: "black", textDecoration: "none" }}
                to={"/adminproducts"}
              >
                Product
              </NavLink>
              <NavLink
                style={{ color: "black", textDecoration: "none" }}
                to={"/order"}
              >
                Order{" "}
              </NavLink>
              <NavLink
                style={{ color: "black", textDecoration: "none" }}
                to={"/user"}
              >
                User
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                style={{ color: "black", textDecoration: "none" }}
                to={"/"}
              >
                <img
                  src={logo}
                  className=""
                  style={{ height: "80px" }}
                  alt=""
                />
              </NavLink>
              <NavLink
                style={{ color: "black", textDecoration: "none" }}
                to={"/"}
              >
                Home
              </NavLink>
              <NavLink
                style={{ color: "black", textDecoration: "none" }}
                to={"/products"}
              >
                Products
              </NavLink>
              <NavLink
                style={{ color: "black", textDecoration: "none" }}
                to={"/about"}
              >
                AboutUs
              </NavLink>
              <NavLink
                style={{ color: "black", textDecoration: "none" }}
                to={"/contact"}
              >
                Contact Us
              </NavLink>
            </>
          )}
        </div>
        <div className="headerRightSide d-flex align-items-center gap-4">
          {userData?.token !== "" ? (
            <>
              <Button
                onClick={() => logOutUser()}
                className="loginBtn bg-white border-3 border-black text-black fw-medium ps-4 pe-4 pt-2 pb-2 fs-6 cursor-pointer"
              >
                Logout
              </Button>
              <NavLink
                style={{ color: "black" }}
                to={
                  userData?.user?.userType == "admin"
                    ? "/adminProfile"
                    : "/profile"
                }
              >
                <AccountBox
                  style={{ height: "40px", width: "40px", cursor: "pointer" }}
                />
              </NavLink>
            </>
          ) : (
            <Button
              onClick={toggle}
              className="loginBtn bg-white border-3 border-black text-black fw-medium ps-4 pe-4 pt-2 pb-2 fs-6 cursor-pointer"
            >
              Login
            </Button>
          )}
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>
              {logReg ? "Login" : "Register"}
            </ModalHeader>
            <ModalBody>
              {logReg ? (
                <Login logReg={logReg} setLogReg={setLogReg} toggle={toggle} />
              ) : (
                <Register
                  logReg={logReg}
                  setLogReg={setLogReg}
                  toggle={toggle}
                />
              )}
            </ModalBody>
          </Modal>
          <NavLink to={"/cart"}>
            <AddShoppingCart
              style={{ fontSize: "30px", cursor: "pointer", color: "black" }}
            />
          </NavLink>
        </div>
      </div>
    </>
  );
}
