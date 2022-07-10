import React from "react";
import StyleProducts from "./style";
import ProductsMain from "../../components/Products/ProductsMain";
import PagePath from "../../components/PagePath";

const Products = () => {
  return (
    <StyleProducts>
      <PagePath path="Apple" />
      {/* <ProductsMain /> */}
    </StyleProducts>
  );
};

export default Products;
