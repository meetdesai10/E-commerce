import React, { useEffect } from "react";
import homePageFeatureCardData from "../../../../data/homePageFeatureCardData";
import HomePagefeatureCard from "../../cards/homePageFeatureCard/HomePagefeatureCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../../../redux/features/Products";
export default function HomeFeature() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductData({ page: 1, limit: 6 }));
  }, []);
  const data = useSelector((state) => state?.ProductsSlice?.productData);
  return (
    <div>
      <div className="homefeatureHeader  pt-5">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p style={{ color: "gray" }}>360 COLLECTION</p>
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
              FEATURED{" "}
            </h1>
            <h1 style={{ color: "black", fontWeight: "bolder" }}>PRODUCTS </h1>
          </div>
        </div>
      </div>

      <div className="w-100 d-flex justify-content-between text-center flex-wrap ps-5 pe-5">
        {data?.map((ele, index) => {
          return <HomePagefeatureCard key={index} ele={ele} />;
        })}
      </div>
    </div>
  );
}
