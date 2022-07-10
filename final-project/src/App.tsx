import GlobalStyle from "./assets/style/GlobalStyles";
import Homepage from "./pages/Homepage";
import NavMain from "./components/Navbar/NavMain";
import FooterMain from "./components/Footer/FooterMain";
import Products from "./pages/Products";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <NavMain />
        <Products />
        <FooterMain />
      </div>
    </>
  );
};

export default App;
