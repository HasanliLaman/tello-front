import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../slices/categoriesSlice";
import productsReducer from "../slices/productsSlice";
import filterReducer from "../slices/filterSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
