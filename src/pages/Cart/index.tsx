import React, { useEffect } from "react";
import CartEmpty from "../../components/CartComponents/CartEmpty";
import CartProductContainer from "../../components/CartComponents/CartProductContainer";
import Container from "../../components/UI/Container";
import StyleCart from "./style";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { useLocation } from "react-router-dom";
import { fetchCart } from "../../asyncThunk";

const Cart = () => {
  const location = useLocation();
  const dispact = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart);
  const auth = useSelector((state: RootState) => state.auth);
  const userCart = useSelector((state: RootState) => state.userCart);

  useEffect(() => {
    if (auth.loggedIn) {
      dispact(fetchCart());
    }
  }, [auth.loggedIn, dispact]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Tello | Səbət";
  }, [location]);

  const totalQuantity = auth.loggedIn
    ? userCart.cart.totalQuantity
    : cart.totalQuantity;

  return (
    <StyleCart>
      <Container>
        <h2>{`Səbət (${totalQuantity} məhsul)`}</h2>
        {!totalQuantity && <CartEmpty />}
        {Boolean(totalQuantity) && <CartProductContainer />}
      </Container>
    </StyleCart>
  );
};

export default Cart;
