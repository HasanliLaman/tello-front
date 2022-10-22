import { createSlice } from "@reduxjs/toolkit";
import { getToken } from "../asyncThunk";
import { AuthState } from "../models/slices";

const initialState = {
  loggedIn: localStorage.getItem("token") ? true : false,
  rejected: false,
} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOutUser(state) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      return (state = { loggedIn: false, rejected: false });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getToken.fulfilled, (state, action) => {
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userId", action.payload.data.user._id);
      return { loggedIn: true, rejected: false };
    });

    builder.addCase(getToken.rejected, (state, action) => {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      return { loggedIn: false, rejected: true };
    });
  },
});

export const { logOutUser } = authSlice.actions;
export default authSlice.reducer;
