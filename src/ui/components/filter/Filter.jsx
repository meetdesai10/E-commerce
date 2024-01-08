import { Cancel, FilterAlt } from "@mui/icons-material";
import React, { useState } from "react";
import "./Filter.css";
import { Button } from "reactstrap";
export default function Filter() {
  const [openSideCloseBar, setOpenCloseSideBar] = useState(false);
  return (
    <div className="filterContainer mt-3">
      <button
        onClick={() => setOpenCloseSideBar(true)}
        className="pt-2 pb-2 ps-4 pe-4 rounded border-0 filterBtn"
      >
        <FilterAlt />
        Filter
      </button>

      <div className="d-flex">
        <div
          className={
            openSideCloseBar
              ? "sideBarContent"
              : "sideBarContent sideBarContentClose"
          }
        >
          <div className="p-4 d-flex align-items-center justify-content-between">
            <div
              style={{ fontSize: "20px" }}
              className="d-flex align-items-center"
            >
              <FilterAlt style={{ fontSize: "30px" }} />
              Filters By
            </div>
            <Cancel
              onClick={() => setOpenCloseSideBar(false)}
              style={{ fontSize: "30px", cursor: "pointer" }}
            />
          </div>
          {/*Filter content*/}

          <div className="d-flex w100 ">
            <div
              className="category d-flex flex-column gap-3"
              style={{ fontSize: "18px" }}
            >
              <div>Category</div>
              <div>color</div>
              <div>price</div>
              <div>Best for</div>
              <div>WaterProof</div>
              <div>Playback</div>
              <div>Features</div>
              <div>Availability</div>
            </div>
            <div className="openFilterOption "></div>
          </div>
          {/*buttons*/}
          <div className="d-flex gap-2 m-4">
            <Button
              className="bg-gradient fs-5 pt-2 pb-2 ps-5 pe-5"
              style={{ width: "200px" }}
            >
              Clear All
            </Button>
            <Button
              className="bg-dark pt-2 pb-2 ps-5 pe-5"
              style={{ width: "200px" }}
            >
              Apply Filter
            </Button>
          </div>
        </div>
        <div
          className={
            openSideCloseBar ? "emptySideBar " : "emptySideBar emptySideBarNone"
          }
          onClick={() => setOpenCloseSideBar(false)}
        ></div>
      </div>
    </div>
  );
}
