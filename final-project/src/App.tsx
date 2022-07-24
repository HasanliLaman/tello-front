import GlobalStyle from "./assets/style/GlobalStyles";
import NavMain from "./components/Navbar/NavMain";
import FooterMain from "./components/Footer/FooterMain";
import ProductsInfo from "./pages/ProductsInfo";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Join from "./pages/Join";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

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
          <Route path="/join" element={<Join />}>
            <Route path="login" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Routes>
        <FooterMain />
      </div>
    </>
  );
};

export default App;
