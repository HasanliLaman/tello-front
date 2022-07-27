import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../server/index";
import { RootObject } from "../models/productInfo";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id: string | undefined) => {
    try {
      const res = await api.get(`/products/${id}`, {
        headers: {
          "X-Authorization": "pk_44386608295f2dec42a0e0ec39c5a871fe0f5b0b1e1bc",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

interface ProductState {
  loading: boolean;
  error: null | string;
  product: RootObject;
}

const initialState = {
  loading: false,
  error: null,
  product: {},
} as ProductState;

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => ({
      loading: false,
      product: action.payload,
      error: "",
    }));
    builder.addCase(fetchProduct.pending, (state, action) => ({
      loading: true,
      product: state.product,
      error: state.error,
    }));
    builder.addCase(fetchProduct.rejected, (state, action) => ({
      loading: false,
      product: state.product,
      error: "Something went wrong!",
    }));
  },
});

export default productSlice.reducer;
