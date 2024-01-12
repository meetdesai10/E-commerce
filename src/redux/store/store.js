import { configureStore } from "@reduxjs/toolkit";
import logRegSlice from "../features/logReg";
import ProductsSlice from "../features/Products";
import cartSlice from "../features/cart";
export const store = configureStore({
  reducer: { logRegSlice, ProductsSlice, cartSlice },
});
