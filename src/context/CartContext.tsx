// hooks
import { createContext } from "react";
import useCartReducer from "../hooks/useCartReducer";

// types
import { IContext } from "../types";

const initialContext: IContext = {} as IContext;
// const initialContext= {};
const CartContext = createContext(initialContext);

export const CartContextProvider: React.FC = (props) => {
  const { addProduct, removeProduct, removeAllProducts, submitCart, state } =
    useCartReducer();

  // opakować to w useMemo?
  // funkcje z useReducer są traktowane jako niezmienne, tak samo jak te z useState?
  const providedContext = {
    addProduct,
    removeProduct,
    removeAllProducts,
    submitCart,
    state,
  };

  return (
    <CartContext.Provider value={providedContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
