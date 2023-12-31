import React from "react";
import "./homePagefeatureCard.css";
import { AddShoppingCart, FavoriteBorder } from "@mui/icons-material";
export default function HomePagefeatureCard({ ele }) {
  return (
    <>
      <div
        className="homepagefeatureCardContainer"
        style={{ marginBottom: "80px" }}
      >
        <div>
          <img className="homepagefeatureCardimage" src={ele?.img} alt="" />
        </div>
        <div className="details ps-4">
          <div>{ele?.description}</div>
          <div style={{ color: "grey" }}>Rs.{ele?.price}</div>
          <div className="carAndWishlist ">
            <AddShoppingCart style={{ fontSize: "30px", cursor: "pointer" }} />
            <FavoriteBorder style={{ fontSize: "30px", cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </>
  );
}
