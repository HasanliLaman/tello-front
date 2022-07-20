import React from "react";
import Container from "../../../UI/Container";
import ImageGalleryContainer from "../../ImageGallery";
import AddToBasket from "../AddToBasket";
import ProductData from "../ProductData";
import ProductVariants from "../ProductVariants";
import StyleMainContainer from "./style";

const MainContainer = () => {
  return (
    <StyleMainContainer>
      <Container>
        <ImageGalleryContainer />
        <div>
          <ProductData />
          <ProductVariants />
          <AddToBasket />
        </div>
      </Container>
    </StyleMainContainer>
  );
};

export default MainContainer;
