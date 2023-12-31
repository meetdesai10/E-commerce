import { configureStore } from "@reduxjs/toolkit";
import logRegSlice from "../features/logReg";
import ProductsSlice from "../features/Products";
export const store = configureStore({
  reducer: { logRegSlice, ProductsSlice },
});
