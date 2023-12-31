import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BE_URL } from "../../config";
import axios from "axios";
const initialState = {
  productData: [],
  count: "",
  error: "",
  pending: false,
};

export const fetchProductData = createAsyncThunk(
  "adminProduct",
  async (action) => {
    return await axios({
      method: "get",
      url: `${BE_URL}/product/getAllPaginate`,
      params: action,
    }).then((res) => {
      return res.data;
    });
  }
);
const ProductsSlice = createSlice({
  name: "ProductsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.productData = action.payload.data;
        state.count = action.payload.count;
        state.error = "";
        state.pending = false;
      })
      .addCase(fetchProductData.pending, (state, action) => {
        state.error = "";
        state.pending = true;
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.error = action.error.message;
        state.pending = false;
      });
  },
});

export default ProductsSlice.reducer;
