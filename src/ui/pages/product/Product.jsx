import React, { useEffect, useRef, useState } from "react";
import Pagination from "../../components/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import HomePagefeatureCard from "../../components/cards/homePageFeatureCard/HomePagefeatureCard";
import { fetchProductData } from "../../../redux/features/Products";
export default function Product() {
  const dispatch = useDispatch();
  let [productPageNumber, setProductPageNumber] = useState(3);
  useEffect(() => {
    dispatch(fetchProductData({ page: productPageNumber, limit: 21 }));
  }, [productPageNumber]);
  let products = useSelector((state) => state?.ProductsSlice?.productData);
  const tableDivRef = useRef(null);
  return (
    <div>
      <div ref={tableDivRef} className="w-100">
        <div
          className="mainProductContainer d-flex justify-content-between flex-wrap "
          style={{ margin: "0px 50px" }}
        >
          {products?.map((ele, index) => {
            return <HomePagefeatureCard key={index} ele={ele} />;
          })}
        </div>
      </div>
      <Pagination
        tableDivRef={tableDivRef}
        limit="20"
        pageNumber={productPageNumber}
        setPageNumber={setProductPageNumber}
      />
    </div>
  );
}
