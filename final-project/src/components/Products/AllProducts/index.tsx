import React from "react";
import ProductInfo from "../ProductInfo";
import StyleAllProducts from "./style";
import TypeProducts from "../../../models/products";

const AllProducts: React.FC<{ currentItems: TypeProducts.Datum[] | null }> = ({
  currentItems,
}) => {
  return (
    <StyleAllProducts>
      {currentItems &&
        currentItems.map((el: any) => <ProductInfo key={el.id} info={el} />)}
    </StyleAllProducts>
  );
};

export default AllProducts;
