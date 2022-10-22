import React from "react";
import StyleProductVariants from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { RootObject } from "../../../../models/productInfo";

const ProductVariants: React.FC<{
  setSelectedColor: (el: number) => void;
  selectedColor: number;
  setSelectedStorage: (el: number) => void;
  selectedStorage: number;
}> = ({
  setSelectedColor,
  selectedColor,
  setSelectedStorage,
  selectedStorage,
}) => {
  const data = useSelector((state: RootState) => state.product);

  const getVariants = function (products: RootObject) {
    const vars: any = [];
    if (products.data.product.colors[0]) {
      vars.push(
        <div className="color">
          <h2>Rəng:</h2>
          {products.data.product.colors.map((el, index) => (
            <div
              className={index === selectedColor ? "variant-active" : ""}
              onClick={() => setSelectedColor(index)}
              key={el}
              style={{ background: `${el.toLowerCase()}` }}
            ></div>
          ))}
        </div>
      );
    }
    if (products.data.product.storage[0]) {
      vars.push(
        <div className="storage">
          <h2>Yaddaş:</h2>
          {products.data.product.storage.map((el, index) => (
            <div
              className={index === selectedStorage ? "variant-active" : ""}
              onClick={() => setSelectedStorage(index)}
              key={el}
            >
              {el}
            </div>
          ))}
        </div>
      );
    }

    return vars;
  };

  return (
    <>
      {getVariants(data.product)[0] && (
        <StyleProductVariants>
          {getVariants(data.product).map((el, i: number) => (
            <React.Fragment key={i}>{el}</React.Fragment>
          ))}
        </StyleProductVariants>
      )}
    </>
  );
};

export default ProductVariants;
