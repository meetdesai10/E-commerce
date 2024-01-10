import { Cancel, FilterAlt } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./Filter.css";
import { Button } from "reactstrap";
import { useAsyncError } from "react-router-dom";
import Color from "../../components/filter/allFilterOptions/Color";
import Category from "../../components/filter/allFilterOptions/Category";
import Features from "../../components/filter/allFilterOptions/Features";
import Price from "../../components/filter/allFilterOptions/Price";
import WaterProof from "../../components/filter/allFilterOptions/WaterProof";
export default function Filter({ filterData, setFilterData }) {
  const [openSideCloseBar, setOpenCloseSideBar] = useState(false);
  let [filterCategory, setFilterCategory] = useState("Category");

  useEffect(() => {
    if (openSideCloseBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; // Reset overflow to default when sidebar is closed
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openSideCloseBar]);

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
          <div className="p-4 d-flex align-items-center justify-content-between bg-black">
            <div
              style={{ fontSize: "20px" }}
              className="d-flex align-items-center text-white"
            >
              <FilterAlt style={{ fontSize: "30px" }} />
              Filters By
            </div>
            <Cancel
              className="text-white"
              onClick={() => setOpenCloseSideBar(false)}
              style={{ fontSize: "30px", cursor: "pointer" }}
            />
          </div>
          {/*Filter content*/}

          <div className="d-flex w100">
            <div
              className="category d-flex flex-column gap-3"
              style={{ fontSize: "18px" }}
            >
              <div
                onClick={() => setFilterCategory("Category")}
                className="filterCategory"
              >
                Category
              </div>
              <div
                onClick={() => setFilterCategory("Color")}
                className="filterCategory"
              >
                color
              </div>
              <div
                onClick={() => setFilterCategory("Price")}
                className="filterCategory"
              >
                price
              </div>

              <div
                onClick={() => setFilterCategory("WaterProof")}
                className="filterCategory"
              >
                WaterProof
              </div>

              <div
                onClick={() => setFilterCategory("Features")}
                className="filterCategory"
              >
                Features
              </div>
            </div>
            <div className="openFilterOption ">
              {filterCategory == "Category" && (
                <Category
                  filterData={filterData}
                  setFilterData={setFilterData}
                />
              )}
              {filterCategory == "Color" && (
                <Color filterData={filterData} setFilterData={setFilterData} />
              )}
              {filterCategory == "Price" && (
                <Price filterData={filterData} setFilterData={setFilterData} />
              )}
              {filterCategory == "Features" && (
                <Features
                  filterData={filterData}
                  setFilterData={setFilterData}
                />
              )}
              {filterCategory == "WaterProof" && (
                <WaterProof
                  filterData={filterData}
                  setFilterData={setFilterData}
                />
              )}
            </div>
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
