import React from "react";
import BlogCard from "../../cards/blogcard/BlogCard";
import blogData from "../../../../data/blog";
export default function HomeBlogpage() {
  return (
    <>
      <div style={{ marginTop: "150px" }}>
        <div className="d-flex flex-column justify-content-center gap-2 align-items-center">
          <p style={{ color: "gray" }}>HAPPENINGS AROUND</p>
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
            <h1 style={{ color: "#cbba9c", fontWeight: "bolder" }}>OUR </h1>
            <h1 style={{ color: "black", fontWeight: "bolder" }}>BLOG </h1>
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-between flex-wrap "
        style={{ marginTop: "70px", padding: "0px 50px" }}
      >
        {blogData?.map((ele, index) => {
          return <BlogCard key={index} ele={ele} />;
        })}
      </div>
    </>
  );
}
