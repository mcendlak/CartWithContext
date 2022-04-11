// types
import { IItemData } from "../context/types";

// hooks
import useCartContext from "../hooks/useCartContext";

// styles
import "./ChosenProduct.css";

interface ChosenProductProps {
  item: IItemData;
}

const ChosenProduct = ({ item }: ChosenProductProps) => {
  const { removeProduct } = useCartContext();

  return (
    <div className="chosen-item">
      <h4>{item.name}</h4>
      <p>unit price: {item.price}</p>
      <p>amount: {item.quantity}</p>
      <p>total price: {(item.quantity * item.price).toFixed(2)}</p>
      <button onClick={() => removeProduct(item.id)}>Remove product</button>
    </div>
  );
};

export default ChosenProduct;
