import { createSlice } from "@reduxjs/toolkit";
import { fetchCart } from "../asyncThunk";
import { UserCartState } from "../models/slices";

const initialState = {
  loading: false,
  error: null,
  cart: {},
} as UserCartState;

export const userCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action) => {
      state.cart = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => ({
      loading: false,
      cart: action.payload,
      error: null,
    }));
    builder.addCase(fetchCart.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchCart.rejected, (state) => ({
      ...state,
      loading: false,
      error: "Something went wrong!",
    }));
  },
});

export const { updateCart } = userCartSlice.actions;

export default userCartSlice.reducer;
