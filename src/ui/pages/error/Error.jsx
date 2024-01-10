import React from "react";
import error from "../../../../public/Error/ErrorImage.png";
export default function Error() {
  return (
    <div
      className="w-100 d-flex flex-column justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <h1 style={{ color: "red" }}>#Somethig has been wrong</h1>
      <img src={error} alt="" />
    </div>
  );
}
