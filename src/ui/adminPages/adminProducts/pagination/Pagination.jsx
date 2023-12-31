import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ({ pageNumber, setPageNumber }) {
  const [pagination, setPagination] = useState([1, 2, 3, 4, 5]);
  let data = useSelector((state) =>
    Math.ceil(state?.ProductsSlice?.count / 10)
  );
  console.log(": data", data);
  useEffect(() => {
    if (pageNumber >= 3 && pageNumber <= data - 2) {
      let arr = [
        pageNumber - 2,
        pageNumber - 1,
        pageNumber,
        pageNumber + 1,
        pageNumber + 2,
      ];
      setPagination(arr);
    } else if (pageNumber == data) {
      let arr = [data - 4, data - 3, data - 2, data - 1, data];
      setPagination(arr);
    }
  }, [pageNumber]);
  return (
    <>
      <div className="d-flex  align-items-center">
        <KeyboardDoubleArrowLeft
          style={{
            height: "40px",
            width: "40px",
            border: "1px solid #666",
            cursor: "pointer",
          }}
          onClick={() => setPageNumber(3)}
        />

        {pagination?.map((ele, index) => {
          return (
            <div
              key={index}
              style={{
                border: ".5px solid #666",
                cursor: "pointer",
                height: "40px",
                width: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
              }}
              onClick={() => setPageNumber(ele)}
            >
              {ele}
            </div>
          );
        })}
        <KeyboardDoubleArrowRight
          style={{
            height: "40px",
            width: "40px",
            border: "1px solid #666",
            cursor: "pointer",
          }}
          onClick={() => setPageNumber(data)}
        />
      </div>
    </>
  );
}
