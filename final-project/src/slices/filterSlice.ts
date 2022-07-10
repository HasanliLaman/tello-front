import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenFilter: false,
  isOpenOrder: false,
  selectedOption: "Ən yenilər",
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
  },
});

export const {
  openFilter,
  closeFilter,
  changeOrderVisibility,
  changeOrderSelected,
} = filterSlice.actions;
export default filterSlice.reducer;
