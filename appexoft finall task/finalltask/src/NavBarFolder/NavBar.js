import React from "react";
import { useEffect } from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../CartLogic/CartLogic";

export default function Navbar() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  return (
    <nav>
      <Link to="/" as={NavLink} className="Navbar">
        Navbar
      </Link>
      <Link to="/Allproduct" as={NavLink} className="AllProduct">
        All Product
      </Link>
      <Link to="/Cart" as={NavLink} className="Cart">
        Cart({totalQuantity})
      </Link>
    </nav>
  );
}
