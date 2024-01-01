import React from "react";
import "./homePagefeatureCard.css";
import { AddShoppingCart, FavoriteBorder } from "@mui/icons-material";
export default function HomePagefeatureCard({ ele }) {
  return (
    <>
      <div className="product-card">
        <div className="product-tumb">
          <img src={ele?.thumbnail} alt="" />
        </div>
        <div className="product-details">
          <span className="product-catagory">{ele?.title}</span>
          <h4>
            <span href="">{ele?.description}</span>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
            possimus nostrum!
          </p>
          <div className="product-bottom-details">
            <div className="product-price">₹{ele?.price}</div>
            <div className="product-links">
              <div className="product-icon">
                <AddShoppingCart style={{ cursor: "pointer" }} />
              </div>
              <div className="product-icon">
                <FavoriteBorder style={{ cursor: "pointer" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
