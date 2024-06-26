import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated: !!localStorage.getItem("token"),
  user: JSON.parse(localStorage.getItem("user")) || {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      console.log(state, action);
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    logOut: (state) => {
      state.isAuthenticated = false;
      state.user = {};
    },
  },
});

export const { logOut, signUp } = authSlice.actions;

export default authSlice.reducer;
