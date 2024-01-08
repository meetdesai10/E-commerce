import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
const featureArray = [
  "Analog",
  "LED",
  "Smart",
  "Premium",
  "Hybrid",
  "Analog with Date",
];
export default function Features({ filterData, setFilterData }) {
  function featureHandler({ value, checked }) {
    let newFeature = [...filterData.features];
    if (checked) {
      newFeature.push(value);
    } else {
      newFeature = newFeature.filter((feature) => feature !== value);
    }
    setFilterData({ ...filterData, features: newFeature });
  }
  return (
    <div className="p-2">
      {featureArray?.map((ele) => {
        return (
          <FormGroup className="d-flex gap-2">
            <Input
              style={{ height: "20px", width: "20px" }}
              placeholder="enter your email"
              type="checkbox"
              value={ele}
              onChange={(e) => featureHandler(e.target)}
            />
            <Label for="exampleEmail">{ele}</Label>
          </FormGroup>
        );
      })}
    </div>
  );
}
