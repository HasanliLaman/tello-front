import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../server/index";

export const getToken = createAsyncThunk(
  "auth/getToken",
  async (token: string) => {
    try {
      const res = await api.post(
        `/customers/exchange-token`,
        { token },
        {
          headers: {
            "X-Authorization":
              "pk_44386608295f2dec42a0e0ec39c5a871fe0f5b0b1e1bc",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.data.jwt) throw new Error("Link is not valid anymore!");
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

interface AuthState {
  loggedIn: boolean;
  rejected: boolean;
}

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
      return (state = { loggedIn: false, rejected: false });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getToken.fulfilled, (state, action) => {
      if (action.payload.jwt) {
        localStorage.setItem("token", action.payload.jwt);
        return { loggedIn: true, rejected: false };
      } else {
        localStorage.removeItem("token");
        return { loggedIn: false, rejected: true };
      }
    });

    builder.addCase(getToken.rejected, (state, action) => ({
      loggedIn: false,
      rejected: true,
    }));
  },
});

export const { logOutUser } = authSlice.actions;
export default authSlice.reducer;
