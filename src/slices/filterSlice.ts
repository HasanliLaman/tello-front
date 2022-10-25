import { createSlice } from "@reduxjs/toolkit";
import { FilterState } from "../models/slices";
import { fetchFilter } from "../asyncThunk";

const initialState: FilterState = {
  isOpenFilter: false,
  isOpenOrder: false,
  selectedOption: "Ən yenilər",
  query: "",
  displayedProducts: [],
  loading: false,
  error: null,
  length: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    openFilter: (state) => {
      state.isOpenFilter = true;
    },

    closeFilter: (state) => {
      state.isOpenFilter = false;
    },

    changeOrderVisibility: (state) => {
      state.isOpenOrder = !state.isOpenOrder;
    },

    changeOrderSelected: (state, action) => {
      state.selectedOption = action.payload;
    },

    updateQuery: (state, action) => {
      if (state.query) {
        const q = state.query;
        let queries = q.split("&");
        if (queries.find((el) => el.includes(action.payload.field))) {
          queries[
            queries.findIndex((el) => el.includes(action.payload.field))
          ] = `${action.payload.field}=${action.payload.value}`;
        } else queries.push(`${action.payload.field}=${action.payload.value}`);
        return (state = {
          ...state,
          query: queries.join("&"),
        });
      } else
        return (state = {
          ...state,
          query: `${action.payload.field}=${action.payload.value}`,
        });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilter.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      displayedProducts: action.payload.products,
      length: action.payload.length,
    }));
    builder.addCase(fetchFilter.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchFilter.rejected, (state) => ({
      ...state,
      loading: false,
      error: "Something went wrong!",
    }));
  },
});

export const {
  openFilter,
  closeFilter,
  changeOrderVisibility,
  changeOrderSelected,
  updateQuery,
} = filterSlice.actions;
export default filterSlice.reducer;
