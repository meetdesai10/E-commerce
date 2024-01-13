import "./wishList.css";
import { Cancel, Favorite } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import WishListCard from "../cards/wishListCard/WishListCard";
import { useSelector } from "react-redux";
export default function WishList({ toggle }) {
  const [openSideCloseBar, setOpenCloseSideBar] = useState(false);

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
  let token = useSelector((state) => state?.logRegSlice?.token);
  return (
    <div className="wishListContainer mt-3">
      <button
        onClick={() => (!token ? toggle() : setOpenCloseSideBar(true))}
        className="pt-2 pb-2 ps-4 pe-4 rounded border-0 wishListBtn"
      >
        <Favorite />
        WishList
      </button>

      <div className="d-flex">
        <div
          className={
            openSideCloseBar
              ? "sideBarContentWish"
              : "sideBarContentWish sideBarContentCloseWish"
          }
        >
          <div className="p-4 d-flex align-items-center justify-content-between bg-black">
            <Cancel
              className="text-white"
              onClick={() => setOpenCloseSideBar(false)}
              style={{ fontSize: "30px", cursor: "pointer" }}
            />
            <div
              style={{ fontSize: "20px" }}
              className="d-flex align-items-center text-white gap-2"
            >
              Wishlist
              <Favorite style={{ fontSize: "30px" }} />
            </div>
          </div>
          {/*Filter content*/}

          <div className="wishContent">
            <WishListCard />
          </div>

          {/*buttons*/}
          <div className="d-flex gap-2 m-4">
            <Button className="bg-gradient fs-5 pt-2 pb-2 ps-5 pe-5 w-100">
              Clear All
            </Button>
          </div>
        </div>
        <div
          className={
            openSideCloseBar
              ? "emptySideBarWish "
              : "emptySideBarWish emptySideBarNoneWish"
          }
          onClick={() => setOpenCloseSideBar(false)}
        ></div>
      </div>
    </div>
  );
}
