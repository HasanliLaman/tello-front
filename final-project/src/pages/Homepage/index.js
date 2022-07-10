import React from "react";
import Ads from "../../components/Ads";
import FeatureContainer from "../../components/Features/FeatureContainer";
import GoToProductsContainer from "../../components/GoToProducts/GoToProductsContainer";
import HeroSlider from "../../components/Hero/HeroSlider";
import PartnersContainer from "../../components/Partners/PartnersContainer";
import ProductContainer from "../../components/Products/ProductContainer";
import StyleHomepage from "./style";

const Homepage = () => {
  return (
    <StyleHomepage>
      <HeroSlider />
      <ProductContainer
        title="Ən çox satılan məhsullar"
        className="best-seller"
        categories={["all-brands"]}
      />
      <ProductContainer categories={["new"]} title="Yeni gələn məhsullar" />
      <Ads />
      <ProductContainer
        categories={["new", "accessoires"]}
        title="Yeni gələn aksessuarlar"
      />
      <GoToProductsContainer />
      <FeatureContainer />
      <PartnersContainer />
    </StyleHomepage>
  );
};

export default Homepage;
