import React, { useEffect } from "react";
import StyleProductsMain from "./style";
import Container from "../../UI/Container";
import FilterContainer from "../../Filter/FilterContainer";
import ChangeProducts from "../../ChangeProducts";
import ListOrder from "../../Filter/ListOrder";
import ProductsPagination from "../ProductsPagination";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../store";
import { fetchFilter } from "../../../asyncThunk";
import Loading from "../../UI/Loading";

const ProductsMain = () => {
  const { displayedProducts, query, loading } = useSelector(
    (state: RootState) => state.filter
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchFilter(query));
  }, [query, dispatch]);

  return (
    <StyleProductsMain>
      <ChangeProducts />
      <Container>
        <FilterContainer />
        <div className="details">
          <p>{displayedProducts.length} məhsul tapıldı</p>
          <ListOrder />
          {loading && <Loading padding={true} height={false} />}
          {!loading && displayedProducts[0] && (
            <ProductsPagination itemsPerPage={9} />
          )}
        </div>
      </Container>
    </StyleProductsMain>
  );
};

export default ProductsMain;
