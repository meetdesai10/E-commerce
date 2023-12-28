import React, { useState } from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
export default function Login({ logReg, setLogReg, toggle }) {
  const [logData, setLogData] = useState({
    email: "",
    password: "",
  });
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
        <Label for="exampleEmail">Email</Label>
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
        onClick={toggle}
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
