import { createSlice } from "@reduxjs/toolkit";
import { FavoritesState } from "../models/slices";

const initialState: FavoritesState = {
  list: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites")!)
    : [],
};

export const favoritesSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToList: (state, action) => {
      return {
        list: [...state.list, action.payload],
      };
    },

    removeFromList: (state, action) => {
      return {
        list: state.list.filter((el) => el._id !== action.payload._id),
      };
    },

    setLocalStorage(state) {
      localStorage.setItem("favorites", JSON.stringify(state.list));
      return { ...state };
    },
  },
});

export const { addToList, removeFromList, setLocalStorage } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
