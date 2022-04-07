import { useReducer } from "react";
import { IContext, IItemData, Istate } from "../../types";

type ACTIONTYPES =
  | { type: "addProduct" }
  | { type: "removeProduct" }
  | { type: "removeAllProducts" }
  | { type: "submitCart" };

const reducer = (
  state: Istate,
  action: ACTIONTYPES
) => {
  switch (action.type) {
    case "addProduct":
      return state;
    case "removeAllProducts":
      return state;
    case "removeProduct":
      return state;
    case "submitCart":
      return state;
    default:
      throw new Error("Action type not recognized");
  }
};

const useCartReducer = (cartContext: React.Context<IContext>) => {
  const [state, dispatch] = useReducer(reducer, cartContext);
  const addProduct = () => {};
  const removeProduct = () => {};
  const removeAllProducts = () => {};
  const submitCart = () => {};
  return { addProduct, removeProduct, removeAllProducts, submitCart, state };
};

export default useCartReducer;
