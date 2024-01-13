import axios from "axios";
import React, { useEffect, useState } from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { BE_URL } from "../../../config";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../../redux/features/Products";

export default function AddProductModel({
  toggle,
  pageNumber,
  setPageNumber,
  updateFlag,
}) {
  let [addProductData, setAddProductData] = useState({
    title: "",
    brand: "",
    description: "",
    thumbnail: "",
    price: "",
    stock: "",
    discountPercentage: "",
    gender: "",
  });
  const dispatch = useDispatch();
  let token = useSelector((state) => state?.logRegSlice?.token);
  const paramsid = new URLSearchParams(location.search).get("id");
  const data = useSelector((state) => state.ProductsSlice);
  let numberOfProducts = useSelector((state) => state?.ProductsSlice?.count);
  let pageCount = Math.ceil(numberOfProducts / 10);
  useEffect(() => {
    axios({
      method: "get",
      url: `${BE_URL}/product/getProductById/${paramsid}`,
    })
      .then((res) => {
        setAddProductData(res?.data?.data);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
          showConfirmButton: true,
          timer: 1500,
        });
      });
  }, [paramsid]);
  function submitHandler() {
    axios({
      method: "post",
      url: `${BE_URL}/product/create`,
      data: addProductData,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product Added Successfull",
          showConfirmButton: true,
          timer: 800,
        });
        dispatch(fetchProductData({ page: pageNumber, limit: 10 }));
        toggle();

        if (data?.productData?.length >= 10 && pageNumber == pageCount) {
          setPageNumber(pageCount + 1);
        } else {
          setPageNumber(pageCount);
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
          showConfirmButton: true,
          timer: 1500,
        });
      });
  }
  function updateHandler() {
    axios({
      method: "put",
      url: `${BE_URL}/product/update/${paramsid}`,
      data: addProductData,
    })
      .then((res) => {
        Swal.fire({
          title: "product Updated",
          icon: "success",
          timer: 800,
        });
        dispatch(fetchProductData({ page: pageNumber, limit: 10 }));
        toggle();
      })
      .catch((err) => {
        Swal.fire({
          title: err.message,
          icon: "error",
          timer: 800,
        });
      });
  }
  return (
    <div>
      <FormGroup>
        <Label for="exampleEmail">Title</Label>
        <Input
          placeholder="enter brand"
          type="text"
          value={addProductData?.title}
          onChange={(e) =>
            setAddProductData({ ...addProductData, title: e?.target?.value })
          }
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Brand</Label>
        <Input
          placeholder="enter brand"
          type="text"
          value={addProductData?.brand}
          onChange={(e) =>
            setAddProductData({ ...addProductData, brand: e?.target?.value })
          }
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Description</Label>
        <Input
          placeholder="enter description"
          type="text"
          value={addProductData?.description}
          onChange={(e) =>
            setAddProductData({
              ...addProductData,
              description: e?.target?.value,
            })
          }
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Thumbnail</Label>
        <Input
          placeholder="enter thumbnail"
          type="text"
          value={addProductData?.thumbnail}
          onChange={(e) =>
            setAddProductData({
              ...addProductData,
              thumbnail: e?.target?.value,
            })
          }
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Price</Label>
        <Input
          placeholder="enter Price"
          type="text"
          value={addProductData?.price}
          onChange={(e) =>
            setAddProductData({ ...addProductData, price: e?.target?.value })
          }
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Stock</Label>
        <Input
          placeholder="enter Stock"
          type="text"
          value={addProductData?.stock}
          onChange={(e) =>
            setAddProductData({ ...addProductData, stock: e?.target?.value })
          }
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">discountPercentage</Label>
        <Input
          placeholder="enter discountPercentage"
          type="text"
          value={addProductData?.discountPercentage}
          onChange={(e) =>
            setAddProductData({
              ...addProductData,
              discountPercentage: e?.target?.value,
            })
          }
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">gender</Label>
        <Input
          placeholder="enter gender"
          type="text"
          value={addProductData?.gender}
          onChange={(e) =>
            setAddProductData({ ...addProductData, gender: e?.target?.value })
          }
        />
      </FormGroup>

      <Button
        className="w-100 mb-3 bg-black"
        color="secondary"
        onClick={() => (updateFlag ? updateHandler() : submitHandler())}
      >
        {updateFlag ? "update Products" : "Add Products"}
      </Button>
    </div>
  );
}
