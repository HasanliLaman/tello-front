import React, { useEffect } from "react";
import StyleFavorites from "./style";
import Container from "../../components/UI/Container";
import ProductInfo from "../../components/Products/ProductInfo";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Favorites = () => {
  const { list } = useSelector((state: RootState) => state.favorites);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Tello | Bəyəndiklərim";
  }, []);

  return (
    <StyleFavorites>
      <Container>
        <h2>Bəyəndiklərim</h2>
        <div className="products">
          {list.map((el) => (
            <ProductInfo info={el} key={el._id} />
          ))}
        </div>
      </Container>
    </StyleFavorites>
  );
};

export default Favorites;
