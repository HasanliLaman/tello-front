import { createSlice } from "@reduxjs/toolkit";
import TypeProducts from "../models/products";

interface TypeInitial {
  isOpenFilter: boolean;
  isOpenOrder: boolean;
  selectedOption: string;
  brandList: string[];
  categoryList: string[];
  priceList: string[];
}

const initialState: TypeInitial = {
  isOpenFilter: false,
  isOpenOrder: false,
  selectedOption: "Ən yenilər",
  brandList: [],
  categoryList: [],
  priceList: [],
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

    changeBrandList(state, action) {
      if (state.brandList.includes(action.payload))
        return {
          ...state,
          brandList: state.brandList.filter((el) => {
            if (el === action.payload) return false;
            return true;
          }),
        };
      return { ...state, brandList: [...state.brandList, action.payload] };
    },

    changeCategoryList(state, action) {
      if (state.categoryList.includes(action.payload))
        return {
          ...state,
          categoryList: state.categoryList.filter((el) => {
            if (el === action.payload) return false;
            return true;
          }),
        };
      return {
        ...state,
        categoryList: [...state.categoryList, action.payload],
      };
    },

    changePriceList(state, action) {
      if (state.priceList.includes(action.payload))
        return {
          ...state,
          priceList: state.priceList.filter((el) => {
            if (el === action.payload) return false;
            return true;
          }),
        };
      return { ...state, priceList: [...state.priceList, action.payload] };
    },

    clearBrands(state) {
      return { ...state, brandList: [] };
    },

    clearCategories(state) {
      return { ...state, categoryList: [] };
    },

    changeDisplayedProducts(state, action) {
      if (state.brandList[0]) {
        const filtered = action.payload.filter((el: TypeProducts.Datum) => {
          if (el.categories.find((cat) => state.brandList.includes(cat.slug))) {
            return true;
          }
          return false;
        });
        return (state = {
          ...state,
          // products: filtered,
        });
      } else {
        // return (state = { ...state, products: action.payload });
      }
    },
  },
});

export const {
  openFilter,
  closeFilter,
  changeOrderVisibility,
  changeOrderSelected,
  changeBrandList,
  changePriceList,
  changeCategoryList,
  clearBrands,
  clearCategories,
  changeDisplayedProducts,
} = filterSlice.actions;
export default filterSlice.reducer;
