import React from "react";
import { useParams } from "react-router-dom";
import ProductDetailCarousel from "../../components/productdetailCarousel/ProductDetailCarousel";

export default function ProductDetailPage() {
  const { adminProductId } = useParams();
  return (
    <div style={{ padding: "0px 120px" }}>
      <ProductDetailCarousel id={adminProductId} />
    </div>
  );
}
