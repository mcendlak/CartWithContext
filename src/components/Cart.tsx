import React from "react";

// styles
import "./Cart.css";
// components
import ListOfAvailableProducts from "./ListOfAvailableProducts";
import ChosenProducts from "./ChosenProducts";

const Cart = () => {
  return (
    <div>
      <h1>Choose your products</h1>
      <div className="cart-container">
        <ListOfAvailableProducts />
        <ChosenProducts />
      </div>
    </div>
  );
};

export default Cart;