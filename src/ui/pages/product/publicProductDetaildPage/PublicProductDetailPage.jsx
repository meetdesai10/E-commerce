import React from "react";
import ProductDetailCarousel from "../../../components/productdetailCarousel/ProductDetailCarousel";
import { useParams } from "react-router-dom";
export default function PublicProductDetailPage() {
  const { publicProductId } = useParams();
  return (
    <div>
      <ProductDetailCarousel id={publicProductId} />
    </div>
  );
}
