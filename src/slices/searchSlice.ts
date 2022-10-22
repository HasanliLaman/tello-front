import { createSlice } from "@reduxjs/toolkit";
import { SearchState } from "../models/slices";
import { fetchSearch } from "../asyncThunk";

const initialState = {
  searchHistory: localStorage.getItem("searchHistory")
    ? JSON.parse(localStorage.getItem("searchHistory")!)
    : [],
  products: [],
  loading: false,
  error: null,
} as SearchState;

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeHistory(state, action) {
      if (state.searchHistory.length === 3)
        state.searchHistory = [
          ...state.searchHistory.splice(0, 1),
          action.payload,
        ];
      else state.searchHistory = [...state.searchHistory, action.payload];
      localStorage.setItem(
        "searchHistory",
        JSON.stringify(state.searchHistory)
      );
    },

    deleteHistory(state) {
      state.searchHistory = [];
      localStorage.setItem(
        "searchHistory",
        JSON.stringify(state.searchHistory)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearch.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      products: action.payload,
      error: "",
    }));
    builder.addCase(fetchSearch.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchSearch.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: "Something went wrong!",
    }));
  },
});

export const { changeHistory, deleteHistory } = searchSlice.actions;
export default searchSlice.reducer;
