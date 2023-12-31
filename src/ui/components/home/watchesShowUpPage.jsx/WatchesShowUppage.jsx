import React from "react";
import clock1 from "../../../../../public/clock/clock1.webp";
import clock2 from "../../../../../public/clock/clock2.webp";
import clock3 from "../../../../../public/clock/clock3.webp";
import clock4 from "../../../../../public/clock/clock4.webp";
import clock5 from "../../../../../public/clock/clock5.webp";
import clock6 from "../../../../../public/clock/clock6.webp";
export default function WatchesShowUppage() {
  return (
    <div className="bg-white">
      <div style={{ marginTop: "80px" }}>
        <div className="d-flex flex-column justify-content-center gap-2 align-items-center">
          <p style={{ color: "gray" }}>A VARIETY OF 300+ COLLECTION</p>
          <hr
            style={{
              height: "1px",
              width: "70px",
              backgroundColor: "black",
              margin: "0px",
              padding: "0px",
            }}
          />
          <div className="d-flex mt-3 align-items-center gap-4 ">
            <h1 style={{ color: "#cbba9c", fontWeight: "bolder" }}>
              CHOOSE A{" "}
            </h1>
            <h1 style={{ color: "black", fontWeight: "bolder" }}>DIAL </h1>
          </div>
          <p
            style={{
              color: "gray",
              width: "40%",
            }}
            className="text-center"
          >
            This is the best in class effective watches from the luxury brand
            watch.co and gizmo. Lot of efforts. Take a peek look into it
          </p>
        </div>
      </div>
      <div
        className="clockImgaesSection d-flex justify-content-between"
        style={{ padding: "0px 150px", marginTop: "70px" }}
      >
        <img src={clock1} alt="" />
        <img src={clock2} alt="" />
        <img src={clock3} alt="" />
        <img src={clock4} alt="" />
        <img src={clock5} alt="" />
        <img src={clock6} alt="" />
      </div>
    </div>
  );
}
