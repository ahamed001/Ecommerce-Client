import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Client/Pages/HomePage/HomePage";
import Navigation from "../Client/Components/Navigation/Navigation";
import Footer from "../Client/Components/Footer/Footer";
import Cart from "../Client/Components/Cart/Cart";
import Product from "../Client/Components/Product/Product";
import ProductDetails from "../Client/Components/ProductDetails/ProductDetails";
import Checkout from "../Client/Components/Checkout/Checkout";
import OrderDetails from "../Client/Components/Order/OrderDetails";
import Order from "../Client/Components/Order/Order";

const ClientRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/login" element={<HomePage />}></Route>
        <Route path="/register" element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/orders" element={<Order />}></Route>
        <Route path="/account/orders/:orderId" element={<OrderDetails />}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ClientRoutes;
