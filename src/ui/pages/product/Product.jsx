import React, { useEffect, useRef, useState } from "react";
import Pagination from "../../components/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import HomePagefeatureCard from "../../components/cards/homePageFeatureCard/HomePagefeatureCard";
import { fetchProductData } from "../../../redux/features/Products";
import Filter from "../../components/filter/Filter";
import Footer from "../../components/footer/Footer";
import WishList from "../../components/wishList/WishList";

export default function Product({ productsRef, toggle }) {
  const dispatch = useDispatch();
  let [productPageNumber, setProductPageNumber] = useState(1);
  let [filterData, setFilterData] = useState({
    category: [],
    color: [],
    price: [],
    waterProof: [],
    features: [],
  });
  useEffect(() => {
    dispatch(fetchProductData({ page: productPageNumber, limit: 21 }));
  }, [productPageNumber]);
  let products = useSelector((state) => state?.ProductsSlice?.productData);
  const tableDivRef = useRef(null);
  return (
    <div ref={productsRef}>
      <div className="d-flex justify-content-between">
        <Filter filterData={filterData} setFilterData={setFilterData} />
        <WishList />
      </div>
      <div ref={tableDivRef} className="w-100">
        <div
          className="mainProductContainer d-flex justify-content-between flex-wrap"
          style={{ margin: "0px 50px" }}
        >
          {products?.map((ele, index) => {
            return (
              <HomePagefeatureCard toggle={toggle} key={index} ele={ele} />
            );
          })}
        </div>
      </div>
      <Pagination
        tableDivRef={tableDivRef}
        limit="21"
        pageNumber={productPageNumber}
        setPageNumber={setProductPageNumber}
      />
      <Footer />
    </div>
  );
}
