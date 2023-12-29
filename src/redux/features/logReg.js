import { createSlice } from "@reduxjs/toolkit";
let user = localStorage.getItem("user");
let token = localStorage.getItem("token");
let initialState = {
  user: user ? JSON.parse(user) : {},
  token: token ? JSON.parse(token) : null,
};
let logRegSlice = createSlice({
  name: "logRegSlice",
  initialState,
  reducers: {
    logRegAuth: (state, action) => {
      state.user = action.payload.data;
      state.token = action.payload.token;
      localStorage.setItem("user", JSON.stringify(action.payload.data));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
    },
    logOut: (state, action) => {
      localStorage.clear();
      state.token = null;
      state.user = {};
    },
  },
});

export default logRegSlice.reducer;
export let { logRegAuth, logOut } = logRegSlice.actions;
