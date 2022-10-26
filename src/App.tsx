import React from "react";
import GlobalStyle from "./assets/style/GlobalStyles";
import NavMain from "./components/Navbar/NavMain";
import FooterMain from "./components/Footer/FooterMain";
import ProductsInfo from "./pages/ProductsInfo";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Join from "./pages/Join";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import Favorites from "./pages/Favorites";
import User from "./pages/User";
import BasketEmpty from "./components/BasketEmpty";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <NavMain />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="products/:productId" element={<ProductsInfo />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="orders" element={<BasketEmpty />} />
            <Route path="user" element={<User />} />
          </Route>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/join" element={<Join />}>
            <Route path="login" element={<LogIn />} />
            <Route path="forgetpassword" element={<ForgetPassword />} />
            <Route path="resetpassword/:token" element={<ResetPassword />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
        <FooterMain />
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default App;
