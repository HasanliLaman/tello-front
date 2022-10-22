import React from "react";
import ProductInfo from "../ProductInfo";
import StyleAllProducts from "./style";
import TypeProducts from "../../../models/products";
import { Product } from "../../../models/productInfo";

const AllProducts: React.FC<{
  currentItems: TypeProducts.Product[] | null;
}> = ({ currentItems }) => {
  return (
    <StyleAllProducts>
      {currentItems &&
        currentItems.map((el: Product) => (
          <ProductInfo key={el._id} info={el} />
        ))}
    </StyleAllProducts>
  );
};

export default AllProducts;
