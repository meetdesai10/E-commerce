import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { BE_URL } from "../../../config";
import { logRegAuth } from "../../../redux/features/logReg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Register({ logReg, setLogReg, toggle }) {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [regData, setRegData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    password: "",
  });

  function submitHandler() {
    axios({
      method: "post",
      url: `${BE_URL}/user/signUp`,
      data: regData,
    })
      .then((res) => {
        dispatch(logRegAuth(res?.data));
        toggle();
        localStorage.setItem("login", "true");
        navigate("/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Good job!",
          title: "you registered successfully",
          showConfirmButton: true,
          timer: 800,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
          showConfirmButton: true,
          timer: 800,
        });
      });
  }
  return (
    <div>
      <FormGroup>
        <Label for="exampleEmail">Name</Label>
        <Input
          placeholder="enter your email"
          type="text"
          onChange={(e) => setRegData({ ...regData, name: e?.target?.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          placeholder="enter your email"
          type="text"
          onChange={(e) => setRegData({ ...regData, email: e?.target?.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Mobile Number</Label>
        <Input
          placeholder="enter your email"
          type="text"
          onChange={(e) =>
            setRegData({ ...regData, mobileNumber: e?.target?.value })
          }
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Password</Label>
        <Input
          placeholder="enter your password"
          type="text"
          onChange={(e) =>
            setRegData({ ...regData, password: e?.target?.value })
          }
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Confirm Password</Label>
        <Input placeholder="enter your password" type="text" />
      </FormGroup>

      <Button
        className="w-100 mb-3 bg-black"
        color="secondary"
        onClick={submitHandler}
      >
        Create A Account
      </Button>
      <div
        className="d-inline-block"
        style={{
          cursor: "pointer",
          color: "blue",
          textDecoration: "underline",
        }}
        onClick={() => setLogReg(!logReg)}
      >
        Do you have a Account?
      </div>
      {/* <div>{regData.name}</div>
      <div>{regData.email}</div>
      <div>{regData.mobileNumber}</div>
      <div>{regData.password}</div> */}
    </div>
  );
}
