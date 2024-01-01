import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./pagination.css";
import { NavLink } from "react-bootstrap";
export default function ({ limit, pageNumber, setPageNumber, tableDivRef }) {
  console.log(": limit", limit);
  const [pagination, setPagination] = useState([1, 2, 3, 4, 5]);
  let data = useSelector((state) =>
    Math.ceil(state?.ProductsSlice?.count / limit)
  );
  console.log(": data", data);
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
      <main>
        <nav class="pagination">
          <ul class="crumbs">
            <li>
              <span class="crumb crumb__prev">
                {" "}
                <KeyboardDoubleArrowLeft onClick={() => setPageNumber(3)} />
              </span>
            </li>
            {pagination?.map((ele, index) => {
              return (
                <NavLink
                  key={index}
                  onClick={() => {
                    setPageNumber(ele);
                    // window.scrollTo(0, 0);
                    // document
                    //   .getElementById("tableStart")
                    //   .scrollIntoView({ behavior: "smooth" });
                    tableDivRef.current.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span class="crumb crumb__prev">{ele}</span>
                </NavLink>
              );
            })}

            <li>
              <span class="crumb crumb__next">
                <KeyboardDoubleArrowRight onClick={() => setPageNumber(data)} />
              </span>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
