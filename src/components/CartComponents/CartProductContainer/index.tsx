import React, { useEffect, useState } from "react";
import CartProduct from "../CartProduct";
import CartSummary from "../CartSummary";
import StyleCartProductContainer from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const CartProductContainer = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const auth = useSelector((state: RootState) => state.auth);
  const userCart = useSelector((state: RootState) => state.userCart);

  return (
    <StyleCartProductContainer>
      <div className="products">
        {auth.loggedIn
          ? userCart.cart.products.map((el) => (
              <CartProduct key={el._id} info={el} />
            ))
          : cart.products.map((el) => <CartProduct key={el.id} info={el} />)}
      </div>
      <CartSummary
        price={auth.loggedIn ? userCart.cart.totalPrice : cart.totalPrice}
      />
    </StyleCartProductContainer>
  );
};

export default CartProductContainer;
