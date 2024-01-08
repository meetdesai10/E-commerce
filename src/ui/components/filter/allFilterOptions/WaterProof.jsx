import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
const waterProofArray = ["3", "5", "10", "20", "30"];
export default function WaterProof({ filterData, setFilterData }) {
  function waterProofHandler({ value, checked }) {
    let newWaterProof = [...filterData.waterProof];
    if (checked) {
      newWaterProof.push(value);
    } else {
      newWaterProof = newWaterProof.filter((ele) => ele !== value);
    }
    setFilterData({ ...filterData, waterProof: newWaterProof });
  }
  return (
    <div className="p-2">
      {waterProofArray.map((ele) => {
        return (
          <FormGroup className="d-flex gap-2">
            <Input
              style={{ height: "20px", width: "20px" }}
              placeholder="enter your email"
              type="checkbox"
              value={ele}
              onChange={(e) => waterProofHandler(e.target)}
            />
            <Label for="exampleEmail">{ele} ATM</Label>
          </FormGroup>
        );
      })}
    </div>
  );
}
