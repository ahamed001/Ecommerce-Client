// import logo from './logo.svg';
import "./App.css";
import Footer from "./Client/Components/Footer/Footer";
import Navigation from "./Client/Components/Navigation/Navigation";
import Product from "./Client/Components/Product/Product";
import HomePage from "./Client/Pages/Home Page/HomePage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <Product/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
