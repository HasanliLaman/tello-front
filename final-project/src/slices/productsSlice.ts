import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../server/index";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (limit: number = 100) => {
    try {
      const res = await api.get(`/products?limit=${limit}`, {
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

interface ProductsState {
  loading: boolean;
  error: null | string;
  products: any;
}

const initialState = {
  loading: false,
  error: null,
  products: {},
} as ProductsState;

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => ({
      loading: false,
      products: action.payload,
      error: "",
    }));
    builder.addCase(fetchProducts.pending, (state, action) => ({
      loading: true,
      products: state.products,
      error: state.error,
    }));
    builder.addCase(fetchProducts.rejected, (state, action) => ({
      loading: false,
      products: state.products,
      error: "Something went wrong!",
    }));
  },
});

export default productsSlice.reducer;
