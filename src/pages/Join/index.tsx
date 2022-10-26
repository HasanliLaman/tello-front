import React, { useCallback, useEffect } from "react";
import { Outlet } from "react-router-dom";
import JoinImage from "../../components/Join/JoinImage";
import Container from "../../components/UI/Container";
import StyleJoin from "./style";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { Navigate } from "react-router-dom";
import { api } from "../../server";
import { fetchCart } from "../../asyncThunk";

const Join = () => {
  const data = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  const updateCart = useCallback(
    async (products) => {
      for (const item of products) {
        await api.patch(
          `/users/${localStorage.getItem("userId")}/cart/add/${item.id}`,
          { quantity: item.quantity },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      }
      dispatch(fetchCart());
    },
    [dispatch]
  );

  useEffect(() => {
    if (!localStorage.getItem("cart")) return;

    const { products } = JSON.parse(localStorage.getItem("cart")!);
    if (data.loggedIn) {
      updateCart(products);
    }
  }, [data.loggedIn, updateCart]);

  if (data.loggedIn) return <Navigate to="/dashboard/orders" />;

  return (
    <StyleJoin>
      <Container>
        <Outlet />
        <JoinImage />
      </Container>
    </StyleJoin>
  );
};

export default Join;
