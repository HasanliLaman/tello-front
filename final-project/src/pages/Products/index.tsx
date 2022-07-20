import React, { useEffect } from "react";
import StyleProducts from "./style";
import ProductsMain from "../../components/Products/ProductsMain";
import PagePath from "../../components/PagePath";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchProducts } from "../../slices/productsSlice";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <StyleProducts>
      <PagePath path="Products" />
      <ProductsMain />
    </StyleProducts>
  );
};

export default Products;
