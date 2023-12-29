import React, { useEffect, useState } from "react";
import "../Header/Header.css";
import { AccountBox, AddShoppingCart } from "@mui/icons-material";
import logo from "../../../../public/logoHeader.jpg";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Login from "../modals/Login";
import Register from "../modals/Register";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/features/logReg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let dispatch = useDispatch();
  let [modal, setModal] = useState(false);
  let [isLogin, setIsLogin] = useState(false);
  let [logReg, setLogReg] = useState(true);
  let [user, setUser] = useState("");
  let toggle = () => setModal(!modal);
  const userData = useSelector((state) => state.logRegSlice?.user);
  useEffect(() => {
    setUser(userData);
  }, [userData]);
  // functions
  console.log("sdsdsds", user.userType);
  function logOutUser() {
    dispatch(logOut());
  }
  return (
    <div className="headerContainer d-flex pe-5 ps-5 pt-2 pb-2 justify-content-between align-items-center ">
      <div className="headerPages d-flex gap-5 fs-5 align-items-center">
        {user?.userType === "admin" ? (
          <>
            <div style={{ cursor: "pointer" }}>Dashboard</div>
            <div style={{ cursor: "pointer" }}>Product</div>
            <div style={{ cursor: "pointer" }}>Order </div>
            <div style={{ cursor: "pointer" }}>User</div>
          </>
        ) : (
          <>
            <img src={logo} className="" style={{ height: "80px" }} alt="" />
            <div style={{ cursor: "pointer" }}>Products</div>
            <div style={{ cursor: "pointer" }}>AboutUs</div>
            <div style={{ cursor: "pointer" }}>Contact Us</div>
          </>
        )}
      </div>
      <div className="headerRightSide d-flex align-items-center gap-4">
        {user?._id ? (
          <Button
            onClick={() => logOutUser()}
            className="loginBtn bg-white border-3 border-black text-black fw-medium ps-4 pe-4 pt-2 pb-2 fs-6 cursor-pointer"
          >
            Logout
          </Button>
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
              <Register logReg={logReg} setLogReg={setLogReg} toggle={toggle} />
            )}
          </ModalBody>
        </Modal>
        <AccountBox
          style={{ height: "40px", width: "40px", cursor: "pointer" }}
        />
        <AddShoppingCart style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
}
