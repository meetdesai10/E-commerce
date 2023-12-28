import React, { useState } from "react";
import "./Header.css";
import { AccountBox, AddShoppingCart } from "@mui/icons-material";
import logo from "../../../../public/headerlogo.png";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Login from "../modals/Login";
import Register from "../modals/Register";

export default function Header() {
  const [flag, setflag] = useState(true);
  const [modal, setModal] = useState(false);
  const [logReg, setLogReg] = useState(true);
  const toggle = () => setModal(!modal);
  return (
    <div className="headerContainer d-flex pe-5 ps-5 pt-2 pb-2 justify-content-between align-items-center ">
      <div className="headerPages d-flex gap-5 fs-4  align-items-center">
        {flag ? (
          <>
            <img src={logo} className="" style={{ height: "80px" }} alt="" />
            <div>Products</div>
            <div>AboutUs</div>
            <div>Contact Us</div>
          </>
        ) : (
          <>
            <div>Dashboard</div>
            <div>Product</div>
            <div>Order </div>
            <div>User</div>
          </>
        )}
      </div>
      <div className="headerRightSide d-flex align-items-center gap-4">
        <Button
          onClick={toggle}
          className="bg-black ps-3 pe-4 pt-2 pb-2 fs-6 cursor-pointer "
        >
          login
        </Button>
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
