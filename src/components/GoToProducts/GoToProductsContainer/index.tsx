import React from "react";
import StyleGoToProductsContainer from "./style";
import Container from "../../UI/Container";
import GoToProduct from "../GoToProduct";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const GoToProductsContainer = () => {
  const { categories } = useSelector((state: RootState) => state.categories);

  return (
    <StyleGoToProductsContainer>
      <Container>
        {categories.data &&
          categories.data.categories
            .filter((el) => el.cover)
            .map((el, i) => (
              <GoToProduct
                grid={i === 0 ? true : false}
                title={el.name}
                id={el._id}
                key={el._id}
                img={el.image.url}
                padding={i === 0 ? false : true}
              />
            ))}
      </Container>
    </StyleGoToProductsContainer>
  );
};

export default GoToProductsContainer;
