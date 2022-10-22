import React, { useEffect } from "react";
import StyleProducts from "./style";
import ProductsMain from "../../components/Products/ProductsMain";
import PagePath from "../../components/PagePath";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { useLocation } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Tello | Məhsullar";
  }, [dispatch, location]);

  return (
    <StyleProducts>
      <PagePath path="Məhsullar" products={false} />
      <ProductsMain />
    </StyleProducts>
  );
};

export default Products;
