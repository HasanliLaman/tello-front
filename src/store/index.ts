import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../slices/categoriesSlice";
import productsReducer from "../slices/productsSlice";
import filterReducer from "../slices/filterSlice";
import productReducer from "../slices/productSlice";
import cartReducer from "../slices/cartSlice";
import userCartReducer from "../slices/userCartSlice";
import authReducer from "../slices/authSlice";
import searchReducer from "../slices/searchSlice";
import favoriteReducer from "../slices/favoriteSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    filter: filterReducer,
    product: productReducer,
    cart: cartReducer,
    userCart: userCartReducer,
    auth: authReducer,
    search: searchReducer,
    favorites: favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
