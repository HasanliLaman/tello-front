import React from "react";
import StyleCartProduct from "./style";
import deleteIcon from "../../../assets/images/icon-delete.svg";
import azn from "../../../assets/images/icon-azn.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import {
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  setLocalStorage,
} from "../../../slices/cartSlice";
import { updateCart } from "../../../slices/userCartSlice";
import { useNavigate } from "react-router-dom";
import { api } from "../../../server";

const CartProduct: React.FC<{ info: any }> = ({ info }) => {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const deleteProduct = async (id: string) => {
    if (!auth.loggedIn) {
      dispatch(deleteItem(id));
      dispatch(setLocalStorage());
      return;
    }
    const res = await api.patch(
      `/users/${localStorage.getItem("userId")}/cart/delete/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    dispatch(updateCart(res.data.data.cart));
  };

  const increaseProduct = async (id: string, quantity: number) => {
    if (!auth.loggedIn) {
      dispatch(increaseQuantity(id));
      dispatch(setLocalStorage());
      return;
    }
    const res = await api.patch(
      `/users/${localStorage.getItem("userId")}/cart/update/${id}`,
      { quantity },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    dispatch(updateCart(res.data.data.cart));
  };

  const decreaseProduct = async (id: string, quantity: number) => {
    if (!auth.loggedIn) {
      dispatch(decreaseQuantity(id));
      dispatch(setLocalStorage());
      return;
    }

    if (quantity === 0) {
      await deleteProduct(id);
    }

    const res = await api.patch(
      `/users/${localStorage.getItem("userId")}/cart/update/${id}`,
      { quantity },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    dispatch(updateCart(res.data.data.cart));
  };

  return (
    <StyleCartProduct>
      <>
        <div className="details">
          <img
            src={auth.loggedIn ? info.product.image?.url : info.img}
            alt="phone"
          />
          <p
            className="name"
            onClick={() =>
              navigate(
                `/products/${auth.loggedIn ? info.product._id : info.id}`
              )
            }
          >
            {auth.loggedIn ? info.product.name : info.name}
          </p>
          <div className="variant">
            <span>Rəng:</span> <p>{auth.loggedIn ? "Standart" : info.color}</p>
          </div>
          <div className="price">
            <p>{auth.loggedIn ? info.product.price : info.price}</p>
            <img alt="azn" src={azn} />
          </div>
          <div className="quantity">
            <button
              onClick={() => {
                auth.loggedIn
                  ? decreaseProduct(info.product._id, info.quantity - 1)
                  : decreaseProduct(info.id, 1);
              }}
            >
              -
            </button>
            <p>{info.quantity}</p>
            <button
              onClick={() => {
                auth.loggedIn
                  ? increaseProduct(info.product._id, info.quantity + 1)
                  : increaseProduct(info.id, 1);
              }}
            >
              +
            </button>
          </div>
        </div>
        <img
          onClick={() => {
            deleteProduct(auth.loggedIn ? info.product._id : info.id);
          }}
          src={deleteIcon}
          alt="delete"
        />
      </>
    </StyleCartProduct>
  );
};

export default CartProduct;
