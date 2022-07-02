import React from "react";
import Ads from "../../components/Ads";
import FeatureContainer from "../../components/Features/FeatureContainer";
import FooterMain from "../../components/Footer/FooterMain";
import GoToProductsContainer from "../../components/GoToProducts/GoToProductsContainer";
import HeroSlider from "../../components/Hero/HeroSlider";
import NavMain from "../../components/Navbar/NavMain";
import PartnersContainer from "../../components/Partners/PartnersContainer";
import ProductContainer from "../../components/Products/ProductContainer";
import StyleHomepage from "./style";
import commerce from "../../server/commerce";

const Homepage = () => {
  // commerce.products.list().then((product) => console.log(product));

  return (
    <StyleHomepage>
      <NavMain />
      <HeroSlider />
      <ProductContainer
        title="Ən çox satılan məhsullar"
        className="best-seller"
      />
      <ProductContainer title="Yeni gələn məhsullar" />
      <Ads />
      <ProductContainer title="Yeni gələn aksessuarlar" />
      <GoToProductsContainer />
      <FeatureContainer />
      <PartnersContainer />
      <FooterMain />
    </StyleHomepage>
  );
};

export default Homepage;
