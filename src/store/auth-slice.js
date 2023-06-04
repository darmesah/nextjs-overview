import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: "",
    isLoggedIn: false,
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userInfo = action.payload;
    },
    logout(state, action) {
      state.isLoggedIn = false;
      state.userInfo = "";
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
