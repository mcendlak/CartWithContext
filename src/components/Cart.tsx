// styles
import "./Cart.css";

// components
import ListOfAvailableProducts from "./ListOfAvailableProducts";
import ListOfChosenProducts from "./ListOfChosenProducts";

const Cart = () => {
  return (
    <div className="cart">
      <h1>Choose your products</h1>
      <div className="cart-container">
        <ListOfAvailableProducts />
        <ListOfChosenProducts />
      </div>
    </div>
  );
};

export default Cart;
