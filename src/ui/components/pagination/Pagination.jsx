import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./pagination.css";
import { NavLink } from "react-bootstrap";

export default function ({ limit, pageNumber, setPageNumber, tableDivRef }) {
  const [pagination, setPagination] = useState([1, 2, 3, 4, 5]);
  let data = useSelector((state) =>
    Math.ceil(state?.ProductsSlice?.count / limit)
  );

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
    } else if (pageNumber == data || pageNumber == data - 1) {
      let arr = [data - 4, data - 3, data - 2, data - 1, data];
      setPagination(arr);
    } else {
      let arr = [1, 2, 3, 4, 5];
      setPagination(arr);
    }
  }, [pageNumber]);
  return (
    <>
      <main>
        <nav className="pagination">
          <ul className="crumbs">
            <li onClick={() => setPageNumber(1)}>
              <span className="crumb crumb__prev">
                {" "}
                <KeyboardDoubleArrowLeft />
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
                  <span className="crumb crumb__prev">{ele}</span>
                </NavLink>
              );
            })}

            <li>
              <span
                className="crumb crumb__next"
                onClick={() => setPageNumber(data)}
              >
                <KeyboardDoubleArrowRight />
              </span>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
