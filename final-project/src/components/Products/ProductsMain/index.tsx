import React from "react";
import StyleProductsMain from "./style";
import Container from "../../UI/Container";
import FilterContainer from "../../Filter/FilterContainer";
import ChangeProducts from "../../ChangeProducts";
import ListOrder from "../../Filter/ListOrder";
import ProductsPagination from "../ProductsPagination";

const ProductsMain = () => {
  return (
    <StyleProductsMain>
      <ChangeProducts />
      <Container>
        <FilterContainer />
        <div className="details">
          <p>287 məhsul tapıldı</p>
          <ListOrder />
          <ProductsPagination itemsPerPage={9} />
        </div>
      </Container>
    </StyleProductsMain>
  );
};

export default ProductsMain;
