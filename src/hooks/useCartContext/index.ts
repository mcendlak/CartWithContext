import CartContext from "../../context/CartContext";
import { useContext } from "react";

const useCartContext = () => {
  const ctx = useContext(CartContext);

  return {
    addProduct: ctx.addProduct,
    removeProduct: ctx.removeProduct,
    removeAllProducts: ctx.removeAllProducts,
    isProductAvailable: ctx.isProductAvailable,
    state: ctx.state,
  };
};

export default useCartContext;
