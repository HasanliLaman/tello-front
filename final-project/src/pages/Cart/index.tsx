import React from "react";
import CartEmpty from "../../components/CartComponents/CartEmpty";
import CartProductContainer from "../../components/CartComponents/CartProductContainer";
import Container from "../../components/UI/Container";
import StyleCart from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Cart = () => {
  const data = useSelector((state: RootState) => state.cart);
  return (
    <StyleCart>
      <Container>
        <h2>{`Səbət (${data.products.length} məhsul)`}</h2>
        {!data.totalQuantity && <CartEmpty />}
        {data.totalQuantity && <CartProductContainer />}
      </Container>
    </StyleCart>
  );
};

export default Cart;
