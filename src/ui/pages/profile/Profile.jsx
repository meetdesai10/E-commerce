import React from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";

export default function Profile() {
  return (
    <div className="me-5 ms-5 mt-2" style={{ width: "500px" }}>
      <img
        className="mb-5"
        style={{ height: "100px", width: "100px", borderRadius: "50%" }}
        src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
        "
        alt=""
      />
      <FormGroup>
        <Label for="exampleEmail">Name</Label>
        <Input
          type="text"
          // onChange={(e) => setRegData({ ...regData, name: e?.target?.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="text"
          // onChange={(e) => setRegData({ ...regData, email: e?.target?.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Mobile Number</Label>
        <Input
          type="text"
          // onChange={(e) =>
          //   setRegData({ ...regData, mobileNumber: e?.target?.value })
          // }
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Password</Label>
        <Input
        // type="text"
        // onChange={(e) =>
        //   setRegData({ ...regData, password: e?.target?.value })
        // }
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Confirm Password</Label>
        <Input type="text" />
      </FormGroup>

      <Button
        className="d-inline-block mb-3 bg-black"
        color="secondary"
        // onClick={submitHandler}
      >
        Save Changes
      </Button>
    </div>
  );
}
