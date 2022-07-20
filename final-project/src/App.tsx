import GlobalStyle from "./assets/style/GlobalStyles";
import NavMain from "./components/Navbar/NavMain";
import FooterMain from "./components/Footer/FooterMain";
import ProductsInfo from "./pages/ProductsInfo";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <NavMain />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:productId" element={<ProductsInfo />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <FooterMain />
      </div>
    </>
  );
};

export default App;
