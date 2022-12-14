import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../server/index";
import { toast } from "react-toastify";

// authSlice
export const getToken = createAsyncThunk(
  "auth/getToken",
  async (params: { url: string; body: any }) => {
    try {
      const res = await api.post(`/users/${params.url}`, params.body);
      return res.data;
    } catch (error) {
      if (params.url === "login") toast.error("Email və ya şifrə səhvdir!");
      if (params.url === "signup")
        toast.error("Bu email ünvanli istifadəçi mövcuddur!");
      throw error;
    }
  }
);

//categoriesSlice
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const res = await api.get("/categories");
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

//productSlice
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id?: string) => {
    try {
      const res = await api.get(`/products/${id}`);

      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

//productsSlice
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const res = await api.get(`/products`);

      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

//searchSlice
export const fetchSearch = createAsyncThunk(
  "search/fetchSearch",
  async (query: string) => {
    try {
      const res = await api.get(`/products/search?name=${query}`);

      return res.data.data.products;
    } catch (error) {
      throw error;
    }
  }
);

// filterSlice
export const fetchFilter = createAsyncThunk(
  "filter/fetchFilter",
  async (params: { page: number; sort: string; query: string }) => {
    try {
      const res = await api.get(
        `/products?page=${params.page}&limit=9&sort=${params.sort}&${params.query}`
      );

      return {
        length: res.data.numProducts,
        products: res.data.data.products,
      };
    } catch (error) {
      throw error;
    }
  }
);

// cartSlice
export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  try {
    const res = await api.get(`/users/${localStorage.getItem("userId")}/cart`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data.data.doc[0];
  } catch (error) {
    throw error;
  }
});
