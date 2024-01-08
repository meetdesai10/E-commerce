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
  let data = useSelector((state) => state?.ProductsSlice?.count);

  useEffect(() => {
    let pageCount = Math.ceil(data / limit);
    if (pageNumber >= 3 && pageNumber <= pageCount - 2) {
      let arr = [
        pageNumber - 2,
        pageNumber - 1,
        pageNumber,
        pageNumber + 1,
        pageNumber + 2,
      ];
      setPagination(arr);
    } else if (pageNumber == pageCount || pageNumber == pageCount - 1) {
      let arr = [
        pageCount - 4,
        pageCount - 3,
        pageCount - 2,
        pageCount - 1,
        pageCount,
      ];
      setPagination(arr);
    } else {
      let arr = [1, 2, 3, 4, 5];
      setPagination(arr);
    }
  }, [pageNumber, data]);
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
                onClick={() => setPageNumber(Math.ceil(data / limit))}
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
