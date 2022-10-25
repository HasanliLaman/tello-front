import React from "react";
import StyleProductsPagination from "./style";
import AllProducts from "../AllProducts";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const ProductsPagination: React.FC<{
  page: number;
  setPage: (num: number) => void;
}> = ({ setPage, page }) => {
  const { displayedProducts, length } = useSelector(
    (state: RootState) => state.filter
  );

  const goBack = () => {
    setPage(page === 1 ? 1 : page - 1);
  };

  const goAhead = () => {
    if (page < length / 9) setPage(page + 1);
    else setPage(page);
  };

  return (
    <StyleProductsPagination>
      <AllProducts currentItems={displayedProducts} />
      <div className="pages">
        <span onClick={goBack} className="previous">
          {"<"}
        </span>
        <span className="page">{page}</span>
        <span onClick={goAhead} className="next">
          {">"}
        </span>
      </div>
    </StyleProductsPagination>
  );
};

export default ProductsPagination;
