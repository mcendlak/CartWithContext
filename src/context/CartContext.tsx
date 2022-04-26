import { createContext } from "react";

// hooks
import useCartReducer from "../hooks/useCartReducer";

// types
import { IContext } from "./types";

const CartContext = createContext({} as IContext);

export const CartContextProvider: React.FC = ({ children }) => {
  const providedContext = useCartReducer();

  return (
    <CartContext.Provider value={providedContext}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
