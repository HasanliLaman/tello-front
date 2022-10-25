import React, { useEffect, useState } from "react";
import Ads from "../../components/Ads";
import FeatureContainer from "../../components/Features/FeatureContainer";
import GoToProductsContainer from "../../components/GoToProducts/GoToProductsContainer";
import HeroSlider from "../../components/Hero/HeroSlider";
import PartnersContainer from "../../components/Partners/PartnersContainer";
import ProductContainer from "../../components/Products/ProductContainer";
import StyleHomepage from "./style";
import { api } from "../../server";

const Homepage = () => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await api.get(
          "/products/stats?cats=6349a258deb4fa69723b4d76,63499c8c0dcd7543dea37b48,6349a240deb4fa69723b4d73"
        );
        setProducts(res.data.data.stats);
      } catch (error) {
        setProducts([]);
      }
    };

    getProducts();
    window.scrollTo(0, 0);
    document.title = "Tello";
  }, []);

  const titles = [
    "Ən çox satılan məhsullar",
    "Yeni gələn məhsullar",
    "Aksessuarlar",
  ];

  return (
    <StyleHomepage>
      <HeroSlider />
      {products
        .filter((el, i) => i < 2)
        .map((el, i) => (
          <ProductContainer
            key={el._id.categories}
            id={el._id.categories}
            title={titles[i]}
            className={i === 0 ? "best-seller" : ""}
            products={el.products.slice(0, 4)}
          />
        ))}
      <Ads />
      {products[2] && (
        <ProductContainer
          key={products[2]._id.categories}
          id={products[2]._id.categories}
          title={titles[2]}
          className=""
          products={products[2].products.slice(0, 4)}
        />
      )}
      <GoToProductsContainer />
      <FeatureContainer />
      <PartnersContainer />
    </StyleHomepage>
  );
};

export default Homepage;
