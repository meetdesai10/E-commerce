import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

export default function Price() {
  return (
    <div className="p-2">
      <FormGroup className="d-flex gap-2">
        <Input
          style={{ height: "20px", width: "20px" }}
          type="checkbox"
          // onChange={(e) => setLogData({ ...logData, email: e?.target?.value })}
        />
        <Label for="exampleEmail">₹0 to ₹999</Label>
      </FormGroup>
      <FormGroup className="d-flex gap-2">
        <Input
          style={{ height: "20px", width: "20px" }}
          type="checkbox"
          // onChange={(e) => setLogData({ ...logData, email: e?.target?.value })}
        />
        <Label for="exampleEmail">₹1000 to ₹2499</Label>
      </FormGroup>
      <FormGroup className="d-flex gap-2">
        <Input
          style={{ height: "20px", width: "20px" }}
          type="checkbox"
          // onChange={(e) => setLogData({ ...logData, email: e?.target?.value })}
        />
        <Label for="exampleEmail">₹2500 to ₹4999</Label>
      </FormGroup>
      <FormGroup className="d-flex gap-2">
        <Input
          style={{ height: "20px", width: "20px" }}
          type="checkbox"
          // onChange={(e) => setLogData({ ...logData, email: e?.target?.value })}
        />
        <Label for="exampleEmail">₹5000 to ₹9999</Label>
      </FormGroup>
      <FormGroup className="d-flex gap-2">
        <Input
          style={{ height: "20px", width: "20px" }}
          type="checkbox"
          // onChange={(e) => setLogData({ ...logData, email: e?.target?.value })}
        />
        <Label for="exampleEmail">₹10000 to ₹19999</Label>
      </FormGroup>
      <FormGroup className="d-flex gap-2">
        <Input
          style={{ height: "20px", width: "20px" }}
          type="checkbox"
          // onChange={(e) => setLogData({ ...logData, email: e?.target?.value })}
        />
        <Label for="exampleEmail">₹20000 to ₹29999</Label>
      </FormGroup>
      <FormGroup className="d-flex gap-2">
        <Input
          style={{ height: "20px", width: "20px" }}
          type="checkbox"
          // onChange={(e) => setLogData({ ...logData, email: e?.target?.value })}
        />
        <Label for="exampleEmail">₹30000 to ₹39999</Label>
      </FormGroup>
      <FormGroup className="d-flex gap-2">
        <Input
          style={{ height: "20px", width: "20px" }}
          type="checkbox"
          // onChange={(e) => setLogData({ ...logData, email: e?.target?.value })}
        />
        <Label for="exampleEmail">₹40000 to ₹50000</Label>
      </FormGroup>
    </div>
  );
}
