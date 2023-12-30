import React from "react";
import { FormGroup, Label,Input, Button } from "reactstrap";

export default function AddProductModel() {
  return (
    <div>
      <FormGroup>
        <Label for="exampleEmail">thumbnail</Label>
        <Input
          placeholder="enter thumbnail"
          type="text"
          onChange={(e) => setLogData({ ...logData, email: e?.target?.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">title</Label>
        <Input
          placeholder="enter title"
          type="text"
          onChange={(e) => setLogData({ ...logData, email: e?.target?.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Brand</Label>
        <Input
          placeholder="enter brand"
          type="text"
          onChange={(e) => setLogData({ ...logData, email: e?.target?.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">description</Label>
        <Input
          placeholder="enter description
"
          type="text"
          onChange={(e) => setLogData({ ...logData, email: e?.target?.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">price</Label>
        <Input
          placeholder="enter price"
          type="text"
          onChange={(e) => setLogData({ ...logData, email: e?.target?.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">discountPercentage</Label>
        <Input
          placeholder="enter discountPercentage"
          type="text"
          onChange={(e) => setLogData({ ...logData, email: e?.target?.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Stock</Label>
        <Input
          placeholder="enter stock"
          type="text"
          onChange={(e) => setLogData({ ...logData, email: e?.target?.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">size</Label>
        <Input
          placeholder="enter size"
          type="text"
          onChange={(e) => setLogData({ ...logData, email: e?.target?.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">category</Label>
        <Input
          placeholder="enter category"
          type="text"
          onChange={(e) => setLogData({ ...logData, email: e?.target?.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">description</Label>
        <Input
          placeholder="brand name"
          type="text"
          onChange={(e) => setLogData({ ...logData, email: e?.target?.value })}
        />
      </FormGroup>
      <Button
        className="w-100 mb-3 bg-black"
        color="secondary"
      >
        Add Products
      </Button>
    </div>
  );
}
