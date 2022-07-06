import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../server/index";
import TypeCategories from "../models/categories";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const res = await api.get("/categories", {
        headers: {
          "X-Authorization": "pk_44386608295f2dec42a0e0ec39c5a871fe0f5b0b1e1bc",
        },
      });
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

interface CategoriesState {
  loading: boolean;
  error: null | string;
  categories: TypeCategories.RootObject;
  subcategories: TypeCategories.Child;
}

const initialState = {
  loading: false,
  error: null,
  categories: {},
  subcategories: {},
} as CategoriesState;

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => ({
      loading: false,
      categories: action.payload,
      error: "",
      subcategories: state.subcategories,
    }));
    builder.addCase(fetchCategories.pending, (state, action) => ({
      loading: true,
      categories: state.categories,
      error: state.error,
      subcategories: state.subcategories,
    }));
    builder.addCase(fetchCategories.rejected, (state, action) => ({
      loading: false,
      categories: state.categories,
      error: "Something went wrong!",
      subcategories: state.subcategories,
    }));
  },
});

export default categoriesSlice.reducer;
