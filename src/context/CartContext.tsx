import { createContext } from "react";

// hooks
import useCartReducer from "../hooks/useCartReducer";

// types
import { IContext } from "./types";

const CartContext = createContext({} as IContext);

export const CartContextProvider: React.FC = ({ children }) => {
  const {
    addProduct,
    removeProduct,
    removeAllProducts,
    isProductAvailable,
    state,
  } = useCartReducer();

  const providedContext = {
    addProduct,
    removeProduct,
    removeAllProducts,
    isProductAvailable,
    state,
  };

  return (
    <CartContext.Provider value={providedContext}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
