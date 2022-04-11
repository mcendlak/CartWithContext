// types
import { IItemData } from "../context/types";

// styles
import "./AvailableProduct.css";

// hooks
import useCartContext from "../hooks/useCartContext";

interface AvailableProductProps {
  item: IItemData;
}

const AvailableProduct = ({ item }: AvailableProductProps) => {
  const { addProduct, isProductAvailable } = useCartContext();

  const isAvailable = isProductAvailable(item);

  return (
    <div className="item">
      <h3>{item.name}</h3>
      <div className="item-info">
        <p>price: {item.price}</p>
        <p>in stock: {item.quantity}</p>
      </div>
      <button onClick={() => addProduct(item)} disabled={!isAvailable}>
        Add to cart
      </button>
    </div>
  );
};

export default AvailableProduct;
