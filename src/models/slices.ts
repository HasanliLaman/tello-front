import TypeCategories from "../models/categories";
import TypeProducts from "../models/products";
import { RootObject, Product } from "../models/productInfo";
import { RootObjectCart } from "../models/cart";

export interface AuthState {
  loggedIn: boolean;
  rejected: boolean;
}

export interface TypeCart {
  price: string;
  id: string;
  img: string;
  name: string;
  quantity: number;
  color: string;
}

export interface TypeInitial {
  products: TypeCart[];
  totalQuantity: number;
  totalPrice: number;
}

export interface CategoriesState {
  loading: boolean;
  error: null | string;
  categories: TypeCategories.RootObject;
  subcategories: TypeCategories.Subcategory;
}

export interface FilterState {
  isOpenFilter: boolean;
  isOpenOrder: boolean;
  selectedOption: string;
  loading: boolean;
  error: null | string;
  query: string;
  displayedProducts: TypeProducts.Product[];
  length: number;
}

export interface FavoritesState {
  list: Product[];
}

export interface ProductState {
  loading: boolean;
  error: null | string;
  product: RootObject;
}

export interface UserCartState {
  loading: boolean;
  error: null | string;
  cart: RootObjectCart;
}

export interface ProductsState {
  loading: boolean;
  error: null | string;
  products: TypeProducts.RootObject;
}

export interface SearchState {
  searchHistory: string[];
  loading: boolean;
  error: string | null;
  products: Product[];
}
