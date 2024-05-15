// import logo from './logo.svg';
import "./App.css";
import Cart from "./Client/Components/Cart/Cart";
import Footer from "./Client/Components/Footer/Footer";
import Navigation from "./Client/Components/Navigation/Navigation";
// import Product from "./Client/Components/Product/Product";
// import ProductDetails from "./Client/Components/ProductDetails/ProductDetails";
// import HomePage from "./Client/Pages/Home Page/HomePage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        <Cart />
      </div>
      <Footer />
    </div>
  );
}

export default App;
