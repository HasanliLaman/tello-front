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
      {products[0] && (
        <ProductContainer
          key={
            products.find(
              (el) => el._id.categories === "6349a258deb4fa69723b4d76"
            )._id.categories
          }
          id={
            products.find(
              (el) => el._id.categories === "6349a258deb4fa69723b4d76"
            )._id.categories
          }
          title={titles[0]}
          className="best-seller"
          products={products
            .find((el) => el._id.categories === "6349a258deb4fa69723b4d76")
            .products.slice(0, 4)}
        />
      )}
      {products[0] && (
        <ProductContainer
          key={
            products.find(
              (el) => el._id.categories === "63499c8c0dcd7543dea37b48"
            )._id.categories
          }
          id={
            products.find(
              (el) => el._id.categories === "63499c8c0dcd7543dea37b48"
            )._id.categories
          }
          title={titles[1]}
          className=""
          products={products
            .find((el) => el._id.categories === "63499c8c0dcd7543dea37b48")
            .products.slice(0, 4)}
        />
      )}
      <Ads />
      {products[0] && (
        <ProductContainer
          key={
            products.find(
              (el) => el._id.categories === "6349a240deb4fa69723b4d73"
            )._id.categories
          }
          id={
            products.find(
              (el) => el._id.categories === "6349a240deb4fa69723b4d73"
            )._id.categories
          }
          title={titles[2]}
          className=""
          products={products
            .find((el) => el._id.categories === "6349a240deb4fa69723b4d73")
            .products.slice(0, 4)}
        />
      )}
      <GoToProductsContainer />
      <FeatureContainer />
      <PartnersContainer />
    </StyleHomepage>
  );
};

export default Homepage;
