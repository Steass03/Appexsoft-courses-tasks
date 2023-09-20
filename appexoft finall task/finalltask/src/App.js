import React from "react";
import "./App.css";
import NavBar from "./NavBarFolder/NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import { ProductItem } from "./Product-Item/ProductItem";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/AllProduct" element={<ProductItem />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
