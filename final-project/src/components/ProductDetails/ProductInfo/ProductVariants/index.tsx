import React from "react";
import StyleProductVariants from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

const ProductVariants = () => {
  const data = useSelector((state: RootState) => state.product);

  const getVariants = function (products: any) {
    if (products.variant_groups[0]) {
      const vars = products.variant_groups.map((variant: any) => {
        if (variant.name === "Color") {
          return (
            <div className="color">
              <h2>Rəng:</h2>
              {variant.options.map((el: any) => (
                <div
                  key={el.name}
                  style={{ background: `${el.name.toLowerCase()}` }}
                ></div>
              ))}
            </div>
          );
        } else if (variant.name === "Storage") {
          return (
            <div className="storage">
              <h2>Yaddaş:</h2>
              {variant.options.map((el: any) => (
                <div key={el.name}>{el.name}</div>
              ))}
            </div>
          );
        } else
          return (
            <div className="storage">
              <h2>{variant.name}:</h2>
              {variant.options.map((el: any) => (
                <div key={el.name}>{el.name}</div>
              ))}
            </div>
          );
      });
      return vars;
    } else return [];
  };

  return (
    <>
      {getVariants(data.product)[0] && (
        <StyleProductVariants>
          {getVariants(data.product).map((el: any, i: number) => (
            <React.Fragment key={i}>{el}</React.Fragment>
          ))}
        </StyleProductVariants>
      )}
    </>
  );
};

export default ProductVariants;
