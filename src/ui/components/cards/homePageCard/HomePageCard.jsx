import React from "react";
import "./HomePageCard.css";
import { Button } from "reactstrap";
export default function HomePageCard({ ele }) {
  return (
    <>
      <div className="homePageCardContainer">
        <img src={ele?.img} className="homeCardImages w-100 h-100" alt="" />
        <div className="homePageCardDetails">
          <h1 style={{ fontSize: "60px", fontWeight: "bold" }}>{ele?.title}</h1>
          <p style={{ fontSize: "30px" }}>{ele?.description}</p>
          <Button className="homeCardBtn border-1 border-white">BUY NOW</Button>
        </div>
      </div>
    </>
  );
}
