import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BE_URL } from "../../config";
export const fetchWishlistData = createAsyncThunk("wishList", async () => {
  return await axios({
    method: "get",
    url: `${BE_URL}`,
  })
    .then((res) => {
      return res?.data;
    })
    .then((err) => {
      console.log(err.message);
    });
});
const wishListSlice = createSlice({
  name: "wishListSlice",
  initialState: {
    data: [],
    pending: "false",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlistData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.pending = false;
        state.error = "";
      })
      .addCase(fetchWishlistData.pending, (state, action) => {
        state.pending = true;
        state.error = "";
      })
      .addCase(fetchWishlistData.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error.message;
      });
  },
});
export default wishListSlice.reducer;
