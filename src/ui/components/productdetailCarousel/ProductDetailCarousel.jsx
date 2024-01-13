import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { BE_URL } from "../../../config";
import { Button, Input, Label } from "reactstrap";

export default function ProductDetailCarousel({ id }) {
  let [productDetailData, setProductDetailData] = useState([]);
  let [qty, setQrty] = useState(1);

  useEffect(() => {
    axios({
      method: "get",
      url: `${BE_URL}/product/getProductById/${id}`,
    }).then((res) => {
      setProductDetailData(res?.data?.data);
    });
  }, [id]);

  return (
    <div className="d-flex gap-3 mt-3">
      <div className="w-50">
        <Carousel
          autoPlay={false}
          interval={3000}
          cycleNavigation={true}
          navButtonsAlwaysVisible={true}
          animation="slide"
          duration={700}
          indicatorContainerProps={{
            style: { display: "none" },
          }}
          height="80vh"
        >
          {productDetailData?.images?.map((item, index) => {
            return (
              <img
                style={{
                  objectFit: "contain",
                  cursor: "pointer",
                  height: "100%",
                  width: "100%",
                }}
                key={index}
                src={item}
              />
            );
          })}
        </Carousel>
      </div>
      <div className=" w-50 d-flex flex-column gap-3">
        <p style={{ fontWeight: "500", fontSize: "30px" }}>
          {productDetailData?.description}
        </p>
        <p>₹{productDetailData?.price}.00</p>
        <p className="w-75" style={{ color: "#666" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          ipsum! Perspiciatis consectetur saepe exercitationem dignissimos
          molestias numquam, similique cum, dolorem, aliquam quaerat ipsum nihil
          iure aut! Iure in quam labore.
        </p>
        <div className="d-flex gap-2 align-items-center">
          <Label>Qty:</Label>
          <Input
            onChange={(e) =>
              setQrty(e?.target?.value <= 0 ? 1 : e?.target?.value)
            }
            value={qty}
            type="number"
            style={{ width: "65PX" }}
          />
          <Button style={{ backgroundColor: "#cbba9c" }} className="border-0">
            ADD TO CART
          </Button>
        </div>
        <div className="d-flex align-items-center gap-3">
          <Button
            style={{ backgroundColor: "#cbba9c", width: "200px" }}
            className="border-0 mt-4"
          >
            ADD TO WISHLIST
          </Button>
          <Button
            style={{ backgroundColor: "#cbba9c", width: "110px" }}
            className="border-0 mt-4"
          >
            BUY NOW
          </Button>
        </div>
      </div>
    </div>
  );
}
