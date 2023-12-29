import { configureStore } from "@reduxjs/toolkit";
import logRegSlice from "../features/logReg";
export const store = configureStore({
  reducer: { logRegSlice },
});
