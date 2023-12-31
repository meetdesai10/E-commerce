import React from "react";
export default function BlogCard({ ele }) {
  return (
    <div
      className="blogCardContainer"
      style={{
        width: "400px",
      }}
    >
      <img src={ele?.img} className="w-100 h-100" alt="" />
      <div className="d-flex flex-column gap-2 p-3">
        <div style={{ fontSize: "13px", letterSpacing: "1px" }}>{ele.time}</div>
        <div style={{ fontSize: "19px", fontWeight: "bold" }}>{ele?.title}</div>
        <div style={{ fontSize: "13px", letterSpacing: "1px" }}>
          {ele?.description}
        </div>
        <button className="mt-3 w-50 p-2 border-black bg-transparent">
          READ MORE
        </button>
      </div>
    </div>
  );
}
