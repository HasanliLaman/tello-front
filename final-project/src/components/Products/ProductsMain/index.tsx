import React, { useEffect, useMemo, useState } from "react";
import StyleProductsMain from "./style";
import Container from "../../UI/Container";
import FilterContainer from "../../Filter/FilterContainer";
import ChangeProducts from "../../ChangeProducts";
import ListOrder from "../../Filter/ListOrder";
import ProductsPagination from "../ProductsPagination";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import TypeProducts from "../../../models/products";

const ProductsMain = () => {
  const [data, setData] = useState<TypeProducts.Datum[]>([]);
  const filterData = useSelector((state: RootState) => state.filter);
  const products = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (products.products.data) {
      setData(
        products.products.data
          .filter((el) => {
            if (
              !filterData.brandList[0] ||
              el.categories.find((cat) =>
                filterData.brandList.includes(cat.slug)
              )
            )
              return true;
            return false;
          })
          .filter((el) => {
            if (
              !filterData.categoryList[0] ||
              el.categories.find((cat) =>
                filterData.categoryList.includes(cat.name.toLowerCase())
              )
            )
              return true;
            return false;
          })
          .filter((el) => {
            if (
              !filterData.priceList[0] ||
              filterData.priceList
                .map((element) => element.split("-"))
                .find((element) => {
                  return (
                    +element[0] < +el.price.formatted.replaceAll(",", "") &&
                    +el.price.formatted.replaceAll(",", "") < +element[1]
                  );
                })
            )
              return true;
            return false;
          })
      );
    }
  }, [
    products,
    filterData.brandList,
    filterData.categoryList,
    filterData.priceList,
  ]);

  return (
    <StyleProductsMain>
      <ChangeProducts />
      <Container>
        <FilterContainer />
        <div className="details">
          <p>{data.length} məhsul tapıldı</p>
          <ListOrder />
          <ProductsPagination
            items={useMemo(() => data, [data])}
            itemsPerPage={9}
          />
        </div>
      </Container>
    </StyleProductsMain>
  );
};

export default ProductsMain;
