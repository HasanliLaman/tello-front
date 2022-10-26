import React, { useEffect, useState } from "react";
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
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("-createdAt");
  const { displayedProducts, query, loading, length } = useSelector(
    (state: RootState) => state.filter
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchFilter({ page, sort, query }));
  }, [query, dispatch, page, sort]);

  useEffect(() => {
    setPage(1);
  }, [query]);

  return (
    <StyleProductsMain>
      <ChangeProducts />
      <Container>
        <FilterContainer />
        <div className="details">
          <p>{length} məhsul tapıldı</p>
          <ListOrder setSort={setSort} />
          {loading && <Loading padding={true} height={false} />}
          {!loading && displayedProducts[0] && (
            <ProductsPagination page={page} setPage={setPage} />
          )}
        </div>
      </Container>
    </StyleProductsMain>
  );
};

export default ProductsMain;
