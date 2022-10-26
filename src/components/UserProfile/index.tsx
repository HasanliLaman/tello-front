import React from "react";
import StyleUserProfile from "./style";
import basket from "../../assets/images/icon-dashboard-basket.svg";
import favorite from "../../assets/images/icon-favorite.svg";
import user from "../../assets/images/icon-account.svg";
import location from "../../assets/images/icon-dashboard-location.svg";
import logout from "../../assets/images/icon-log-out.svg";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { logOutUser } from "../../slices/authSlice";
import { Link } from "react-router-dom";

const UserProfile = ({ orders, details, setDetails, setOrders }) => {
  const dispacth = useDispatch<AppDispatch>();

  return (
    <StyleUserProfile>
      <h2>Profilim</h2>
      <ul>
        <li
          onClick={() => {
            setOrders(true);
            setDetails(false);
          }}
          className={orders ? "active" : ""}
        >
          <Link to="orders">
            <div>
              <img src={basket} alt="icon" />
            </div>
            <p>Sifarişlərim</p>
          </Link>
        </li>
        <li
          onClick={() => {
            setOrders(false);
            setDetails(true);
          }}
          className={details ? "active" : ""}
        >
          <Link to="user">
            <div>
              <img src={user} alt="icon" />
            </div>
            <p>Şəxsi məlumatlar</p>
          </Link>
        </li>
        <li className="logout" onClick={() => dispacth(logOutUser())}>
          <div>
            <img src={logout} alt="icon" />
          </div>
          <p>Çıxış</p>
        </li>
      </ul>
    </StyleUserProfile>
  );
};

export default UserProfile;
