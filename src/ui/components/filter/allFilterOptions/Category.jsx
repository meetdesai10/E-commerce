import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

export default function Category({ filterData, setFilterData }) {
  function categoryHandler({ target }) {
    let newCategory = [...filterData.category];
    if (target.checked) {
      newCategory.push(target.value);
    } else {
      newCategory = newCategory.filter((category) => category !== target.value);
    }
    setFilterData({ ...filterData, category: newCategory });
  }
  return (
    <div className="p-2">
      <FormGroup className="d-flex gap-2">
        <Input
          style={{ height: "20px", width: "20px" }}
          type="checkbox"
          value={"formal"}
          onChange={(e) => categoryHandler(e)}
        />
        <Label for="exampleEmail">Formal</Label>
      </FormGroup>
      <FormGroup className="d-flex gap-2">
        <Input
          style={{ height: "20px", width: "20px" }}
          type="checkbox"
          value={"casual"}
          onChange={(e) => categoryHandler(e)}
        />
        <Label for="exampleEmail">Casual</Label>
      </FormGroup>
      <FormGroup className="d-flex gap-2">
        <Input
          style={{ height: "20px", width: "20px" }}
          type="checkbox"
          value={"party"}
          onChange={(e) => categoryHandler(e)}
        />
        <Label for="exampleEmail">Party</Label>
      </FormGroup>
      <FormGroup className="d-flex gap-2">
        <Input
          style={{ height: "20px", width: "20px" }}
          type="checkbox"
          value={"sports"}
          onChange={(e) => categoryHandler(e)}
        />
        <Label for="exampleEmail">Sports</Label>
      </FormGroup>
    </div>
  );
}
