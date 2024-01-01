import React, { useEffect, useState } from "react";
import Pagination from "../../components/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import HomePagefeatureCard from "../../components/cards/homePageFeatureCard/HomePagefeatureCard";
import { fetchProductData } from "../../../redux/features/Products";
export default function Product() {
  const dispatch = useDispatch();
  let [productPageNumber, setProductPageNumber] = useState(3);
  useEffect(() => {
    dispatch(fetchProductData({ page: productPageNumber, limit: 20 }));
  }, [productPageNumber]);
  let products = useSelector((state) => state?.ProductsSlice?.productData);
  return (
    <div>
      <Pagination
        limit="20"
        pageNumber={productPageNumber}
        setPageNumber={setProductPageNumber}
      />
      <div className="w-100">
        <div
          className="mainProductContainer d-flex justify-content-between flex-wrap "
          style={{ border: "1px solid black" }}
        >
          {products?.map((ele, index) => {
            return <HomePagefeatureCard key={index} ele={ele} />;
          })}
        </div>
      </div>
    </div>
  );
}
