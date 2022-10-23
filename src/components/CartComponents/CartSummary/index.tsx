import React from "react";
import StyleCartSummary from "./style";
import azn from "../../../assets/images/icon-azn.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { api } from "../../../server";
import { toast } from "react-toastify";

const CartSummary: React.FC<{ price: number }> = ({ price }) => {
  const { cart } = useSelector((state: RootState) => state.userCart);
  const { loggedIn } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const checkout = async () => {
    try {
      if (!loggedIn) {
        navigate("/join/login");
        return;
      }

      const cartProducts = cart.products.map((el) => {
        return { product: el.product._id, quantity: el.quantity };
      });

      const res = await api.post(
        `/booking/checkout`,
        { cart: cartProducts },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      window.location.href = res.data.session.url;

      await api.patch(
        `/users/${localStorage.getItem("userId")}/cart/empty`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    } catch (err) {
      toast.error("An error occured.");
    }
  };

  return (
    <StyleCartSummary>
      <div className="summary">
        <h3>Ümumi</h3>
        <div>
          <p>Məbləğ</p>
          <span>
            {price.toFixed(2)}
            <img src={azn} alt="azn" />
          </span>
        </div>
        <div>
          <p>Çatdırılma</p>
          <span>
            0.00
            <img src={azn} alt="azn" />
          </span>
        </div>
        <div>
          <p>Hədiyyə paketi</p>
          <span>
            0.00
            <img src={azn} alt="azn" />
          </span>
        </div>
        <div>
          <p>Promo kod</p>
          <span>
            0.00
            <img src={azn} alt="azn" />
          </span>
        </div>
        <div className="total">
          <p>Cəmi</p>
          <span>
            {price.toFixed(2)}
            <img src={azn} alt="azn" />
          </span>
        </div>
      </div>
      <button onClick={checkout}>Checkout</button>
    </StyleCartSummary>
  );
};

export default CartSummary;
