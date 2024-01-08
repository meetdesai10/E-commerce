import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
const colors = [
  "black",
  "gray",
  "blue",
  "white",
  "green",
  "red",
  "brown",
  "pink",
  "yellow",
  "orange",
  "silver",
  "gold",
  "Army",
  "wooden",
  "skyBlue",
];
export default function Color({ filterData, setFilterData }) {
  function colorHandler({ value, checked }) {
    let newColor = [...filterData.color];
    if (checked) {
      newColor.push(value);
    } else {
      newColor = newColor.filter((color) => color !== value);
    }
    setFilterData({ ...filterData, color: newColor });
  }
  return (
    <div className="p-2">
      {colors.map((ele, index) => {
        return (
          <FormGroup className="d-flex gap-2" key={index}>
            <Input
              style={{ height: "20px", width: "20px" }}
              type="checkbox"
              value={ele}
              onChange={(e) => colorHandler(e.target)}
            />
            <Label for="exampleEmail">{ele}</Label>
          </FormGroup>
        );
      })}
    </div>
  );
}
