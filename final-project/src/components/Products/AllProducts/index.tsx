import React from "react";
import ProductInfo from "../ProductInfo";
import StyleAllProducts from "./style";
import temp from "../../../assets/images/temp.png";

const AllProducts: React.FC<{ currentItems: any }> = ({ currentItems }) => {
  return (
    <StyleAllProducts>
      {currentItems &&
        currentItems.map((el: any) => (
          <ProductInfo
            info={{
              id: 1,
              image: { url: temp },
              name: "laman",
              price: { formatted: 3782 },
            }}
          />
        ))}
    </StyleAllProducts>
  );
};

export default AllProducts;
