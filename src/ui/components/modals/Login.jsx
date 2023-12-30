import axios from "axios";
import React, { useState } from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { BE_URL } from "../../../config";
import { useDispatch } from "react-redux";
import { logRegAuth } from "../../../redux/features/logReg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Login({ logReg, setLogReg, toggle }) {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let [logData, setLogData] = useState({
    email: "",
    password: "",
  });

  function submitHandler() {
    axios({
      method: "post",
      url: `${BE_URL}/user/signin`,
      data: logData,
    })
      .then((res) => {
        dispatch(logRegAuth(res?.data));
        navigate("/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Good job!",
          title: "you Logged successfully",
          showConfirmButton: true,
          timer: 800,
        });
        toggle();
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
    <>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          placeholder="enter your email"
          type="text"
          onChange={(e) => setLogData({ ...logData, email: e?.target?.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Password</Label>
        <Input
          placeholder="enter your password"
          type="text"
          onChange={(e) =>
            setLogData({ ...logData, password: e?.target?.value })
          }
        />
      </FormGroup>

      <Button
        className="w-100 mb-3 bg-black"
        color="secondary"
        onClick={() => submitHandler()}
      >
        Login
      </Button>
      <div
        style={{
          cursor: "pointer",
          color: "blue",
          textDecoration: "underline",
        }}
        onClick={() => setLogReg(!logReg)}
      >
        Do you have a Account?
      </div>
      {/* <div>{logData.email}</div>
      <div>{logData.password}</div> */}
    </>
  );
}
