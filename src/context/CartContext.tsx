// hooks
import { createContext } from "react";
import useCartReducer from "../hooks/useCartReducer";

// types
import { IItemData, Istate, IContext } from "../types";

const initialContext: IContext = {} as IContext;
const CartContext = createContext(initialContext);

export const CartContextProvider: React.FC = (props) => {


  const { addProduct, removeProduct, removeAllProducts, submitCart, state } =
    useCartReducer(CartContext);

  return (
    <CartContext.Provider value={initialContext}>{props.children}</CartContext.Provider>
  );
};

export default CartContext;
