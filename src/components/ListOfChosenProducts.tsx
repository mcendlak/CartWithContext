// styles
import "./ListOfChosenProducts.css";

// context
import useCartContext from "../hooks/useCartContext";

// components
import ChosenProduct from "./ChosenProduct";

const ListOfChosenProducts = () => {
  const { state, removeAllProducts } = useCartContext();

  return (
    <div className="chosen-products">
      <h2>Your products</h2>
      <p>Total: {state.totalAmount.toFixed(2)} PLN</p>
      <button onClick={removeAllProducts}>Remove all products</button>
      {state.items.map((item) => (
        <ChosenProduct item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ListOfChosenProducts;
